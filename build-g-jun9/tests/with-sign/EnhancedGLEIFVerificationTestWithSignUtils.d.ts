/**
 * Enhanced GLEIF Verification with comprehensive compliance checking
 * Implements your specific business rules:
 * 1. Entity Status = "ACTIVE"
 * 2. Current Date Within Valid Period (currentDate >= lastUpdateDate AND currentDate <= nextRenewalDate)
 * 3. Registration Status = "ISSUED"
 * 4. Conformity Flag ≠ "NON_CONFORMING"
 */
export declare function getEnhancedGLEIFVerificationWithSignUtils(companyName: string, typeOfNet: string, verificationMode?: 'standard' | 'group' | 'historical', secondaryCompanyName?: string, historicalDays?: number): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFEnhancedZKProgramWithSign.js").GLEIFEnhancedPublicOutput>>;
