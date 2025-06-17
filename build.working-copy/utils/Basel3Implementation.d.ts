/**
 * ====================================================================
 * Basel3 Implementation of Generic Temporal Risk Framework
 * ====================================================================
 * Period-agnostic Basel3 LCR/NSFR risk calculations
 * Works with any time period (daily, monthly, yearly) - math is identical
 * ====================================================================
 */
import { GenericRiskProcessor, GenericTemporalRiskZKProgram, TemporalACTUSData, GenericRiskClassification, Basel3HQLA } from './GenericTemporalRiskFramework.js';
import { ACTUSDatao1 } from '../zk-programs/with-sign/RiskLiquidityACTUSZKProgram_basel3_Withsign.js';
export declare class Basel3Processor extends GenericRiskProcessor<Basel3HQLA> {
    periodType: string;
    /**
     * Process temporal ACTUS data into Basel3 HQLA classifications
     * Period-agnostic: works whether periods are daily, monthly, or yearly
     */
    processRiskData(temporalData: TemporalACTUSData): GenericRiskClassification<Basel3HQLA>;
    /**
     * Classify HQLA for a specific period using EVENT-BASED logic
     * Period-agnostic: works whether period represents day, month, or year
     */
    private classifyHQLAForPeriod;
    /**
     * Create aggregated metric arrays for backward compatibility
     */
    protected createAggregatedArrays(classifiedData: Basel3HQLA[]): Record<string, number[]>;
}
export declare class Basel3ZKProgram extends GenericTemporalRiskZKProgram<Basel3HQLA> {
    periodType: string;
    /**
     * Core risk calculation logic - FIXED NSFR to use cumulative funding
     * Maintains exact same month-by-month cumulative LCR calculation
     * 🔧 CRITICAL FIX: NSFR now calculates cumulative stable funding properly
     */
    riskCalculation(data: GenericRiskClassification<Basel3HQLA>, thresholds: Record<string, number>): boolean;
}
/**
 * Convert generic classification back to ACTUSDatao1 for backward compatibility
 * Ensures existing ZK programs can work with new generic data
 */
export declare function createCompatibleACTUSData(genericData: GenericRiskClassification<Basel3HQLA>, scenarioParams?: {
    scenarioID?: string;
    scenarioName?: string;
    newInvoiceAmount?: number;
    newInvoiceEvaluationMonth?: number;
    liquidityThreshold?: number;
    liquidityThreshold_LCR?: number;
}): ACTUSDatao1;
/**
 * Convert processed ACTUS data to generic temporal format
 * Bridge between existing data processor and new generic framework
 * PRESERVES CONTRACT HQLA CLASSIFICATIONS for proper Basel3 processing
 */
export declare function convertACTUSToGenericTemporal(inflows: number[][], outflows: number[][], monthsCount: number, rawEvents: any[], contractDetails: any[]): TemporalACTUSData;
/**
 * Process Basel3 data through generic framework while maintaining compatibility
 * This is the main entry point for Basel3 processing
 */
export declare function processBasel3ThroughGenericFramework(inflows: number[][], outflows: number[][], monthsCount: number, rawEvents: any[], contractDetails: any[], thresholds: {
    liquidityThreshold_LCR: number;
    liquidityThreshold_NSFR?: number;
    liquidityThreshold?: number;
    newInvoiceAmount?: number;
    newInvoiceEvaluationMonth?: number;
}): Promise<{
    temporalData: TemporalACTUSData;
    classification: GenericRiskClassification<Basel3HQLA>;
    compatibleData: ACTUSDatao1;
    compliance: boolean;
}>;
