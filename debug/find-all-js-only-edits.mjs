import fs from 'fs';
import path from 'path';

console.log('🔍 Finding ALL TypeScript/JavaScript files with potential JS-only edits...');
console.log('==================================================================\n');

const WORKING_DIR = 'C:\\SATHYA\\CHAINAIM3003\\mcp-servers\\zk-pret-test-v3.5';
const BROKEN_DIR = 'C:\\SATHYA\\CHAINAIM3003\\mcp-servers\\zkpret3.5TSFIX\\zk-pret-test-v3.5';

console.log(`Working directory: ${WORKING_DIR}`);
console.log(`Broken directory:  ${BROKEN_DIR}\n`);

// Function to recursively find all TypeScript files
function findTsFiles(dir) {
    const tsFiles = [];
    
    function scan(currentDir) {
        try {
            const items = fs.readdirSync(currentDir);
            for (const item of items) {
                const fullPath = path.join(currentDir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    scan(fullPath);
                } else if (item.endsWith('.ts')) {
                    tsFiles.push(fullPath);
                }
            }
        } catch (error) {
            // Skip directories we can't read
        }
    }
    
    scan(dir);
    return tsFiles;
}

// Function to compare files
function compareFiles(file1, file2) {
    try {
        const content1 = fs.readFileSync(file1, 'utf8');
        const content2 = fs.readFileSync(file2, 'utf8');
        return content1 === content2;
    } catch (error) {
        return false;
    }
}

// Function to get file size
function getFileSize(filePath) {
    try {
        const stats = fs.statSync(filePath);
        return stats.size;
    } catch (error) {
        return -1;
    }
}

console.log('📋 ANALYSIS REPORT');
console.log('==================\n');

let issueCount = 0;
const issueFiles = [];

// Find all TypeScript files in the broken directory
const brokenSrcDir = path.join(BROKEN_DIR, 'src');
const tsFiles = findTsFiles(brokenSrcDir);

console.log(`Found ${tsFiles.length} TypeScript files to analyze...\n`);

for (const tsFile of tsFiles) {
    // Get relative path from src/
    const relativePath = path.relative(brokenSrcDir, tsFile);
    
    // Convert .ts to .js path
    const jsRelativePath = relativePath.replace(/\.ts$/, '.js');
    
    // Full paths
    const workingJs = path.join(WORKING_DIR, 'build', jsRelativePath);
    const brokenJs = path.join(BROKEN_DIR, 'build', jsRelativePath);
    const workingTs = path.join(WORKING_DIR, 'src', relativePath);
    const brokenTs = tsFile;
    
    console.log(`🔍 Checking: ${relativePath}`);
    
    const workingTsExists = fs.existsSync(workingTs);
    const brokenTsExists = fs.existsSync(brokenTs);
    const workingJsExists = fs.existsSync(workingJs);
    const brokenJsExists = fs.existsSync(brokenJs);
    
    console.log(`   TS (working): ${workingTsExists ? 'EXISTS' : 'MISSING'}`);
    console.log(`   TS (broken):  ${brokenTsExists ? 'EXISTS' : 'MISSING'}`);
    console.log(`   JS (working): ${workingJsExists ? 'EXISTS' : 'MISSING'}`);
    console.log(`   JS (broken):  ${brokenJsExists ? 'EXISTS' : 'MISSING'}`);
    
    if (workingJsExists && brokenJsExists && workingTsExists && brokenTsExists) {
        const workingJsSize = getFileSize(workingJs);
        const brokenJsSize = getFileSize(brokenJs);
        const workingTsSize = getFileSize(workingTs);
        const brokenTsSize = getFileSize(brokenTs);
        
        console.log(`   JS Size (working): ${workingJsSize} bytes`);
        console.log(`   JS Size (broken):  ${brokenJsSize} bytes`);
        console.log(`   TS Size (working): ${workingTsSize} bytes`);
        console.log(`   TS Size (broken):  ${brokenTsSize} bytes`);
        
        // Check if JS files are different but TS files are same
        const jsFilesSame = compareFiles(workingJs, brokenJs);
        const tsFilesSame = compareFiles(workingTs, brokenTs);
        
        if (!jsFilesSame) {
            console.log('   🚨 STATUS: JS FILES DIFFER');
            
            if (tsFilesSame) {
                console.log('   ⚠️  ISSUE: TS files identical but JS files differ!');
                console.log('   📝 ACTION: Need to reverse-engineer JS changes back to TS');
                issueCount++;
                issueFiles.push({
                    relativePath,
                    workingJs,
                    brokenJs,
                    workingTs,
                    brokenTs
                });
            } else {
                console.log('   ℹ️  INFO: Both TS and JS files differ (normal)');
            }
        } else {
            console.log('   ✅ STATUS: JS files identical');
        }
    } else {
        console.log('   ⚠️  STATUS: Missing files - cannot compare');
    }
    
    console.log('');
}

console.log('🎯 SUMMARY');
console.log('==========');
console.log(`Total files analyzed: ${tsFiles.length}`);
console.log(`Files with JS-only edits: ${issueCount}\n`);

if (issueCount > 0) {
    console.log('📋 FILES REQUIRING ATTENTION:');
    console.log('=============================');
    issueFiles.forEach((file, index) => {
        console.log(`${index + 1}. ${file.relativePath}`);
    });
    
    console.log('\n🔧 NEXT STEPS:');
    console.log('==============');
    console.log('1. For each file above, compare the working JS with broken JS to see changes');
    console.log('2. Apply those changes to the corresponding TypeScript file');
    console.log('3. Rebuild the project to verify fixes');
    
    // Export the file list for further processing
    const reportPath = path.join(BROKEN_DIR, 'debug', 'js-only-edits-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(issueFiles, null, 2));
    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
} else {
    console.log('✅ No files found with JS-only edits!');
    console.log('The issue might be elsewhere (dependencies, environment, etc.)');
}
