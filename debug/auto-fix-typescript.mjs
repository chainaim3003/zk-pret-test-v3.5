import fs from 'fs';
import path from 'path';

console.log('🤖 Automated TypeScript Fix Application Tool');
console.log('============================================\n');

const BROKEN_DIR = 'C:\\SATHYA\\CHAINAIM3003\\mcp-servers\\zkpret3.5TSFIX\\zk-pret-test-v3.5';
const WORKING_DIR = 'C:\\SATHYA\\CHAINAIM3003\\mcp-servers\\zk-pret-test-v3.5';

// Function to apply a specific fix to TypeScript based on JavaScript differences
function applyJavaScriptFixToTypeScript(workingJsPath, brokenJsPath, tsPath) {
    console.log(`🔧 Processing: ${path.basename(tsPath)}`);
    
    try {
        // Read the files
        const workingJs = fs.readFileSync(workingJsPath, 'utf8');
        const brokenJs = fs.readFileSync(brokenJsPath, 'utf8');
        const originalTs = fs.readFileSync(tsPath, 'utf8');
        
        // For our specific case, let's focus on the jurisdiction parameter issue
        // The issue is likely in the argument parsing section
        
        // Find differences in the main() function and argument parsing
        const workingJsLines = workingJs.split('\n');
        const brokenJsLines = brokenJs.split('\n');
        
        console.log('   🔍 Analyzing differences...');
        
        let foundIssues = 0;
        let fixedTs = originalTs;
        
        // Look for specific patterns that indicate the jurisdiction parameter issue
        for (let i = 0; i < Math.max(workingJsLines.length, brokenJsLines.length); i++) {
            const workingLine = workingJsLines[i] || '';
            const brokenLine = brokenJsLines[i] || '';
            
            if (workingLine !== brokenLine) {
                // Check if this is related to jurisdiction parameter handling
                if (workingLine.includes('jurisdictionCLI') || brokenLine.includes('jurisdictionCLI') ||
                    workingLine.includes('process.argv') || brokenLine.includes('process.argv')) {
                    
                    console.log(`   📍 Found difference at line ${i + 1}:`);
                    console.log(`      Broken:  "${brokenLine}"`);
                    console.log(`      Working: "${workingLine}"`);
                    
                    // Try to find the corresponding TypeScript line and fix it
                    if (workingLine.trim() && brokenLine.trim()) {
                        // Convert JavaScript back to TypeScript syntax
                        let tsEquivalent = workingLine;
                        
                        // Remove JavaScript-specific compilation artifacts
                        tsEquivalent = tsEquivalent.replace(/\/\/ @ts-ignore/g, '');
                        tsEquivalent = tsEquivalent.replace(/\/\*[\s\S]*?\*\//g, '');
                        
                        // Apply the fix to TypeScript
                        const brokenTsEquivalent = brokenLine
                            .replace(/\/\/ @ts-ignore/g, '')
                            .replace(/\/\*[\s\S]*?\*\//g, '');
                        
                        if (fixedTs.includes(brokenTsEquivalent.trim())) {
                            fixedTs = fixedTs.replace(brokenTsEquivalent.trim(), tsEquivalent.trim());
                            foundIssues++;
                            console.log(`   ✅ Applied fix to TypeScript`);
                        } else if (brokenLine.trim()) {
                            // Try a more flexible search
                            const searchPattern = brokenLine.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                            if (fixedTs.match(new RegExp(searchPattern))) {
                                fixedTs = fixedTs.replace(new RegExp(searchPattern, 'g'), workingLine.trim());
                                foundIssues++;
                                console.log(`   ✅ Applied flexible fix to TypeScript`);
                            }
                        }
                    }
                }
            }
        }
        
        if (foundIssues > 0) {
            // Backup the original TypeScript file
            const backupPath = tsPath + '.backup.' + Date.now();
            fs.writeFileSync(backupPath, originalTs);
            console.log(`   💾 Backed up original to: ${path.basename(backupPath)}`);
            
            // Write the fixed TypeScript
            fs.writeFileSync(tsPath, fixedTs);
            console.log(`   ✅ Applied ${foundIssues} fixes to TypeScript file`);
            
            return true;
        } else {
            console.log('   ℹ️  No applicable fixes found');
            return false;
        }
        
    } catch (error) {
        console.error(`   ❌ Error processing file: ${error.message}`);
        return false;
    }
}

// Alternative: Smart copy approach
function smartCopyWorkingChanges(workingJsPath, tsPath) {
    console.log(`🧠 Smart copy approach for: ${path.basename(tsPath)}`);
    
    try {
        const workingJs = fs.readFileSync(workingJsPath, 'utf8');
        const originalTs = fs.readFileSync(tsPath, 'utf8');
        
        // Extract key sections from working JavaScript that we know work
        const workingLines = workingJs.split('\n');
        let fixedTs = originalTs;
        
        // Find the main function and argument parsing sections
        let inMainFunction = false;
        let mainFunctionChanges = [];
        
        for (let i = 0; i < workingLines.length; i++) {
            const line = workingLines[i];
            
            // Detect start of main function
            if (line.includes('async function main()')) {
                inMainFunction = true;
                continue;
            }
            
            // Detect end of main function (simplified)
            if (inMainFunction && line.includes('main().catch')) {
                inMainFunction = false;
                break;
            }
            
            // Collect important lines from main function
            if (inMainFunction) {
                // Focus on jurisdiction parameter handling
                if (line.includes('jurisdictionCLI') || 
                    line.includes('process.argv[6]') ||
                    line.includes('if (!jurisdictionCLI)')) {
                    mainFunctionChanges.push(line);
                }
            }
        }
        
        console.log(`   📊 Found ${mainFunctionChanges.length} relevant changes in main function`);
        
        if (mainFunctionChanges.length > 0) {
            // Apply these changes to TypeScript
            // This is a simplified approach - in practice, you'd want more sophisticated matching
            
            mainFunctionChanges.forEach((jsLine, index) => {
                console.log(`   🔄 Processing change ${index + 1}: ${jsLine.trim()}`);
                
                // Convert JS line back to TS equivalent
                let tsLine = jsLine;
                
                // Apply to TypeScript (this is where you'd implement the actual transformation logic)
                // For now, we'll just show what would be changed
                console.log(`   📝 Would apply: ${tsLine.trim()}`);
            });
            
            console.log('   ⚠️  Manual review and application recommended for this file');
            return false; // Indicate manual intervention needed
        }
        
        return false;
        
    } catch (error) {
        console.error(`   ❌ Error in smart copy: ${error.message}`);
        return false;
    }
}

// Main execution
async function main() {
    const reportPath = path.join(BROKEN_DIR, 'debug', 'js-only-edits-report.json');
    
    if (!fs.existsSync(reportPath)) {
        console.log('❌ No report found. Run find-all-js-only-edits.mjs first!');
        console.log('\nRunning analysis now...\n');
        
        // Import and run the analysis
        try {
            await import('./find-all-js-only-edits.mjs');
        } catch (error) {
            console.error('Failed to run analysis:', error.message);
            process.exit(1);
        }
        
        if (!fs.existsSync(reportPath)) {
            console.log('❌ Still no report found after analysis');
            process.exit(1);
        }
    }
    
    const issueFiles = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    
    if (issueFiles.length === 0) {
        console.log('✅ No files found with JS-only edits!');
        return;
    }
    
    console.log(`Found ${issueFiles.length} files that need fixing\n`);
    
    let fixedCount = 0;
    
    for (let i = 0; i < issueFiles.length; i++) {
        const file = issueFiles[i];
        
        console.log(`\n${'='.repeat(60)}`);
        console.log(`📁 FILE ${i + 1}/${issueFiles.length}: ${file.relativePath}`);
        console.log(`${'='.repeat(60)}`);
        
        // Try automated fix first
        const autoFixed = applyJavaScriptFixToTypeScript(file.workingJs, file.brokenJs, file.brokenTs);
        
        if (!autoFixed) {
            // Fall back to smart copy approach
            const smartFixed = smartCopyWorkingChanges(file.workingJs, file.brokenTs);
            
            if (!smartFixed) {
                console.log('   📋 Manual intervention required for this file');
                console.log(`   📝 Compare: ${file.workingJs}`);
                console.log(`   📝 With:    ${file.brokenJs}`);
                console.log(`   📝 Fix:     ${file.brokenTs}`);
            }
        } else {
            fixedCount++;
        }
    }
    
    console.log(`\n${'='.repeat(80)}`);
    console.log('🎯 FINAL SUMMARY');
    console.log(`${'='.repeat(80)}`);
    console.log(`Files processed: ${issueFiles.length}`);
    console.log(`Automatically fixed: ${fixedCount}`);
    console.log(`Requiring manual intervention: ${issueFiles.length - fixedCount}`);
    
    if (fixedCount > 0) {
        console.log('\n🔨 NEXT STEPS:');
        console.log('1. Review the automatically applied changes');
        console.log('2. Run "npm run build" to recompile');
        console.log('3. Test the functionality');
        
        if (fixedCount < issueFiles.length) {
            console.log('4. Manually fix the remaining files');
        }
    } else {
        console.log('\n📋 MANUAL STEPS REQUIRED:');
        console.log('1. Use the reverse-engineer-changes.mjs output to identify changes');
        console.log('2. Manually apply changes to TypeScript files');
        console.log('3. Rebuild and test');
    }
}

main().catch(error => {
    console.error('❌ Tool failed:', error.message);
    process.exit(1);
});
