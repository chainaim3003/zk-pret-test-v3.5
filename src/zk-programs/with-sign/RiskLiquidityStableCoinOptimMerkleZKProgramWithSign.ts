/**
 * ====================================================================
 * Risk Liquidity StableCoin OptimMerkle ZK Program
 * ====================================================================
 * ZK Program for StableCoin Proof of Reserves Risk scenario
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
    Provable,
} from 'o1js';
import { getPublicKeyFor } from '../../core/OracleRegistry.js';
import { verifyOracleSignatureZK, verifyMerkleWitnessZK, MerkleWitness8 } from '../../utils/CoreZKUtilities.js';
import { 
    calculatePercentageZK, 
    assertThresholdComplianceZK,
    calculateConcentrationRiskZK,
    validateAssetQualityZK
} from '../../utils/ComplianceZKUtilities.js';

// =================================== Merkle Tree Configuration ===================================
export const MERKLE_TREE_HEIGHT = 8;
// Use the MerkleWitness8 class from CoreZKUtilities instead of defining here

// =================================== StableCoin Risk Data Structures ===================================

export class RiskLiquidityStableCoinOptimMerkleComplianceData extends Struct({
    // Core identifiers
    scenarioID: CircuitString,
    scenarioName: CircuitString,
    
    // Risk evaluation status
    riskEvaluated: Field,
    
    // StableCoin reserve components (aggregated totals)
    cashReservesTotal: Field,           // Total cash and cash equivalents
    treasuryReservesTotal: Field,       // Total government securities
    corporateReservesTotal: Field,      // Total corporate bonds
    otherReservesTotal: Field,          // Total other permissible assets
    
    // Outstanding token information
    outstandingTokensTotal: Field,      // Total tokens in circulation
    tokenValue: Field,                  // Par value per token (scaled by 100)
    
    // Reserve quality metrics
    averageLiquidityScore: Field,       // Weighted average liquidity score
    averageCreditRating: Field,         // Weighted average credit rating
    averageMaturity: Field,             // Weighted average maturity in days
    
    // StableCoin compliance metrics
    backingRatio: Field,                // Reserve Value / Outstanding Token Value * 100
    liquidityRatio: Field,              // Liquid Reserves / Total Reserves * 100
    concentrationRisk: Field,           // Max single asset category concentration
    assetQualityScore: Field,           // Overall asset quality score
    
    // Compliance thresholds
    backingRatioThreshold: Field,       // Minimum backing ratio (usually 100%+)
    liquidityRatioThreshold: Field,     // Minimum liquid reserve ratio
    concentrationLimit: Field,          // Maximum single asset concentration
    qualityThreshold: Field,            // Minimum asset quality score
    
    // Overall compliance status
    backingCompliant: Bool,
    liquidityCompliant: Bool,
    concentrationCompliant: Bool,
    qualityCompliant: Bool,
    stableCoinCompliant: Bool,
    
    // Additional risk parameters
    periodsCount: Field,
    liquidityThreshold: Field,
    newInvoiceAmount: Field,
    newInvoiceEvaluationMonth: Field,
    
    // Merkle root containing all detailed data
    merkleRoot: Field,
    
    // Verification metadata
    verificationTimestamp: UInt64,
}) {}

export class RiskLiquidityStableCoinOptimMerklePublicOutput extends Struct({
    scenarioID: CircuitString,
    stableCoinCompliant: Bool,
    backingRatio: Field,
    liquidityRatio: Field,
    concentrationRisk: Field,
    assetQualityScore: Field,
    verificationTimestamp: UInt64,
    merkleRoot: Field,
}) {}

// =================================== StableCoin Risk ZK Program ===================================

export const RiskLiquidityStableCoinOptimMerkleZKProgramWithSign = ZkProgram({
    name: 'RiskLiquidityStableCoinOptimMerkle',
    publicInput: UInt64, // Current timestamp
    publicOutput: RiskLiquidityStableCoinOptimMerklePublicOutput,

    methods: {
        proveStableCoinRiskCompliance: {
            privateInputs: [
                RiskLiquidityStableCoinOptimMerkleComplianceData,
                Signature,              // Oracle signature
                
                // Merkle witnesses for selective disclosure
                MerkleWitness8,         // Company info witness
                MerkleWitness8,         // Reserve assets witness
                MerkleWitness8,         // Token info witness
                MerkleWitness8,         // Quality metrics witness
                MerkleWitness8,         // Thresholds witness
            ],
            
            async method(
                currentTimestamp: UInt64,
                complianceData: RiskLiquidityStableCoinOptimMerkleComplianceData,
                oracleSignature: Signature,
                companyInfoWitness: MerkleWitness8,
                reservesWitness: MerkleWitness8,
                tokensWitness: MerkleWitness8,
                qualityWitness: MerkleWitness8,
                thresholdsWitness: MerkleWitness8,
            ): Promise<RiskLiquidityStableCoinOptimMerklePublicOutput> {

                // =================================== Oracle Signature Verification ===================================
                const registryPublicKey = getPublicKeyFor('RISK');
                verifyOracleSignatureZK(oracleSignature, [complianceData.merkleRoot], registryPublicKey);

                // =================================== Merkle Inclusion Proofs ===================================
                const merkleRoot = complianceData.merkleRoot;
                
                // Verify company info in Merkle tree
                const companyInfoHash = complianceData.scenarioID.hash();
                verifyMerkleWitnessZK(companyInfoWitness, merkleRoot, companyInfoHash);
                
                // Verify reserve assets in Merkle tree
                const reservesHash = Field.from([
                    complianceData.cashReservesTotal,
                    complianceData.treasuryReservesTotal,
                    complianceData.corporateReservesTotal,
                    complianceData.otherReservesTotal
                ].reduce((hash, field) => hash.add(field), Field(0)));
                verifyMerkleWitnessZK(reservesWitness, merkleRoot, reservesHash);
                
                // Verify token information in Merkle tree
                const tokensHash = Field.from([
                    complianceData.outstandingTokensTotal,
                    complianceData.tokenValue
                ].reduce((hash, field) => hash.add(field), Field(0)));
                verifyMerkleWitnessZK(tokensWitness, merkleRoot, tokensHash);
                
                // Verify quality metrics in Merkle tree
                const qualityHash = Field.from([
                    complianceData.averageLiquidityScore,
                    complianceData.averageCreditRating,
                    complianceData.averageMaturity
                ].reduce((hash, field) => hash.add(field), Field(0)));
                verifyMerkleWitnessZK(qualityWitness, merkleRoot, qualityHash);
                
                // Verify thresholds in Merkle tree
                const thresholdsHash = Field.from([
                    complianceData.backingRatioThreshold,
                    complianceData.liquidityRatioThreshold,
                    complianceData.concentrationLimit,
                    complianceData.qualityThreshold
                ].reduce((hash, field) => hash.add(field), Field(0)));
                verifyMerkleWitnessZK(thresholdsWitness, merkleRoot, thresholdsHash);

                // =================================== StableCoin Compliance Logic ===================================
                
                // 1. Validate risk evaluation status
                complianceData.riskEvaluated.assertEquals(Field(1));
                
                // 2. Validate periods count is reasonable (1-120 months)
                complianceData.periodsCount.assertGreaterThan(Field(0));
                complianceData.periodsCount.assertLessThanOrEqual(Field(120));
                
                // 3. Validate StableCoin thresholds are positive and reasonable
                complianceData.backingRatioThreshold.assertGreaterThan(Field(0));
                complianceData.liquidityRatioThreshold.assertGreaterThanOrEqual(Field(0));
                complianceData.concentrationLimit.assertGreaterThan(Field(0));
                complianceData.qualityThreshold.assertGreaterThanOrEqual(Field(0));
                
                // 4. Validate reserve components are non-negative
                complianceData.cashReservesTotal.assertGreaterThanOrEqual(Field(0));
                complianceData.treasuryReservesTotal.assertGreaterThanOrEqual(Field(0));
                complianceData.corporateReservesTotal.assertGreaterThanOrEqual(Field(0));
                complianceData.otherReservesTotal.assertGreaterThanOrEqual(Field(0));
                
                // 5. Validate token information
                complianceData.outstandingTokensTotal.assertGreaterThan(Field(0)); // Must have tokens outstanding
                complianceData.tokenValue.assertGreaterThan(Field(0)); // Token value must be positive
                
                // 6. Validate timestamp freshness
                const timeDiff = currentTimestamp.sub(complianceData.verificationTimestamp);
                timeDiff.assertLessThanOrEqual(UInt64.from(86400)); // Within 24 hours

                // =================================== Backing Ratio Validation ===================================
                
                // Calculate total reserves
                const totalReserves = complianceData.cashReservesTotal
                    .add(complianceData.treasuryReservesTotal)
                    .add(complianceData.corporateReservesTotal)
                    .add(complianceData.otherReservesTotal);
                
                // Calculate total outstanding token value (token value is scaled by 100)
                const totalTokenValue = complianceData.outstandingTokensTotal
                    .mul(complianceData.tokenValue)
                    .div(Field(100)); // Unscale token value
                
                // Backing Ratio = Total Reserves / Outstanding Token Value * 100
                const calculatedBackingRatio = totalReserves.mul(Field(100)).div(totalTokenValue);
                
                // Verify the provided backing ratio matches our calculation (allow small rounding differences)
                const backingDifference = calculatedBackingRatio.sub(complianceData.backingRatio);
                // Simple check: difference should be small
                backingDifference.assertLessThanOrEqual(Field(1)); // Allow 1% rounding difference
                
                // Check backing compliance
                const backingCompliant = complianceData.backingRatio.greaterThanOrEqual(complianceData.backingRatioThreshold);
                complianceData.backingCompliant.assertEquals(backingCompliant);

                // =================================== Liquidity Ratio Validation ===================================
                
                // Liquidity Ratio = (Cash + Treasury) / Total Reserves * 100
                const liquidReserves = complianceData.cashReservesTotal.add(complianceData.treasuryReservesTotal);
                const calculatedLiquidityRatio = liquidReserves.mul(Field(100)).div(totalReserves.add(Field(1))); // Add 1 to avoid division by zero
                
                // Verify the provided liquidity ratio matches our calculation
                const liquidityDifference = calculatedLiquidityRatio.sub(complianceData.liquidityRatio);
                // Simple check: difference should be small
                liquidityDifference.assertLessThanOrEqual(Field(1)); // Allow 1% rounding difference
                
                // Check liquidity compliance
                const liquidityCompliant = complianceData.liquidityRatio.greaterThanOrEqual(complianceData.liquidityRatioThreshold);
                complianceData.liquidityCompliant.assertEquals(liquidityCompliant);

                // =================================== Concentration Risk Validation ===================================
                
                // Find maximum single asset concentration (simplified)
                const cashGreaterThanTreasury = complianceData.cashReservesTotal.greaterThan(complianceData.treasuryReservesTotal);
                const corporateGreaterThanOther = complianceData.corporateReservesTotal.greaterThan(complianceData.otherReservesTotal);
                
                // Simple max calculation without Field.if
                let maxAsset = complianceData.cashReservesTotal;
                if (complianceData.treasuryReservesTotal.greaterThan(maxAsset).toBoolean()) {
                    maxAsset = complianceData.treasuryReservesTotal;
                }
                if (complianceData.corporateReservesTotal.greaterThan(maxAsset).toBoolean()) {
                    maxAsset = complianceData.corporateReservesTotal;
                }
                if (complianceData.otherReservesTotal.greaterThan(maxAsset).toBoolean()) {
                    maxAsset = complianceData.otherReservesTotal;
                }
                
                // Calculate concentration as percentage
                const calculatedConcentration = maxAsset.mul(Field(100)).div(totalReserves.add(Field(1)));
                
                // Verify the provided concentration matches our calculation
                // Calculate absolute difference manually since Field doesn't have abs() method
                const concentrationDiffRaw = calculatedConcentration.sub(complianceData.concentrationRisk);
                const isNegative = concentrationDiffRaw.lessThan(Field(0));
                const concentrationDifference = Provable.if(isNegative, concentrationDiffRaw.neg(), concentrationDiffRaw);
                concentrationDifference.assertLessThanOrEqual(Field(1)); // Allow 1% rounding difference
                
                // Check concentration compliance (concentration should be BELOW limit)
                const concentrationCompliant = complianceData.concentrationRisk.lessThanOrEqual(complianceData.concentrationLimit);
                complianceData.concentrationCompliant.assertEquals(concentrationCompliant);

                // =================================== Asset Quality Validation ===================================
                
                // Check asset quality score meets minimum threshold
                const qualityCompliant = complianceData.assetQualityScore.greaterThanOrEqual(complianceData.qualityThreshold);
                complianceData.qualityCompliant.assertEquals(qualityCompliant);
                
                // Validate quality metrics are reasonable
                complianceData.averageLiquidityScore.assertLessThanOrEqual(Field(100)); // Max 100
                complianceData.averageCreditRating.assertLessThanOrEqual(Field(100)); // Max 100
                complianceData.averageMaturity.assertLessThanOrEqual(Field(3650)); // Max 10 years in days
                complianceData.assetQualityScore.assertLessThanOrEqual(Field(100)); // Max 100

                // =================================== Overall StableCoin Compliance ===================================
                
                // StableCoin compliance requires ALL conditions to be met
                const overallStableCoinCompliant = backingCompliant
                    .and(liquidityCompliant)
                    .and(concentrationCompliant)
                    .and(qualityCompliant);
                
                complianceData.stableCoinCompliant.assertEquals(overallStableCoinCompliant);

                // =================================== Return Public Output ===================================
                return new RiskLiquidityStableCoinOptimMerklePublicOutput({
                    scenarioID: complianceData.scenarioID,
                    stableCoinCompliant: overallStableCoinCompliant,
                    backingRatio: complianceData.backingRatio,
                    liquidityRatio: complianceData.liquidityRatio,
                    concentrationRisk: complianceData.concentrationRisk,
                    assetQualityScore: complianceData.assetQualityScore,
                    verificationTimestamp: currentTimestamp,
                    merkleRoot: complianceData.merkleRoot,
                });
            },
        },
    },
});

export class RiskLiquidityStableCoinOptimMerkleProof extends ZkProgram.Proof(RiskLiquidityStableCoinOptimMerkleZKProgramWithSign) {}

// =================================== Utility Functions ===================================

/**
 * Helper function to create StableCoin compliance data structure
 */
