import { readFileSync, writeFileSync } from 'fs';
import { spawn } from 'child_process';

const filePath = 'C:/SATHYA/CHAINAIM3003/mcp-servers/clonetest2/zk-pret-test-v3.5/src/tests/with-sign/ComposedRecursiveOptim3LevelZKProgramWithSign.ts';
const projectPath = 'C:/SATHYA/CHAINAIM3003/mcp-servers/clonetest2/zk-pret-test-v3.5';

async function runTSC() {
    return new Promise((resolve, reject) => {
        console.log('🔨 Running TypeScript compilation...');
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
            resolve({ code, stdout, stderr });
        });

        tsc.on('error', (error) => {
            reject(error);
        });
    });
}

async function fixTypeScriptPropertyErrors() {
    console.log('🔧 TypeScript Property Error Fix Tool\n');
    
    try {
        // First, run TSC to see current errors
        console.log('=== Running TypeScript Build to Check Current Status ===');
        const result = await runTSC();
        
        console.log(`Exit code: ${result.code}`);
        if (result.stdout) {
            console.log('STDOUT:', result.stdout);
        }
        if (result.stderr) {
            console.log('STDERR:', result.stderr);
        }
        
        // Read the file
        console.log('\n=== Analyzing File Content ===');
        const content = readFileSync(filePath, 'utf8');
        let modifiedContent = content;
        let hasChanges = false;
        
        // Fix 1: Replace eximOutput.companyName with eximOutput.entityName
        if (content.includes('eximOutput.companyName')) {
            console.log('🔧 Fixing: eximOutput.companyName → eximOutput.entityName');
            modifiedContent = modifiedContent.replace(/eximOutput\.companyName/g, 'eximOutput.entityName');
            hasChanges = true;
        }
        
        // Fix 2: Replace gleifOutput.legalName with gleifOutput.name
        if (content.includes('gleifOutput.legalName')) {
            console.log('🔧 Fixing: gleifOutput.legalName → gleifOutput.name');
            modifiedContent = modifiedContent.replace(/gleifOutput\.legalName/g, 'gleifOutput.name');
            hasChanges = true;
        }
        
        // Check for other potential issues
        const lines = content.split('\n');
        lines.forEach((line, index) => {
            const lineNum = index + 1;
            
            // Look for other potential property mismatches
            if (line.includes('eximOutput.') && !line.includes('entityName') && !line.includes('iec') && !line.includes('isEXIMCompliant') && !line.includes('verification_timestamp') && !line.includes('merkle_root')) {
                if (line.includes('.hash()')) {
                    console.log(`⚠️  Line ${lineNum}: Potential EXIM property issue: ${line.trim()}`);
                }
            }
            
            if (line.includes('gleifOutput.') && !line.includes('name') && !line.includes('lei') && !line.includes('isGLEIFCompliant') && !line.includes('verification_timestamp') && !line.includes('merkle_root')) {
                if (line.includes('.hash()')) {
                    console.log(`⚠️  Line ${lineNum}: Potential GLEIF property issue: ${line.trim()}`);
                }
            }
        });
        
        // Write the fixed content if changes were made
        if (hasChanges) {
            console.log('\n🔧 Writing fixed content to file...');
            writeFileSync(filePath, modifiedContent, 'utf8');
            console.log('✅ File updated successfully');
            
            // Run TSC again to verify the fix
            console.log('\n=== Running TypeScript Build After Fix ===');
            const resultAfter = await runTSC();
            
            console.log(`Exit code after fix: ${resultAfter.code}`);
            if (resultAfter.code === 0) {
                console.log('🎉 TypeScript compilation successful!');
            } else {
                console.log('❌ TypeScript compilation still has errors:');
                if (resultAfter.stdout) {
                    console.log('STDOUT:', resultAfter.stdout);
                }
                if (resultAfter.stderr) {
                    console.log('STDERR:', resultAfter.stderr);
                }
            }
        } else {
            console.log('✅ No obvious property access issues found in file');
            
            if (result.code !== 0) {
                console.log('\n❌ TypeScript compilation failed with other errors:');
                console.log('The errors might be in different files or different types of issues');
            }
        }
        
    } catch (error) {
        console.error('❌ Error during fix process:', error.message);
    }
}

// Property reference guide
console.log('\n📚 Expected TypeScript Properties:');
console.log('EXIMOptimPublicOutput properties: iec, entityName, isEXIMCompliant, verification_timestamp, merkle_root');
console.log('GLEIFOptimPublicOutput properties: lei, name, isGLEIFCompliant, verification_timestamp, merkle_root');
console.log('CorporateRegistrationOptimPublicOutput properties: companyName, CIN, isCorporateCompliant, verification_timestamp, merkle_root\n');

fixTypeScriptPropertyErrors();