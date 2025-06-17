import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🎯 CALCULATING JS→TS REVERSE ENGINEERING EFFORT');
console.log('===============================================\n');

const BROKEN_DIR = process.cwd();

function analyzeChangesSince350() {
    console.log('📊 ANALYZING CHANGES SINCE TAG v3.5.0');
    console.log('======================================\n');
    
    try {
        // Get all commits since v3.5.0
        console.log('🔍 Finding commits since v3.5.0...');
        const commitsSince = execSync('git log v3.5.0..HEAD --oneline', { encoding: 'utf8' });
        const commitLines = commitsSince.trim().split('\n').filter(line => line.trim());
        
        console.log(`Found ${commitLines.length} commits since v3.5.0:\n`);
        commitLines.forEach((commit, index) => {
            console.log(`${index + 1}. ${commit}`);
        });
        
        console.log('\n📁 FILES ADDED/MODIFIED SINCE v3.5.0:');
        console.log('====================================');
        
        // Get all files changed since v3.5.0
        const changedFiles = execSync('git diff --name-only v3.5.0..HEAD', { encoding: 'utf8' });
        const fileLines = changedFiles.trim().split('\n').filter(line => line.trim());
        
        console.log(`Total files changed: ${fileLines.length}\n`);
        
        // Categorize the changes
        const categories = {
            typescriptFiles: [],
            configFiles: [],
            dataFiles: [],
            otherFiles: []
        };
        
        fileLines.forEach(file => {
            if (file.endsWith('.ts')) {
                categories.typescriptFiles.push(file);
            } else if (file.includes('config') || file.endsWith('.json') || file.includes('settings')) {
                categories.dataFiles.push(file);
            } else if (file.includes('package') || file.includes('tsconfig') || file.includes('.md')) {
                categories.configFiles.push(file);
            } else {
                categories.otherFiles.push(file);
            }
        });
        
        console.log('📋 CHANGES BY CATEGORY:');
        console.log('=======================');
        
        Object.entries(categories).forEach(([category, files]) => {
            console.log(`\\n${category.toUpperCase()}: ${files.length} files`);
            files.forEach(file => {
                console.log(`  - ${file}`);
            });
        });
        
        return categories;
        
    } catch (error) {
        console.log('❌ Error analyzing git history:', error.message);
        console.log('Attempting alternative approach...\n');
        return analyzeByTags();
    }
}

function analyzeByTags() {
    console.log('📊 ANALYZING BY COMPARING TAG STATES');
    console.log('====================================\n');
    
    try {
        // Check what's in v3.5.0 vs current
        console.log('🔍 Checking files in v3.5.0 vs current state...');
        
        // Get file list from v3.5.0
        const v350Files = execSync('git ls-tree -r --name-only v3.5.0', { encoding: 'utf8' });
        const v350FileList = v350Files.trim().split('\n').filter(f => f.endsWith('.ts'));
        
        // Get current TypeScript files
        const currentTsFiles = [];
        function findTsFiles(dir) {
            try {
                const items = fs.readdirSync(dir);
                for (const item of items) {
                    const fullPath = path.join(dir, item);
                    const stat = fs.statSync(fullPath);
                    
                    if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {
                        findTsFiles(fullPath);
                    } else if (item.endsWith('.ts')) {
                        currentTsFiles.push(path.relative(BROKEN_DIR, fullPath));
                    }
                }
            } catch (error) {
                // Skip
            }
        }
        
        findTsFiles(path.join(BROKEN_DIR, 'src'));
        
        console.log(`TypeScript files in v3.5.0: ${v350FileList.length}`);
        console.log(`TypeScript files currently: ${currentTsFiles.length}`);
        
        // Find new files
        const newFiles = currentTsFiles.filter(file => !v350FileList.includes(file));
        
        console.log(`\\n📝 NEW TYPESCRIPT FILES SINCE v3.5.0: ${newFiles.length}`);
        console.log('=======================================');
        newFiles.forEach(file => {
            console.log(`  + ${file}`);
        });
        
        return { newTypescriptFiles: newFiles };
        
    } catch (error) {
        console.log('❌ Error with tag comparison:', error.message);
        return null;
    }
}

