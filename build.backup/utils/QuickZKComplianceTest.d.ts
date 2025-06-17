/**
 * ====================================================================
 * Quick ZK Compliance Test
 * ====================================================================
 * Validates that the ZK-compliant changes work correctly
 * ====================================================================
 */
/**
 * Test ZK-compliant array encoding
 */
declare function testZKCompliantEncoding(): boolean;
/**
 * Test risk metrics hash calculation
 */
declare function testRiskMetricsHash(): boolean;
/**
 * Test Field bounds validation
 */
declare function testFieldBounds(): boolean;
declare function runQuickZKTests(): void;
export { testZKCompliantEncoding, testRiskMetricsHash, testFieldBounds, runQuickZKTests };
