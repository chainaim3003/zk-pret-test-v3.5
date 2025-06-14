/**
 * ====================================================================
 * Risk Liquidity Advanced OptimMerkle Utilities
 * ====================================================================
 * Data preparation utilities for Advanced Risk scenario
 * Follows the modular pattern: API call → data prep → signature → witnesses → ZK
 * ====================================================================
 */

import { Field, CircuitString, Poseidon, MerkleTree } from 'o1js';
import { 
    callACTUSAPI, 
    loadContractPortfolio, 
    getDefaultContractPortfolio,
    ACTUSOptimMerkleAPIResponse,
    ACTUSContract 
} from './ACTUSOptimMerkleAPI.js';
import { buildMerkleTreeZK, hashDataZK, MerkleWitness8, safeFieldFrom } from './CoreZKUtilities.js';

// =================================== Advanced Risk Data Structures ===================================

export interface RiskLiquidityAdvancedOptimMerkleData {
    // Scenario identifiers
    companyID: string;
    companyName: string;
    mcaID: string;
    businessPANID: string;
    
    // Risk assessment data
    riskEvaluated: number;
    cashInflow: number[];
    cashOutflow: number[];
    periodsCount: number;
    
    // Advanced risk metrics
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
    
    // API response metadata
    metadata: {
        timeHorizon: string;
        currency: string;
        processingDate: string;
    };
}

export interface RiskLiquidityAdvancedOptimMerkleProcessedData {
    complianceData: RiskLiquidityAdvancedOptimMerkleData;
    merkleTree: MerkleTree;
    merkleRoot: Field;
    witnesses: {
        cashInflow: MerkleWitness8;
        cashOutflow: MerkleWitness8;
        riskMetrics: MerkleWitness8;
        companyInfo: MerkleWitness8;
    };
}

// =================================== Data Processing Functions ===================================

/**
 * Fetch and process ACTUS data for Advanced Risk scenario
 */
export async function fetchRiskLiquidityAdvancedOptimMerkleData(
    actusUrl: string,
    contractPortfolio?: string | ACTUSContract[]
): Promise<ACTUSOptimMerkleAPIResponse> {
    try {
        console.log('Loading contract portfolio for Advanced Risk...');
        const contracts = await loadContractPortfolio(contractPortfolio || getDefaultContractPortfolio());
        
        console.log('Calling ACTUS API for Advanced Risk calculations...');
        const actusResponse = await callACTUSAPI(actusUrl, contracts);
        
        console.log(`Advanced Risk ACTUS data fetched: ${actusResponse.periodsCount} periods`);
        return actusResponse;
        
    } catch (error) {
        console.error('Error fetching Advanced Risk ACTUS data:', error);
        throw new Error(`Advanced Risk data fetch failed: ${error}`);
    }
}

/**
 * Process ACTUS response into Advanced Risk compliance data structure
 */
export function processAdvancedRiskData(
    actusResponse: ACTUSOptimMerkleAPIResponse,
    liquidityThreshold: number,
    newInvoiceAmount: number = 5000,
    newInvoiceEvaluationMonth: number = 11
): RiskLiquidityAdvancedOptimMerkleData {
    
    // Aggregate cash flows by period
    const aggregatedInflows = actusResponse.inflow.map((period: number[]) => 
        period.reduce((sum: number, value: number) => sum + value, 0)
    );
    
    const aggregatedOutflows = actusResponse.outflow.map((period: number[]) => 
        period.reduce((sum: number, value: number) => sum + value, 0)
    );
    
    return {
        // Scenario identifiers
        companyID: 'ADV_RISK_10001',
        companyName: 'Advanced Risk Liquidity Assessment',
        mcaID: 'ADV_MCA_201',
        businessPANID: 'ADV_PAN_1001',
        
        // Risk assessment data
        riskEvaluated: 1,
        cashInflow: aggregatedInflows,
        cashOutflow: aggregatedOutflows,
        periodsCount: actusResponse.periodsCount,
        
        // Advanced risk parameters
        newInvoiceAmount,
        newInvoiceEvaluationMonth,
        liquidityThreshold: Math.round(liquidityThreshold),
        
        // Metadata
        metadata: actusResponse.metadata
    };
}

/**
 * Build Merkle tree and generate witnesses for Advanced Risk data
 */
