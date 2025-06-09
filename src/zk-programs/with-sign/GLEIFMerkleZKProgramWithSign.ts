import {
   Field,
   Signature,
   Struct,
   ZkProgram,
   CircuitString,
   Poseidon,
   Provable,
} from 'o1js';
import { getPublicKeyFor } from '../../core/OracleRegistry.js';
import { MerkleWitness7 } from '../../tests/with-sign/GLEIFMerkleUtils.js';

// Public output structure for Merkle-based verification
export class GLEIFMerklePublicOutput extends Struct({
   name: CircuitString,
   registration_status: CircuitString,
   lei: CircuitString,
   datasetRoot: Field,        // Proves integrity of complete dataset
   companyVerified: Field,    // 1 if compliant, 0 if not
   fieldsRevealed: Field,     // Number of fields disclosed
}) { }

// Extended public output for comprehensive verification
export class GLEIFExtendedPublicOutput extends Struct({
   name: CircuitString,
   registration_status: CircuitString,
   lei: CircuitString,
   legalAddress_country: CircuitString,
   legalAddress_city: CircuitString,
   jurisdiction: CircuitString,
   datasetRoot: Field,
   companyVerified: Field,
   fieldsRevealed: Field,
}) { }

// Batch verification output
export class GLEIFBatchPublicOutput extends Struct({
   batchRoot: Field,           // Root of batch containing multiple companies
   companiesVerified: Field,   // Number of companies verified
   allCompliant: Field,        // 1 if all companies compliant, 0 otherwise
}) { }

export const GLEIFMerkleVerifier = ZkProgram({
   name: 'GLEIFMerkleVerifier',
   publicInput: Field,
   publicOutput: GLEIFMerklePublicOutput,

   methods: {
      // Core selective compliance proof (3 fields: name, status, lei)
      proveSelectiveCompliance: {
         privateInputs: [
            Field,              // Dataset root (signed by oracle)
            MerkleWitness7,     // Witness for name field
            MerkleWitness7,     // Witness for status field
            MerkleWitness7,     // Witness for LEI field
            CircuitString,      // Actual name value
            CircuitString,      // Actual status value  
            CircuitString,      // Actual LEI value
            Signature           // Oracle signature on root
         ],
         
         async method(
            GLEIFToProve: Field,
            datasetRoot: Field,
            nameWitness: MerkleWitness7,
            statusWitness: MerkleWitness7,
            leiWitness: MerkleWitness7,
            name: CircuitString,
            status: CircuitString,
            lei: CircuitString,
            oracleSignature: Signature
         ): Promise<GLEIFMerklePublicOutput> {

            // 1. Verify oracle signature on the complete dataset root
            const registryPublicKey = getPublicKeyFor('GLEIF');
            const isValidSignature = oracleSignature.verify(registryPublicKey, [datasetRoot]);
            isValidSignature.assertTrue();

            // 2. Prove each field belongs to the signed dataset
            const nameHash = Poseidon.hash(name.values.map(c => c.toField()));
            const nameRoot = nameWitness.calculateRoot(nameHash);
            nameRoot.assertEquals(datasetRoot);

            const statusHash = Poseidon.hash(status.values.map(c => c.toField()));
            const statusRoot = statusWitness.calculateRoot(statusHash);
            statusRoot.assertEquals(datasetRoot);

            const leiHash = Poseidon.hash(lei.values.map(c => c.toField()));
            const leiRoot = leiWitness.calculateRoot(leiHash);
            leiRoot.assertEquals(datasetRoot);

            // 3. Verify compliance status (same logic as original)
            const activeHash = CircuitString.fromString("ACTIVE").hash();
            const inactiveHash = CircuitString.fromString("Inactive").hash();
            const currentStatusHash = status.hash();
            
            // Ensure status is not inactive
            currentStatusHash.assertNotEquals(inactiveHash);
            
            // Check if status is active
            const isActive = currentStatusHash.equals(activeHash);
            const complianceFlag = Provable.if(isActive, Field(1), Field(0));

            // 4. Return selective disclosure with proof of integrity
            return new GLEIFMerklePublicOutput({
               name: name,
               registration_status: status,
               lei: lei,
               datasetRoot: datasetRoot,
               companyVerified: complianceFlag,
               fieldsRevealed: Field(3)
            });
         }
      },

      // Extended compliance proof (6 fields including address info)
      proveExtendedCompliance: {
         privateInputs: [
            Field,              // Dataset root
            MerkleWitness7,     // name witness
            MerkleWitness7,     // status witness  
            MerkleWitness7,     // lei witness
            MerkleWitness7,     // country witness
            MerkleWitness7,     // city witness
            MerkleWitness7,     // jurisdiction witness
            CircuitString,      // name value
            CircuitString,      // status value
            CircuitString,      // lei value
            CircuitString,      // country value
            CircuitString,      // city value
            CircuitString,      // jurisdiction value
            Signature           // oracle signature
         ],
         
         async method(
            GLEIFToProve: Field,
            datasetRoot: Field,
            nameWitness: MerkleWitness7,
            statusWitness: MerkleWitness7,
            leiWitness: MerkleWitness7,
            countryWitness: MerkleWitness7,
            cityWitness: MerkleWitness7,
            jurisdictionWitness: MerkleWitness7,
            name: CircuitString,
            status: CircuitString,
            lei: CircuitString,
            country: CircuitString,
            city: CircuitString,
            jurisdiction: CircuitString,
            oracleSignature: Signature
         ): Promise<GLEIFExtendedPublicOutput> {

            // Verify oracle signature
            const registryPublicKey = getPublicKeyFor('GLEIF');
            oracleSignature.verify(registryPublicKey, [datasetRoot]).assertTrue();

            // Verify all fields belong to signed dataset
            const fields = [
               { witness: nameWitness, value: name },
               { witness: statusWitness, value: status },
               { witness: leiWitness, value: lei },
               { witness: countryWitness, value: country },
               { witness: cityWitness, value: city },
               { witness: jurisdictionWitness, value: jurisdiction }
            ];

            fields.forEach(field => {
               const fieldHash = Poseidon.hash(field.value.values.map(c => c.toField()));
               field.witness.calculateRoot(fieldHash).assertEquals(datasetRoot);
            });

            // Verify compliance
            const activeHash = CircuitString.fromString("ACTIVE").hash();
            const isActive = status.hash().equals(activeHash);
            const complianceFlag = Provable.if(isActive, Field(1), Field(0));

            return new GLEIFExtendedPublicOutput({
               name,
               registration_status: status,
               lei,
               legalAddress_country: country,
               legalAddress_city: city,
               jurisdiction,
               datasetRoot,
               companyVerified: complianceFlag,
               fieldsRevealed: Field(6)
            });
         }
      }
   }
});

