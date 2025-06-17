/**
 * ====================================================================
 * ZK Compliance Validator for MINA o1.js
 * ====================================================================
 * Validates ZK circuit compliance for the Advanced Risk system
 * Checks for common ZK pitfalls and o1.js constraints
 * ====================================================================
 */
export interface ZKComplianceReport {
    isCompliant: boolean;
    issues: string[];
    warnings: string[];
    recommendations: string[];
    score: number;
}
/**
 * Comprehensive ZK compliance analysis
 */
declare function analyzeZKCompliance(codeContext: {
    hasFieldDivision: boolean;
    hasVariableLengthLoops: boolean;
    hasUnboundedOperations: boolean;
    merkleLeafCalculationsMatch: boolean;
    usesProperFieldBounds: boolean;
    hasFloatingPointOps: boolean;
    usesDeterministicOperations: boolean;
}): ZKComplianceReport;
/**
 * Test Field arithmetic operations for ZK compliance
 */
declare function testFieldOperationsCompliance(): boolean;
/**
 * Validate specific Advanced Risk ZK compliance
 */
declare function validateAdvancedRiskZKCompliance(): ZKComplianceReport;
/**
 * Generate ZK compliance recommendations
 */
declare function generateZKComplianceReport(): void;
/**
 * Test the ZK-compliant encoding function
 */
declare function testZKCompliantEncoding(): boolean;
export { analyzeZKCompliance, testFieldOperationsCompliance, validateAdvancedRiskZKCompliance, generateZKComplianceReport, testZKCompliantEncoding };
