/**
 * ====================================================================
 * Risk Liquidity Basel3 OptimMerkle Utilities - FIXED
 * ====================================================================
 * CRITICAL FIX: Merkle leaf hash calculations to match ZK program expectations
 * ====================================================================
 */
import { Field, MerkleTree } from 'o1js';
import { ACTUSOptimMerkleAPIResponse, ACTUSContract } from './ACTUSOptimMerkleAPI.js';
import { MerkleWitness8 } from './CoreZKUtilities.js';
export interface RiskLiquidityBasel3OptimMerkleData {
    companyID: string;
    companyName: string;
    mcaID: string;
    businessPANID: string;
    riskEvaluated: number;
    cashInflow: number[];
    cashOutflow: number[];
    periodsCount: number;
    hqlaLevel1: number[];
    hqlaLevel2A: number[];
    hqlaLevel2B: number[];
    netCashOutflows: number[];
    availableStableFunding: number[];
    requiredStableFunding: number[];
    lcrThreshold: number;
    nsfrThreshold: number;
    liquidityThreshold: number;
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    metadata: {
        timeHorizon: string;
        currency: string;
        processingDate: string;
    };
}
export interface RiskLiquidityBasel3OptimMerkleProcessedData {
    complianceData: RiskLiquidityBasel3OptimMerkleData;
    merkleTree: MerkleTree;
    merkleRoot: Field;
    witnesses: {
        companyInfo: MerkleWitness8;
        cashFlows: MerkleWitness8;
        hqlaComponents: MerkleWitness8;
        nsfrComponents: MerkleWitness8;
        thresholds: MerkleWitness8;
    };
}
/**
 * Fetch and process ACTUS data for Basel3 Risk scenario
 */
export declare function fetchRiskLiquidityBasel3OptimMerkleData(actusUrl: string, contractPortfolio?: string | ACTUSContract[]): Promise<ACTUSOptimMerkleAPIResponse & {
    rawResponseData?: any;
}>;
/**
 * Process ACTUS response with Basel3-specific categorization
 * Uses the enhanced generic framework for event-based HQLA classification
 */
export declare function processBasel3RiskData(actusResponse: ACTUSOptimMerkleAPIResponse, lcrThreshold: number, nsfrThreshold?: number, liquidityThreshold?: number, newInvoiceAmount?: number, newInvoiceEvaluationMonth?: number): Promise<RiskLiquidityBasel3OptimMerkleData>;
/**
 * ✅ CRITICAL FIX: Build Merkle tree structure for Basel3 data
 * Updated to match exactly what the ZK program expects
 */
export declare function buildBasel3RiskMerkleStructure(complianceData: RiskLiquidityBasel3OptimMerkleData): RiskLiquidityBasel3OptimMerkleProcessedData;
/**
 * Calculate Basel3 compliance metrics
 */
export declare function calculateBasel3RiskMetrics(complianceData: RiskLiquidityBasel3OptimMerkleData): {
    lcrRatios: number[];
    nsfrRatios: number[];
    averageLCR: number;
    averageNSFR: number;
    worstCaseLCR: number;
    worstCaseNSFR: number;
    lcrCompliant: boolean;
    nsfrCompliant: boolean;
    overallCompliant: boolean;
};
/**
 * Validate Basel3 risk data integrity
 */
export declare function validateBasel3RiskData(complianceData: RiskLiquidityBasel3OptimMerkleData): boolean;
/**
 * Generate Basel3 compliance summary report
 */
export declare function generateBasel3RiskSummary(complianceData: RiskLiquidityBasel3OptimMerkleData, riskMetrics: ReturnType<typeof calculateBasel3RiskMetrics>): string;
