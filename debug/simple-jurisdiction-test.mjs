// Simple test to isolate the jurisdiction parameter issue
console.log('🧪 Jurisdiction Parameter Test');
console.log('==============================\n');

console.log('Node.js version:', process.version);
console.log('Current working directory:', process.cwd());
console.log('Script location:', import.meta.url);
console.log('\nProcess arguments:');

process.argv.forEach((arg, index) => {
    console.log(`  argv[${index}]: "${arg}" (length: ${arg.length})`);
});

console.log('\n📊 Argument Analysis:');
const jurisdictionCLI = process.argv[6];

console.log(`jurisdictionCLI = process.argv[6]`);
console.log(`Value: "${jurisdictionCLI}"`);
console.log(`Type: ${typeof jurisdictionCLI}`);
console.log(`Undefined check: ${jurisdictionCLI === undefined}`);
console.log(`Falsy check: ${!jurisdictionCLI}`);
console.log(`Boolean conversion: ${Boolean(jurisdictionCLI)}`);

if (!jurisdictionCLI) {
    console.log('\n❌ WOULD TRIGGER ERROR: Jurisdiction parameter is required!');
    console.log('This is the exact condition causing the failure.');
} else {
    console.log('\n✅ WOULD PASS: Jurisdiction parameter found');
    console.log(`Jurisdiction: "${jurisdictionCLI}"`);
    console.log(`Uppercase: "${jurisdictionCLI.toUpperCase()}"`);
    console.log(`Valid: ${['US', 'EU'].includes(jurisdictionCLI.toUpperCase())}`);
}

console.log('\n🔍 Expected vs Actual:');
console.log('Expected jurisdiction at argv[6]: "EU"');
console.log(`Actual value at argv[6]: "${process.argv[6]}"`);
console.log(`Match: ${process.argv[6] === 'EU'}`);
