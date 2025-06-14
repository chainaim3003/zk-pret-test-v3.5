/**
 * ====================================================================
 * Basel3 Monthly Implementation of Generic Temporal Risk Framework
 * ====================================================================
 * Maintains 100% functional equivalence with existing Basel3 test
 * Uses generic framework while preserving exact same business logic
 * ====================================================================
 */

import { Field, CircuitString, Bool, UInt64 } from 'o1js';
import {
  GenericRiskProcessor,
  GenericTemporalRiskZKProgram,
  TemporalACTUSData,
  GenericRiskClassification,
  Basel3HQLA,
  convertToGenericFormat
} from './GenericTemporalRiskFramework.js';
import { ACTUSDatao1 } from '../zk-programs/with-sign/RiskLiquidityACTUSZKProgram_basel3_Withsign.js';
import { getBasel3ContractPortfolio } from './ACTUSOptimMerkleAPI.js';

// =================================== Basel3 Monthly Processor ===================================

export class Basel3MonthlyProcessor extends GenericRiskProcessor<Basel3HQLA> {
  periodType = 'monthly';
  
  /**
   * Process temporal ACTUS data into Basel3 HQLA classifications
   * MAINTAINS EXACT SAME LOGIC as existing working test
   */
  processRiskData(temporalData: TemporalACTUSData): GenericRiskClassification<Basel3HQLA> {
    console.log('🏦 Processing Basel3 monthly HQLA classifications with EVENT-BASED logic...');
    console.log(`📊 Processing ${temporalData.eventDetails.contractEvents.length} events across ${temporalData.periodsCount} periods`);
    
    // Create month-by-month HQLA classifications using EVENT-BASED logic
    const monthlyHQLA: Basel3HQLA[] = [];
    
    for (let month = 0; month < temporalData.periodsCount; month++) {
      const monthData = this.classifyHQLAForMonth(month, temporalData);
      monthlyHQLA.push(monthData);
    }
    
    // Create aggregated arrays for backward compatibility with ACTUSDatao1
    const aggregatedMetrics = this.createAggregatedArrays(monthlyHQLA);
    
    console.log(`✅ Processed ${monthlyHQLA.length} monthly HQLA classifications`);
    
    return {
      periodsCount: temporalData.periodsCount,
      periodType: 'monthly',
      classifiedData: monthlyHQLA,
      aggregatedMetrics,
      riskMetrics: {
        periodMetrics: [],     // Will be calculated in ZK program
        cumulativeMetrics: [], // Will be calculated in ZK program  
        averageMetrics: 0,     // Not used in original logic
        worstCase: 0          // Will be calculated in ZK program
      }
    };
  }
  
