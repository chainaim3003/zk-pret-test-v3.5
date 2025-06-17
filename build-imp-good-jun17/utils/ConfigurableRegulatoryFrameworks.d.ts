/**
 * ====================================================================
 * Configurable Regulatory Frameworks for StableCoin Compliance
 * ====================================================================
 * Loads jurisdiction-specific regulatory requirements from configuration
 * Supports easy modification of backing requirements per jurisdiction
 * ====================================================================
 */
export declare function loadMasterConfig(): Promise<any>;
/**
 * Get configurable regulatory frameworks for a jurisdiction
 */
export declare function getRegulatoryFrameworks(jurisdiction: string): Promise<any>;
/**
 * Get backing ratio requirement for a specific jurisdiction and framework
 */
export declare function getBackingRatioRequirement(jurisdiction: string, framework?: string): Promise<number>;
/**
 * Interface for comprehensive compliance results
 */
export interface JurisdictionComplianceResult {
    jurisdiction: string;
    frameworkScores: {
        STABLE?: number;
        GENIUS?: number;
        MiCA?: number;
    };
    overallScore: number;
    complianceThreshold: number;
    compliant: boolean;
    violations: string[];
    details: string;
    description: string;
}
/**
 * Comprehensive jurisdiction-based compliance validation
 * Uses configurable backing requirements from settings
 */
export declare function validateRegulatoryCompliance(assetContracts: any[], jurisdiction: string): Promise<JurisdictionComplianceResult>;
/**
 * Validate compliance against a specific regulatory framework
 * Uses configurable requirements from settings
 */
export declare function validateFrameworkCompliance(assetContracts: any[], frameworkName: string, frameworkConfig: any): Promise<{
    score: number;
    violations: string[];
}>;
/**
 * Easy configuration change helper functions
 */
export declare class RegulatoryConfigManager {
    /**
     * Example: Change MiCA backing requirement from 100% to 60%
     */
    static demonstrateMiCABackingChange(): Promise<void>;
    /**
     * Get current backing requirements for all jurisdictions
     */
    static getCurrentBackingRequirements(): Promise<void>;
}
