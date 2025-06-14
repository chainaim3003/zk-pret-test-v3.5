import { Field, Mina, PrivateKey, AccountUpdate, CircuitString, Poseidon, Signature, Bool } from 'o1js';
import { BusinessStandardDataIntegrityZKProgram, BusinessStandardDataIntegrityComplianceData } from '../../zk-programs/with-sign/BusinessStandardDataIntegrityZKProgram.js';
import { BusinessStandardDataIntegrityVerificationSmartContract } from '../../contracts/with-sign/BusinessStandardDataIntegrityVerificationSmartContract.js';
import { createComplianceData } from './BSDIo1.js';
import { readBLJsonFile } from './BSDIUtils.js';
import { getPrivateKeyFor } from '../../core/OracleRegistry.js';
import { verifyActualFromFile } from '../../core/verifyActual.js';

export async function getBSDIVerificationWithSignUtils(evalBLJsonFileName: string) {
    console.log("🚀 Starting ZK Business Standard Data Integrity Verification");
    console.log("📄 File:", evalBLJsonFileName);

    // =================================== PRE-PROCESSING ===================================
    console.log("📖 Reading BL JSON file...");
    const evalBLJson = await readBLJsonFile(evalBLJsonFileName);
    
    console.log("Evaluating BL JSON from file:", evalBLJsonFileName);
    console.log("eval BL JSON in verification test:", evalBLJson);

    // CRITICAL: Run verification outside the ZK circuit first
    console.log("🔍 Running external verification before ZK proof...");
    const externalVerificationResult = await verifyActualFromFile(evalBLJsonFileName);
    console.log("📋 External verification result:", externalVerificationResult);

    // =================================== MINA SETUP ===================================
    console.log("⚙️ Setting up Mina blockchain...");
    const useProof = false;
    const Local = await Mina.LocalBlockchain({ proofsEnabled: useProof });
    Mina.setActiveInstance(Local);

    const deployerAccount = Local.testAccounts[0];
    const deployerKey = deployerAccount.key;
    const senderAccount = Local.testAccounts[1];
    const senderKey = senderAccount.key;

    console.log('🔨 Compiling ZK program...');
    await BusinessStandardDataIntegrityZKProgram.compile();
    console.log("Mina transaction is successful");
    
    const { verificationKey } = await BusinessStandardDataIntegrityVerificationSmartContract.compile();

    const zkAppKey = PrivateKey.random();
    const zkAppAddress = zkAppKey.toPublicKey();
    const zkApp = new BusinessStandardDataIntegrityVerificationSmartContract(zkAppAddress);

    console.log("🚀 Deploying smart contract...");
    const deployTxn = await Mina.transaction(deployerAccount, async () => {
        AccountUpdate.fundNewAccount(deployerAccount);
        await zkApp.deploy({ verificationKey });
    });
    await deployTxn.sign([deployerKey, zkAppKey]).send();
    console.log("deployTxn signed successfully");

    // =================================== ORACLE SIGNATURE ===================================
    console.log("🔐 Generating oracle signature...");
    const complianceData = createComplianceData(evalBLJsonFileName, evalBLJson);
    const complianceDataHash = Poseidon.hash(BusinessStandardDataIntegrityComplianceData.toFields(complianceData));
    const registryPrivateKey = getPrivateKeyFor('BPMN');
    const oracleSignature = Signature.create(registryPrivateKey, [complianceDataHash]);

    // =================================== ZK PROOF GENERATION ===================================
    console.log("🧮 Generating ZK proof...");
    console.log("🔐 This proves document compliance without revealing sensitive data");
    
    try {
        // Pass the external verification result as a private input to avoid async operations in circuit
        const proof = await BusinessStandardDataIntegrityZKProgram.proveCompliance(
            Field(1), // Public input
            CircuitString.fromString(evalBLJsonFileName), // Private input[0]
            complianceData, // Private input[1]
            Bool(externalVerificationResult), // Private input[2] - FIXED: external verification result
            oracleSignature // Private input[3]
        );

        console.log("🎉 ZK proof generated successfully!");

        // Log initial risk value before verification
        console.log("Before verification, Initial value of risk:", zkApp.risk.get().toJSON());

        // Verify proof on-chain
        console.log("🔗 Verifying proof on blockchain...");
        const txn = await Mina.transaction(senderAccount, async () => {
            await zkApp.verifyComplianceWithProof(proof);
        });

        const proof1 = await txn.prove();
        console.log("Proof generated successfully");
        console.log("Generated Proof:", proof1.toPretty());
        
        await txn.sign([senderKey]).send();

        console.log("✅ SUCCESS: ZK proof verified on-chain!");
        console.log("$$$$$$Final value of risk (SUCCESS):$$$$$$", zkApp.risk.get().toJSON());
        console.log('✅ Proof verified successfully!');
        console.log("🎉 VERIFICATION COMPLETE!");

        return proof1;
    } catch (error) {
        console.log("$$$$$$Final value of risk (FAILED):$$$$$$", zkApp.risk.get().toJSON());
        console.error('❌ Error during ZK proof generation:', error);
        throw error;
    }
}