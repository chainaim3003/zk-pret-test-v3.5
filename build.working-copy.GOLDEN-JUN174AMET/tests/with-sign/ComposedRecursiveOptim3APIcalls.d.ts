import { CorporateRegistrationOptimComplianceData } from '../../zk-programs/with-sign/CorporateRegistrationOptimZKProgram.js';
import { EXIMOptimComplianceData } from '../../zk-programs/with-sign/EXIMOptimZKProgram.js';
import { GLEIFOptimComplianceData } from '../../zk-programs/with-sign/GLEIFOptimZKProgram.js';
/**
 * API Response interfaces for type safety
 */
export interface CorporateRegistrationAPIResponse {
    data?: {
        company_master_data?: {
            company_name?: string;
            cin?: string;
            registration_number?: string;
            company_status?: string;
            'company_status(for_efiling)'?: string;
            date_of_incorporation?: string;
            company_category?: string;
            class_of_company?: string;
            number_of_partners?: number;
            whether_listed_or_not?: string;
            suspended_at_stock_exchange?: string;
            [key: string]: any;
        };
    };
    [key: string]: any;
}
export interface EXIMAPIResponse {
    iec?: string;
    entityName?: string;
    iecStatus?: number;
    [key: string]: any;
}
export interface GLEIFAPIResponse {
    data?: Array<{
        type?: string;
        id?: string;
        attributes?: {
            lei?: string;
            entity?: {
                legalName?: {
                    name?: string;
                };
            };
            registration?: {
                status?: string;
            };
        };
    }>;
    [key: string]: any;
}
/**
 * Enhanced Corporate Registration data fetching with parameter support
 * Supports both CIN and company name queries
 */
export declare function fetchOptimCorporateRegistrationData(companyIdentifier: string): Promise<CorporateRegistrationAPIResponse>;
/**
 * Enhanced EXIM data fetching with parameter support
 * Supports company name queries
 */
export declare function fetchOptimEXIMData(companyName: string): Promise<EXIMAPIResponse>;
/**
 * Enhanced GLEIF data fetching with parameter support
 * Supports company name queries
 */
export declare function fetchOptimGLEIFData(companyName: string): Promise<GLEIFAPIResponse>;
/**
 * Convert Corporate Registration API response to OptimComplianceData
 */
export declare function convertToCorporateRegistrationOptimData(apiResponse: CorporateRegistrationAPIResponse, companyIdentifier: string): CorporateRegistrationOptimComplianceData;
/**
 * Convert EXIM API response to OptimComplianceData
 */
export declare function convertToEXIMOptimData(apiResponse: EXIMAPIResponse, companyName: string): EXIMOptimComplianceData;
/**
 * Convert GLEIF API response to OptimComplianceData
 */
export declare function convertToGLEIFOptimData(apiResponse: GLEIFAPIResponse, companyName: string): GLEIFOptimComplianceData;
/**
 * Calculate compliance score based on API response
 */
export declare function calculateComplianceScore(corpRegData: CorporateRegistrationAPIResponse, eximData: EXIMAPIResponse, gleifData: GLEIFAPIResponse): {
    overallScore: number;
    corpRegScore: number;
    eximScore: number;
    gleifScore: number;
};
/**
 * Batch fetch all service data for multiple companies
 * Optimized for composed verification workflows
 */
export declare function fetchAllServiceDataForCompanies(companyNames: string[], typeOfNet: string): Promise<Map<string, {
    corpRegData: CorporateRegistrationAPIResponse;
    eximData: EXIMAPIResponse;
    gleifData: GLEIFAPIResponse;
    complianceScores: {
        overallScore: number;
        corpRegScore: number;
        eximScore: number;
        gleifScore: number;
    };
}>>;
