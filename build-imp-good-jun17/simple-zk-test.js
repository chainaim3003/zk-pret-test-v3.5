/**
 * Simple test to isolate the ZK program issue
 */
import { Field, Signature, UInt64 } from 'o1js';
import { getPrivateKeyFor } from './core/OracleRegistry.js';
import { RiskLiquidityStableCoinOptimMerkleZKProgramWithSign, createStableCoinRiskComplianceData } from './zk-programs/with-sign/RiskLiquidityStableCoinOptimMerkleZKProgramWithSign.js';
import { MerkleWitness8 } from './utils/CoreZKUtilities.js';

async function testSimpleZKProgram() {
    console.log('🧪 Testing simplified ZK program...');
    
    try {
        // Compile the ZK program
        console.log('🔧 Compiling ZK program...');
        await RiskLiquidityStableCoinOptimMerkleZKProgramWithSign.compile();
        console.log('✅ Compilation successful');
        
        // Create simple test data with small values
        console.log('📋 Creating simple test data...');
        
        const reserveComponents = {
            cashReservesTotal: 1000,
            treasuryReservesTotal: 1000,
            corporateReservesTotal: 1000,
            otherReservesTotal: 1000
        };
        
        const tokenInfo = {
            outstandingTokensTotal: 4000,
            tokenValue: 1.0
        };
        
        const qualityMetrics = {
            averageLiquidityScore: 90,
            averageCreditRating: 85,
            averageMaturity: 30,
            assetQualityScore: 80
        };
        
        const thresholds = {
            backingRatioThreshold: 100,
            liquidityRatioThreshold: 20,
            concentrationLimit: 25,
            qualityThreshold: 80
        };
        
        const additionalParams = {
            periodsCount: 12,
            liquidityThreshold: 10,
            newInvoiceAmount: 1000,
            newInvoiceEvaluationMonth: 6
        };
        
        const calculatedMetrics = {
            backingRatio: 100,
            liquidityRatio: 50,
            concentrationRisk: 25,
            backingCompliant: true,
            liquidityCompliant: true,
            concentrationCompliant: true,
            qualityCompliant: true,
            stableCoinCompliant: true
        };
        
        // Use a VERY small Merkle root
        const merkleRoot = Field(123);
        console.log('🔐 Using simple Merkle root:', merkleRoot.toString());
        
        const zkComplianceData = createStableCoinRiskComplianceData(
            'TEST_001',
            'Test Company',
            reserveComponents,
            tokenInfo,
            qualityMetrics,
            thresholds,
            additionalParams,
            merkleRoot,
            calculatedMetrics
        );
        
        console.log('📊 ZK Compliance Data created successfully');
        console.log('  Cash Reserves:', zkComplianceData.cashReservesTotal.toString());
        console.log('  Timestamp:', zkComplianceData.verificationTimestamp.toString());
        
        // Create oracle signature
        console.log('🔑 Creating oracle signature...');
        const registryPrivateKey = getPrivateKeyFor('RISK');
        const oracleSignature = Signature.create(registryPrivateKey, [merkleRoot]);
        
        // Use simple timestamp
        const currentTimestamp = UInt64.from(1000);
        console.log('⏰ Using simple timestamp:', currentTimestamp.toString());
        
        // Create dummy witnesses using proper MerkleWitness8 instances
        console.log('🔗 Creating dummy Merkle witnesses...');
        const dummyWitness = new MerkleWitness8([
            { isLeft: false, sibling: Field(1) },
            { isLeft: false, sibling: Field(1) },
            { isLeft: false, sibling: Field(1) },
            { isLeft: false, sibling: Field(1) },
            { isLeft: false, sibling: Field(1) },
            { isLeft: false, sibling: Field(1) },
            { isLeft: false, sibling: Field(1) },
            { isLeft: false, sibling: Field(1) }
        ]);
        
        console.log('🔒 Generating ZK proof...');
        const proof = await RiskLiquidityStableCoinOptimMerkleZKProgramWithSign.proveStableCoinRiskCompliance(
            currentTimestamp,
            zkComplianceData,
            oracleSignature,
            dummyWitness,
            dummyWitness,
            dummyWitness,
            dummyWitness,
            dummyWitness
        );
        
        console.log('✅ ZK proof generated successfully!');
        console.log('📊 Proof result:', proof.publicOutput.stableCoinCompliant.toBoolean());
        
        return true;
        
    } catch (error) {
        console.error('❌ Test failed:', error);
        return false;
    }
}

// Run the test
testSimpleZKProgram().then(success => {
    if (success) {
        console.log('\n🎉 Simple ZK test PASSED!');
    } else {
        console.log('\n💥 Simple ZK test FAILED!');
        process.exit(1);
    }
}).catch(err => {
    console.error('💥 Unexpected error:', err);
    process.exit(1);
});
