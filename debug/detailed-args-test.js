// Advanced debugging script to identify the argument parsing issue
console.log('=== DETAILED ARGUMENT ANALYSIS ===');
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);
console.log('');

console.log('process.argv.length:', process.argv.length);
console.log('Raw process.argv:', JSON.stringify(process.argv, null, 2));
console.log('');

console.log('Individual arguments analysis:');
process.argv.forEach((arg, index) => {
    console.log(`argv[${index}]:`);
    console.log(`  Value: "${arg}"`);
    console.log(`  Type: ${typeof arg}`);
    console.log(`  Length: ${arg.length}`);
    console.log(`  Char codes: [${Array.from(arg).map(c => c.charCodeAt(0)).join(', ')}]`);
    console.log('');
});

console.log('=== EXPECTED VS ACTUAL ===');
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
    const match = actual === expected;
    console.log(`Index ${index}: ${match ? '✅' : '❌'}`);
    if (!match) {
        console.log(`  Expected: "${expected}"`);
        console.log(`  Actual: "${actual}"`);
        console.log(`  Expected length: ${expected.length}`);
        console.log(`  Actual length: ${actual ? actual.length : 'undefined'}`);
    }
});

console.log('');
console.log('=== PARSING TEST ===');
const jurisdictionCLI = process.argv[6];
console.log(`jurisdictionCLI: "${jurisdictionCLI}"`);
console.log(`jurisdictionCLI type: ${typeof jurisdictionCLI}`);
console.log(`jurisdictionCLI === undefined: ${jurisdictionCLI === undefined}`);
console.log(`!jurisdictionCLI: ${!jurisdictionCLI}`);
console.log(`Boolean(jurisdictionCLI): ${Boolean(jurisdictionCLI)}`);

if (jurisdictionCLI) {
    console.log(`✅ Jurisdiction parameter found: "${jurisdictionCLI}"`);
    console.log(`Uppercase: "${jurisdictionCLI.toUpperCase()}"`);
    console.log(`Valid jurisdiction: ${['US', 'EU'].includes(jurisdictionCLI.toUpperCase())}`);
} else {
    console.log(`❌ Jurisdiction parameter NOT found`);
    console.log(`This would trigger the error message`);
}
