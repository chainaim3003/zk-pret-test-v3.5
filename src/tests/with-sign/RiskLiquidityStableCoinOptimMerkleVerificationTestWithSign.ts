/**
 * ====================================================================
 * Risk Liquidity StableCoin OptimMerkle Verification Test
 * ====================================================================
 * End-to-end verification test for StableCoin Proof of Reserves scenario
 * Follows modular pattern: API → data prep → signature → witnesses → ZK → contract
 * ====================================================================
 */

import { Field, Mina, PrivateKey, AccountUpdate, CircuitString, Poseidon, Signature, UInt64 } from 'o1js';
import { getPrivateKeyFor } from '../../core/OracleRegistry.js';
import { 
    fetchRiskLiquidityStableCoinOptimMerkleData,
    processStableCoinRiskData,
    buildStableCoinRiskMerkleStructure,
    calculateStableCoinRiskMetrics,
    validateStableCoinRiskData,
    generateStableCoinRiskSummary
} from '../../utils/RiskLiquidityStableCoinOptimMerkleUtils.js';
import { loadContractPortfolio } from '../../utils/ACTUSOptimMerkleAPI.js';
import {
    RiskLiquidityStableCoinOptimMerkleZKProgramWithSign,
    createStableCoinRiskComplianceData,
    validateStableCoinRiskComplianceData
} from '../../zk-programs/with-sign/RiskLiquidityStableCoinOptimMerkleZKProgramWithSign.js';
import { RiskLiquidityStableCoinOptimMerkleSmartContract } from '../../contracts/with-sign/RiskLiquidityStableCoinOptimMerkleSmartContract.js';

// =================================== Main Verification Function ===================================

