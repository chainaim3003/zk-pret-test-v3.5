/**
 * ====================================================================
 * Risk Liquidity Advanced OptimMerkle Verification Test
 * ====================================================================
 * End-to-end verification test for Advanced Risk scenario
 * Follows modular pattern: API → data prep → signature → witnesses → ZK → contract
 * ====================================================================
 */

import { Field, Mina, PrivateKey, AccountUpdate, CircuitString, Poseidon, Signature, UInt64 } from 'o1js';
import { getPrivateKeyFor } from '../../core/OracleRegistry.js';
import { 
    fetchRiskLiquidityAdvancedOptimMerkleData,
    processAdvancedRiskData,
    buildAdvancedRiskMerkleStructure,
    calculateAdvancedRiskMetrics,
    validateAdvancedRiskData,
    generateAdvancedRiskSummary
} from '../../utils/RiskLiquidityAdvancedOptimMerkleUtils.js';
import { loadContractPortfolio } from '../../utils/ACTUSOptimMerkleAPI.js';
import {
    RiskLiquidityAdvancedOptimMerkleZKProgramWithSign,
    createAdvancedRiskComplianceData,
    validateAdvancedRiskComplianceData
} from '../../zk-programs/with-sign/RiskLiquidityAdvancedOptimMerkleZKProgramWithSign.js';
import { RiskLiquidityAdvancedOptimMerkleSmartContract } from '../../contracts/with-sign/RiskLiquidityAdvancedOptimMerkleSmartContract.js';

// =================================== Main Verification Function ===================================

export async function executeRiskLiquidityAdvancedOptimMerkleVerification(
    liquidityThreshold: number,
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
    console.log('🚀 Starting Advanced Risk Liquidity OptimMerkle Verification...');
    
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
        
        await RiskLiquidityAdvancedOptimMerkleZKProgramWithSign.compile();
        const { verificationKey } = await RiskLiquidityAdvancedOptimMerkleSmartContract.compile();
        
        console.log('✅ Compilation successful');

        // =================================== Step 3: Deploy Smart Contract ===================================
        console.log('📦 Deploying smart contract...');
        
        const zkAppKey = PrivateKey.random();
        const zkAppAddress = zkAppKey.toPublicKey();
        const zkApp = new RiskLiquidityAdvancedOptimMerkleSmartContract(zkAppAddress);

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
        console.log('🌐 Fetching ACTUS data for Advanced Risk scenario...');
        
        const actusResponse = await fetchRiskLiquidityAdvancedOptimMerkleData(actusUrl, contractPortfolio);
        const advancedRiskData = processAdvancedRiskData(
            actusResponse,
            liquidityThreshold,
            5000, // newInvoiceAmount
            11    // newInvoiceEvaluationMonth
        );
        
        console.log(`📈 Processed ${advancedRiskData.periodsCount} periods of cash flow data`);

        // =================================== Step 5: Calculate Risk Metrics ===================================
        console.log('📊 Calculating Advanced Risk metrics...');
        
        const riskMetrics = calculateAdvancedRiskMetrics(advancedRiskData);
        validateAdvancedRiskData(advancedRiskData);
        
        console.log(`💧 Average Liquidity Ratio: ${riskMetrics.averageLiquidityRatio.toFixed(2)}%`);
        console.log(`⚠️ Worst Case Liquidity Ratio: ${riskMetrics.worstCaseLiquidityRatio.toFixed(2)}%`);
        console.log(`✅ Stress Test Result: ${riskMetrics.liquidityStressTestPassed ? 'PASSED' : 'FAILED'}`);

        // =================================== Step 6: Build Merkle Tree Structure ===================================
        console.log('🌳 Building Merkle tree structure...');
        
        const merkleStructure = buildAdvancedRiskMerkleStructure(advancedRiskData);
        const merkleRoot = merkleStructure.merkleRoot;
        
        console.log(`🔐 Merkle root: ${merkleRoot.toString()}`);

        // =================================== Step 7: Create Oracle Signature ===================================
        console.log('🔑 Creating oracle signature...');
        
        const registryPrivateKey = getPrivateKeyFor('RISK');
        const oracleSignature = Signature.create(registryPrivateKey, [merkleRoot]);
        
        console.log('✅ Oracle signature created');

        // =================================== Step 8: Create ZK Compliance Data ===================================
        console.log('📋 Creating ZK compliance data structure...');
        
        const zkComplianceData = createAdvancedRiskComplianceData(
            advancedRiskData.companyID,
            advancedRiskData.companyName,
            advancedRiskData.cashInflow,
            advancedRiskData.cashOutflow,
            advancedRiskData.newInvoiceAmount,
            advancedRiskData.newInvoiceEvaluationMonth,
            advancedRiskData.liquidityThreshold,
            merkleRoot,
            {
                averageLiquidityRatio: riskMetrics.averageLiquidityRatio,
                worstCaseLiquidityRatio: riskMetrics.worstCaseLiquidityRatio,
                liquidityCompliant: riskMetrics.liquidityStressTestPassed
            }
        );
        
        validateAdvancedRiskComplianceData(zkComplianceData);
        console.log('✅ ZK compliance data structure created and validated');

        // =================================== Step 9: Generate ZK Proof ===================================
        console.log('🔒 Generating ZK proof...');
        
        const currentTimestamp = UInt64.from(Date.now());
        const proof = await RiskLiquidityAdvancedOptimMerkleZKProgramWithSign.proveAdvancedRiskCompliance(
            currentTimestamp,
            zkComplianceData,
            oracleSignature,
            merkleStructure.witnesses.companyInfo,
            merkleStructure.witnesses.cashInflow,
            merkleStructure.witnesses.cashOutflow,
            merkleStructure.witnesses.riskMetrics
        );
        
        console.log('✅ ZK proof generated successfully');
        console.log(`📊 Proof public output - Compliant: ${proof.publicOutput.riskCompliant.toBoolean()}`);

        // =================================== Step 10: Verify Proof with Smart Contract ===================================
        console.log('📋 Verifying proof with smart contract...');
        
        const verificationTxn = await Mina.transaction(senderAccount, async () => {
            await zkApp.verifyAdvancedRiskComplianceWithProof(proof);
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
        const summary = generateAdvancedRiskSummary(advancedRiskData, riskMetrics);
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
        console.error('❌ Advanced Risk verification failed:', error);
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
    const liquidityThreshold = parseFloat(process.argv[2]) || 95;
    const actusUrl = process.argv[3] || 'http://localhost:8083/eventsBatch';
    const portfolioPath = process.argv[4]; // Optional portfolio file path
    
    console.log(`🎯 Advanced Risk Liquidity Threshold: ${liquidityThreshold}%`);
    console.log(`🌐 ACTUS API URL: ${actusUrl}`);
    if (portfolioPath) {
        console.log(`📁 Portfolio Path: ${portfolioPath}`);
    }
    
    const result = await executeRiskLiquidityAdvancedOptimMerkleVerification(
        liquidityThreshold,
        actusUrl,
        portfolioPath
    );
    
    if (result.success) {
        console.log('\n🎉 Advanced Risk verification completed successfully!');
        console.log(`📊 Status Change: ${result.contractStatus.beforeVerification} → ${result.contractStatus.afterVerification}`);
        
        if (result.contractStatus.afterVerification === 90) {
            console.log('✅ COMPLIANCE ACHIEVED - Contract status changed to 90');
        } else {
            console.log('❌ COMPLIANCE NOT ACHIEVED - Contract status remains at 100');
        }
    } else {
        console.log('\n❌ Advanced Risk verification failed');
        process.exit(1);
    }
}

// Run the main function
main().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