function calculateReverseEngineeringEffort() {
    console.log('\\n🧮 REVERSE ENGINEERING CALCULATION');
    console.log('===================================\\n');
    
    try {
        // Test build at v3.5.0
        console.log('🔍 Testing build at v3.5.0...');
        
        // Temporarily checkout v3.5.0 to see how many files it built
        const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
        
        execSync('git checkout v3.5.0 >/dev/null 2>&1');
        execSync('rm -rf build/ >/dev/null 2>&1');
        
        try {
            execSync('npm run build >/dev/null 2>&1');
            const v350JsFiles = execSync('find build/ -name "*.js" 2>/dev/null | wc -l', { encoding: 'utf8' }).trim();
            console.log(`✅ v3.5.0 built successfully: ${v350JsFiles} JavaScript files`);
            
            // Return to current state
            execSync(`git checkout ${currentBranch} >/dev/null 2>&1`);
            
            // Current TypeScript build
            execSync('rm -rf build/ >/dev/null 2>&1');
            execSync('npm run build >/dev/null 2>&1');
            const currentJsFiles = execSync('find build/ -name "*.js" 2>/dev/null | wc -l', { encoding: 'utf8' }).trim();
            console.log(`✅ Current TS build: ${currentJsFiles} JavaScript files`);
            
            // Working build
            const workingBuildDir = path.join(BROKEN_DIR, 'build.working-copy');
            let workingJsFiles = 0;
            if (fs.existsSync(workingBuildDir)) {
                workingJsFiles = execSync(`find "${workingBuildDir}" -name "*.js" 2>/dev/null | wc -l`, { encoding: 'utf8' }).trim();
                console.log(`✅ Working build: ${workingJsFiles} JavaScript files`);
            }
            
            console.log('\\n📊 EFFORT CALCULATION:');
            console.log('=======================');
            console.log(`Files in v3.5.0 build: ${v350JsFiles}`);
            console.log(`Files in current TS build: ${currentJsFiles}`);
            console.log(`Files in working build: ${workingJsFiles}`);
            
            const newFilesSinceV350 = parseInt(currentJsFiles) - parseInt(v350JsFiles);
            const missingFromTS = parseInt(workingJsFiles) - parseInt(currentJsFiles);
            
            console.log(`\\n🎯 NEW FILES SINCE v3.5.0: ${newFilesSinceV350}`);
            console.log(`🚨 MISSING FROM TYPESCRIPT: ${missingFromTS}`);
            
            console.log('\\n💡 REVERSE ENGINEERING SCOPE:');
            console.log('==============================');
            
            if (missingFromTS <= 50) {
                console.log(`✅ MANAGEABLE: ${missingFromTS} files to reverse engineer`);
                console.log('   Estimated effort: 1-2 weeks');
                console.log('   Complexity: LOW to MEDIUM');
            } else if (missingFromTS <= 100) {
                console.log(`⚠️  MODERATE: ${missingFromTS} files to reverse engineer`);
                console.log('   Estimated effort: 3-4 weeks');
                console.log('   Complexity: MEDIUM to HIGH');
            } else {
                console.log(`🚨 SUBSTANTIAL: ${missingFromTS} files to reverse engineer`);
                console.log('   Estimated effort: 6-8 weeks');
                console.log('   Complexity: HIGH');
            }
            
            return {
                v350Files: parseInt(v350JsFiles),
                currentTsFiles: parseInt(currentJsFiles),
                workingFiles: parseInt(workingJsFiles),
                newFiles: newFilesSinceV350,
                missingFiles: missingFromTS
            };
            
        } catch (buildError) {
            console.log('❌ Build failed at v3.5.0');
            execSync(`git checkout ${currentBranch} >/dev/null 2>&1`);
            return null;
        }
        
    } catch (error) {
        console.log('❌ Error calculating effort:', error.message);
        return null;
    }
}

function generateActionPlan(effort) {
    console.log('\\n🚀 TARGETED ACTION PLAN');
    console.log('========================\\n');
    
    if (!effort) {
        console.log('Unable to generate specific plan due to calculation errors.');
        return;
    }
    
    console.log('PHASE 1: PRESERVE YOUR WORK (Day 1)');
    console.log('===================================');
    console.log('✅ Keep all TypeScript files you created since v3.5.0');
    console.log('✅ Ensure working build stays functional');
    console.log('✅ Document what each new component does');
    console.log('');
    
    console.log('PHASE 2: IDENTIFY MISSING PIECES (Days 2-3)');
    console.log('===========================================');
    console.log(`✅ Find which ${effort.missingFiles} files aren't compiling from TS`);
    console.log('✅ Categorize by importance (core vs. utility vs. legacy)');
    console.log('✅ Check if some can be deleted rather than converted');
    console.log('');
    
    console.log('PHASE 3: STRATEGIC CONVERSION (Weeks 2-4)');
    console.log('=========================================');
    console.log('✅ Convert core business logic files first');
    console.log('✅ Convert files that change frequently');
    console.log('✅ Leave stable utility files for last');
    console.log('✅ Test continuously during conversion');
    console.log('');
    
    const timeEstimate = effort.missingFiles <= 50 ? '2-3 weeks' : 
                        effort.missingFiles <= 100 ? '4-5 weeks' : '6-8 weeks';
    
    console.log(`⏱️  TOTAL TIME ESTIMATE: ${timeEstimate}`);
    console.log(`📊 COMPLEXITY: ${effort.missingFiles <= 50 ? 'MANAGEABLE' : effort.missingFiles <= 100 ? 'MODERATE' : 'SUBSTANTIAL'}`);
    console.log('');
    
    console.log('🎯 SUCCESS CRITERIA:');
    console.log('====================');
    console.log('✅ npm run build produces same file count as working build');
    console.log('✅ All your post-v3.5.0 features work identically');
    console.log('✅ New team members can build complete project from source');
    console.log('✅ No more manual JavaScript file management');
}

// Main execution
console.log('🎯 REVERSE ENGINEERING EFFORT ANALYSIS');
console.log('======================================\\n');
console.log('Analyzing everything you added since v3.5.0...\\n');

const changes = analyzeChangesSince350();
const effort = calculateReverseEngineeringEffort();
generateActionPlan(effort);

console.log('\\n💡 BOTTOM LINE:');
console.log('===============');
console.log('Since you want to keep everything since v3.5.0, this is a');
console.log('targeted conversion project, not a full rewrite!');
console.log('');
console.log('Your post-v3.5.0 work in TypeScript is already done.');
console.log('You just need to convert the missing pieces that were');
console.log('manually maintained as JavaScript.');