  /**
   * Classify HQLA for a specific month using EVENT-BASED logic
   * Matches EXACTLY the original categorizeContractsForHQLA function
   * Processes individual ACTUS events with their HQLA classifications
   */
  private classifyHQLAForMonth(
    month: number,
    temporalData: TemporalACTUSData
  ): Basel3HQLA {
    
    let hqla: Basel3HQLA = {
      L1: 0,
      L2A: 0,
      L2B: 0,
      NonHQLA: 0
    };
    
    // Process each individual event for this month - EXACT same logic as original
    temporalData.eventDetails.contractEvents.forEach((event, eventIndex) => {
      const eventMonth = temporalData.eventDetails.eventToMonthMapping[eventIndex];
      
      if (eventMonth === month && event.payoff !== 0) {
        const hqlaCategory = event.hqlaCategory || 'NonHQLA';
        
        // Debug logging for first few months
        if (month <= 2 || month >= 12) {
          console.log(`   Month ${month}, Event ${eventIndex}: ${event.contractId} | ${event.type} | Payoff: ${event.payoff} | HQLA: ${hqlaCategory}`);
        }
        
        if (event.payoff > 0) {
          // Positive payoff = inflow (asset)
          switch (hqlaCategory) {
            case 'L1':
              hqla.L1 += event.payoff;
              break;
            case 'L2A':
              hqla.L2A += event.payoff;
              break;
            case 'L2B':
              hqla.L2B += event.payoff;
              break;
            default:
              hqla.NonHQLA += event.payoff;
              break;
          }
        } else {
          // Negative payoff = outflow (liability/stress)
          // For Basel3 LCR, outflows contribute to stress scenarios
          hqla.NonHQLA += Math.abs(event.payoff);
        }
      }
    });
    
    // Apply fallback heuristic ONLY if no events were found for this month
    // This matches the original categorizeContractsForHQLA logic
    if (hqla.L1 === 0 && hqla.L2A === 0 && hqla.L2B === 0 && hqla.NonHQLA === 0) {
      // Check if there are any cash flows for this month from the aggregated data
      if (month < temporalData.cashFlows.inflows.length) {
        const totalInflow = temporalData.cashFlows.inflows[month].reduce((sum, val) => sum + val, 0);
        if (totalInflow > 0) {
          // EXACT same heuristic from original categorizeContractsForHQLA
          hqla.L1 = totalInflow * 0.4;   // 40% Level 1 (government bonds, cash)
          hqla.L2A = totalInflow * 0.35; // 35% Level 2A (high-grade corporate bonds)
          hqla.L2B = totalInflow * 0.15; // 15% Level 2B (lower-grade assets)
          // 10% goes to Non-HQLA (not counted in above)
        }
        
        const totalOutflow = temporalData.cashFlows.outflows[month].reduce((sum, val) => sum + val, 0);
        if (totalOutflow > 0) {
          hqla.NonHQLA += totalOutflow;
        }
      }
    }
    
    if (month <= 2 || month >= 12) {
      console.log(`   Month ${month} HQLA Result: L1=${hqla.L1.toFixed(2)}, L2A=${hqla.L2A.toFixed(2)}, L2B=${hqla.L2B.toFixed(2)}, NonHQLA=${hqla.NonHQLA.toFixed(2)}`);
    }
    
    return hqla;
  }
  
  /**
   * Create aggregated metric arrays for backward compatibility
   * Produces same arrays as original ACTUSDatao1 structure
   */
  protected createAggregatedArrays(classifiedData: Basel3HQLA[]): Record<string, number[]> {
    return {
      totalHQLA_L1: classifiedData.map(month => month.L1),
      totalHQLA_L2A: classifiedData.map(month => month.L2A),
      totalHQLA_L2B: classifiedData.map(month => month.L2B),
      totalNonHQLA: classifiedData.map(month => month.NonHQLA),
      
      // Also create cash flow arrays for compatibility
      cashInflows: classifiedData.map(month => month.L1 + month.L2A + month.L2B),
      cashOutflows: classifiedData.map(month => month.NonHQLA)
    };
  }
}

// =================================== Basel3 Monthly ZK Program ===================================

export class Basel3MonthlyZKProgram extends GenericTemporalRiskZKProgram<Basel3HQLA> {
  periodType = 'monthly';
  