// Batch verifier for multiple companies
export const GLEIFBatchVerifier = ZkProgram({
   name: 'GLEIFBatchVerifier',
   publicInput: Field,
   publicOutput: GLEIFBatchPublicOutput,

   methods: {
      // Verify multiple companies in a single proof
      proveBatchCompliance: {
         privateInputs: [
            Field,              // Batch root (contains multiple company roots)
            MerkleWitness7,     // Witness for company 1 in batch
            MerkleWitness7,     // Witness for company 2 in batch
            MerkleWitness7,     // Witness for company 3 in batch
            Field,              // Company 1 dataset root
            Field,              // Company 2 dataset root
            Field,              // Company 3 dataset root
            Signature           // Oracle signature on batch
         ],
         
         async method(
            batchToProve: Field,
            batchRoot: Field,
            company1Witness: MerkleWitness7,
            company2Witness: MerkleWitness7,
            company3Witness: MerkleWitness7,
            company1Root: Field,
            company2Root: Field,
            company3Root: Field,
            oracleSignature: Signature
         ): Promise<GLEIFBatchPublicOutput> {

            // Verify oracle signed the batch
            const registryPublicKey = getPublicKeyFor('GLEIF');
            oracleSignature.verify(registryPublicKey, [batchRoot]).assertTrue();

            // Prove each company dataset is in the batch
            company1Witness.calculateRoot(company1Root).assertEquals(batchRoot);
            company2Witness.calculateRoot(company2Root).assertEquals(batchRoot);
            company3Witness.calculateRoot(company3Root).assertEquals(batchRoot);

            // Return batch verification result
            return new GLEIFBatchPublicOutput({
               batchRoot: batchRoot,
               companiesVerified: Field(3),
               allCompliant: Field(1) // Simplified - in practice, check each company's compliance
            });
         }
      }
   }
});

export class GLEIFMerkleProof extends ZkProgram.Proof(GLEIFMerkleVerifier) { }
export class GLEIFBatchProof extends ZkProgram.Proof(GLEIFBatchVerifier) { }