export function buildAdvancedRiskMerkleStructure(
    complianceData: RiskLiquidityAdvancedOptimMerkleData
): RiskLiquidityAdvancedOptimMerkleProcessedData {
    
    // Prepare data for Merkle tree
    const merkleLeaves: Field[] = [
        // Company information
        hashDataZK([
            Field(complianceData.companyID.length),
            Field(complianceData.mcaID.length)
        ]),
        
        // Cash flow data hash
        hashDataZK([
            ...complianceData.cashInflow.map(amount => safeFieldFrom(amount)),
        ]),
        
        hashDataZK([
            ...complianceData.cashOutflow.map(amount => safeFieldFrom(amount)),
        ]),
        
        // Risk metrics hash
        hashDataZK([
            Field(complianceData.riskEvaluated),
            Field(complianceData.newInvoiceAmount),
            Field(complianceData.newInvoiceEvaluationMonth),
            Field(complianceData.liquidityThreshold),
            Field(complianceData.periodsCount)
        ])
    ];
    
    // Build Merkle tree
    const merkleTree = buildMerkleTreeZK(merkleLeaves);
    const merkleRoot = merkleTree.getRoot();
    
    // Generate witnesses for each data category
    const witnesses = {
        companyInfo: new MerkleWitness8(merkleTree.getWitness(0n)),
        cashInflow: new MerkleWitness8(merkleTree.getWitness(1n)),
        cashOutflow: new MerkleWitness8(merkleTree.getWitness(2n)),
        riskMetrics: new MerkleWitness8(merkleTree.getWitness(3n))
    };
    
    return {
        complianceData,
        merkleTree,
        merkleRoot,
        witnesses
    };
}

/**
 * Calculate advanced liquidity risk metrics
 */
export function calculateAdvancedRiskMetrics(
    complianceData: RiskLiquidityAdvancedOptimMerkleData
): {
    periodicLiquidityRatios: number[];
    averageLiquidityRatio: number;
    worstCaseLiquidityRatio: number;
    liquidityStressTestPassed: boolean;
} {
    const { cashInflow, cashOutflow, liquidityThreshold, newInvoiceAmount, newInvoiceEvaluationMonth } = complianceData;
    
    // Calculate periodic liquidity ratios
    const periodicLiquidityRatios: number[] = [];
    
    for (let period = 0; period < cashInflow.length; period++) {
        let inflow = cashInflow[period];
        let outflow = cashOutflow[period];
        
        // Add new invoice impact if in evaluation month
        if (period === newInvoiceEvaluationMonth - 1) {
            inflow += newInvoiceAmount;
        }
        
        // Calculate liquidity ratio for this period
        const netLiquidity = inflow - outflow;
        const liquidityRatio = outflow > 0 ? (inflow / outflow) * 100 : 100;
        periodicLiquidityRatios.push(liquidityRatio);
    }
    
    // Calculate aggregate metrics
    const averageLiquidityRatio = periodicLiquidityRatios.reduce((sum, ratio) => sum + ratio, 0) / periodicLiquidityRatios.length;
    const worstCaseLiquidityRatio = Math.min(...periodicLiquidityRatios);
    
    // Stress test: all periods must meet threshold
    const liquidityStressTestPassed = periodicLiquidityRatios.every(ratio => ratio >= liquidityThreshold);
    
    return {
        periodicLiquidityRatios,
        averageLiquidityRatio,
        worstCaseLiquidityRatio,
        liquidityStressTestPassed
    };
}

/**
 * Validate advanced risk data integrity
 */
export function validateAdvancedRiskData(
    complianceData: RiskLiquidityAdvancedOptimMerkleData
): boolean {
    // Basic validation checks
    if (!complianceData.companyID || complianceData.companyID.length === 0) {
        throw new Error('Company ID is required for Advanced Risk scenario');
    }
    
    if (complianceData.cashInflow.length !== complianceData.cashOutflow.length) {
        throw new Error('Cash inflow and outflow arrays must have equal length');
    }
    
    if (complianceData.cashInflow.length !== complianceData.periodsCount) {
        throw new Error('Cash flow data length must match periods count');
    }
    
    if (complianceData.liquidityThreshold <= 0) {
        throw new Error('Liquidity threshold must be positive');
    }
    
    if (complianceData.newInvoiceEvaluationMonth < 1 || complianceData.newInvoiceEvaluationMonth > complianceData.periodsCount) {
        throw new Error('New invoice evaluation month must be within valid period range');
    }
    
    return true;
}

/**
 * Generate summary report for Advanced Risk assessment
 */
export function generateAdvancedRiskSummary(
    complianceData: RiskLiquidityAdvancedOptimMerkleData,
    riskMetrics: ReturnType<typeof calculateAdvancedRiskMetrics>
): string {
    return `
=== Advanced Risk Liquidity Assessment Summary ===
Company: ${complianceData.companyName} (${complianceData.companyID})
Assessment Period: ${complianceData.periodsCount} periods (${complianceData.metadata.timeHorizon})
Currency: ${complianceData.metadata.currency}

Risk Parameters:
- Liquidity Threshold: ${complianceData.liquidityThreshold}%
- New Invoice Amount: ${complianceData.metadata.currency} ${complianceData.newInvoiceAmount.toLocaleString()}
- Evaluation Month: ${complianceData.newInvoiceEvaluationMonth}

Risk Metrics:
- Average Liquidity Ratio: ${riskMetrics.averageLiquidityRatio.toFixed(2)}%
- Worst Case Liquidity Ratio: ${riskMetrics.worstCaseLiquidityRatio.toFixed(2)}%
- Stress Test Result: ${riskMetrics.liquidityStressTestPassed ? 'PASSED' : 'FAILED'}

Compliance Status: ${riskMetrics.liquidityStressTestPassed ? 'COMPLIANT' : 'NON-COMPLIANT'}
Generated: ${complianceData.metadata.processingDate}
`;
}