export function createStableCoinRiskComplianceData(
    scenarioID: string,
    scenarioName: string,
    reserveComponents: {
        cashReservesTotal: number;
        treasuryReservesTotal: number;
        corporateReservesTotal: number;
        otherReservesTotal: number;
    },
    tokenInfo: {
        outstandingTokensTotal: number;
        tokenValue: number;
    },
    qualityMetrics: {
        averageLiquidityScore: number;
        averageCreditRating: number;
        averageMaturity: number;
        assetQualityScore: number;
    },
    thresholds: {
        backingRatioThreshold: number;
        liquidityRatioThreshold: number;
        concentrationLimit: number;
        qualityThreshold: number;
    },
    additionalParams: {
        periodsCount: number;
        liquidityThreshold: number;
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
    },
    merkleRoot: Field,
    calculatedMetrics: {
        backingRatio: number;
        liquidityRatio: number;
        concentrationRisk: number;
        backingCompliant: boolean;
        liquidityCompliant: boolean;
        concentrationCompliant: boolean;
        qualityCompliant: boolean;
        stableCoinCompliant: boolean;
    }
): RiskLiquidityStableCoinOptimMerkleComplianceData {
    return new RiskLiquidityStableCoinOptimMerkleComplianceData({
        scenarioID: CircuitString.fromString(scenarioID),
        scenarioName: CircuitString.fromString(scenarioName),
        riskEvaluated: Field(1),
        cashReservesTotal: Field(Math.round(reserveComponents.cashReservesTotal)),
        treasuryReservesTotal: Field(Math.round(reserveComponents.treasuryReservesTotal)),
        corporateReservesTotal: Field(Math.round(reserveComponents.corporateReservesTotal)),
        otherReservesTotal: Field(Math.round(reserveComponents.otherReservesTotal)),
        outstandingTokensTotal: Field(Math.round(tokenInfo.outstandingTokensTotal)),
        tokenValue: Field(Math.round(tokenInfo.tokenValue * 100)), // Scale by 100
        averageLiquidityScore: Field(Math.round(qualityMetrics.averageLiquidityScore)),
        averageCreditRating: Field(Math.round(qualityMetrics.averageCreditRating)),
        averageMaturity: Field(Math.round(qualityMetrics.averageMaturity)),
        assetQualityScore: Field(Math.round(qualityMetrics.assetQualityScore)),
        backingRatio: Field(Math.round(calculatedMetrics.backingRatio)),
        liquidityRatio: Field(Math.round(calculatedMetrics.liquidityRatio)),
        concentrationRisk: Field(Math.round(calculatedMetrics.concentrationRisk)),
        backingRatioThreshold: Field(Math.round(thresholds.backingRatioThreshold)),
        liquidityRatioThreshold: Field(Math.round(thresholds.liquidityRatioThreshold)),
        concentrationLimit: Field(Math.round(thresholds.concentrationLimit)),
        qualityThreshold: Field(Math.round(thresholds.qualityThreshold)),
        backingCompliant: Bool(calculatedMetrics.backingCompliant),
        liquidityCompliant: Bool(calculatedMetrics.liquidityCompliant),
        concentrationCompliant: Bool(calculatedMetrics.concentrationCompliant),
        qualityCompliant: Bool(calculatedMetrics.qualityCompliant),
        stableCoinCompliant: Bool(calculatedMetrics.stableCoinCompliant),
        periodsCount: Field(additionalParams.periodsCount),
        liquidityThreshold: Field(Math.round(additionalParams.liquidityThreshold)),
        newInvoiceAmount: Field(additionalParams.newInvoiceAmount),
        newInvoiceEvaluationMonth: Field(additionalParams.newInvoiceEvaluationMonth),
        merkleRoot,
        verificationTimestamp: UInt64.from(Date.now()),
    });
}

