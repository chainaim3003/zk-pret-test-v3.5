#!/usr/bin/env node

/**
 * GLEIFEnhancedVerifierSmartContractWithSign.js
 * 
 * This is a wrapper script that provides the correct interface for the Enhanced GLEIF
 * verification system. It redirects to the actual implementation in the build directory.
 * 
 * Usage:
 *   node GLEIFEnhancedVerifierSmartContractWithSign.js <company_name> [network_type] [verification_mode] [additional_params]
 * 
 * Examples:
 *   node GLEIFEnhancedVerifierSmartContractWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET" "STANDARD"
 *   node GLEIFEnhancedVerifierSmartContractWithSign.js "Company A" "TESTNET" "GROUP" "Company B"
 *   node GLEIFEnhancedVerifierSmartContractWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET" "HISTORICAL" "730"
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log('❌ Error: Missing required arguments');
    console.log('');
    console.log('📖 Usage:');
    console.log('   node GLEIFEnhancedVerifierSmartContractWithSign.js <company_name> [network_type] [verification_mode] [additional_params]');
    console.log('');
    console.log('📋 Examples:');
    console.log('   Standard:   node GLEIFEnhancedVerifierSmartContractWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET" "STANDARD"');
    console.log('   Group:      node GLEIFEnhancedVerifierSmartContractWithSign.js "Company A" "TESTNET" "GROUP" "Company B"');
    console.log('   Historical: node GLEIFEnhancedVerifierSmartContractWithSign.js "SREE PALANI ANDAVAR AGROS PRIVATE LIMITED" "TESTNET" "HISTORICAL" "730"');
    console.log('');
    process.exit(1);
}

// Extract and normalize parameters
const companyName = args[0];
const networkType = args[1] || 'TESTNET';
const verificationMode = (args[2] || 'STANDARD').toLowerCase();
const additionalParam = args[3];

// Map verification modes to the expected format
let mappedArgs = [companyName, networkType];

if (verificationMode === 'group' && additionalParam) {
    mappedArgs.push('group', additionalParam);
} else if (verificationMode === 'historical') {
    mappedArgs.push('historical', additionalParam || '365');
} else {
    // Standard verification (default)
    mappedArgs.push('standard');
}

// Path to the actual implementation
const actualTestPath = join(__dirname, 'build', 'tests', 'with-sign', 'EnhancedGLEIFVerificationTestWithSign.js');

console.log('🌟 Enhanced GLEIF Verification Wrapper');
console.log('=====================================');
console.log(`📋 Company: ${companyName}`);
console.log(`🌐 Network: ${networkType}`);
console.log(`🔍 Mode: ${verificationMode.toUpperCase()}`);
if (additionalParam) {
    console.log(`➕ Additional: ${additionalParam}`);
}
console.log('🚀 Redirecting to enhanced verification system...');
console.log(`📁 Target: ${actualTestPath}`);
console.log(`🔧 Args: ${mappedArgs.join(' ')}`);
console.log('');

// Execute the actual test with the mapped arguments
const child = spawn('node', [actualTestPath, ...mappedArgs], {
    stdio: 'inherit'
});

child.on('error', (error) => {
    console.error('❌ Failed to start enhanced GLEIF verification:', error.message);
    console.error('💡 Make sure to run "npm run build" first to compile the TypeScript files');
    console.error(`📁 Attempted to run: ${actualTestPath}`);
    process.exit(1);
});

child.on('spawn', () => {
    console.log('✅ Enhanced GLEIF verification process started successfully');
});

child.on('close', (code) => {
    console.log(`\n📊 Enhanced GLEIF verification process completed with exit code: ${code}`);
    if (code !== 0) {
        console.error(`❌ Enhanced GLEIF verification exited with code ${code}`);
    } else {
        console.log('✅ Enhanced GLEIF verification completed successfully');
    }
    process.exit(code || 0);
});
