import fs from 'fs';
import path from 'path';

console.log('🔍 COMPREHENSIVE Build Directory Analysis');
console.log('=========================================\n');

const WORKING_DIR = 'C:\\SATHYA\\CHAINAIM3003\\mcp-servers\\zk-pret-test-v3.5';
const BROKEN_DIR = 'C:\\SATHYA\\CHAINAIM3003\\mcp-servers\\zkpret3.5TSFIX\\zk-pret-test-v3.5';

console.log(`Working directory: ${WORKING_DIR}`);
console.log(`Broken directory:  ${BROKEN_DIR}\n`);

// Function to recursively find all files
function findAllFiles(dir, extensions = []) {
    const files = [];
    
    function scan(currentDir) {
        try {
            const items = fs.readdirSync(currentDir);
            for (const item of items) {
                const fullPath = path.join(currentDir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    scan(fullPath);
                } else {
                    if (extensions.length === 0 || extensions.some(ext => item.endsWith(ext))) {
                        files.push(fullPath);
                    }
                }
            }
        } catch (error) {
            // Skip directories we can't read
        }
    }
    
    scan(dir);
    return files;
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

console.log('📋 COMPLETE BUILD DIRECTORY ANALYSIS');
console.log('====================================\n');

// 1. Check ALL JavaScript files in build directory
const workingBuildDir = path.join(WORKING_DIR, 'build');
const brokenBuildDir = path.join(BROKEN_DIR, 'build');

console.log('🔍 Phase 1: ALL JavaScript files in build/ directory');
console.log('===================================================');

const workingJsFiles = findAllFiles(workingBuildDir, ['.js']);
const brokenJsFiles = findAllFiles(brokenBuildDir, ['.js']);

console.log(`Working build JS files: ${workingJsFiles.length}`);
console.log(`Broken build JS files: ${brokenJsFiles.length}\n`);

const allJsIssues = [];
const tsBasedIssues = [];
const standaloneJsIssues = [];

// Compare ALL JS files (whether they come from TS or not)
for (const workingJs of workingJsFiles) {
    const relativePath = path.relative(workingBuildDir, workingJs);
    const brokenJs = path.join(brokenBuildDir, relativePath);
    
    if (fs.existsSync(brokenJs)) {
        const filesIdentical = compareFiles(workingJs, brokenJs);
        
        if (!filesIdentical) {
            // Check if this JS file corresponds to a TS file
            const tsRelativePath = relativePath.replace(/\.js$/, '.ts');
            const workingTs = path.join(WORKING_DIR, 'src', tsRelativePath);
            const brokenTs = path.join(BROKEN_DIR, 'src', tsRelativePath);
            
            const issue = {
                relativePath,
                jsPath: {
                    working: workingJs,
                    broken: brokenJs
                },
                tsPath: {
                    working: workingTs,
                    broken: brokenTs
                },
                hasTypeScript: fs.existsSync(workingTs) && fs.existsSync(brokenTs),
                workingSize: getFileSize(workingJs),
                brokenSize: getFileSize(brokenJs)
            };
            
            if (issue.hasTypeScript) {
                // Check if TS files are identical
                const tsIdentical = compareFiles(workingTs, brokenTs);
                issue.tsIdentical = tsIdentical;
                
                if (tsIdentical) {
                    tsBasedIssues.push(issue);
                    console.log(`🚨 TS-based issue: ${relativePath}`);
                    console.log(`   TS files: IDENTICAL`);
                    console.log(`   JS files: DIFFERENT (${issue.workingSize} vs ${issue.brokenSize} bytes)`);
                } else {
                    console.log(`ℹ️  Normal difference: ${relativePath} (both TS and JS differ)`);
                }
            } else {
                standaloneJsIssues.push(issue);
                console.log(`⚠️  Standalone JS issue: ${relativePath}`);
                console.log(`   No corresponding TS file found`);
                console.log(`   JS files: DIFFERENT (${issue.workingSize} vs ${issue.brokenSize} bytes)`);
            }
            
            allJsIssues.push(issue);
        }
    } else {
        console.log(`❌ Missing in broken build: ${relativePath}`);
    }
}

// 2. Check for extra files in broken build
console.log('\n🔍 Phase 2: Files only in broken build');
console.log('=====================================');

for (const brokenJs of brokenJsFiles) {
    const relativePath = path.relative(brokenBuildDir, brokenJs);
    const workingJs = path.join(workingBuildDir, relativePath);
    
    if (!fs.existsSync(workingJs)) {
        console.log(`➕ Extra file in broken build: ${relativePath}`);
    }
}

// 3. Summary and recommendations
console.log('\n🎯 COMPREHENSIVE SUMMARY');
console.log('========================');
console.log(`Total JS files compared: ${workingJsFiles.length}`);
console.log(`Files with differences: ${allJsIssues.length}`);
console.log(`├── TS-based issues (JS-only edits): ${tsBasedIssues.length}`);
console.log(`└── Standalone JS issues: ${standaloneJsIssues.length}\n`);

if (tsBasedIssues.length > 0) {
    console.log('📋 TYPESCRIPT-BASED ISSUES (Require TS fixes):');
    console.log('==============================================');
    tsBasedIssues.forEach((issue, index) => {
        console.log(`${index + 1}. ${issue.relativePath}`);
        console.log(`   Size difference: ${issue.workingSize} → ${issue.brokenSize} bytes`);
    });
    console.log('');
}

if (standaloneJsIssues.length > 0) {
    console.log('📋 STANDALONE JAVASCRIPT ISSUES:');
    console.log('=================================');
    standaloneJsIssues.forEach((issue, index) => {
        console.log(`${index + 1}. ${issue.relativePath}`);
        console.log(`   Size difference: ${issue.workingSize} → ${issue.brokenSize} bytes`);
        console.log(`   Action: Copy working version or investigate separately`);
    });
    console.log('');
}

// 4. Generate comprehensive reports
const allReports = {
    tsBasedIssues,
    standaloneJsIssues,
    summary: {
        totalJsFiles: workingJsFiles.length,
        totalDifferences: allJsIssues.length,
        tsBasedCount: tsBasedIssues.length,
        standaloneCount: standaloneJsIssues.length
    }
};

const reportPath = path.join(BROKEN_DIR, 'debug', 'comprehensive-build-analysis.json');
fs.writeFileSync(reportPath, JSON.stringify(allReports, null, 2));

console.log('💾 REPORTS GENERATED:');
console.log('=====================');
console.log(`Complete analysis: ${reportPath}`);

// Generate specific fix scripts
if (tsBasedIssues.length > 0) {
    const tsFixPath = path.join(BROKEN_DIR, 'debug', 'ts-only-issues.json');
    fs.writeFileSync(tsFixPath, JSON.stringify(tsBasedIssues, null, 2));
    console.log(`TS issues only: ${tsFixPath}`);
}

if (standaloneJsIssues.length > 0) {
    const jsFixPath = path.join(BROKEN_DIR, 'debug', 'standalone-js-issues.json');
    fs.writeFileSync(jsFixPath, JSON.stringify(standaloneJsIssues, null, 2));
    console.log(`Standalone JS issues: ${jsFixPath}`);
}

console.log('\n🔧 RECOMMENDED ACTION PLAN:');
console.log('===========================');
if (tsBasedIssues.length > 0) {
    console.log('1. Fix TypeScript-based issues using reverse-engineer-changes.mjs');
    console.log('2. Rebuild with "npm run build"');
}
if (standaloneJsIssues.length > 0) {
    console.log('3. Copy working standalone JS files or investigate differences');
}
if (allJsIssues.length === 0) {
    console.log('✅ No differences found! Issue might be environmental or dependency-related.');
}
