/**
 * Enhanced GLEIF Utils with complete JSON printing and ZK optimization analysis
 */
export interface GLEIFAPIResponse {
    data?: any;
    [key: string]: any;
}
export interface GLEIFComplianceAnalysis {
    isCompliant: boolean;
    complianceScore: number;
    issues: string[];
    summary: string;
}
export interface GLEIFDataSummary {
    legalName: string;
    lei: string;
    entityStatus: string;
    jurisdiction: string;
    legalForm: string;
    complianceScore: number;
}
/**
 * Fetch company data from GLEIF API with complete JSON printing
 */
export declare function fetchGLEIFCompanyDataWithFullDetails(companyName: string): Promise<any>;
/**
 * Standard GLEIF API functions (existing compatibility)
 */
export declare function fetchGLEIFCompanyData(companyName: string): Promise<any>;
export declare function isCompanyGLEIFCompliant(companyName: string): Promise<boolean>;
/**
 * Missing export aliases for backward compatibility
 */
export declare function fetchGLEIFDataWithFullLogging(companyName: string): Promise<GLEIFAPIResponse>;
export declare function extractGLEIFSummary(apiResponse: GLEIFAPIResponse): GLEIFDataSummary;
export declare function analyzeGLEIFCompliance(apiResponse: GLEIFAPIResponse, typeOfNet?: string): GLEIFComplianceAnalysis;
