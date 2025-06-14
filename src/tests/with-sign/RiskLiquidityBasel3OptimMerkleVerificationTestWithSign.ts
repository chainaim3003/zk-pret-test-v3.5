/**
 * ====================================================================
 * Risk Liquidity Basel3 OptimMerkle Verification Test
 * ====================================================================
 * End-to-end verification test for Basel3 LCR/NSFR Risk scenario
 * Follows modular pattern: API → data prep → signature → witnesses → ZK → contract
 * ====================================================================
 */

import { Field, Mina, PrivateKey, AccountUpdate, CircuitString, Poseidon, Signature, UInt64 } from 'o1js';
import { getPrivateKeyFor } from '../../core/OracleRegistry.js';
import { 
    fetchRiskLiquidityBasel3OptimMerkleData,
    processBasel3RiskData,
    buildBasel3RiskMerkleStructure,
    calculateBasel3RiskMetrics,
    validateBasel3RiskData,
    generateBasel3RiskSummary
} from '../../utils/RiskLiquidityBasel3OptimMerkleUtils.js';
import { loadContractPortfolio } from '../../utils/ACTUSOptimMerkleAPI.js';
import {
    RiskLiquidityBasel3OptimMerkleZKProgramWithSign,
    createBasel3RiskComplianceData,
    validateBasel3RiskComplianceData
} from '../../zk-programs/with-sign/RiskLiquidityBasel3OptimMerkleZKProgramWithSign.js';
import { RiskLiquidityBasel3OptimMerkleSmartContract } from '../../contracts/with-sign/RiskLiquidityBasel3OptimMerkleSmartContract.js';

// =================================== Main Verification Function ===================================

