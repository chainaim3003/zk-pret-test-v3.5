/**
 * ====================================================================
 * Risk Liquidity StableCoin OptimMerkle Utilities
 * ====================================================================
 * Data preparation utilities for StableCoin Risk scenario
 * Handles reserve backing, concentration risk, and redemption capacity
 * ====================================================================
 */
import { Field, MerkleTree } from 'o1js';
import { ACTUSOptimMerkleAPIResponse, ACTUSContract } from './ACTUSOptimMerkleAPI.js';
import { MerkleWitness8 } from './CoreZKUtilities.js';
export interface RiskLiquidityStableCoinOptimMerkleData {
    companyID: string;
    companyName: string;
    mcaID: string;
    businessPANID: string;
    riskEvaluated: number;
    cashInflow: number[];
    cashOutflow: number[];
    periodsCount: number;
    cashReserves: number[];
    treasuryReserves: number[];
    corporateReserves: number[];
    otherReserves: number[];
    outstandingTokens: number[];
    tokenValue: number;
    liquidityScores: number[];
    creditRatings: number[];
    maturityProfiles: number[];
    backingRatioThreshold: number;
    liquidityRatioThreshold: number;
    concentrationLimit: number;
    qualityThreshold: number;
    liquidityThreshold: number;
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    metadata: {
        timeHorizon: string;
        currency: string;
        processingDate: string;
    };
}
export interface RiskLiquidityStableCoinOptimMerkleProcessedData {
    complianceData: RiskLiquidityStableCoinOptimMerkleData;
    merkleTree: MerkleTree;
    merkleRoot: Field;
    witnesses: {
        companyInfo: MerkleWitness8;
        reserves: MerkleWitness8;
        tokens: MerkleWitness8;
        qualityMetrics: MerkleWitness8;
        thresholds: MerkleWitness8;
    };
}
/**
 * Fetch and process ACTUS data for StableCoin Risk scenario
 */
export declare function fetchRiskLiquidityStableCoinOptimMerkleData(actusUrl: string, contractPortfolio?: string | ACTUSContract[]): Promise<ACTUSOptimMerkleAPIResponse>;
/**
 * Process ACTUS response with StableCoin-specific reserve categorization
 * Uses balance sheet analysis (contract principals) instead of cash flow analysis
 * Supports jurisdiction-based regulatory frameworks
 * NOW READS CONCENTRATION LIMIT FROM CONFIG HIERARCHY
 */
export declare function processStableCoinRiskData(actusResponse: ACTUSOptimMerkleAPIResponse, contracts: ACTUSContract[], // Add contracts parameter for principal analysis
backingRatioThreshold?: number, liquidityRatioThreshold?: number, concentrationLimit?: number, // CHANGED: Remove default, make optional
qualityThreshold?: number, outstandingTokensAmount?: number, tokenValue?: number, liquidityThreshold?: number, newInvoiceAmount?: number, newInvoiceEvaluationMonth?: number, regulatoryFramework?: string): Promise<RiskLiquidityStableCoinOptimMerkleData>;
/**
 * Build Merkle tree structure for StableCoin data
 * IMPORTANT: This function should receive the SAME aggregated totals that are passed to the ZK program
 */
export declare function buildStableCoinRiskMerkleStructure(complianceData: RiskLiquidityStableCoinOptimMerkleData, aggregatedTotals?: {
    cashReservesTotal: number;
    treasuryReservesTotal: number;
    corporateReservesTotal: number;
    otherReservesTotal: number;
    outstandingTokensTotal: number;
    averageLiquidityScore: number;
    averageCreditRating: number;
    averageMaturity: number;
    assetQualityScore: number;
}): RiskLiquidityStableCoinOptimMerkleProcessedData;
/**
 * Calculate StableCoin compliance metrics
 */
export declare function calculateStableCoinRiskMetrics(complianceData: RiskLiquidityStableCoinOptimMerkleData): {
    backingRatios: number[];
    liquidityRatios: number[];
    concentrationRisks: number[];
    assetQualityScores: number[];
    averageBackingRatio: number;
    averageLiquidityRatio: number;
    maxConcentrationRisk: number;
    averageAssetQuality: number;
    backingCompliant: boolean;
    liquidityCompliant: boolean;
    concentrationCompliant: boolean;
    qualityCompliant: boolean;
    overallCompliant: boolean;
};
/**
 * Validate StableCoin risk data integrity
 */
export declare function validateStableCoinRiskData(complianceData: RiskLiquidityStableCoinOptimMerkleData): boolean;
/**
 * Generate StableCoin compliance summary report
 */
export declare function generateStableCoinRiskSummary(complianceData: RiskLiquidityStableCoinOptimMerkleData, riskMetrics: ReturnType<typeof calculateStableCoinRiskMetrics>): string;