/**
 * Calculate StableCoin compliance metrics from component data
 */
export function calculateStableCoinMetrics(
    reserveComponents: {
        cashReservesTotal: number;
        treasuryReservesTotal: number;
        corporateReservesTotal: number;
        otherReservesTotal: number;
    },
    tokenInfo: {
        outstandingTokensTotal: number;
        tokenValue: number;
    },
    thresholds: {
        backingRatioThreshold: number;
        liquidityRatioThreshold: number;
        concentrationLimit: number;
        qualityThreshold: number;
    },
    qualityMetrics: {
        assetQualityScore: number;
    }
): {
    backingRatio: number;
    liquidityRatio: number;
    concentrationRisk: number;
    backingCompliant: boolean;
    liquidityCompliant: boolean;
    concentrationCompliant: boolean;
    qualityCompliant: boolean;
    stableCoinCompliant: boolean;
} {
    // Calculate total reserves
    const totalReserves = reserveComponents.cashReservesTotal + 
                         reserveComponents.treasuryReservesTotal + 
                         reserveComponents.corporateReservesTotal + 
                         reserveComponents.otherReservesTotal;
    
    // Calculate total outstanding token value
    const totalTokenValue = tokenInfo.outstandingTokensTotal * tokenInfo.tokenValue;
    
    // Calculate backing ratio
    const backingRatio = totalTokenValue > 0 ? (totalReserves / totalTokenValue) * 100 : 100;
    
    // Calculate liquidity ratio
    const liquidReserves = reserveComponents.cashReservesTotal + reserveComponents.treasuryReservesTotal;
    const liquidityRatio = totalReserves > 0 ? (liquidReserves / totalReserves) * 100 : 0;
    
    // Calculate concentration risk
    const assetValues = [
        reserveComponents.cashReservesTotal,
        reserveComponents.treasuryReservesTotal,
        reserveComponents.corporateReservesTotal,
        reserveComponents.otherReservesTotal
    ];
    const maxAsset = Math.max(...assetValues);
    const concentrationRisk = totalReserves > 0 ? (maxAsset / totalReserves) * 100 : 0;
    
    // Check compliance
    const backingCompliant = backingRatio >= thresholds.backingRatioThreshold;
    const liquidityCompliant = liquidityRatio >= thresholds.liquidityRatioThreshold;
    const concentrationCompliant = concentrationRisk <= thresholds.concentrationLimit;
    const qualityCompliant = qualityMetrics.assetQualityScore >= thresholds.qualityThreshold;
    const stableCoinCompliant = backingCompliant && liquidityCompliant && concentrationCompliant && qualityCompliant;
    
    return {
        backingRatio,
        liquidityRatio,
        concentrationRisk,
        backingCompliant,
        liquidityCompliant,
        concentrationCompliant,
        qualityCompliant,
        stableCoinCompliant
    };
}

/**
 * Validate StableCoin compliance data before ZK proof generation
 */
export function validateStableCoinRiskComplianceData(
    complianceData: RiskLiquidityStableCoinOptimMerkleComplianceData
): boolean {
    // Basic validation checks
    if (complianceData.periodsCount.toBigInt() <= 0n) {
        throw new Error('Periods count must be positive');
    }
    
    if (complianceData.backingRatioThreshold.toBigInt() <= 0n) {
        throw new Error('Backing ratio threshold must be positive');
    }
    
    if (complianceData.outstandingTokensTotal.toBigInt() <= 0n) {
        throw new Error('Outstanding tokens must be positive');
    }
    
    if (complianceData.tokenValue.toBigInt() <= 0n) {
        throw new Error('Token value must be positive');
    }
    
    return true;
}
