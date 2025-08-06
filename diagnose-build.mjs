#!/usr/bin/env node
import { spawn } from 'child_process';
import { readFile } from 'fs/promises';
import path from 'path';

const projectPath = 'C:/SATHYA/CHAINAIM3003/mcp-servers/clonetest2/zk-pret-test-v3.5';

async function runTypeScriptBuild() {
    console.log('🔍 Running TypeScript build to identify current errors...\n');
    
    return new Promise((resolve, reject) => {
        const tsc = spawn('npx', ['tsc'], {
            cwd: projectPath,
            stdio: 'pipe',
            shell: true
        });

        let stdout = '';
        let stderr = '';

        tsc.stdout.on('data', (data) => {
            stdout += data.toString();
        });

        tsc.stderr.on('data', (data) => {
            stderr += data.toString();
        });

        tsc.on('close', (code) => {
            console.log('📊 TypeScript Build Results:');
            console.log('Exit code:', code);
            console.log('\n--- STDOUT ---');
            console.log(stdout);
            console.log('\n--- STDERR ---');
            console.log(stderr);
            
            resolve({ code, stdout, stderr });
        });

        tsc.on('error', (error) => {
            console.error('❌ Error spawning tsc:', error);
            reject(error);
        });
    });
}

async function analyzeErrorFile() {
    try {
        const filePath = path.join(projectPath, 'src/tests/with-sign/ComposedRecursiveOptim3LevelZKProgramWithSign.ts');
        const content = await readFile(filePath, 'utf8');
        const lines = content.split('\n');
        
        console.log('\n🔍 Analyzing problematic file around reported error lines...\n');
        
        // Check around line 140
        console.log('--- Lines around 140 ---');
        for (let i = 135; i <= 145; i++) {
            if (lines[i]) {
                const marker = i === 140 ? ' ⚠️  ' : '    ';
                console.log(`${marker}${i}: ${lines[i]}`);
            }
        }
        
        // Check around line 202
        console.log('\n--- Lines around 202 ---');
        for (let i = 197; i <= 207; i++) {
            if (lines[i]) {
                const marker = i === 202 ? ' ⚠️  ' : '    ';
                console.log(`${marker}${i}: ${lines[i]}`);
            }
        }
        
        // Look for specific patterns
        console.log('\n🔍 Searching for problematic patterns...');
        
        const companyNameMatches = [];
        const legalNameMatches = [];
        
        lines.forEach((line, index) => {
            if (line.includes('companyName.hash')) {
                companyNameMatches.push({ line: index + 1, content: line.trim() });
            }
            if (line.includes('legalName.hash')) {
                legalNameMatches.push({ line: index + 1, content: line.trim() });
            }
        });
        
        if (companyNameMatches.length > 0) {
            console.log('\n🚨 Found "companyName.hash" references:');
            companyNameMatches.forEach(match => {
                console.log(`   Line ${match.line}: ${match.content}`);
            });
        }
        
        if (legalNameMatches.length > 0) {
            console.log('\n🚨 Found "legalName.hash" references:');
            legalNameMatches.forEach(match => {
                console.log(`   Line ${match.line}: ${match.content}`);
            });
        }
        
    } catch (error) {
        console.error('❌ Error reading file:', error.message);
    }
}

async function main() {
    console.log('🚀 TypeScript Error Diagnostics\n');
    console.log('Project:', projectPath);
    
    try {
        await analyzeErrorFile();
        await runTypeScriptBuild();
    } catch (error) {
        console.error('❌ Error during analysis:', error);
    }
}

main().catch(console.error);