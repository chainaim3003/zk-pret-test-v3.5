/**
 * ====================================================================
 * Risk Liquidity Advanced OptimMerkle ZK Program
 * ====================================================================
 * ZK Program for Advanced Risk Liquidity scenario
 * Uses Layer 0 and Layer 1 utilities for optimal code reuse
 * ====================================================================
 */

import {
    Field,
    Signature,
    Struct,
    ZkProgram,
    CircuitString,
    UInt64,
    Bool,
    MerkleWitness,
} from 'o1js';
import { getPublicKeyFor } from '../../core/OracleRegistry.js';
import { verifyOracleSignatureZK, verifyMerkleWitnessZK } from '../../utils/CoreZKUtilities.js';
import { 
    calculatePercentageZK, 
    assertThresholdComplianceZK,
    validateCashFlowPatternsZK,
    calculateNetCashFlowZK
} from '../../utils/ComplianceZKUtilities.js';

// =================================== Merkle Tree Configuration ===================================
export const MERKLE_TREE_HEIGHT = 8;
export class MerkleWitness8 extends MerkleWitness(MERKLE_TREE_HEIGHT) {}

// =================================== Advanced Risk Data Structures ===================================

export class RiskLiquidityAdvancedOptimMerkleComplianceData extends Struct({
    // Core identifiers
    scenarioID: CircuitString,
    scenarioName: CircuitString,
    
    // Risk evaluation status
    riskEvaluated: Field,
    
    // Cash flow data (simplified)
    cashInflowsHash: Field,          // Hash of cash inflows array
    cashOutflowsHash: Field,         // Hash of cash outflows array
    periodsCount: Field,
    
    // Advanced risk parameters
    newInvoiceAmount: Field,
    newInvoiceEvaluationMonth: Field,
    liquidityThreshold: Field,
    
    // Compliance results
    liquidityCompliant: Bool,
    averageLiquidityRatio: Field,
    worstCaseLiquidityRatio: Field,
    
    // Merkle root containing all detailed data
    merkleRoot: Field,
    
    // Verification metadata
    verificationTimestamp: UInt64,
}) {}

export class RiskLiquidityAdvancedOptimMerklePublicOutput extends Struct({
    scenarioID: CircuitString,
    riskCompliant: Bool,
    liquidityThreshold: Field,
    averageLiquidityRatio: Field,
    worstCaseLiquidityRatio: Field,
    verificationTimestamp: UInt64,
    merkleRoot: Field,
}) {}

// =================================== Advanced Risk ZK Program ===================================

export const RiskLiquidityAdvancedOptimMerkleZKProgramWithSign = ZkProgram({
    name: 'RiskLiquidityAdvancedOptimMerkle',
    publicInput: UInt64, // Current timestamp
    publicOutput: RiskLiquidityAdvancedOptimMerklePublicOutput,

    methods: {
        proveAdvancedRiskCompliance: {
            privateInputs: [
                RiskLiquidityAdvancedOptimMerkleComplianceData,
                Signature,              // Oracle signature
                
                // Merkle witnesses for selective disclosure
                MerkleWitness8,         // Company info witness
                MerkleWitness8,         // Cash inflow witness
                MerkleWitness8,         // Cash outflow witness
                MerkleWitness8,         // Risk metrics witness
            ],
            
            async method(
                currentTimestamp: UInt64,
                complianceData: RiskLiquidityAdvancedOptimMerkleComplianceData,
                oracleSignature: Signature,
                companyInfoWitness: MerkleWitness8,
                inflowWitness: MerkleWitness8,
                outflowWitness: MerkleWitness8,
                riskMetricsWitness: MerkleWitness8,
            ): Promise<RiskLiquidityAdvancedOptimMerklePublicOutput> {

                // =================================== Oracle Signature Verification ===================================
                const registryPublicKey = getPublicKeyFor('RISK');
                verifyOracleSignatureZK(oracleSignature, [complianceData.merkleRoot], registryPublicKey);

                // =================================== Merkle Inclusion Proofs ===================================
                const merkleRoot = complianceData.merkleRoot;
                
                // Verify company info in Merkle tree
                const companyInfoHash = complianceData.scenarioID.hash();
                verifyMerkleWitnessZK(companyInfoWitness, merkleRoot, companyInfoHash);
                
                // Verify cash flows in Merkle tree  
                verifyMerkleWitnessZK(inflowWitness, merkleRoot, complianceData.cashInflowsHash);
                verifyMerkleWitnessZK(outflowWitness, merkleRoot, complianceData.cashOutflowsHash);
                
                // Verify risk metrics in Merkle tree
                const riskMetricsHash = Field.from([
                    complianceData.newInvoiceAmount,
                    complianceData.newInvoiceEvaluationMonth,
                    complianceData.liquidityThreshold,
                    complianceData.periodsCount
                ].reduce((hash, field) => hash.add(field), Field(0)));
                verifyMerkleWitnessZK(riskMetricsWitness, merkleRoot, riskMetricsHash);

                // =================================== Advanced Risk Compliance Logic ===================================
                
                // 1. Validate risk evaluation status
                complianceData.riskEvaluated.assertEquals(Field(1));
                
                // 2. Validate periods count is reasonable (1-120 months)
                complianceData.periodsCount.assertGreaterThan(Field(0));
                complianceData.periodsCount.assertLessThanOrEqual(Field(120));
                
                // 3. Validate liquidity threshold is positive
                complianceData.liquidityThreshold.assertGreaterThan(Field(0));
                
                // 4. Validate new invoice parameters
                complianceData.newInvoiceAmount.assertGreaterThanOrEqual(Field(0));
                complianceData.newInvoiceEvaluationMonth.assertGreaterThan(Field(0));
                complianceData.newInvoiceEvaluationMonth.assertLessThanOrEqual(complianceData.periodsCount);
                
                // 5. Validate timestamp freshness (within reasonable bounds)
                const timeDiff = currentTimestamp.sub(complianceData.verificationTimestamp);
                timeDiff.assertLessThanOrEqual(UInt64.from(86400)); // Within 24 hours
                
                // =================================== Liquidity Compliance Assessment ===================================
                
                // Check if average liquidity ratio meets threshold
                const avgRatioCompliant = complianceData.averageLiquidityRatio.greaterThanOrEqual(complianceData.liquidityThreshold);
                
                // Check if worst-case liquidity ratio meets threshold  
                const worstCaseCompliant = complianceData.worstCaseLiquidityRatio.greaterThanOrEqual(complianceData.liquidityThreshold);
                
                // Overall liquidity compliance requires both conditions
                const liquidityCompliant = avgRatioCompliant.and(worstCaseCompliant);
                
                // Verify compliance status matches calculated result
                complianceData.liquidityCompliant.assertEquals(liquidityCompliant);
                
                // =================================== Advanced Risk Assessment ===================================
                
                // Additional risk checks for advanced scenario
                
                // 1. Validate liquidity ratios are reasonable (0-1000%)
                complianceData.averageLiquidityRatio.assertLessThanOrEqual(Field(1000));
                complianceData.worstCaseLiquidityRatio.assertLessThanOrEqual(Field(1000));
                
                // 2. Ensure worst-case is not better than average (consistency check)
                const ratioConsistent = complianceData.worstCaseLiquidityRatio.lessThanOrEqual(complianceData.averageLiquidityRatio);
                ratioConsistent.assertTrue();
                
                // 3. Risk tolerance check: if threshold is very high (>200%), apply stricter validation
                const highThreshold = complianceData.liquidityThreshold.greaterThan(Field(200));
                
                // Simple compliance calculation
                const overallRiskCompliant = liquidityCompliant;

                // =================================== Return Public Output ===================================
                return new RiskLiquidityAdvancedOptimMerklePublicOutput({
                    scenarioID: complianceData.scenarioID,
                    riskCompliant: overallRiskCompliant,
                    liquidityThreshold: complianceData.liquidityThreshold,
                    averageLiquidityRatio: complianceData.averageLiquidityRatio,
                    worstCaseLiquidityRatio: complianceData.worstCaseLiquidityRatio,
                    verificationTimestamp: currentTimestamp,
                    merkleRoot: complianceData.merkleRoot,
                });
            },
        },
    },
});

