/**
 * ====================================================================
 * Enhanced ACTUS Data Processor with Generic Framework Integration
 * ====================================================================
 * Extends existing ACTUSDataProcessor with generic temporal framework
 * Maintains 100% backward compatibility with existing code
 * Adds generic period-agnostic processing capabilities
 * ====================================================================
 */
import { TemporalACTUSData, GenericRiskClassification } from './GenericTemporalRiskFramework.js';
import { ACTUSOptimMerkleAPIResponse } from './ACTUSOptimMerkleAPI.js';
/**
 * Enhanced ACTUS API call with generic framework support
 * Maintains full backward compatibility while adding generic capabilities
 */
export declare function callACTUSAPIWithGenericProcessing(url: string, contracts: any[], options?: {
    periodType?: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
    riskFramework?: 'basel3' | 'solvency2' | 'ifrs9' | 'custom';
    enableGenericFramework?: boolean;
    riskFactors?: any[];
}): Promise<{
    optimMerkleResponse: ACTUSOptimMerkleAPIResponse;
    temporalData?: TemporalACTUSData;
    genericClassification?: GenericRiskClassification<any>;
    frameworkResults?: any;
}>;
/**
 * Auto-detect optimal period type from ACTUS data
 * Helps choose between daily, monthly, quarterly processing
 */
export declare function autoDetectPeriodType(rawACTUSResponse: any[], inflows: number[][], outflows: number[][]): {
    recommendedPeriodType: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
    reasoning: string;
    confidence: number;
};
/**
 * Process ACTUS data with automatic framework detection
 * Analyzes data patterns to recommend optimal risk framework
 */
export declare function processACTUSWithAutoFramework(url: string, contracts: any[], options?: {
    autoDetectPeriod?: boolean;
    autoDetectFramework?: boolean;
    fallbackFramework?: 'basel3' | 'solvency2' | 'ifrs9';
}): Promise<{
    results: any;
    recommendations: {
        periodType: string;
        framework: string;
        reasoning: string;
    };
}>;
export { processRawACTUSData, convertToOptimMerkleFormat, printCoreACTUSResponse, callACTUSAPIWithPostProcessing } from './ACTUSDataProcessor.js';
export { convertToGenericFormat, extractDateRangeFromEvents, determinePeriodType } from './GenericTemporalRiskFramework.js';
export { processBasel3ThroughGenericFramework, convertACTUSToGenericTemporal, createCompatibleACTUSData } from './Basel3Implementation.js';
