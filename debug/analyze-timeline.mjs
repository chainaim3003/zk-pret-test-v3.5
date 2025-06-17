import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('📅 MANUAL TIMELINE ANALYSIS');
console.log('===========================\n');

// Get recent commits with file changes
function analyzeCommitHistory() {
    console.log('🔍 Analyzing recent commits for build-breaking changes...\n');
    
    try {
        // Get last 20 commits with files changed
        const gitLog = execSync('git log --oneline --name-status -20', { encoding: 'utf8' });
        const lines = gitLog.split('\n');
        
        let currentCommit = '';
        let suspiciousCommits = [];
        
        for (const line of lines) {
            if (line.match(/^[a-f0-9]+/)) {
                // This is a commit line
                currentCommit = line;
            } else if (line.trim() && currentCommit) {
                // This is a file change line
                const [action, file] = line.trim().split('\t');
                
                // Look for suspicious changes
                if (file && (
                    file.includes('tsconfig') ||
                    file.includes('package') ||
                    file.includes('.ts') ||
                    file.includes('build') ||
                    file.includes('src/contracts') ||
                    file.includes('src/core') ||
                    file.includes('src/data') ||
                    file.includes('src/utils') ||
                    file.includes('src/zk-programs')
                )) {
                    suspiciousCommits.push({
                        commit: currentCommit,
                        action: action,
                        file: file,
                        suspicious: true
                    });
                }
            }
        }
        
        // Group by commit and show most suspicious ones
        const commitGroups = {};
        suspiciousCommits.forEach(item => {
            if (!commitGroups[item.commit]) {
                commitGroups[item.commit] = [];
            }
            commitGroups[item.commit].push(item);
        });
        
        console.log('🚨 SUSPICIOUS COMMITS (most likely to have broken build):');
        console.log('========================================================\n');
        
        Object.entries(commitGroups).forEach(([commit, changes], index) => {
            const suspicionLevel = changes.length;
            const hasTsConfig = changes.some(c => c.file.includes('tsconfig'));
            const hasPackageJson = changes.some(c => c.file.includes('package.json'));
            const hasManyTsFiles = changes.filter(c => c.file.endsWith('.ts')).length;
            
            let priority = 'LOW';
            if (hasTsConfig || hasPackageJson) priority = 'CRITICAL';
            else if (hasManyTsFiles > 10) priority = 'HIGH';
            else if (hasManyTsFiles > 5) priority = 'MEDIUM';
            
            console.log(`${index + 1}. [${priority}] ${commit}`);
            console.log(`   Suspicion level: ${suspicionLevel} file changes`);
            if (hasTsConfig) console.log('   ⚠️  Modified tsconfig.json!');
            if (hasPackageJson) console.log('   ⚠️  Modified package.json!');
            console.log(`   📁 Modified ${hasManyTsFiles} TypeScript files`);
            
            // Show first few files
            changes.slice(0, 5).forEach(change => {
                console.log(`   ${change.action}: ${change.file}`);
            });
            if (changes.length > 5) {
                console.log(`   ... and ${changes.length - 5} more files`);
            }
            console.log('');
        });
        
    } catch (error) {
        console.log('❌ Could not analyze git history:', error.message);
    }
}

// Check specific commits mentioned in previous analysis
function checkSpecificCommits() {
    console.log('🎯 ANALYZING SPECIFIC COMMITS FROM PREVIOUS INVESTIGATION:');
    console.log('=========================================================\n');
    
    const suspiciousCommits = [
        '0d7e987', // risk regression verification test extra char removed tag v3.5.8
        '353ba90', // Risk StableCoin PRET done
        '193deb7', // Risk Advanced PRET done
        '482ffdc', // Basel 3 working complete tagged 3.5.4
        '89f0e8e'  // Risk Basel 3 fixed tag v3.5.3 (modified tsconfig.json!)
    ];
    
    suspiciousCommits.forEach((commitHash, index) => {
        try {
            console.log(`${index + 1}. Commit ${commitHash}:`);
            
            // Get commit details
            const commitInfo = execSync(`git show --name-only --pretty=format:"%h %s" ${commitHash}`, { encoding: 'utf8' });
            const lines = commitInfo.split('\n');
            const commitTitle = lines[0];
            const changedFiles = lines.slice(1).filter(line => line.trim());
            
            console.log(`   Title: ${commitTitle}`);
            console.log(`   Files changed: ${changedFiles.length}`);
            
            // Check for critical files
            const criticalChanges = changedFiles.filter(file => 
                file.includes('tsconfig') || 
                file.includes('package.json') ||
                file.includes('src/contracts') ||
                file.includes('src/core') ||
                file.includes('src/data')
            );
            
            if (criticalChanges.length > 0) {
                console.log('   🚨 CRITICAL CHANGES:');
                criticalChanges.forEach(file => console.log(`      - ${file}`));
            }
            
            // Check date
            const commitDate = execSync(`git show -s --format=%ci ${commitHash}`, { encoding: 'utf8' }).trim();
            console.log(`   Date: ${commitDate}`);
            console.log('');
            
        } catch (error) {
            console.log(`   ❌ Could not analyze commit ${commitHash}: ${error.message}\n`);
        }
    });
}

// Main execution
analyzeCommitHistory();
checkSpecificCommits();

console.log('💡 RECOMMENDATIONS:');
console.log('===================');
console.log('1. Focus on commits marked as CRITICAL (tsconfig.json or package.json changes)');
console.log('2. Use git bisect to test the exact breaking point');
console.log('3. Look at commit 89f0e8e first (it modified tsconfig.json)');
console.log('4. Check what changed between working and broken versions');
console.log('');
console.log('🔧 NEXT STEPS:');
console.log('==============');
console.log('1. Run: bash debug/find-breaking-commit.sh (for automated bisect)');
console.log('2. Or manually test specific commits with: git checkout <commit> && npm run build');
console.log('3. Compare file counts in each build to find the breaking point');