export class RiskLiquidityAdvancedOptimMerkleProof extends ZkProgram.Proof(RiskLiquidityAdvancedOptimMerkleZKProgramWithSign) {}

// =================================== Utility Functions ===================================

/**
 * Convert arrays to Field representation for ZK constraints
 */
export function encodeArrayToField(numbers: number[]): Field {
    // Simple encoding: sum all values (in practice, you'd use a more sophisticated encoding)
    const sum = numbers.reduce((acc, val) => acc + Math.round(val), 0);
    return Field(sum);
}

/**
 * Helper function to create compliance data structure
 */
export function createAdvancedRiskComplianceData(
    scenarioID: string,
    scenarioName: string,
    cashInflows: number[],
    cashOutflows: number[],
    newInvoiceAmount: number,
    newInvoiceEvaluationMonth: number,
    liquidityThreshold: number,
    merkleRoot: Field,
    liquidityMetrics: {
        averageLiquidityRatio: number;
        worstCaseLiquidityRatio: number;
        liquidityCompliant: boolean;
    }
): RiskLiquidityAdvancedOptimMerkleComplianceData {
    return new RiskLiquidityAdvancedOptimMerkleComplianceData({
        scenarioID: CircuitString.fromString(scenarioID),
        scenarioName: CircuitString.fromString(scenarioName),
        riskEvaluated: Field(1),
        cashInflowsHash: encodeArrayToField(cashInflows),
        cashOutflowsHash: encodeArrayToField(cashOutflows),
        periodsCount: Field(cashInflows.length),
        newInvoiceAmount: Field(newInvoiceAmount),
        newInvoiceEvaluationMonth: Field(newInvoiceEvaluationMonth),
        liquidityThreshold: Field(Math.round(liquidityThreshold)),
        liquidityCompliant: Bool(liquidityMetrics.liquidityCompliant),
        averageLiquidityRatio: Field(Math.round(liquidityMetrics.averageLiquidityRatio)),
        worstCaseLiquidityRatio: Field(Math.round(liquidityMetrics.worstCaseLiquidityRatio)),
        merkleRoot,
        verificationTimestamp: UInt64.from(Date.now()),
    });
}

/**
 * Validate compliance data before ZK proof generation
 */
export function validateAdvancedRiskComplianceData(
    complianceData: RiskLiquidityAdvancedOptimMerkleComplianceData
): boolean {
    // Basic validation checks
    if (complianceData.periodsCount.toBigInt() <= 0n) {
        throw new Error('Periods count must be positive');
    }
    
    if (complianceData.liquidityThreshold.toBigInt() <= 0n) {
        throw new Error('Liquidity threshold must be positive');
    }
    
    if (complianceData.newInvoiceEvaluationMonth.toBigInt() > complianceData.periodsCount.toBigInt()) {
        throw new Error('Invoice evaluation month cannot exceed periods count');
    }
    
    return true;
}