  /**
   * Core risk calculation logic - IDENTICAL to existing LiquidityRatioZkprogram
   * Maintains exact same month-by-month cumulative LCR calculation
   */
  riskCalculation(
    data: GenericRiskClassification<Basel3HQLA>,
    thresholds: Record<string, number>
  ): boolean {
    
    console.log('🔐 Executing Basel3 monthly LCR calculation...');
    
    // EXACT same initial values as original test
    let initial_reservenum = 10000;
    let cumulativeInflows = initial_reservenum;
    let cumulativeOutflows = 0;
    let cumulativeHQLA = 0;
    let compliant = true;
    
    const liquidityThreshold_LCR = thresholds.liquidityThreshold_LCR || 100;
    
    console.log(`📊 Starting cumulative calculation with ${data.periodsCount} periods`);
    console.log(`🎯 LCR Threshold: ${liquidityThreshold_LCR}%`);
    
    // 🔧 ADD: Store monthly details for comprehensive output
    const monthlyLCRDetails = [];
    
    // ✅ CRITICAL FIX: Use OLD system's EXACT logic
    for (let month = 0; month < data.periodsCount; month++) {
      
      const monthData = data.classifiedData[month];
      
      // ✅ OLD SYSTEM LOGIC: Add ALL HQLA + NonHQLA as inflows, outflows separate
      const monthInflow = monthData.L1 + monthData.L2A + monthData.L2B;
      const monthOutflow = monthData.NonHQLA;
      
      cumulativeInflows += monthInflow;
      cumulativeOutflows += monthOutflow;
      
      // SAME cumulative cash flow check
      const cumulativeCashFlow = cumulativeInflows - cumulativeOutflows;
      if (cumulativeInflows < cumulativeOutflows) {
        console.log(`❌ Month ${month}: Negative cash flow (${cumulativeCashFlow})`);
        compliant = false;
      }
      
      // ✅ CRITICAL FIX: Use OLD system's HQLA calculation
      // Add total HQLA (L1 + L2A + L2B + NonHQLA) to cumulative HQLA
      const totalHQLA = monthData.L1 + monthData.L2A + monthData.L2B + monthData.NonHQLA;
      cumulativeHQLA += totalHQLA;
      
      // ✅ OLD SYSTEM LCR calculation (no haircuts in cumulative calculation)
      let LCR = 0;
      if (cumulativeOutflows > 0) {
        LCR = (cumulativeHQLA / cumulativeOutflows) * 100;
      } else {
        LCR = 100; // If no outflows, assume 100% LCR
      }
      
      console.log(`📈 Month ${month}: LCR = ${LCR.toFixed(2)}%, Cumulative HQLA = ${cumulativeHQLA.toFixed(2)}, Cumulative Outflows = ${cumulativeOutflows.toFixed(2)}`);
      
      // 🔧 ADD: Store monthly details for JSON output
      monthlyLCRDetails.push({
        month: month + 1,
        cumulativeInflows: cumulativeInflows.toString(),
        cumulativeOutflows: cumulativeOutflows.toString(),
        cumulativeCashFlow: cumulativeCashFlow.toString(),
        cumulativeHQLA: cumulativeHQLA.toString(),
        LCR: LCR.toString()
      });
      
      if (LCR < liquidityThreshold_LCR) {
        console.log(`❌ Month ${month}: LCR ${LCR.toFixed(2)}% below threshold ${liquidityThreshold_LCR}%`);
        compliant = false;
      }
    }
    
    // 🔧 ADD: Display detailed monthly breakdown like working version
    console.log('\n===== Monthly LCR Calculation Details =====');
    console.log(JSON.stringify(monthlyLCRDetails, null, 2));
    console.log('===========================================\n');
    
    console.log(`🏁 Final result: ${compliant ? 'COMPLIANT' : 'NON-COMPLIANT'}`);
    return compliant;
  }
}

// =================================== Compatibility Functions ===================================

/**
 * Convert generic classification back to ACTUSDatao1 for backward compatibility
 * Ensures existing ZK programs can work with new generic data
 */
