import { Field, Mina, PrivateKey, AccountUpdate, CircuitString, Poseidon, Signature } from 'o1js';
import { CorporateRegistration } from '../../zk-programs/with-sign/CorporateRegistrationZKProgramWithSign.js';
import { CorporateRegistrationVerifierSmartContract } from '../../contracts/with-sign/CorporateRegistrationVerifierSmartContractWithSign.js';

import { fetchCorporateRegistrationData } from './CorporateRegistrationUtils.js';
import { getCorpRegComplianceData, ComplianceData } from './CorporateRegistrationo1.js';

import { MCAdeployerAccount, MCAsenderAccount, MCAdeployerKey, MCAsenderKey, getPrivateKeyFor } from '../../core/OracleRegistry.js';

export async function getCorporateRegistrationVerificationTestWithSign(cin: string, typeOfNet: string) {
   // Compile programs
   await CorporateRegistration.compile();
   const { verificationKey } = await CorporateRegistrationVerifierSmartContract.compile();

   // Generate ZKApp key and address
   const zkAppKey = PrivateKey.random();
   const zkAppAddress = zkAppKey.toPublicKey();
   const zkApp = new CorporateRegistrationVerifierSmartContract(zkAppAddress);

   // Deploy ZKApp
   const deployTxn = await Mina.transaction(
      MCAdeployerAccount,
      async () => {
         AccountUpdate.fundNewAccount(MCAdeployerAccount);
         await zkApp.deploy({ verificationKey });
      }
   );
   await deployTxn.sign([MCAdeployerKey, zkAppKey]).send();
   console.log("Deploy transaction signed successfully");

   console.log('CIN:', cin);
   console.log('Type of Net:', typeOfNet);

   // Fetch company data using the utility function
   let parsedData;
   try {
     parsedData = await fetchCorporateRegistrationData(cin, typeOfNet);
   } catch (err: any) {
     console.error(err.message);
     process.exit(1);
   }

   // Use the first matching record
   const complianceData = getCorpRegComplianceData(parsedData, typeOfNet);

   // =================================== Oracle Signature Generation ===================================
   // Create message hash
   const complianceDataHash = Poseidon.hash(ComplianceData.toFields(complianceData));

   // Get oracle private key - use MCA since this is corporate registration
   const registryPrivateKey = getPrivateKeyFor('MCA');

   // Sign the message hash with the oracle's private key
   const oracleSignature = Signature.create(registryPrivateKey, [complianceDataHash]);

   // =================================== Generate Proof ===================================
   const proof = await CorporateRegistration.proveCompliance(Field(0), complianceData, oracleSignature);

   console.log('Corporate Registration Compliance Data ..', complianceData.companyName.toString(), ' compliance ..', complianceData.activeCompliance.toString());
   console.log('Corporate Registration Oracle Signature..', oracleSignature.toJSON());

   console.log('generating proof ..', proof.toJSON());

   // Verify proof
   console.log("Before verification, Initial value of num:", zkApp.num.get().toJSON());
   const txn = await Mina.transaction(
      MCAsenderAccount,
      async () => {
         await zkApp.verifyComplianceWithProof(proof);
      }
   );
   await txn.prove();
   await txn.sign([MCAsenderKey]).send();
   console.log("Final value of num:", zkApp.num.get().toJSON());
   console.log('✅ Proof verified successfully!');
   return proof;
}
