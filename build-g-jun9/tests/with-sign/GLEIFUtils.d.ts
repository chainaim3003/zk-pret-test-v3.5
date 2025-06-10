import { GLEIFEnhancedComplianceData } from '../../zk-programs/with-sign/GLEIFEnhancedZKProgramWithSign.js';
declare const GLEIF_API_BASE = "https://api.gleif.org/api/v1";
declare const TEST_LEIS: {
    'APPLE INC': string;
    'MICROSOFT CORPORATION': string;
    GOOGLE: string;
    AMAZON: string;
    TESLA: string;
    'JP MORGAN': string;
};
export interface GLEIFAPIResponse {
    data: Array<{
        type: string;
        id: string;
        attributes: {
            lei: string;
            entity: {
                legalName: {
                    name: string;
                    language?: string;
                };
                otherNames?: Array<{
                    name: string;
                    language?: string;
                    type?: string;
                }>;
                transliteratedOtherNames?: Array<{
                    name: string;
                    language?: string;
                }>;
                legalAddress: {
                    language?: string;
                    addressLines?: string[];
                    addressNumber?: string;
                    addressNumberWithinBuilding?: string;
                    mailRouting?: string;
                    city?: string;
                    region?: string;
                    country?: string;
                    postalCode?: string;
                };
                headquartersAddress: {
                    language?: string;
                    addressLines?: string[];
                    addressNumber?: string;
                    addressNumberWithinBuilding?: string;
                    mailRouting?: string;
                    city?: string;
                    region?: string;
                    country?: string;
                    postalCode?: string;
                };
                registeredAt?: {
                    id?: string;
                    other?: string;
                };
                registeredAs?: string;
                jurisdiction?: string;
                category?: string;
                legalForm?: {
                    id?: string;
                    other?: string;
                };
                associatedEntity?: {
                    lei?: string;
                    name?: string;
                };
                status: string;
                expiration?: {
                    date?: string;
                    reason?: string;
                };
                successorEntity?: {
                    lei?: string;
                    name?: string;
                };
                otherAddresses?: Array<{
                    type: string;
                    language?: string;
                    addressLines?: string[];
                    city?: string;
                    region?: string;
                    country?: string;
                    postalCode?: string;
                }>;
            };
            registration: {
                initialRegistrationDate: string;
                lastUpdateDate: string;
                status: string;
                nextRenewalDate: string;
                managingLou: string;
                corroborationLevel: string;
                conformityFlag?: string;
                validatedAt?: {
                    id?: string;
                    other?: string;
                };
                validatedAs?: string;
                otherValidationAuthorities?: Array<{
                    id?: string;
                    other?: string;
                }>;
            };
            bic?: Array<string>;
            mic?: Array<string>;
            ocid?: Array<string>;
            spglobal?: Array<string>;
            conformityFlag?: string;
        };
        relationships?: {
            managingLou?: {
                links?: {
                    related?: string;
                };
            };
            leiIssuer?: {
                links?: {
                    related?: string;
                };
            };
            fieldModifications?: {
                links?: {
                    related?: string;
                };
            };
            directParent?: {
                links?: {
                    reporting?: string;
                };
            };
            directChildren?: {
                links?: {
                    reporting?: string;
                };
            };
            ultimateParent?: {
                links?: {
                    reporting?: string;
                };
            };
            isins?: {
                links?: {
                    related?: string;
                };
            };
        };
        links?: {
            self?: string;
        };
    }>;
    meta?: {
        goldenCopy?: {
            publishDate?: string;
        };
        pagination?: {
            currentPage?: number;
            perPage?: number;
            from?: number;
            to?: number;
            total?: number;
            lastPage?: number;
        };
    };
}
interface SearchOptions {
    lei?: string;
    companyName?: string;
    transliteratedName?: string;
    otherNames?: string[];
    registrationNumber?: string;
    taxId?: string;
    vatNumber?: string;
    businessId?: string;
    bicCode?: string;
    swiftCode?: string;
    isinCode?: string;
    micCode?: string;
    country?: string;
    region?: string;
    city?: string;
    postalCode?: string;
    legalForm?: string;
    entityCategory?: string;
    entitySubCategory?: string;
    registrationStatus?: 'ISSUED' | 'PENDING_VALIDATION' | 'PENDING_TRANSFER' | 'LAPSED' | 'MERGED' | 'RETIRED' | 'CANCELLED' | 'TRANSFERRED' | 'DUPLICATE';
    entityStatus?: 'ACTIVE' | 'INACTIVE';
    parentLei?: string;
    childLei?: string;
    ultimateParentLei?: string;
    fuzzyMatch?: boolean;
    exactMatch?: boolean;
    includeInactive?: boolean;
    maxResults?: number;
}
declare class UltimateGLEIFSearch {
    private lastRequestTime;
    private requestCount;
    private searchHistory;
    private resetTime;
    /**
     * Enhanced rate limiting with burst protection
     */
    private enforceRateLimit;
    /**
     * Safe API request with comprehensive error handling
     */
    private makeAPIRequest;
    /**
     * 1. DIRECT LEI LOOKUP - Most reliable method
     */
    private searchByLEI;
    /**
     * 2. COMPREHENSIVE COMPANY NAME SEARCH
     */
    private searchByCompanyName;
    /**
     * 3. FINANCIAL CODE SEARCHES
     */
    private searchByFinancialCodes;
    /**
     * ULTIMATE SEARCH METHOD - Tries ALL strategies intelligently
     */
    ultimateSearch(searchOptions: SearchOptions): Promise<{
        success: boolean;
        data?: GLEIFAPIResponse;
        method?: string;
        searchTime?: number;
        searchReport?: Array<{
            method: string;
            status: string;
            resultCount: number;
        }>;
        error?: string;
        suggestions?: string[];
    }>;
    /**
     * Smart name matching algorithm
     */
    private findBestNameMatch;
    /**
     * Generate helpful suggestions for failed searches
     */
    private generateSuggestions;
    /**
     * Validate LEI format
     */
    private isValidLEI;
    /**
     * Get search statistics
     */
    getSearchStats(): any;
}
declare const gleifSearcher: UltimateGLEIFSearch;
export declare function fetchGLEIFCompanyData(companyName: string, typeOfNet?: string): Promise<GLEIFAPIResponse>;
/**
 * ULTIMATE SEARCH FUNCTION - Supports ALL search patterns
 */
