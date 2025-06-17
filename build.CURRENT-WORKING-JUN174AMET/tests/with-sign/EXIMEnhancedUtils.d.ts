interface EXIMAPIResponse {
    success?: boolean;
    data?: {
        iec?: string;
        entityName?: string;
        iecIssueDate?: string;
        PAN?: string;
        iecStatus?: number;
        iecModificationDate?: string;
        dataAsOn?: string;
        addressLine1?: string;
        addressLine2?: string;
        city?: string;
        state?: string;
        pin?: number;
        contactNo?: number;
        email?: string;
        exporterType?: number;
        activeComplianceStatusCode?: number;
        starStatus?: number;
        natureOfConcern?: number;
        branches?: Array<{
            branchCode?: number;
            badd1?: string;
            badd2?: string;
            city?: string;
            state?: string;
            pin?: number;
        }>;
        directors?: Array<{
            name?: string;
        }>;
    };
    error?: string;
    message?: string;
    [key: string]: any;
}
/**
 * Print comprehensive EXIM API response
 * Similar to GLEIFUtils comprehensive logging
 */
export declare function printEXIMResponse(response: EXIMAPIResponse, companyIdentifier: string): void;
/**
 * Enhanced fetch function with comprehensive response printing
 * Compatible with existing fetchEXIMCompanyData function
 */
export declare function fetchEXIMDataWithFullLogging(companyName: string): Promise<EXIMAPIResponse>;
/**
 * Extract company summary for logging
 */
export declare function extractEXIMSummary(response: EXIMAPIResponse): {
    iec: string;
    entityName: string;
    iecIssueDate: string;
    PAN: string;
    iecStatus: number;
    iecModificationDate: string;
    dataAsOn: string;
};
/**
 * Business rule analysis for EXIM compliance
 * Based on user specification: isEXIMCompliant should be based on:
 * - entity name is not empty
 * - iec issue date and iec modification date exist
 * - dataAsOn is less or equal to current datetime
 * - PAN is NOT empty
 * - iec is NOT empty
 * - iecStatus is one of 0,4,7 or 8
 */
export declare function analyzeEXIMCompliance(response: EXIMAPIResponse): {
    isCompliant: boolean;
    complianceScore: number;
    issues: string[];
    businessRuleResults: {
        entityNameNotEmpty: boolean;
        iecNotEmpty: boolean;
        panNotEmpty: boolean;
        iecIssueDateExists: boolean;
        iecModificationDateExists: boolean;
        dataAsOnValid: boolean;
        iecStatusCompliant: boolean;
    };
};
/**
 * Check if a company is EXIM compliant
 */
export declare function isCompanyEXIMCompliant(companyDataOrName: EXIMAPIResponse | string): boolean | Promise<boolean>;
export type { EXIMAPIResponse };
