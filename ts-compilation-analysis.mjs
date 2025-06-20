import fs from 'fs';
import path from 'path';

console.log('🔍 TYPESCRIPT COMPILATION ANALYSIS');
console.log('===================================\n');

// Function to recursively find all TypeScript files
function findTSFiles(dir, basePath = '') {
    const tsFiles = new Map();
    
    if (!fs.existsSync(dir)) return tsFiles;
    
    function walkDir(currentPath, relativePath = '') {
        const files = fs.readdirSync(currentPath);
        for (const file of files) {
            const filePath = path.join(currentPath, file);
            const relativeFilePath = path.join(relativePath, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                walkDir(filePath, relativeFilePath);
            } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
                tsFiles.set(relativeFilePath, {
                    fullPath: filePath,
                    relativePath: relativeFilePath,
                    size: stat.size,
                    mtime: stat.mtime
                });
            }
        }
    }
    
    walkDir(dir);
    return tsFiles;
}

// Function to find corresponding JS files
function findJSFiles(dir, basePath = '') {
    const jsFiles = new Map();
    
    if (!fs.existsSync(dir)) return jsFiles;
    
    function walkDir(currentPath, relativePath = '') {
        const files = fs.readdirSync(currentPath);
        for (const file of files) {
            const filePath = path.join(currentPath, file);
            const relativeFilePath = path.join(relativePath, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                walkDir(filePath, relativeFilePath);
            } else if (file.endsWith('.js')) {
                jsFiles.set(relativeFilePath, {
                    fullPath: filePath,
                    relativePath: relativeFilePath,
                    size: stat.size,
                    mtime: stat.mtime
                });
            }
        }
    }
    
    walkDir(dir);
    return jsFiles;
}

// Get TypeScript files from src
console.log('📂 Scanning src directory for TypeScript files...');
const tsFiles = findTSFiles('src');

// Get JavaScript files from build
console.log('📂 Scanning build directory for JavaScript files...');
const jsFiles = findJSFiles('build');

// Get JavaScript files from working copy
console.log('📂 Scanning build.working-copy for reference...');
const workingCopyFiles = findJSFiles('build.working-copy');

console.log(`\n📊 SUMMARY:`);
console.log(`   TypeScript files in src/: ${tsFiles.size}`);
console.log(`   JavaScript files in build/: ${jsFiles.size}`);
console.log(`   JavaScript files in working copy: ${workingCopyFiles.size}`);

// Analyze compilation status
const compiledFiles = [];
const failedFiles = [];
const newFiles = [];

console.log(`\n🔍 COMPILATION ANALYSIS:`);
console.log('========================\n');

// Check each TypeScript file
for (const [tsRelativePath, tsFile] of tsFiles) {
    // Convert .ts path to .js path
    const jsRelativePath = tsRelativePath.replace(/\.ts$/, '.js');
    
    const hasCompiledJS = jsFiles.has(jsRelativePath);
    const existsInWorkingCopy = workingCopyFiles.has(jsRelativePath);
    
    if (hasCompiledJS) {
        const jsFile = jsFiles.get(jsRelativePath);
        const isRecentlyCompiled = jsFile.mtime > tsFile.mtime;
        
        if (isRecentlyCompiled) {
            compiledFiles.push({
                tsPath: tsRelativePath,
                jsPath: jsRelativePath,
                tsSize: tsFile.size,
                jsSize: jsFile.size,
                compiled: tsFile.mtime,
                status: existsInWorkingCopy ? 'COMPILED (replaced working copy)' : 'COMPILED (new file)'
            });
        } else if (existsInWorkingCopy) {
            failedFiles.push({
                tsPath: tsRelativePath,
                jsPath: jsRelativePath,
                tsSize: tsFile.size,
                status: 'FAILED (using working copy)',
                reason: 'JS file older than TS file'
            });
        } else {
            compiledFiles.push({
                tsPath: tsRelativePath,
                jsPath: jsRelativePath,
                tsSize: tsFile.size,
                jsSize: jsFile.size,
                compiled: tsFile.mtime,
                status: 'COMPILED (uncertain timing)'
            });
        }
    } else {
        if (existsInWorkingCopy) {
            failedFiles.push({
                tsPath: tsRelativePath,
                jsPath: jsRelativePath,
                tsSize: tsFile.size,
                status: 'FAILED (using working copy)',
                reason: 'No compiled JS found'
            });
        } else {
            failedFiles.push({
                tsPath: tsRelativePath,
                jsPath: jsRelativePath,
                tsSize: tsFile.size,
                status: 'FAILED (missing entirely)',
                reason: 'No JS file exists anywhere'
            });
        }
    }
}