export async function executeRiskLiquidityStableCoinOptimMerkleVerification(
    backingRatioThreshold: number = 100,
    liquidityRatioThreshold: number = 20,
    concentrationLimit: number = 25,
    qualityThreshold: number = 80,
    actusUrl: string = 'http://localhost:8083/eventsBatch',
    contractPortfolio?: string | any[]
): Promise<{
    success: boolean;
    proof: any;
    contractStatus: {
        beforeVerification: number;
        afterVerification: number;
    };
    riskMetrics: any;
    summary: string;
}> {
    console.log('🚀 Starting StableCoin Proof of Reserves OptimMerkle Verification...');
    
    try {
        // =================================== Step 1: Setup Blockchain Environment ===================================
        console.log('📋 Setting up blockchain environment...');
        
        const useProof = false; // Set to true for production
        const Local = await Mina.LocalBlockchain({ proofsEnabled: useProof });
        Mina.setActiveInstance(Local);

        const deployerAccount = Local.testAccounts[0];
        const deployerKey = deployerAccount.key;
        const senderAccount = Local.testAccounts[1];
        const senderKey = senderAccount.key;

        // =================================== Step 2: Compile ZK Program and Smart Contract ===================================
        console.log('🔧 Compiling ZK program and smart contract...');
        
        await RiskLiquidityStableCoinOptimMerkleZKProgramWithSign.compile();
        const { verificationKey } = await RiskLiquidityStableCoinOptimMerkleSmartContract.compile();
        
        console.log('✅ Compilation successful');

        // =================================== Step 3: Deploy Smart Contract ===================================
        console.log('📦 Deploying smart contract...');
        
        const zkAppKey = PrivateKey.random();
        const zkAppAddress = zkAppKey.toPublicKey();
        const zkApp = new RiskLiquidityStableCoinOptimMerkleSmartContract(zkAppAddress);

        const deployTxn = await Mina.transaction(deployerAccount, async () => {
            AccountUpdate.fundNewAccount(deployerAccount);
            await zkApp.deploy({ verificationKey });
        });
        
        await deployTxn.sign([deployerKey, zkAppKey]).send();
        console.log('✅ Smart contract deployed');

        // Get initial contract status (should be 100)
        const initialStatus = zkApp.riskComplianceStatus.get().toBigInt();
        console.log(`📊 Initial contract status: ${initialStatus}`);

        // =================================== Step 4: Fetch and Process ACTUS Data ===================================
        console.log('🌐 Fetching ACTUS data for StableCoin scenario...');
        
        const actusResponse = await fetchRiskLiquidityStableCoinOptimMerkleData(actusUrl, contractPortfolio);
        const stableCoinRiskData = processStableCoinRiskData(
            actusResponse,
            backingRatioThreshold,
            liquidityRatioThreshold,
            concentrationLimit,
            qualityThreshold,
            1000000, // outstandingTokensAmount
            1.0,     // tokenValue
            10,      // liquidityThreshold
            5000,    // newInvoiceAmount
            11       // newInvoiceEvaluationMonth
        );
        
        console.log(`📈 Processed ${stableCoinRiskData.periodsCount} periods with reserve categorization`);

        // =================================== Step 5: Calculate StableCoin Risk Metrics ===================================
        console.log('📊 Calculating StableCoin reserve metrics...');
        
        const riskMetrics = calculateStableCoinRiskMetrics(stableCoinRiskData);
        validateStableCoinRiskData(stableCoinRiskData);
        
        console.log(`🪙 Average Backing Ratio: ${riskMetrics.averageBackingRatio.toFixed(2)}%`);
        console.log(`💧 Average Liquidity Ratio: ${riskMetrics.averageLiquidityRatio.toFixed(2)}%`);
        console.log(`🎯 Max Concentration Risk: ${riskMetrics.maxConcentrationRisk.toFixed(2)}%`);
        console.log(`⭐ Average Asset Quality: ${riskMetrics.averageAssetQuality.toFixed(2)}`);
        console.log(`✅ Backing Compliance: ${riskMetrics.backingCompliant ? 'PASSED' : 'FAILED'}`);
        console.log(`✅ Liquidity Compliance: ${riskMetrics.liquidityCompliant ? 'PASSED' : 'FAILED'}`);
        console.log(`✅ Concentration Compliance: ${riskMetrics.concentrationCompliant ? 'PASSED' : 'FAILED'}`);
        console.log(`✅ Quality Compliance: ${riskMetrics.qualityCompliant ? 'PASSED' : 'FAILED'}`);
        console.log(`✅ Overall StableCoin Compliance: ${riskMetrics.overallCompliant ? 'PASSED' : 'FAILED'}`);

        // =================================== Step 6: Build Merkle Tree Structure ===================================
        console.log('🌳 Building Merkle tree structure...');
        
        const merkleStructure = buildStableCoinRiskMerkleStructure(stableCoinRiskData);
        const merkleRoot = merkleStructure.merkleRoot;
        
        console.log(`🔐 Merkle root: ${merkleRoot.toString()}`);

        // =================================== Step 7: Create Oracle Signature ===================================
        console.log('🔑 Creating oracle signature...');
        
        const registryPrivateKey = getPrivateKeyFor('RISK');
        const oracleSignature = Signature.create(registryPrivateKey, [merkleRoot]);
        
        console.log('✅ Oracle signature created');

        // =================================== Step 8: Create ZK Compliance Data ===================================
        console.log('📋 Creating ZK compliance data structure...');
        
        // Calculate aggregated totals for StableCoin
        const reserveComponents = {
            cashReservesTotal: stableCoinRiskData.cashReserves.reduce((sum, val) => sum + val, 0),
            treasuryReservesTotal: stableCoinRiskData.treasuryReserves.reduce((sum, val) => sum + val, 0),
            corporateReservesTotal: stableCoinRiskData.corporateReserves.reduce((sum, val) => sum + val, 0),
            otherReservesTotal: stableCoinRiskData.otherReserves.reduce((sum, val) => sum + val, 0)
        };
        
        const tokenInfo = {
            outstandingTokensTotal: stableCoinRiskData.outstandingTokens.reduce((sum, val) => sum + val, 0),
            tokenValue: stableCoinRiskData.tokenValue
        };
        
        const qualityMetrics = {
            averageLiquidityScore: stableCoinRiskData.liquidityScores.reduce((sum, val) => sum + val, 0) / stableCoinRiskData.liquidityScores.length,
            averageCreditRating: stableCoinRiskData.creditRatings.reduce((sum, val) => sum + val, 0) / stableCoinRiskData.creditRatings.length,
            averageMaturity: stableCoinRiskData.maturityProfiles.reduce((sum, val) => sum + val, 0) / stableCoinRiskData.maturityProfiles.length,
            assetQualityScore: riskMetrics.averageAssetQuality
        };
        
        const thresholds = {
            backingRatioThreshold: stableCoinRiskData.backingRatioThreshold,
            liquidityRatioThreshold: stableCoinRiskData.liquidityRatioThreshold,
            concentrationLimit: stableCoinRiskData.concentrationLimit,
            qualityThreshold: stableCoinRiskData.qualityThreshold
        };
        
        const additionalParams = {
            periodsCount: stableCoinRiskData.periodsCount,
            liquidityThreshold: stableCoinRiskData.liquidityThreshold,
            newInvoiceAmount: stableCoinRiskData.newInvoiceAmount,
            newInvoiceEvaluationMonth: stableCoinRiskData.newInvoiceEvaluationMonth
        };
        
        const calculatedMetrics = {
            backingRatio: riskMetrics.averageBackingRatio,
            liquidityRatio: riskMetrics.averageLiquidityRatio,
            concentrationRisk: riskMetrics.maxConcentrationRisk,
            backingCompliant: riskMetrics.backingCompliant,
            liquidityCompliant: riskMetrics.liquidityCompliant,
            concentrationCompliant: riskMetrics.concentrationCompliant,
            qualityCompliant: riskMetrics.qualityCompliant,
            stableCoinCompliant: riskMetrics.overallCompliant
        };
        
        const zkComplianceData = createStableCoinRiskComplianceData(
            stableCoinRiskData.companyID,
            stableCoinRiskData.companyName,
            reserveComponents,
            tokenInfo,
            qualityMetrics,
            thresholds,
            additionalParams,
            merkleRoot,
            calculatedMetrics
        );
        
        validateStableCoinRiskComplianceData(zkComplianceData);
        console.log('✅ ZK compliance data structure created and validated');

        // =================================== Step 9: Generate ZK Proof ===================================
        console.log('🔒 Generating ZK proof...');
        
        const currentTimestamp = UInt64.from(Date.now());
        const proof = await RiskLiquidityStableCoinOptimMerkleZKProgramWithSign.proveStableCoinRiskCompliance(
            currentTimestamp,
            zkComplianceData,
            oracleSignature,
            merkleStructure.witnesses.companyInfo,
            merkleStructure.witnesses.reserves,
            merkleStructure.witnesses.tokens,
            merkleStructure.witnesses.qualityMetrics,
            merkleStructure.witnesses.thresholds
        );
        
        console.log('✅ ZK proof generated successfully');
        console.log(`📊 Proof public output - StableCoin Compliant: ${proof.publicOutput.stableCoinCompliant.toBoolean()}`);
        console.log(`📊 Proof public output - Backing Ratio: ${proof.publicOutput.backingRatio.toString()}`);
        console.log(`📊 Proof public output - Liquidity Ratio: ${proof.publicOutput.liquidityRatio.toString()}`);
        console.log(`📊 Proof public output - Concentration Risk: ${proof.publicOutput.concentrationRisk.toString()}`);
        console.log(`📊 Proof public output - Asset Quality Score: ${proof.publicOutput.assetQualityScore.toString()}`);

        // =================================== Step 10: Verify Proof with Smart Contract ===================================
        console.log('📋 Verifying proof with smart contract...');
        
        const verificationTxn = await Mina.transaction(senderAccount, async () => {
            await zkApp.verifyStableCoinRiskComplianceWithProof(proof);
        });
        
        const proofTxn = await verificationTxn.prove();
        await verificationTxn.sign([senderKey]).send();
        
        console.log('✅ Proof verified by smart contract');

        // =================================== Step 11: Check Final Contract Status ===================================
        const finalStatus = zkApp.riskComplianceStatus.get().toBigInt();
        const totalVerifications = zkApp.totalVerifications.get().toBigInt();
        
        console.log(`📊 Final contract status: ${finalStatus}`);
        console.log(`🔢 Total verifications: ${totalVerifications}`);

        // =================================== Step 12: Generate Summary Report ===================================
        const summary = generateStableCoinRiskSummary(stableCoinRiskData, riskMetrics);
        console.log('\n' + summary);

        // =================================== Return Results ===================================
        return {
            success: true,
            proof: proof,
            contractStatus: {
                beforeVerification: Number(initialStatus),
                afterVerification: Number(finalStatus)
            },
            riskMetrics: riskMetrics,
            summary: summary
        };
        
    } catch (error) {
        console.error('❌ StableCoin Risk verification failed:', error);
        return {
            success: false,
            proof: null,
            contractStatus: {
                beforeVerification: 100,
                afterVerification: 100
            },
            riskMetrics: null,
            summary: `Verification failed: ${error}`
        };
    }
}

