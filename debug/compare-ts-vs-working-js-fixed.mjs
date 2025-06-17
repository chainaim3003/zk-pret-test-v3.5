import fs from 'fs';
import path from 'path';

console.log('📊 COMPARING TYPESCRIPT-COMPILED JS vs WORKING JS');
console.log('================================================\n');

const BROKEN_DIR = process.cwd(); // Use current working directory
const workingBuildDir = path.join(BROKEN_DIR, 'build.working-copy');
const freshBuildDir = path.join(BROKEN_DIR, 'build');

console.log(`Current directory: ${BROKEN_DIR}`);
console.log(`Looking for working build at: ${workingBuildDir}`);
console.log(`Looking for fresh build at: ${freshBuildDir}`);
console.log('');

// Check if directories exist
console.log(`Working build exists: ${fs.existsSync(workingBuildDir) ? '✅' : '❌'}`);
console.log(`Fresh build exists: ${fs.existsSync(freshBuildDir) ? '✅' : '❌'}`);
console.log('');

if (!fs.existsSync(workingBuildDir)) {
    console.log('❌ Working build backup not found at build.working-copy');
    console.log('Creating backup now from current build...');
    
    if (fs.existsSync(freshBuildDir)) {
        console.log('ERROR: Current build exists - we need to restore working build first!');
        console.log('\nPlease run these commands:');
        console.log('1. rm -rf build/');
        console.log('2. cp -r build.backup build  # Restore working build');
        console.log('3. cp -r build build.working-copy  # Create backup');
        console.log('4. rm -rf build/');
        console.log('5. npm run build  # Rebuild from TypeScript');
        console.log('6. node debug/compare-ts-vs-working-js.mjs  # Run comparison');
        process.exit(1);
    } else {
        console.log('❌ No builds found! Please restore first.');
        process.exit(1);
    }
}

if (!fs.existsSync(freshBuildDir)) {
    console.log('❌ Fresh build not found! Run "npm run build" first.');
    process.exit(1);
}

function findAllJsFiles(dir) {
    const jsFiles = [];
    
    function scan(currentDir) {
        try {
            const items = fs.readdirSync(currentDir);
            for (const item of items) {
                const fullPath = path.join(currentDir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    scan(fullPath);
                } else if (item.endsWith('.js')) {
                    jsFiles.push(fullPath);
                }
            }
        } catch (error) {
            // Skip directories we can't read
        }
    }
    
    scan(dir);
    return jsFiles;
}

function compareFiles(file1, file2) {
    try {
        const content1 = fs.readFileSync(file1, 'utf8');
        const content2 = fs.readFileSync(file2, 'utf8');
        return content1 === content2;
    } catch (error) {
        return false;
    }
}

function getFileSize(filePath) {
    try {
        const stats = fs.statSync(filePath);
        return stats.size;
    } catch (error) {
        return -1;
    }
}

console.log('🔍 Comparing JavaScript files...\n');

const workingJsFiles = findAllJsFiles(workingBuildDir);
const freshJsFiles = findAllJsFiles(freshBuildDir);

console.log(`Working JS files: ${workingJsFiles.length}`);
console.log(`Fresh compiled JS files: ${freshJsFiles.length}\n`);

const mismatches = [];

for (const workingJs of workingJsFiles) {
    const relativePath = path.relative(workingBuildDir, workingJs);
    const freshJs = path.join(freshBuildDir, relativePath);
    
    if (fs.existsSync(freshJs)) {
        const workingSize = getFileSize(workingJs);
        const freshSize = getFileSize(freshJs);
        const filesIdentical = compareFiles(workingJs, freshJs);
        
        if (!filesIdentical) {
            // Find corresponding TypeScript file
            const tsRelativePath = relativePath.replace(/\.js$/, '.ts');
            const tsFile = path.join(BROKEN_DIR, 'src', tsRelativePath);
            
            const mismatch = {
                relativePath,
                workingJs,
                freshJs,
                tsFile,
                workingSize,
                freshSize,
                hasTypeScript: fs.existsSync(tsFile)
            };
            
            mismatches.push(mismatch);
            
            console.log(`🚨 MISMATCH: ${relativePath}`);
            console.log(`   Working JS:  ${workingSize} bytes`);
            console.log(`   Fresh JS:    ${freshSize} bytes`);
            console.log(`   TypeScript:  ${mismatch.hasTypeScript ? 'EXISTS' : 'MISSING'}`);
            if (mismatch.hasTypeScript) {
                console.log(`   TS File:     ${tsFile}`);
            }
            console.log('');
        }
    } else {
        console.log(`❌ MISSING in fresh build: ${relativePath}`);
    }
}

console.log('🎯 SUMMARY');
console.log('==========');
console.log(`Total JS files checked: ${workingJsFiles.length}`);
console.log(`Files with mismatches: ${mismatches.length}\n`);

if (mismatches.length > 0) {
    console.log('📋 FILES REQUIRING TYPESCRIPT FIXES:');
    console.log('====================================');
    mismatches.forEach((mismatch, index) => {
        if (mismatch.hasTypeScript) {
            console.log(`${index + 1}. ${mismatch.relativePath}`);
            console.log(`   TypeScript: ${mismatch.tsFile}`);
        }
    });
    
    console.log('\n🔧 NEXT STEPS FOR EACH FILE:');
    console.log('============================');
    console.log('1. Compare working JS with fresh JS to see differences');
    console.log('2. Update TypeScript source to produce the working JS logic');
    console.log('3. Rebuild and verify');
    
    // Save detailed report
    try {
        const debugDir = path.join(BROKEN_DIR, 'debug');
        if (!fs.existsSync(debugDir)) {
            fs.mkdirSync(debugDir);
        }
        const reportPath = path.join(debugDir, 'typescript-mismatches.json');
        fs.writeFileSync(reportPath, JSON.stringify(mismatches, null, 2));
        console.log(`\n💾 Detailed report saved to: ${reportPath}`);
    } catch (error) {
        console.log(`\n❌ Could not save report: ${error.message}`);
    }
    
} else {
    console.log('✅ No mismatches found!');
    console.log('Your TypeScript compiles to the same JS as the working version.');
}
