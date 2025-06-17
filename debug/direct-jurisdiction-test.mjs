// Direct test of the specific failing functionality
console.log('🧪 DIRECT JURISDICTION PARAMETER TEST');
console.log('====================================\n');

console.log('Current working directory:', process.cwd());
console.log('Script path:', import.meta.url);
console.log('Node.js version:', process.version);
console.log('');

console.log('📊 PROCESS ARGUMENTS:');
console.log('=====================');
process.argv.forEach((arg, index) => {
    console.log(`argv[${index}]: "${arg}" (length: ${arg.length}, type: ${typeof arg})`);
});

console.log('\n🎯 SPECIFIC ARGUMENT ANALYSIS:');
console.log('==============================');

const expectedArgs = [
    'node',
    './build/tests/with-sign/RiskLiquidityStablecoinOptimMerkleVerificationTestWithSign.js',
    '100',
    'http://98.84.165.146:8083/eventsBatch',
    'src/data/RISK/StableCoin/CONFIG/EU/StableCoin-VALID-5.json',
    'ultra_strict',
    'EU'
];

expectedArgs.forEach((expected, index) => {
    const actual = process.argv[index];
    const matches = actual === expected;
    console.log(`argv[${index}]: ${matches ? '✅' : '❌'}`);
    if (!matches) {
        console.log(`  Expected: "${expected}"`);
        console.log(`  Actual:   "${actual}"`);
    }
});

console.log('\n🔍 JURISDICTION PARAMETER CHECK:');
console.log('================================');

const jurisdictionCLI = process.argv[6];
console.log(`jurisdictionCLI = process.argv[6]`);
console.log(`Value: "${jurisdictionCLI}"`);
console.log(`Type: ${typeof jurisdictionCLI}`);
console.log(`Length: ${jurisdictionCLI ? jurisdictionCLI.length : 'N/A'}`);
console.log(`Undefined: ${jurisdictionCLI === undefined}`);
console.log(`Null: ${jurisdictionCLI === null}`);
console.log(`Empty string: ${jurisdictionCLI === ''}`);
console.log(`Falsy: ${!jurisdictionCLI}`);
console.log(`Truthy: ${!!jurisdictionCLI}`);

console.log('\n🚨 EXACT CONDITION TEST:');
console.log('========================');

if (!jurisdictionCLI) {
    console.log('❌ CONDITION FAILED: !jurisdictionCLI is TRUE');
    console.log('This would trigger the "Jurisdiction parameter is required!" error');
    console.log('');
    console.log('🔍 Debugging why the condition fails:');
    console.log(`- jurisdictionCLI value: ${JSON.stringify(jurisdictionCLI)}`);
    console.log(`- typeof: ${typeof jurisdictionCLI}`);
    console.log(`- Boolean conversion: ${Boolean(jurisdictionCLI)}`);
    console.log(`- process.argv.length: ${process.argv.length}`);
    
    if (process.argv.length <= 6) {
        console.log('🎯 ROOT CAUSE: Not enough arguments passed to script!');
        console.log(`Expected at least 7 arguments, got ${process.argv.length}`);
    }
} else {
    console.log('✅ CONDITION PASSED: jurisdictionCLI has a value');
    console.log(`Jurisdiction: "${jurisdictionCLI}"`);
    console.log(`Uppercase: "${jurisdictionCLI.toUpperCase()}"`);
    console.log(`Valid jurisdiction: ${['US', 'EU'].includes(jurisdictionCLI.toUpperCase())}`);
}

console.log('\n📋 ENVIRONMENT COMPARISON:');
console.log('==========================');
console.log(`PWD: ${process.env.PWD || 'Not set'}`);
console.log(`PATH: ${process.env.PATH ? 'Set (' + process.env.PATH.split(';').length + ' entries)' : 'Not set'}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV || 'Not set'}`);

// Test if we can import the actual module
console.log('\n🔗 MODULE IMPORT TEST:');
console.log('=====================');
try {
    // Try to import key dependencies to see if there are module resolution issues
    console.log('Testing module imports...');
    
    // This would test if the issue is in module loading
    const testImport = await import('./build/tests/with-sign/RiskLiquidityStablecoinOptimMerkleVerificationTestWithSign.js').catch(err => {
        console.log('❌ Import failed:', err.message);
        return null;
    });
    
    if (testImport) {
        console.log('✅ Module import successful');
        if (testImport.executeRiskLiquidityStableCoinOptimMerkleVerification) {
            console.log('✅ Main function is available');
        } else {
            console.log('❌ Main function not found in module');
        }
    }
} catch (error) {
    console.log('❌ Module test failed:', error.message);
}