export function createCompatibleACTUSData(
  genericData: GenericRiskClassification<Basel3HQLA>,
  scenarioParams: {
    scenarioID?: string;
    scenarioName?: string;
    newInvoiceAmount?: number;
    newInvoiceEvaluationMonth?: number;
    liquidityThreshold?: number;
    liquidityThreshold_LCR?: number;
  } = {}
): ACTUSDatao1 {
  
  console.log('🔄 Converting generic data to ACTUSDatao1 compatibility format...');
  
  // ✅ CRITICAL FIX: Match EXACT old system array structure
  // Extract arrays using SAME logic as old system
  const totalHQLA_L1 = genericData.classifiedData.map(month => month.L1);
  const totalHQLA_L2A = genericData.classifiedData.map(month => month.L2A);
  const totalHQLA_L2B = genericData.classifiedData.map(month => month.L2B);
  const totalNonHQLA = genericData.classifiedData.map(month => month.NonHQLA);
  
  // ✅ CRITICAL FIX: Calculate cash flows EXACTLY like old system
  // Old system: cinflow = cashInflow.map(arr => arr.reduce((sum, num) => sum + num, 0))
  const cashInflows = totalHQLA_L1.map((l1, i) => l1 + totalHQLA_L2A[i] + totalHQLA_L2B[i]);
  const cashOutflows = totalNonHQLA.slice(); // Use NonHQLA as outflows
  
  console.log('🔍 Debug cash flow arrays:');
  console.log(`   Cash Inflows: [${cashInflows.slice(0, 5).map(v => v.toFixed(2)).join(', ')}...]`);
  console.log(`   Cash Outflows: [${cashOutflows.slice(0, 5).map(v => v.toFixed(2)).join(', ')}...]`);
  console.log(`   Total HQLA L1: [${totalHQLA_L1.slice(0, 5).map(v => v.toFixed(2)).join(', ')}...]`);
  console.log(`   Total HQLA L2A: [${totalHQLA_L2A.slice(0, 5).map(v => v.toFixed(2)).join(', ')}...]`);
  console.log(`   Total HQLA L2B: [${totalHQLA_L2B.slice(0, 5).map(v => v.toFixed(2)).join(', ')}...]`);
  console.log(`   Total NonHQLA: [${totalNonHQLA.slice(0, 5).map(v => v.toFixed(2)).join(', ')}...]`);
  
  // ✅ EXACT same ACTUSDatao1 structure as original test
  const compatibleData = new ACTUSDatao1({
    scenarioID: CircuitString.fromString(scenarioParams.scenarioID || 'Financier 10001'),
    scenarioName: CircuitString.fromString(scenarioParams.scenarioName || 'Financier 1 - CashFlows RiskFree'),
    scenarioName_str: "scenario_1",
    riskEvaluated: Field(1),
    
    // ✅ CRITICAL FIX: Use .flat() EXACTLY like old system
    cashInflows: [cashInflows].flat(),  // Flatten to match expected format
    cashOutflows: [cashOutflows].flat(), // Flatten to match expected format
    inflowLength: [cashInflows].flat().length,
    outflowLength: [cashOutflows].flat().length,
    
    // SAME parameters
    newInvoiceAmount: scenarioParams.newInvoiceAmount || 5000,
    newInvoiceEvaluationMonth: scenarioParams.newInvoiceEvaluationMonth || 11,
    liquidityThreshold: scenarioParams.liquidityThreshold || 10,
    liquidityThreshold_LCR: scenarioParams.liquidityThreshold_LCR || 100,
    
    // ✅ CRITICAL FIX: Empty classified contracts like old system
    classifiedContracts: [],
    
    // ✅ EXACT same HQLA arrays as old system
    totalHQLA_L1: totalHQLA_L1,
    totalHQLA_L2A: totalHQLA_L2A,
    totalHQLA_L2B: totalHQLA_L2B,
    totalNonHQLA: totalNonHQLA,
  });
  
  console.log(`✅ Created compatible ACTUSDatao1 with ${genericData.periodsCount} periods`);
  console.log(`   - Flattened cash inflows length: ${[cashInflows].flat().length}`);
  console.log(`   - Flattened cash outflows length: ${[cashOutflows].flat().length}`);
  
  return compatibleData;
}

/**
 * Convert processed ACTUS data to generic temporal format
 * Bridge between existing data processor and new generic framework
 * PRESERVES CONTRACT HQLA CLASSIFICATIONS for proper Basel3 processing
 */
