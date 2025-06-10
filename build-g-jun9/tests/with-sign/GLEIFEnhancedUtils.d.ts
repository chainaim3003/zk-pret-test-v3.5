/**
 * Enhanced GLEIF Utils with complete JSON printing and ZK optimization analysis
 */
/**
 * Fetch company data from GLEIF API with complete JSON printing
 */
export declare function fetchGLEIFCompanyDataWithFullDetails(companyName: string, typeOfNet: string): Promise<any>;
/**
 * Standard GLEIF API functions (existing compatibility)
 */
export declare function fetchGLEIFCompanyData(companyName: string, typeOfNet: string): Promise<any>;
export declare function isCompanyGLEIFCompliant(companyName: string, typeOfNet: string): Promise<boolean>;
