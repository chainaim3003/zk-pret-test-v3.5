/**
 * ====================================================================
 * TypeScript Build Validation
 * ====================================================================
 * Validates that all modified TypeScript files compile correctly
 * ====================================================================
 */
/**
 * Test TypeScript compilation and basic functionality
 */
declare function validateTypeScriptBuild(): boolean;
/**
 * Check for common TypeScript issues
 */
declare function checkCommonTSIssues(): string[];
export { validateTypeScriptBuild, checkCommonTSIssues };
