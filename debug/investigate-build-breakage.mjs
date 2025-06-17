import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🕵️ TYPESCRIPT BUILD INVESTIGATION');
console.log('=================================\n');

const BROKEN_DIR = process.cwd();

console.log('📋 INVESTIGATION METHODS:');
console.log('=========================');
console.log('1. Check recent Git commits for build-related changes');
console.log('2. Analyze TypeScript configuration');
console.log('3. Check for compilation errors');
console.log('4. Compare with working directory');
console.log('5. Check file timestamps\n');

// Method 1: Git history analysis
console.log('🔍 METHOD 1: Git History Analysis');
console.log('=================================');

try {
    console.log('Recent commits that might affect build:');
    const gitLog = execSync('git log --oneline -20 --grep="build\\|typescript\\|ts\\|compile\\|package" --ignore-case', { encoding: 'utf8' });
    if (gitLog.trim()) {
        console.log(gitLog);
    } else {
        console.log('No build-related commits found in recent history');
    }
} catch (error) {
    console.log('Could not read git history (not a git repo or git not available)');
}

try {
    console.log('\nRecent commits affecting TypeScript files:');
    const tsCommits = execSync('git log --oneline -10 --name-only -- "*.ts" "tsconfig.json" "package.json"', { encoding: 'utf8' });
    console.log(tsCommits || 'No recent TypeScript file changes');
} catch (error) {
    console.log('Could not read TypeScript file history');
}

// Method 2: TypeScript Configuration Analysis
console.log('\n🔍 METHOD 2: TypeScript Configuration');
console.log('====================================');

const tsconfigPath = path.join(BROKEN_DIR, 'tsconfig.json');
if (fs.existsSync(tsconfigPath)) {
    try {
        const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
        console.log('TypeScript configuration:');
        console.log(JSON.stringify(tsconfig, null, 2));
    } catch (error) {
        console.log('Error reading tsconfig.json:', error.message);
    }
} else {
    console.log('❌ tsconfig.json not found!');
}

// Method 3: Package.json Analysis
console.log('\n🔍 METHOD 3: Package.json Build Scripts');
console.log('======================================');

const packagePath = path.join(BROKEN_DIR, 'package.json');
if (fs.existsSync(packagePath)) {
    try {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        console.log('Build scripts:');
        console.log(JSON.stringify(packageJson.scripts || {}, null, 2));
        console.log('\nDependencies related to TypeScript:');
        const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
        Object.keys(allDeps).filter(dep => 
            dep.includes('typescript') || dep.includes('@types') || dep === 'ts-node'
        ).forEach(dep => {
            console.log(`  ${dep}: ${allDeps[dep]}`);
        });
    } catch (error) {
        console.log('Error reading package.json:', error.message);
    }
} else {
    console.log('❌ package.json not found!');
}

// Method 4: File Timestamp Analysis
console.log('\n🔍 METHOD 4: File Timestamp Analysis');
console.log('===================================');

function getFileTimestamp(filePath) {
    try {
        const stats = fs.statSync(filePath);
        return {
            created: stats.birthtime,
            modified: stats.mtime,
            accessed: stats.atime
        };
    } catch (error) {
        return null;
    }
}

// Check timestamps of key files
const keyFiles = [
    'tsconfig.json',
    'package.json',
    'package-lock.json',
    'build.backup',
    'build.working-copy'
];

console.log('Key file timestamps:');
keyFiles.forEach(file => {
    const fullPath = path.join(BROKEN_DIR, file);
    const timestamps = getFileTimestamp(fullPath);
    if (timestamps) {
        console.log(`${file}:`);
        console.log(`  Created: ${timestamps.created}`);
        console.log(`  Modified: ${timestamps.modified}`);
    } else {
        console.log(`${file}: Not found`);
    }
});

// Method 5: Compare directories
console.log('\n🔍 METHOD 5: Directory Comparison');
console.log('=================================');

const workingDir = 'C:/SATHYA/CHAINAIM3003/mcp-servers/zk-pret-test-v3.5';
const brokenDir = BROKEN_DIR;

console.log(`Broken directory: ${brokenDir}`);
console.log(`Working directory: ${workingDir}`);

// Compare key configuration files
const configFiles = ['tsconfig.json', 'package.json', 'package-lock.json'];

configFiles.forEach(file => {
    const workingFile = path.join(workingDir, file);
    const brokenFile = path.join(brokenDir, file);
    
    const workingExists = fs.existsSync(workingFile);
    const brokenExists = fs.existsSync(brokenFile);
    
    console.log(`\\n${file}:`);
    console.log(`  Working: ${workingExists ? 'EXISTS' : 'MISSING'}`);
    console.log(`  Broken: ${brokenExists ? 'EXISTS' : 'MISSING'}`);
    
    if (workingExists && brokenExists) {
        try {
            const workingContent = fs.readFileSync(workingFile, 'utf8');
            const brokenContent = fs.readFileSync(brokenFile, 'utf8');
            const identical = workingContent === brokenContent;
            console.log(`  Identical: ${identical ? '✅' : '❌'}`);
            
            if (!identical && file.endsWith('.json')) {
                try {
                    const workingJson = JSON.parse(workingContent);
                    const brokenJson = JSON.parse(brokenContent);
                    
                    if (file === 'package.json') {
                        const workingScripts = workingJson.scripts || {};
                        const brokenScripts = brokenJson.scripts || {};
                        if (JSON.stringify(workingScripts) !== JSON.stringify(brokenScripts)) {
                            console.log('  📋 Build scripts differ!');
                        }
                    }
                } catch (parseError) {
                    console.log('  ⚠️ JSON parsing failed');
                }
            }
        } catch (readError) {
            console.log(`  ❌ Could not compare: ${readError.message}`);
        }
    }
});

console.log('\n🔧 NEXT STEPS:');
console.log('==============');
console.log('1. Run: npm run build > build-output.log 2>&1');
console.log('2. Check build-output.log for compilation errors');
console.log('3. Compare tsconfig.json with working version');
console.log('4. Check if dependencies match working version');
console.log('5. Look at recent Git commits for breaking changes');
