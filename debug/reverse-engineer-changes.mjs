import fs from 'fs';
import path from 'path';

console.log('🔧 Reverse Engineering Tool: JS Changes → TypeScript');
console.log('=====================================================\n');

// Read the report from the previous analysis
const BROKEN_DIR = 'C:\\SATHYA\\CHAINAIM3003\\mcp-servers\\zkpret3.5TSFIX\\zk-pret-test-v3.5';
const reportPath = path.join(BROKEN_DIR, 'debug', 'js-only-edits-report.json');

if (!fs.existsSync(reportPath)) {
    console.log('❌ No report found. Run find-all-js-only-edits.mjs first!');
    process.exit(1);
}

const issueFiles = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

console.log(`Found ${issueFiles.length} files with JS-only edits\n`);

// Function to show differences between two files
function showDifferences(file1Path, file2Path, label1, label2) {
    try {
        const content1 = fs.readFileSync(file1Path, 'utf8');
        const content2 = fs.readFileSync(file2Path, 'utf8');
        
        const lines1 = content1.split('\n');
        const lines2 = content2.split('\n');
        
        const maxLines = Math.max(lines1.length, lines2.length);
        const differences = [];
        
        for (let i = 0; i < maxLines; i++) {
            const line1 = lines1[i] || '';
            const line2 = lines2[i] || '';
            
            if (line1 !== line2) {
                differences.push({
                    lineNumber: i + 1,
                    [label1]: line1,
                    [label2]: line2
                });
            }
        }
        
        return differences;
    } catch (error) {
        console.error(`Error comparing files: ${error.message}`);
        return [];
    }
}

// Function to generate TypeScript patches
function generateTSPatch(jsWorking, jsBroken, tsPath) {
    const differences = showDifferences(jsBroken, jsWorking, 'broken', 'working');
    
    if (differences.length === 0) {
        return null;
    }
    
    console.log(`📝 Generating patch for: ${path.basename(tsPath)}`);
    console.log(`   Found ${differences.length} differences in JavaScript\n`);
    
    // Show first few differences to understand the pattern
    const sampleDiffs = differences.slice(0, 5);
    
    console.log('🔍 Key Differences (first 5):');
    console.log('=============================');
    
    sampleDiffs.forEach((diff, index) => {
        console.log(`${index + 1}. Line ${diff.lineNumber}:`);
        console.log(`   Broken:  "${diff.broken}"`);
        console.log(`   Working: "${diff.working}"`);
        console.log('');
    });
    
    // Try to identify patterns and suggest TypeScript changes
    const patches = [];
    
    differences.forEach(diff => {
        // Look for common patterns that need to be changed in TypeScript
        
        // Pattern 1: Argument parsing changes
        if (diff.working.includes('jurisdictionCLI') || diff.broken.includes('jurisdictionCLI')) {
            patches.push({
                type: 'argument_parsing',
                lineNumber: diff.lineNumber,
                from: diff.broken,
                to: diff.working,
                description: 'Jurisdiction parameter handling change'
            });
        }
        
        // Pattern 2: Function signature changes
        if (diff.working.includes('function ') || diff.broken.includes('function ')) {
            patches.push({
                type: 'function_signature',
                lineNumber: diff.lineNumber,
                from: diff.broken,
                to: diff.working,
                description: 'Function signature modification'
            });
        }
        
        // Pattern 3: Import/export changes
        if (diff.working.includes('import ') || diff.broken.includes('import ') ||
            diff.working.includes('export ') || diff.broken.includes('export ')) {
            patches.push({
                type: 'import_export',
                lineNumber: diff.lineNumber,
                from: diff.broken,
                to: diff.working,
                description: 'Import/export statement change'
            });
        }
        
        // Pattern 4: Variable declarations
        if (diff.working.includes('const ') || diff.broken.includes('const ') ||
            diff.working.includes('let ') || diff.broken.includes('let ') ||
            diff.working.includes('var ') || diff.broken.includes('var ')) {
            patches.push({
                type: 'variable_declaration',
                lineNumber: diff.lineNumber,
                from: diff.broken,
                to: diff.working,
                description: 'Variable declaration change'
            });
        }
        
        // Pattern 5: Other changes
        if (patches.filter(p => p.lineNumber === diff.lineNumber).length === 0) {
            patches.push({
                type: 'other',
                lineNumber: diff.lineNumber,
                from: diff.broken,
                to: diff.working,
                description: 'Other code change'
            });
        }
    });
    
    return patches;
}

// Process each file with issues
for (let i = 0; i < issueFiles.length; i++) {
    const file = issueFiles[i];
    
    console.log(`\n${'='.repeat(80)}`);
    console.log(`📁 FILE ${i + 1}/${issueFiles.length}: ${file.relativePath}`);
    console.log(`${'='.repeat(80)}`);
    
    const patches = generateTSPatch(file.workingJs, file.brokenJs, file.brokenTs);
    
    if (patches) {
        console.log('🔧 RECOMMENDED TYPESCRIPT CHANGES:');
        console.log('===================================');
        
        const groupedPatches = {};
        patches.forEach(patch => {
            if (!groupedPatches[patch.type]) {
                groupedPatches[patch.type] = [];
            }
            groupedPatches[patch.type].push(patch);
        });
        
        Object.keys(groupedPatches).forEach(type => {
            console.log(`\n📋 ${type.toUpperCase().replace('_', ' ')} CHANGES:`);
            groupedPatches[type].forEach(patch => {
                console.log(`   Line ${patch.lineNumber}: ${patch.description}`);
                console.log(`   FROM: ${patch.from}`);
                console.log(`   TO:   ${patch.to}`);
                console.log('');
            });
        });
        
        // Save patches to file for manual application
        const patchFile = path.join(BROKEN_DIR, 'debug', `patches-${path.basename(file.relativePath, '.ts')}.json`);
        fs.writeFileSync(patchFile, JSON.stringify(patches, null, 2));
        console.log(`💾 Patches saved to: ${patchFile}`);
        
    } else {
        console.log('✅ No differences found or unable to generate patches');
    }
}

console.log(`\n${'='.repeat(80)}`);
console.log('🎯 SUMMARY AND NEXT STEPS');
console.log(`${'='.repeat(80)}`);
console.log('1. Review the patches above for each file');
console.log('2. Manually apply the changes to the TypeScript files');
console.log('3. Run "npm run build" to recompile');
console.log('4. Test the functionality to ensure it works');
console.log('\n📁 All patch files are saved in the debug/ directory for reference');