// Find JS files that don't have corresponding TS files (from working copy)
for (const [jsRelativePath, jsFile] of jsFiles) {
    const tsRelativePath = jsRelativePath.replace(/\.js$/, '.ts');
    
    if (!tsFiles.has(tsRelativePath) && workingCopyFiles.has(jsRelativePath)) {
        newFiles.push({
            jsPath: jsRelativePath,
            jsSize: jsFile.size,
            status: 'FROM WORKING COPY (no TS source)',
            source: 'working copy'
        });
    }
}

// Display results
console.log('✅ SUCCESSFULLY COMPILED FILES:');
console.log('==============================');
compiledFiles.forEach((file, index) => {
    console.log(`${index + 1}. ${file.tsPath}`);
    console.log(`   → ${file.jsPath}`);
    console.log(`   Status: ${file.status}`);
    console.log(`   Size: ${file.tsSize} bytes (TS) → ${file.jsSize} bytes (JS)`);
    if (file.compiled) {
        console.log(`   Compiled: ${file.compiled.toISOString()}`);
    }
    console.log('');
});

console.log(`\n❌ FAILED TO COMPILE FILES:`);
console.log('==========================');
failedFiles.forEach((file, index) => {
    console.log(`${index + 1}. ${file.tsPath}`);
    console.log(`   → ${file.jsPath || 'NO OUTPUT'}`);
    console.log(`   Status: ${file.status}`);
    console.log(`   Reason: ${file.reason}`);
    console.log(`   Size: ${file.tsSize} bytes (TS)`);
    console.log('');
});

console.log(`\n📋 FILES FROM WORKING COPY:`);
console.log('==========================');
newFiles.slice(0, 10).forEach((file, index) => {
    console.log(`${index + 1}. ${file.jsPath}`);
    console.log(`   Status: ${file.status}`);
    console.log(`   Size: ${file.jsSize} bytes`);
    console.log('');
});

if (newFiles.length > 10) {
    console.log(`   ... and ${newFiles.length - 10} more files from working copy\n`);
}

// Final statistics
console.log(`\n📊 FINAL STATISTICS:`);
console.log('==================');
console.log(`✅ Successfully compiled: ${compiledFiles.length} files`);
console.log(`❌ Failed to compile: ${failedFiles.length} files`);
console.log(`📋 From working copy: ${newFiles.length} files`);
console.log(`📁 Total TS files: ${tsFiles.size} files`);
console.log(`📁 Total JS files: ${jsFiles.size} files`);

const compilationRate = ((compiledFiles.length / tsFiles.size) * 100).toFixed(1);
console.log(`📈 Compilation success rate: ${compilationRate}%`);

// Highlight your specific optimized files
console.log(`\n🎯 YOUR OPTIMIZED FILES STATUS:`);
console.log('==============================');
const yourOptimizedFiles = [
    'tests/with-sign/BusinessProcessIntegrityOptimMerkleVerificationFileTestWithSignUtils.ts',
    'utils/optimerkle/MerkleTreeManager.ts',
    'zk-programs/with-sign/BusinessProcessIntegrityOptimMerkleZKProgramWithSign.ts'
];

yourOptimizedFiles.forEach(file => {
    const compiled = compiledFiles.find(f => f.tsPath === file);
    const failed = failedFiles.find(f => f.tsPath === file);
    
    if (compiled) {
        console.log(`✅ ${file}`);
        console.log(`   Status: ${compiled.status}`);
        console.log(`   Size: ${compiled.tsSize} → ${compiled.jsSize} bytes`);
    } else if (failed) {
        console.log(`❌ ${file}`);
        console.log(`   Status: ${failed.status}`);
        console.log(`   Reason: ${failed.reason}`);
    } else {
        console.log(`❓ ${file} - NOT FOUND IN SOURCE`);
    }
    console.log('');
});

console.log('🏁 Analysis complete!');