declare function searchGLEIFInternal(options: SearchOptions | string): Promise<any>;
export declare class GLEIFBusinessRules {
    /**
     * Analyze GLEIF compliance status with detailed business rules
     */
    static analyzeCompliance(apiResponse: GLEIFAPIResponse): {
        isCompliant: boolean;
        complianceScore: number;
        riskLevel: number;
        businessRuleResults: {
            entityStatus: boolean;
            registrationStatus: boolean;
            conformityFlag: boolean;
            recentUpdate: boolean;
            validJurisdiction: boolean;
            managingLouKnown: boolean;
            hasValidAddresses: boolean;
        };
        issues: string[];
    };
    /**
     * Check if last update is recent (within 1 year)
     */
    private static isRecentUpdate;
    /**
     * Check if entity has valid address information
     */
    private static hasValidAddresses;
    /**
     * Extract group structure information
     */
    static extractGroupStructure(apiResponse: GLEIFAPIResponse): {
        hasParent: boolean;
        hasChildren: boolean;
        parentLEI?: string;
        groupComplexity: number;
    };
}
export declare class GLEIFCircuitConverter {
    /**
     * Convert GLEIF API response to Enhanced Compliance Data
     */
    static convertToEnhancedComplianceData(apiResponse: GLEIFAPIResponse, businessAnalysis?: {
        complianceScore: number;
        riskLevel: number;
    }): GLEIFEnhancedComplianceData;
    /**
     * Validate LEI format
     */
    static isValidLEI(lei: string): boolean;
    /**
     * Extract company summary for logging
     */
    static extractCompanySummary(apiResponse: GLEIFAPIResponse): {
        name: string;
        lei: string;
        status: string;
        jurisdiction: string;
        lastUpdate: string;
    };
}
/**
 * Check if a company is GLEIF compliant based on API response
 * Note: Mock data fallback has been removed - only real API responses supported
 */
export declare function isCompanyGLEIFCompliant(companyDataOrName: GLEIFAPIResponse | string, typeOfNet?: string): boolean | Promise<boolean>;
/**
 * Fetch full GLEIF structure with detailed analysis
 */
export declare function fetchGLEIFFullStructure(companyName: string, typeOfNet?: string): Promise<{
    apiResponse: GLEIFAPIResponse;
    businessAnalysis: any;
    merkleTree: any;
    isCompliant: boolean;
}>;
export { TEST_LEIS, GLEIF_API_BASE, gleifSearcher, searchGLEIFInternal as searchGLEIF };
export type { SearchOptions };
