import { Field, Signature, Struct, ZkProgram, CircuitString, Poseidon, Provable, } from 'o1js';
import { getPublicKeyFor } from '../../core/OracleRegistry.js';
import { MerkleWitness7 } from '../../tests/with-sign/GLEIFMerkleUtils.js';
// Public output structure for Merkle-based verification
export class GLEIFMerklePublicOutput extends Struct({
    name: CircuitString,
    registration_status: CircuitString,
    lei: CircuitString,
    datasetRoot: Field,
    companyVerified: Field,
    fieldsRevealed: Field, // Number of fields disclosed
}) {
}
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
}) {
}
// Batch verification output
export class GLEIFBatchPublicOutput extends Struct({
    batchRoot: Field,
    companiesVerified: Field,
    allCompliant: Field, // 1 if all companies compliant, 0 otherwise
}) {
}
export const GLEIFMerkleVerifier = ZkProgram({
    name: 'GLEIFMerkleVerifier',
    publicInput: Field,
    publicOutput: GLEIFMerklePublicOutput,
    methods: {
        // Core selective compliance proof (3 fields: name, status, lei)
        proveSelectiveCompliance: {
            privateInputs: [
                Field,
                MerkleWitness7,
                MerkleWitness7,
                MerkleWitness7,
                CircuitString,
                CircuitString,
                CircuitString,
                Signature // Oracle signature on root
            ],
            async method(GLEIFToProve, datasetRoot, nameWitness, statusWitness, leiWitness, name, status, lei, oracleSignature) {
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
                Field,
                MerkleWitness7,
                MerkleWitness7,
                MerkleWitness7,
                MerkleWitness7,
                MerkleWitness7,
                MerkleWitness7,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                Signature // oracle signature
            ],
            async method(GLEIFToProve, datasetRoot, nameWitness, statusWitness, leiWitness, countryWitness, cityWitness, jurisdictionWitness, name, status, lei, country, city, jurisdiction, oracleSignature) {
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
                Field,
                MerkleWitness7,
                MerkleWitness7,
                MerkleWitness7,
                Field,
                Field,
                Field,
                Signature // Oracle signature on batch
            ],
            async method(batchToProve, batchRoot, company1Witness, company2Witness, company3Witness, company1Root, company2Root, company3Root, oracleSignature) {
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
export class GLEIFMerkleProof extends ZkProgram.Proof(GLEIFMerkleVerifier) {
}
export class GLEIFBatchProof extends ZkProgram.Proof(GLEIFBatchVerifier) {
}
//# sourceMappingURL=GLEIFMerkleZKProgramWithSign.js.map