// =================================== CLI Entry Point ===================================

async function main() {
    const backingRatioThreshold = parseFloat(process.argv[2]) || 100;
    const liquidityRatioThreshold = parseFloat(process.argv[3]) || 20;
    const concentrationLimit = parseFloat(process.argv[4]) || 25;
    const qualityThreshold = parseFloat(process.argv[5]) || 80;
    const actusUrl = process.argv[6] || 'http://localhost:8083/eventsBatch';
    const portfolioPath = process.argv[7]; // Optional portfolio file path
    
    console.log(`🎯 StableCoin Backing Ratio Threshold: ${backingRatioThreshold}%`);
    console.log(`🎯 StableCoin Liquidity Ratio Threshold: ${liquidityRatioThreshold}%`);
    console.log(`🎯 StableCoin Concentration Limit: ${concentrationLimit}%`);
    console.log(`🎯 StableCoin Quality Threshold: ${qualityThreshold}`);
    console.log(`🌐 ACTUS API URL: ${actusUrl}`);
    if (portfolioPath) {
        console.log(`📁 Portfolio Path: ${portfolioPath}`);
    }
    
    const result = await executeRiskLiquidityStableCoinOptimMerkleVerification(
        backingRatioThreshold,
        liquidityRatioThreshold,
        concentrationLimit,
        qualityThreshold,
        actusUrl,
        portfolioPath
    );
    
    if (result.success) {
        console.log('\n🎉 StableCoin Risk verification completed successfully!');
        console.log(`📊 Status Change: ${result.contractStatus.beforeVerification} → ${result.contractStatus.afterVerification}`);
        
        if (result.contractStatus.afterVerification === 90) {
            console.log('✅ STABLECOIN COMPLIANCE ACHIEVED - Contract status changed to 90');
        } else {
            console.log('❌ STABLECOIN COMPLIANCE NOT ACHIEVED - Contract status remains at 100');
        }
    } else {
        console.log('\n❌ StableCoin Risk verification failed');
        process.exit(1);
    }
}

// Run the main function
main().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