export async function executeRiskLiquidityBasel3OptimMerkleVerification(
    lcrThreshold: number,
    nsfrThreshold: number = 100,
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
    console.log('🚀 Starting Basel3 LCR/NSFR OptimMerkle Verification...');
    
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
        
        await RiskLiquidityBasel3OptimMerkleZKProgramWithSign.compile();
        const { verificationKey } = await RiskLiquidityBasel3OptimMerkleSmartContract.compile();
        
        console.log('✅ Compilation successful');

        // =================================== Step 3: Deploy Smart Contract ===================================
        console.log('📦 Deploying smart contract...');
        
        const zkAppKey = PrivateKey.random();
        const zkAppAddress = zkAppKey.toPublicKey();
        const zkApp = new RiskLiquidityBasel3OptimMerkleSmartContract(zkAppAddress);

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
        console.log('🌐 Fetching ACTUS data for Basel3 scenario...');
        
        const actusResponse = await fetchRiskLiquidityBasel3OptimMerkleData(actusUrl, contractPortfolio);
        const basel3RiskData = await processBasel3RiskData(
            actusResponse,
            lcrThreshold,
            nsfrThreshold,
            10,   // liquidityThreshold
            5000, // newInvoiceAmount
            11    // newInvoiceEvaluationMonth
        );
        
        console.log(`📈 Processed ${basel3RiskData.periodsCount} periods with Basel3 categorization`);

        // =================================== Step 5: Calculate Basel3 Risk Metrics ===================================
        console.log('📊 Calculating Basel3 LCR/NSFR metrics...');
        
        const riskMetrics = calculateBasel3RiskMetrics(basel3RiskData);
        validateBasel3RiskData(basel3RiskData);
        
        console.log(`🏦 Average LCR: ${riskMetrics.averageLCR.toFixed(2)}%`);
        console.log(`💰 Average NSFR: ${riskMetrics.averageNSFR.toFixed(2)}%`);
        console.log(`⚠️ Worst Case LCR: ${riskMetrics.worstCaseLCR.toFixed(2)}%`);
        console.log(`⚠️ Worst Case NSFR: ${riskMetrics.worstCaseNSFR.toFixed(2)}%`);
        console.log(`✅ LCR Compliance: ${riskMetrics.lcrCompliant ? 'PASSED' : 'FAILED'}`);
        console.log(`✅ NSFR Compliance: ${riskMetrics.nsfrCompliant ? 'PASSED' : 'FAILED'}`);
        console.log(`✅ Overall Basel3 Compliance: ${riskMetrics.overallCompliant ? 'PASSED' : 'FAILED'}`);

        // =================================== Step 6: Build Merkle Tree Structure ===================================
        console.log('🌳 Building Merkle tree structure...');
        
        const merkleStructure = buildBasel3RiskMerkleStructure(basel3RiskData);
        const merkleRoot = merkleStructure.merkleRoot;
        
        console.log(`🔐 Merkle root: ${merkleRoot.toString()}`);

        // =================================== Step 7: Create Oracle Signature ===================================
        console.log('🔑 Creating oracle signature...');
        
        const registryPrivateKey = getPrivateKeyFor('RISK');
        const oracleSignature = Signature.create(registryPrivateKey, [merkleRoot]);
        
        console.log('✅ Oracle signature created');

        // =================================== Step 8: Create ZK Compliance Data ===================================
        console.log('📋 Creating ZK compliance data structure...');
        
        // Calculate aggregated totals for Basel3
        const hqlaComponents = {
            level1Total: basel3RiskData.hqlaLevel1.reduce((sum, val) => sum + val, 0),
            level2ATotal: basel3RiskData.hqlaLevel2A.reduce((sum, val) => sum + val, 0),
            level2BTotal: basel3RiskData.hqlaLevel2B.reduce((sum, val) => sum + val, 0),
            netCashOutflowsTotal: basel3RiskData.netCashOutflows.reduce((sum, val) => sum + val, 0)
        };
        
        const nsfrComponents = {
            availableStableFundingTotal: basel3RiskData.availableStableFunding.reduce((sum, val) => sum + val, 0),
            requiredStableFundingTotal: basel3RiskData.requiredStableFunding.reduce((sum, val) => sum + val, 0)
        };
        
        const thresholds = {
            lcrThreshold: basel3RiskData.lcrThreshold,
            nsfrThreshold: basel3RiskData.nsfrThreshold
        };
        
        const additionalParams = {
            periodsCount: basel3RiskData.periodsCount,
            liquidityThreshold: basel3RiskData.liquidityThreshold,
            newInvoiceAmount: basel3RiskData.newInvoiceAmount,
            newInvoiceEvaluationMonth: basel3RiskData.newInvoiceEvaluationMonth
        };
        
        const calculatedMetrics = {
            lcrRatio: riskMetrics.averageLCR,
            nsfrRatio: riskMetrics.averageNSFR,
            lcrCompliant: riskMetrics.lcrCompliant,
            nsfrCompliant: riskMetrics.nsfrCompliant,
            basel3Compliant: riskMetrics.overallCompliant
        };
        
        const zkComplianceData = createBasel3RiskComplianceData(
            basel3RiskData.companyID,
            basel3RiskData.companyName,
            hqlaComponents,
            nsfrComponents,
            thresholds,
            additionalParams,
            merkleRoot,
            calculatedMetrics
        );
        
        validateBasel3RiskComplianceData(zkComplianceData);
        console.log('✅ ZK compliance data structure created and validated');

        // =================================== Step 9: Generate ZK Proof ===================================
        console.log('🔒 Generating ZK proof...');
        
        const currentTimestamp = UInt64.from(Date.now());
        const proof = await RiskLiquidityBasel3OptimMerkleZKProgramWithSign.proveBasel3RiskCompliance(
            currentTimestamp,
            zkComplianceData,
            oracleSignature,
            merkleStructure.witnesses.companyInfo,
            merkleStructure.witnesses.cashFlows,
            merkleStructure.witnesses.hqlaComponents,
            merkleStructure.witnesses.nsfrComponents,
            merkleStructure.witnesses.thresholds
        );
        
        console.log('✅ ZK proof generated successfully');
        console.log(`📊 Proof public output - Basel3 Compliant: ${proof.publicOutput.basel3Compliant.toBoolean()}`);
        console.log(`📊 Proof public output - LCR Ratio: ${proof.publicOutput.lcrRatio.toString()}`);
        console.log(`📊 Proof public output - NSFR Ratio: ${proof.publicOutput.nsfrRatio.toString()}`);
        console.log(`📊 Proof public output - LCR Threshold: ${proof.publicOutput.lcrThreshold.toString()}`);
        console.log(`📊 Proof public output - NSFR Threshold: ${proof.publicOutput.nsfrThreshold.toString()}`);

        // =================================== Step 10: Verify Proof with Smart Contract ===================================
        console.log('📋 Verifying proof with smart contract...');
        
        const verificationTxn = await Mina.transaction(senderAccount, async () => {
            await zkApp.verifyBasel3RiskComplianceWithProof(proof);
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
        const summary = generateBasel3RiskSummary(basel3RiskData, riskMetrics);
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
        console.error('❌ Basel3 Risk verification failed:', error);
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
    const lcrThreshold = parseFloat(process.argv[2]) || 100;
    const nsfrThreshold = parseFloat(process.argv[3]) || 100;
    const actusUrl = process.argv[4] || 'http://localhost:8083/eventsBatch';
    const portfolioPath = process.argv[5]; // Optional portfolio file path
    
    console.log(`🎯 Basel3 LCR Threshold: ${lcrThreshold}%`);
    console.log(`🎯 Basel3 NSFR Threshold: ${nsfrThreshold}%`);
    console.log(`🌐 ACTUS API URL: ${actusUrl}`);
    if (portfolioPath) {
        console.log(`📁 Portfolio Path: ${portfolioPath}`);
    }
    
    const result = await executeRiskLiquidityBasel3OptimMerkleVerification(
        lcrThreshold,
        nsfrThreshold,
        actusUrl,
        portfolioPath
    );
    
    if (result.success) {
        console.log('\n🎉 Basel3 Risk verification completed successfully!');
        console.log(`📊 Status Change: ${result.contractStatus.beforeVerification} → ${result.contractStatus.afterVerification}`);
        
        if (result.contractStatus.afterVerification === 90) {
            console.log('✅ BASEL3 COMPLIANCE ACHIEVED - Contract status changed to 90');
        } else if (result.contractStatus.afterVerification === 110) {
            console.log('❌ BASEL3 NON-COMPLIANCE VERIFIED - Contract status changed to 110');
            console.log('   (This is expected behavior - ZK proof successfully verified non-compliant data)');
        } else {
            console.log('⚠️ Unexpected contract status - should be 90 (compliant) or 110 (non-compliant)');
        }
    } else {
        console.log('\n❌ Basel3 Risk verification failed');
        process.exit(1);
    }
}

// Run the main function
main().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
