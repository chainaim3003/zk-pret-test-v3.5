// Detailed comparison tool to find subtle differences
import fs from 'fs';

console.log('🔍 Detailed File Comparison Tool');
console.log('================================\n');

const workingFile = 'C:\\SATHYA\\CHAINAIM3003\\mcp-servers\\zk-pret-test-v3.5\\build\\tests\\with-sign\\RiskLiquidityStablecoinOptimMerkleVerificationTestWithSign.js';
const brokenFile = 'C:\\SATHYA\\CHAINAIM3003\\mcp-servers\\zkpret3.5TSFIX\\zk-pret-test-v3.5\\build\\tests\\with-sign\\RiskLiquidityStablecoinOptimMerkleVerificationTestWithSign.js';

try {
    const workingContent = fs.readFileSync(workingFile, 'utf8');
    const brokenContent = fs.readFileSync(brokenFile, 'utf8');
    
    console.log(`Working file size: ${workingContent.length} characters`);
    console.log(`Broken file size: ${brokenContent.length} characters`);
    console.log(`Files identical: ${workingContent === brokenContent}\n`);
    
    if (workingContent !== brokenContent) {
        console.log('🔍 Finding differences...\n');
        
        const workingLines = workingContent.split('\n');
        const brokenLines = brokenContent.split('\n');
        
        const maxLines = Math.max(workingLines.length, brokenLines.length);
        let differences = 0;
        
        for (let i = 0; i < maxLines; i++) {
            const workingLine = workingLines[i] || '';
            const brokenLine = brokenLines[i] || '';
            
            if (workingLine !== brokenLine) {
                differences++;
                console.log(`📍 Line ${i + 1} differs:`);
                console.log(`   Working: "${workingLine}"`);
                console.log(`   Broken:  "${brokenLine}"`);
                console.log('');
                
                if (differences > 10) {
                    console.log('... (truncated, too many differences)');
                    break;
                }
            }
        }
        
        if (differences === 0) {
            console.log('✅ No line differences found, but files are not identical (encoding issue?)');
        } else {
            console.log(`📊 Total differences: ${differences}`);
        }
    } else {
        console.log('✅ Files are identical - the issue might be elsewhere!');
        
        // Let's check specific sections
        console.log('\n🔍 Checking specific sections...');
        
        // Find the jurisdiction parameter check
        const jurisdictionCheck = /if \(!jurisdictionCLI\)/g;
        const workingMatches = [...workingContent.matchAll(jurisdictionCheck)];
        const brokenMatches = [...brokenContent.matchAll(jurisdictionCheck)];
        
        console.log(`Jurisdiction checks in working file: ${workingMatches.length}`);
        console.log(`Jurisdiction checks in broken file: ${brokenMatches.length}`);
        
        // Find the main function
        const mainFunctionRegex = /async function main\(\)/g;
        const workingMainMatches = [...workingContent.matchAll(mainFunctionRegex)];
        const brokenMainMatches = [...brokenContent.matchAll(mainFunctionRegex)];
        
        console.log(`Main function definitions in working file: ${workingMainMatches.length}`);
        console.log(`Main function definitions in broken file: ${brokenMainMatches.length}`);
    }
    
} catch (error) {
    console.error('❌ Error reading files:', error.message);
}
