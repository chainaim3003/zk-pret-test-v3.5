/**
 * ====================================================================
 * Risk Liquidity Advanced OptimMerkle Utilities
 * ====================================================================
 * Data preparation utilities for Advanced Risk scenario
 * Follows the modular pattern: API call → data prep → signature → witnesses → ZK
 * ====================================================================
 */
import { Field, MerkleTree } from 'o1js';
import { ACTUSOptimMerkleAPIResponse, ACTUSContract } from './ACTUSOptimMerkleAPI.js';
import { MerkleWitness8 } from './CoreZKUtilities.js';
export interface RiskLiquidityAdvancedOptimMerkleData {
    companyID: string;
    companyName: string;
    mcaID: string;
    businessPANID: string;
    riskEvaluated: number;
    cashInflow: number[];
    cashOutflow: number[];
    periodsCount: number;
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
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
/**
 * Fetch and process ACTUS data for Advanced Risk scenario
 */
export declare function fetchRiskLiquidityAdvancedOptimMerkleData(actusUrl: string, contractPortfolio?: string | ACTUSContract[]): Promise<ACTUSOptimMerkleAPIResponse>;
/**
 * Process ACTUS response into Advanced Risk compliance data structure
 * ✅ SIMPLE: Just aggregate cash flows, no Basel3 complexity
 */
export declare function processAdvancedRiskData(actusResponse: ACTUSOptimMerkleAPIResponse, liquidityThreshold: number, newInvoiceAmount?: number, // Simplified - not used in calculations
newInvoiceEvaluationMonth?: number, // Simplified - not used in calculations
masterConfig?: AdvancedMasterConfiguration, executionMode?: string): RiskLiquidityAdvancedOptimMerkleData;
/**
 * Build Merkle tree and generate witnesses for Advanced Risk data
 * ✅ CRITICAL FIX: Match exact structure expected by ZK program
 */
export declare function buildAdvancedRiskMerkleStructure(complianceData: RiskLiquidityAdvancedOptimMerkleData): RiskLiquidityAdvancedOptimMerkleProcessedData;
/**
 * Calculate ultra-simple liquidity metrics
 * ✅ ULTRA SIMPLE: Just inflow/outflow ratio per period, no complexity
 */
export declare function calculateAdvancedRiskMetrics(complianceData: RiskLiquidityAdvancedOptimMerkleData, dynamicThresholds?: DynamicThresholds, masterConfig?: AdvancedMasterConfiguration): {
    periodicLiquidityRatios: number[];
    averageLiquidityRatio: number;
    worstCaseLiquidityRatio: number;
    liquidityStressTestPassed: boolean;
    periodByPeriodCompliance: boolean[];
};
/**
 * Validate advanced risk data integrity
 */
export declare function validateAdvancedRiskData(complianceData: RiskLiquidityAdvancedOptimMerkleData, masterConfig?: AdvancedMasterConfiguration): boolean;
/**
 * Generate summary report for Advanced Risk assessment
 * ✅ Focus on period-by-period liquidity compliance, NO Basel3
 */
export declare function generateAdvancedRiskSummary(complianceData: RiskLiquidityAdvancedOptimMerkleData, riskMetrics: ReturnType<typeof calculateAdvancedRiskMetrics>): string;
export interface AdvancedMasterConfiguration {
    configMetadata: {
        configId: string;
        systemScope: string;
        version: string;
    };
    minaO1jsConstraints: {
        fieldArithmetic: {
            maxSafeValue: string;
            integerOnly: boolean;
            divisionSafety: string;
            overflowPrevention: boolean;
        };
        circuitOptimization: {
            maxCircuitComplexity: number;
            adaptiveScaling: boolean;
        };
    };
    businessThresholdVariance: {
        dynamicStrategies: {
            [key: string]: {
                baseThreshold: number;
                tolerance: number;
                stressMultiplier: number;
                description: string;
            };
        };
    };
    zkSecurityGuarantees: any;
    performanceOptimization: any;
    systemIsolation: any;
}
export interface ExecutionSettings {
    executionSettings: {
        settingsId: string;
        version: string;
    };
    executionPaths: {
        [key: string]: {
            parameters: {
                liquidityThreshold: number;
                executionMode: string;
            };
            expectedOutcome: string;
            description: string;
        };
    };
}
export interface DynamicThresholds {
    baseThreshold: number;
    tolerance: number;
    stressMultiplier: number;
    description: string;
}
/**
 * Load the advanced master configuration
 */
export declare function loadAdvancedMasterConfiguration(): AdvancedMasterConfiguration;
/**
 * Load execution settings
 */
export declare function loadExecutionSettings(): ExecutionSettings;
/**
 * Apply dynamic threshold strategy based on execution mode
 */
export declare function applyDynamicThresholdStrategy(executionMode: string, baseThreshold: number, masterConfig: AdvancedMasterConfiguration): DynamicThresholds;
/**
 * Validate Field arithmetic constraints
 */
export declare function validateFieldArithmeticConstraints(thresholds: DynamicThresholds, constraints: AdvancedMasterConfiguration['minaO1jsConstraints']): boolean;
