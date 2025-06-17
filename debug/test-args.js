// Debug script to test argument parsing
console.log('Testing argument parsing...');
console.log('process.argv:', process.argv);
console.log('\nArgument breakdown:');
process.argv.forEach((arg, index) => {
    console.log(`process.argv[${index}]: "${arg}"`);
});

console.log('\nParsed arguments:');
const initialStatus = parseFloat(process.argv[2]) || 100;
const actusUrl = process.argv[3] || 'http://localhost:8083/eventsBatch';
const portfolioPath = process.argv[4];
const executionMode = process.argv[5] || 'ultra_strict';
const jurisdictionCLI = process.argv[6];

console.log(`initialStatus: ${initialStatus}`);
console.log(`actusUrl: ${actusUrl}`);
console.log(`portfolioPath: ${portfolioPath}`);
console.log(`executionMode: ${executionMode}`);
console.log(`jurisdictionCLI: ${jurisdictionCLI}`);
console.log(`jurisdictionCLI type: ${typeof jurisdictionCLI}`);
console.log(`jurisdictionCLI length: ${jurisdictionCLI ? jurisdictionCLI.length : 'undefined'}`);

if (!jurisdictionCLI) {
    console.error(`❌ Error: Jurisdiction parameter is required!`);
    console.log('\n📖 Usage: node test.js <threshold> <url> <config> <mode> <jurisdiction>');
    console.log('   jurisdiction: US or EU (REQUIRED)');
    console.log('   Examples:');
    console.log('     node test.js 100 http://api.url config.json ultra_strict US');
    console.log('     node test.js 100 http://api.url config.json ultra_strict EU');
    process.exit(1);
} else {
    console.log(`✅ Jurisdiction parameter found: "${jurisdictionCLI}"`);
}
