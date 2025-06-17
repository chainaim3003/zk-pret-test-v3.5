import fs from 'fs';
import path from 'path';

console.log('🗺️  SOURCE MAP FILES ANALYSIS');
console.log('============================\n');

const WORKING_DIR = 'C:\\SATHYA\\CHAINAIM3003\\mcp-servers\\zk-pret-test-v3.5';
const BROKEN_DIR = 'C:\\SATHYA\\CHAINAIM3003\\mcp-servers\\zkpret3.5TSFIX\\zk-pret-test-v3.5';

console.log(`Working directory: ${WORKING_DIR}`);
console.log(`Broken directory:  ${BROKEN_DIR}\n`);

// Function to recursively find all .map files
function findMapFiles(dir) {
    const mapFiles = [];
    
    function scan(currentDir) {
        try {
            const items = fs.readdirSync(currentDir);
            for (const item of items) {
                const fullPath = path.join(currentDir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    scan(fullPath);
                } else if (item.endsWith('.map')) {
                    mapFiles.push(fullPath);
                }
            }
        } catch (error) {
            // Skip directories we can't read
        }
    }
    
    scan(dir);
    return mapFiles;
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

console.log('📋 SOURCE MAP FILES COMPARISON');
console.log('==============================\n');

const workingBuildDir = path.join(WORKING_DIR, 'build');
const brokenBuildDir = path.join(BROKEN_DIR, 'build');

const workingMapFiles = findMapFiles(workingBuildDir);
const brokenMapFiles = findMapFiles(brokenBuildDir);

console.log(`Working build .map files: ${workingMapFiles.length}`);
console.log(`Broken build .map files: ${brokenMapFiles.length}\n`);

const mapIssues = [];
const missingMapFiles = [];

// Check each .map file in working version
for (const workingMap of workingMapFiles) {
    const relativePath = path.relative(workingBuildDir, workingMap);
    const brokenMap = path.join(brokenBuildDir, relativePath);
    
    console.log(`🔍 Checking: ${relativePath}`);
    
    if (fs.existsSync(brokenMap)) {
        const workingSize = getFileSize(workingMap);
        const brokenSize = getFileSize(brokenMap);
        const filesIdentical = compareFiles(workingMap, brokenMap);
        
        console.log(`   Working size: ${workingSize} bytes`);
        console.log(`   Broken size:  ${brokenSize} bytes`);
        console.log(`   Identical: ${filesIdentical ? '✅' : '❌'}`);
        
        if (!filesIdentical) {
            mapIssues.push({
                relativePath,
                workingPath: workingMap,
                brokenPath: brokenMap,
                workingSize,
                brokenSize
            });
            console.log(`   🚨 SOURCE MAP DIFFERS`);
        }
    } else {
        missingMapFiles.push({
            relativePath,
            workingPath: workingMap
        });
        console.log(`   ❌ MISSING in broken build`);
    }
    console.log('');
}

// Check for extra .map files in broken build
console.log('🔍 Checking for extra .map files in broken build...\n');
for (const brokenMap of brokenMapFiles) {
    const relativePath = path.relative(brokenBuildDir, brokenMap);
    const workingMap = path.join(workingBuildDir, relativePath);
    
    if (!fs.existsSync(workingMap)) {
        console.log(`➕ Extra .map file in broken build: ${relativePath}`);
    }
}

console.log('\n🎯 SOURCE MAP ANALYSIS SUMMARY');
console.log('==============================');
console.log(`Total .map files in working: ${workingMapFiles.length}`);
console.log(`Total .map files in broken: ${brokenMapFiles.length}`);
console.log(`Missing .map files: ${missingMapFiles.length}`);
console.log(`Different .map files: ${mapIssues.length}\n`);

if (missingMapFiles.length > 0) {
    console.log('📋 MISSING SOURCE MAP FILES:');
    console.log('============================');
    missingMapFiles.forEach((file, index) => {
        console.log(`${index + 1}. ${file.relativePath}`);
    });
    console.log('');
}

if (mapIssues.length > 0) {
    console.log('📋 DIFFERENT SOURCE MAP FILES:');
    console.log('==============================');
    mapIssues.forEach((issue, index) => {
        console.log(`${index + 1}. ${issue.relativePath}`);
        console.log(`   Size: ${issue.workingSize} → ${issue.brokenSize} bytes`);
    });
    console.log('');
}

// Check specifically for the failing file's source map
const failingJsFile = 'tests/with-sign/RiskLiquidityStablecoinOptimMerkleVerificationTestWithSign.js';
const failingMapFile = failingJsFile + '.map';

const workingFailingMap = path.join(workingBuildDir, failingMapFile);
const brokenFailingMap = path.join(brokenBuildDir, failingMapFile);

console.log('🎯 SPECIFIC FILE ANALYSIS:');
console.log('==========================');
console.log(`Target JS file: ${failingJsFile}`);
console.log(`Target .map file: ${failingMapFile}`);
console.log(`Working .map exists: ${fs.existsSync(workingFailingMap) ? '✅' : '❌'}`);
console.log(`Broken .map exists: ${fs.existsSync(brokenFailingMap) ? '✅' : '❌'}`);

if (fs.existsSync(workingFailingMap) && fs.existsSync(brokenFailingMap)) {
    const mapIdentical = compareFiles(workingFailingMap, brokenFailingMap);
    console.log(`Maps identical: ${mapIdentical ? '✅' : '❌'}`);
    
    if (!mapIdentical) {
        console.log('🚨 The source map for the failing file is different!');
        console.log('This could affect debugging and module resolution.');
    }
} else if (fs.existsSync(workingFailingMap) && !fs.existsSync(brokenFailingMap)) {
    console.log('❌ Source map missing for the failing file!');
    console.log('This is likely contributing to the issue.');
}

// Generate fix commands
console.log('\n🔧 RECOMMENDED FIXES:');
console.log('=====================');

if (missingMapFiles.length > 0) {
    console.log('1. Copy missing .map files:');
    missingMapFiles.forEach(file => {
        const sourcePath = file.workingPath.replace(/\\/g, '/');
        const destPath = path.join(brokenBuildDir, file.relativePath).replace(/\\/g, '/');
        console.log(`   cp "${sourcePath}" "${destPath}"`);
    });
    console.log('');
}

if (mapIssues.length > 0) {
    console.log('2. Update different .map files:');
    mapIssues.forEach(issue => {
        const sourcePath = issue.workingPath.replace(/\\/g, '/');
        const destPath = issue.brokenPath.replace(/\\/g, '/');
        console.log(`   cp "${sourcePath}" "${destPath}"`);
    });
    console.log('');
}

if (fs.existsSync(workingFailingMap) && !fs.existsSync(brokenFailingMap)) {
    console.log('3. CRITICAL: Copy the source map for the failing file:');
    const sourcePath = workingFailingMap.replace(/\\/g, '/');
    const destPath = brokenFailingMap.replace(/\\/g, '/');
    console.log(`   cp "${sourcePath}" "${destPath}"`);
    console.log('');
}

// Save detailed report
const report = {
    summary: {
        workingMapCount: workingMapFiles.length,
        brokenMapCount: brokenMapFiles.length,
        missingCount: missingMapFiles.length,
        differentCount: mapIssues.length
    },
    missingMapFiles,
    mapIssues,
    failingFileMap: {
        workingExists: fs.existsSync(workingFailingMap),
        brokenExists: fs.existsSync(brokenFailingMap),
        identical: fs.existsSync(workingFailingMap) && fs.existsSync(brokenFailingMap) ? 
                   compareFiles(workingFailingMap, brokenFailingMap) : false
    }
};

const reportPath = path.join(BROKEN_DIR, 'debug', 'source-map-analysis.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`💾 Detailed report saved to: ${reportPath}`);

console.log('\n🚀 NEXT STEPS:');
console.log('==============');
console.log('1. Run the copy commands above');
console.log('2. Test the failing command again');
console.log('3. If still failing, the issue is definitely environmental');
