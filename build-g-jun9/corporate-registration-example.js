// =================================== Corporate Registration Example Usage ===================================
// This example shows how to use the new CorporateRegistration implementation
import { Mina } from 'o1js';
// Example function demonstrating the usage
async function runCorporateRegistrationExample() {
    console.log('🚀 Corporate Registration ZK Verification Example');
    try {
        // Setup Mina local blockchain
        const Local = await Mina.LocalBlockchain({ proofsEnabled: true });
        Mina.setActiveInstance(Local);
        // Example CIN (Corporate Identity Number)
        const exampleCIN = process.env.CIN || 'U01112TZ2022PTC039493';
        const networkType = 'TESTNET'; // All environments now use live API
        console.log(`📋 Testing CIN: ${exampleCIN}`);
        console.log(`🌐 Network: ${networkType}`);
        console.log(`📡 Using LIVE MCA API for all environments`);
        // Import the verification function
        const { getCorporateRegistrationOptimVerification } = await import('./tests/with-sign/CorporateRegistrationOptimVerificationTestWithSign.js');
        // Run the verification
        console.log('⚡ Starting Corporate Registration verification...');
        const proof = await getCorporateRegistrationOptimVerification(exampleCIN, networkType);
        console.log('✅ Verification completed successfully!');
        console.log('📊 Proof generated and verified on smart contract');
        return proof;
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error('❌ Example failed:', errorMessage);
        throw error;
    }
}
// Usage with enhanced response logging
async function runEnhancedResponseExample() {
    console.log('📡 Enhanced Response Logging Example');
    try {
        const { fetchCorporateRegistrationDataWithFullLogging, analyzeCorporateRegistrationCompliance } = await import('./tests/with-sign/CorporateRegistrationEnhancedUtils.js');
        const exampleCIN = process.env.CIN || 'U01112TZ2022PTC039493';
        // Fetch with comprehensive logging
        console.log('🔍 Fetching data with enhanced logging...');
        const response = await fetchCorporateRegistrationDataWithFullLogging(exampleCIN, 'TESTNET');
        // Analyze compliance
        console.log('📊 Analyzing compliance...');
        const analysis = analyzeCorporateRegistrationCompliance(response, 'TESTNET');
        console.log(`✅ Compliance Score: ${analysis.complianceScore}%`);
        console.log(`🎯 Is Compliant: ${analysis.isCompliant}`);
        if (analysis.issues.length > 0) {
            console.log('⚠️ Issues found:');
            analysis.issues.forEach((issue, index) => {
                console.log(`  ${index + 1}. ${issue}`);
            });
        }
        return { response, analysis };
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error('❌ Enhanced example failed:', errorMessage);
        throw error;
    }
}
// Quick compliance check
async function quickComplianceCheck(cin) {
    console.log(`🔍 Quick compliance check for CIN: ${cin}`);
    try {
        const { isCompanyCorporateRegistrationCompliant } = await import('./tests/with-sign/CorporateRegistrationEnhancedUtils.js');
        const isCompliant = await isCompanyCorporateRegistrationCompliant(cin, 'TESTNET');
        console.log(`✅ Company ${cin} is ${isCompliant ? 'COMPLIANT' : 'NOT COMPLIANT'}`);
        return isCompliant;
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error('❌ Quick check failed:', errorMessage);
        throw error;
    }
}
// Main execution function
async function runAllExamples() {
    console.log('🎬 Running Corporate Registration examples...');
    try {
        // Run enhanced response example first (faster)
        await runEnhancedResponseExample();
        // Then run quick compliance check
        await quickComplianceCheck(process.env.CIN || 'U01112TZ2022PTC039493');
        // Finally run full ZK verification (slower)
        console.log('\n🔐 Starting full ZK verification (this may take 20-35 seconds)...');
        await runCorporateRegistrationExample();
        console.log('🎉 All examples completed successfully!');
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error('❌ Examples failed:', errorMessage);
        process.exit(1);
    }
}
// Export functions for use in other modules
export { runCorporateRegistrationExample, runEnhancedResponseExample, quickComplianceCheck, runAllExamples };
// If run directly
if (import.meta.url === `file://${process.argv[1]}`) {
    runAllExamples();
}
//# sourceMappingURL=corporate-registration-example.js.map