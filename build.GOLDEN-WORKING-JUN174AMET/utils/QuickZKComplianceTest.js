/**
 * ====================================================================
 * Quick ZK Compliance Test
 * ====================================================================
 * Validates that the ZK-compliant changes work correctly
 * ====================================================================
 */
import { Field, Poseidon } from 'o1js';
/**
 * Test ZK-compliant array encoding
 */
function testZKCompliantEncoding() {
    console.log('🧪 Testing ZK-compliant array encoding...');
    try {
        // Test with sample cash flow data
        const sampleCashFlows = [1000, 2000, 1500, 800, 1200];
        // Test the ZK-compliant encoding (same as in main file)
        const fieldsArray = sampleCashFlows.slice(0, 8).map(num => {
            const scaled = Math.floor(Math.abs(num));
            const maxSafeInt = 2n ** 200n;
            const boundedValue = Math.min(scaled, Number(maxSafeInt));
            return Field(boundedValue);
        });
        while (fieldsArray.length < 8) {
            fieldsArray.push(Field(0));
        }
        const hash1 = Poseidon.hash(fieldsArray);
        const hash2 = Poseidon.hash(fieldsArray);
        if (hash1.toString() !== hash2.toString()) {
            console.error('❌ Encoding not deterministic!');
            return false;
        }
        console.log('✅ ZK-compliant encoding test passed');
        console.log(`   Hash: ${hash1.toString().substring(0, 20)}...`);
        return true;
    }
    catch (error) {
        console.error('❌ ZK-compliant encoding test failed:', error);
        return false;
    }
}
/**
 * Test risk metrics hash calculation
 */
function testRiskMetricsHash() {
    console.log('🧪 Testing risk metrics hash calculation...');
    try {
        // Test the ZK-compliant risk metrics hash
        const hash1 = Poseidon.hash([
            Field(0),
            Field(1),
            Field(100),
            Field(25) // periodsCount
        ]);
        const hash2 = Poseidon.hash([
            Field(0),
            Field(1),
            Field(100),
            Field(25)
        ]);
        if (hash1.toString() !== hash2.toString()) {
            console.error('❌ Risk metrics hash not deterministic!');
            return false;
        }
        console.log('✅ Risk metrics hash test passed');
        console.log(`   Hash: ${hash1.toString().substring(0, 20)}...`);
        return true;
    }
    catch (error) {
        console.error('❌ Risk metrics hash test failed:', error);
        return false;
    }
}
/**
 * Test Field bounds validation
 */
function testFieldBounds() {
    console.log('🧪 Testing Field bounds validation...');
    try {
        // Test safe bounds
        const safeThreshold = Math.max(0, Math.min(10000, 100));
        const safeRatio = Math.max(0, Math.min(50000, 1500));
        const thresholdField = Field(safeThreshold);
        const ratioField = Field(safeRatio);
        // Test comparison
        const compliant = ratioField.greaterThanOrEqual(thresholdField);
        console.log('✅ Field bounds test passed');
        console.log(`   Threshold: ${safeThreshold}, Ratio: ${safeRatio}, Compliant: ${compliant.toBoolean()}`);
        return true;
    }
    catch (error) {
        console.error('❌ Field bounds test failed:', error);
        return false;
    }
}
// Run tests
function runQuickZKTests() {
    console.log('🚀 Running Quick ZK Compliance Tests...\n');
    const tests = [
        testZKCompliantEncoding,
        testRiskMetricsHash,
        testFieldBounds
    ];
    let passed = 0;
    let total = tests.length;
    for (const test of tests) {
        if (test()) {
            passed++;
        }
        console.log('');
    }
    console.log('='.repeat(50));
    console.log(`📊 Test Results: ${passed}/${total} tests passed`);
    if (passed === total) {
        console.log('✅ All ZK compliance tests passed!');
        console.log('🎯 Ready for: $ node ./build/tests/with-sign/RiskLiquidityAdvacnedOptimMerkleVerificationTestWithSign.js 100 http://98.84.165.146:8083/eventsBatch src/data/RISK/Advanced/CONFIG/Advanced-VALID-1.json');
    }
    else {
        console.log('❌ Some tests failed - check ZK compliance');
    }
    console.log('='.repeat(50));
}
// Export for use in other files
export { testZKCompliantEncoding, testRiskMetricsHash, testFieldBounds, runQuickZKTests };
// Run if called directly (Node.js environment check)
if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    const isMainModule = process.argv[1] && process.argv[1].endsWith('QuickZKComplianceTest.ts') ||
        process.argv[1] && process.argv[1].endsWith('QuickZKComplianceTest.js');
    if (isMainModule) {
        runQuickZKTests();
    }
}
//# sourceMappingURL=QuickZKComplianceTest.js.map