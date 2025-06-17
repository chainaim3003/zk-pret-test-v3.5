/**
 * ====================================================================
 * ACTUS Data Processor - Modular Post-Processing Logic
 * ====================================================================
 * Extracts and modularizes the post-processing logic from working tests
 * Converts raw ACTUS API responses into 25-period Basel3 formatted data
 * Used by both old and new verification tests for consistency
 * ====================================================================
 */
import { ACTUSOptimMerkleAPIResponse } from './ACTUSOptimMerkleAPI.js';
/**
 * Print the core ACTUS response for debugging
 * This shows exactly what the ACTUS API is returning
 */
export declare function printCoreACTUSResponse(rawResponse: any, apiUrl: string): void;
/**
 * Process raw ACTUS JSON data using the EXACT logic from working test
 * This is extracted from map_basel3.ts and preserves the 25-period logic
 */
export declare function processRawACTUSData(rawData: any): {
    inflow: number[][];
    outflow: number[][];
    monthsCount: number;
    results: {
        [key: string]: {
            L1: number;
            L2A: number;
            L2B: number;
            NonHQLA: number;
        };
    };
};
/**
 * Convert processed ACTUS data to OptimMerkle API format
 * This bridges the old post-processing logic with the new API format
 */
export declare function convertToOptimMerkleFormat(processedData: ReturnType<typeof processRawACTUSData>): ACTUSOptimMerkleAPIResponse;
/**
 * Enhanced ACTUS API call that includes raw response debugging and post-processing
 * This replaces the basic callACTUSAPI for tests that need the 25-period logic
 */
export declare function callACTUSAPIWithPostProcessing(url: string, contracts: any[], riskFactors?: any[]): Promise<ACTUSOptimMerkleAPIResponse>;
