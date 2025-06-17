/**
 * Enhanced GLEIF utility with full JSON structure analysis
 */
/**
 * Fetch company data from GLEIF API with detailed structure logging
 */
export declare function fetchGLEIFCompanyDataDetailed(companyName: string): Promise<any>;
/**
 * Print the entire GLEIF JSON structure with proper formatting
 */
export declare function printFullGLEIFStructure(gleifData: any): void;
/**
 * Extract all possible fields for ZK optimization analysis
 */
export declare function analyzeGLEIFFieldsForZKOptimization(gleifData: any): ZKOptimizationAnalysis;
/**
 * Interface for ZK optimization analysis
 */
interface ZKOptimizationAnalysis {
    totalFields: number;
    fieldCategories: Record<string, {
        fields: Record<string, any>;
        count: number;
        recommendation: string;
        constraintCost: number;
    }>;
    optimizationRecommendations: Record<string, {
        description: string;
        constraintCost: number;
        feasible: boolean;
    }>;
    constraintEstimates: Record<string, number>;
}
/**
 * Enhanced main function with full analysis
 */
export declare function analyzeGLEIFCompanyData(companyName: string): Promise<void>;
export { fetchGLEIFCompanyData, isCompanyGLEIFCompliant } from './GLEIFUtils.js';
