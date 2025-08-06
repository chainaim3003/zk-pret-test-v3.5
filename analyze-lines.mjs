import { readFileSync } from 'fs';

// Read the file and analyze specific lines
const filePath = 'C:/SATHYA/CHAINAIM3003/mcp-servers/clonetest2/zk-pret-test-v3.5/src/tests/with-sign/ComposedRecursiveOptim3LevelZKProgramWithSign.ts';

try {
    const content = readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    console.log('🔍 Analyzing TypeScript file for property access errors\n');
    
    // Check specific lines mentioned in error
    console.log('=== Line 140 Analysis ===');
    if (lines[139]) { // 0-indexed
        console.log(`Line 140: ${lines[139]}`);
        if (lines[139].includes('companyName')) {
            console.log('❌ FOUND: Line 140 contains "companyName" - this should be "entityName"');
        }
    }
    
    console.log('\n=== Line 202 Analysis ===');
    if (lines[201]) { // 0-indexed
        console.log(`Line 202: ${lines[201]}`);
        if (lines[201].includes('legalName')) {
            console.log('❌ FOUND: Line 202 contains "legalName" - this should be "name"');
        }
    }
    
    // Search for all problematic patterns
    console.log('\n=== Full File Analysis ===');
    
    const problems = [];
    lines.forEach((line, index) => {
        const lineNum = index + 1;
        
        // Check for problematic property accesses
        if (line.includes('eximOutput.companyName')) {
            problems.push({
                line: lineNum,
                issue: 'eximOutput.companyName should be eximOutput.entityName',
                content: line.trim()
            });
        }
        
        if (line.includes('gleifOutput.legalName')) {
            problems.push({
                line: lineNum,
                issue: 'gleifOutput.legalName should be gleifOutput.name', 
                content: line.trim()
            });
        }
    });
    
    if (problems.length > 0) {
        console.log('🚨 Found the following issues:');
        problems.forEach(problem => {
            console.log(`   Line ${problem.line}: ${problem.issue}`);
            console.log(`   Content: ${problem.content}`);
            console.log('');
        });
    } else {
        console.log('✅ No obvious property access issues found');
        console.log('The file may already be fixed or the errors are elsewhere');
    }
    
    // Also check what properties are actually being used
    console.log('\n=== Property Usage Analysis ===');
    const eximUsages = [];
    const gleifUsages = [];
    
    lines.forEach((line, index) => {
        if (line.includes('eximOutput.') && line.includes('.hash()')) {
            eximUsages.push({
                line: index + 1,
                content: line.trim()
            });
        }
        if (line.includes('gleifOutput.') && line.includes('.hash()')) {
            gleifUsages.push({
                line: index + 1,
                content: line.trim()
            });
        }
    });
    
    console.log('EXIM property usages:');
    eximUsages.forEach(usage => {
        console.log(`   Line ${usage.line}: ${usage.content}`);
    });
    
    console.log('\nGLEIF property usages:');
    gleifUsages.forEach(usage => {
        console.log(`   Line ${usage.line}: ${usage.content}`);
    });
    
} catch (error) {
    console.error('❌ Error reading file:', error.message);
}

console.log('\n🔧 Expected TypeScript interface properties:');
console.log('EXIMOptimPublicOutput should have: iec, entityName, isEXIMCompliant, verification_timestamp, merkle_root');
console.log('GLEIFOptimPublicOutput should have: lei, name, isGLEIFCompliant, verification_timestamp, merkle_root');