export function convertACTUSToGenericTemporal(
  inflows: number[][],
  outflows: number[][],
  monthsCount: number,
  rawEvents: any[],
  contractDetails: any[]
): TemporalACTUSData {
  
  console.log('🌉 Converting processed ACTUS data to generic temporal format...');
  
  // ✅ CRITICAL FIX: Ensure HQLA classifications are properly merged
  // Create Basel3 contract portfolio and merge HQLA classifications
  const basel3Contracts = getBasel3ContractPortfolio();
  console.log(`📋 Got ${basel3Contracts.length} Basel3 contracts with HQLA classifications`);
  
  // ✅ CRITICAL DEBUG: Show Basel3 mapping
  basel3Contracts.forEach(contract => {
    console.log(`   Basel3 Contract: ${contract.contractID} → ${contract.hqlaCategory}`);
  });
  
  // ✅ CRITICAL DEBUG: Show raw events structure
  console.log(`📋 Raw events received: ${rawEvents.length} contracts`);
  rawEvents.forEach((eventContract, index) => {
    console.log(`   Raw Event Contract ${index}: ${eventContract.contractId} with ${eventContract.events?.length || 0} events`);
  });
  
  // Enhance raw events with HQLA classifications from Basel3 contracts
  const enhancedRawEvents = rawEvents.map((eventContract, index) => {
    // Find matching Basel3 contract by contractId
    const matchingBasel3Contract = basel3Contracts.find(b3c => 
      b3c.contractID === eventContract.contractId
    );
    
    console.log(`   Matching ${eventContract.contractId} with Basel3 contract: ${matchingBasel3Contract ? matchingBasel3Contract.hqlaCategory : 'NOT FOUND'}`);
    
    return {
      ...eventContract,
      hqlaCategory: matchingBasel3Contract?.hqlaCategory || 'NonHQLA'
    };
  });
  
  // Also enhance contract details
  const enhancedContractDetails = contractDetails || [];
  enhancedRawEvents.forEach((contract, index) => {
    if (!enhancedContractDetails[index]) {
      enhancedContractDetails[index] = {};
    }
    enhancedContractDetails[index].hqlaCategory = contract.hqlaCategory;
  });
  
  console.log(`📋 Enhanced contract details: ${enhancedContractDetails.length} contracts with HQLA info`);
  enhancedContractDetails.forEach((detail, i) => {
    if (detail && detail.hqlaCategory) {
      console.log(`   - Contract ${i}: ${detail.hqlaCategory}`);
    }
  });
  
  const temporalData = convertToGenericFormat(
    monthsCount,
    'monthly',
    inflows,
    outflows,
    enhancedRawEvents,  // ✅ Use enhanced events with HQLA classifications
    enhancedContractDetails
  );
  
  console.log(`✅ Converted to generic format: ${temporalData.periodsCount} monthly periods`);
  return temporalData;
}

/**
 * Process Basel3 data through generic framework while maintaining compatibility
 * This is the main entry point for Basel3 processing
 */
export async function processBasel3ThroughGenericFramework(
  inflows: number[][],
  outflows: number[][],
  monthsCount: number,
  rawEvents: any[],
  contractDetails: any[],
  thresholds: {
    liquidityThreshold_LCR: number;
    liquidityThreshold?: number;
    newInvoiceAmount?: number;
    newInvoiceEvaluationMonth?: number;
  }
): Promise<{
  temporalData: TemporalACTUSData;
  classification: GenericRiskClassification<Basel3HQLA>;
  compatibleData: ACTUSDatao1;
  compliance: boolean;
}> {
  
  console.log('🚀 Processing Basel3 data through generic framework...');
  
  // Step 1: Convert to generic temporal format
  const temporalData = convertACTUSToGenericTemporal(
    inflows, outflows, monthsCount, rawEvents, contractDetails
  );
  
  // Step 2: Process through Basel3 processor
  const processor = new Basel3MonthlyProcessor();
  const classification = processor.processRiskData(temporalData);
  
  // Step 3: Create backward-compatible data structure
  const compatibleData = createCompatibleACTUSData(classification, {
    liquidityThreshold_LCR: thresholds.liquidityThreshold_LCR,
    liquidityThreshold: thresholds.liquidityThreshold,
    newInvoiceAmount: thresholds.newInvoiceAmount,
    newInvoiceEvaluationMonth: thresholds.newInvoiceEvaluationMonth
  });
  
  // Step 4: Calculate compliance using generic ZK program logic
  const zkProgram = new Basel3MonthlyZKProgram();
  const compliance = zkProgram.riskCalculation(classification, {
    liquidityThreshold_LCR: thresholds.liquidityThreshold_LCR
  });
  
  console.log('✅ Basel3 processing complete through generic framework');
  
  return {
    temporalData,
    classification,
    compatibleData,
    compliance
  };
}
