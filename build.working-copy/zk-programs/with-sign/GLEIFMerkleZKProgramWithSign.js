import { Field, Signature, Struct, ZkProgram, CircuitString, Poseidon, Provable, } from 'o1js';
import { getPublicKeyFor } from '../../core/OracleRegistry.js';
import { MerkleWitness9 } from '../../tests/with-sign/GLEIFMerkleUtils.js';
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
// Comprehensive business logic output (matching GLEIFOptimVerificationTestWithSign)
export class GLEIFComprehensivePublicOutput extends Struct({
    lei: CircuitString,
    name: CircuitString,
    entity_status: CircuitString,
    registration_status: CircuitString,
    conformity_flag: CircuitString,
    isGLEIFCompliant: Field,
    datasetRoot: Field,
    fieldsRevealed: Field,
    businessRulesPassed: Field, // Number of business rules that passed
}) {
}
export const GLEIFMerkleVerifier = ZkProgram({
    name: 'GLEIFMerkleVerifier',
    publicInput: Field,
    publicOutput: GLEIFMerklePublicOutput,
    methods: {
        // Core selective compliance proof (4 fields: name, entity_status, registration_status, lei)
        proveSelectiveCompliance: {
            privateInputs: [
                Field,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                Signature // Oracle signature on root
            ],
            async method(GLEIFToProve, datasetRoot, nameWitness, entityStatusWitness, registrationStatusWitness, leiWitness, name, entityStatus, registrationStatus, lei, oracleSignature) {
                // 1. Verify oracle signature on the complete dataset root
                const registryPublicKey = getPublicKeyFor('GLEIF');
                const isValidSignature = oracleSignature.verify(registryPublicKey, [datasetRoot]);
                isValidSignature.assertTrue();
                // 2. Prove each field belongs to the signed dataset
                const nameHash = Poseidon.hash(name.values.map(c => c.toField()));
                const nameRoot = nameWitness.calculateRoot(nameHash);
                nameRoot.assertEquals(datasetRoot);
                const entityStatusHash = Poseidon.hash(entityStatus.values.map(c => c.toField()));
                const entityStatusRoot = entityStatusWitness.calculateRoot(entityStatusHash);
                entityStatusRoot.assertEquals(datasetRoot);
                const registrationStatusHash = Poseidon.hash(registrationStatus.values.map(c => c.toField()));
                const registrationStatusRoot = registrationStatusWitness.calculateRoot(registrationStatusHash);
                registrationStatusRoot.assertEquals(datasetRoot);
                const leiHash = Poseidon.hash(lei.values.map(c => c.toField()));
                const leiRoot = leiWitness.calculateRoot(leiHash);
                leiRoot.assertEquals(datasetRoot);
                // 3. Verify compliance status (both entity_status and registration_status)
                const activeStatus = CircuitString.fromString("ACTIVE");
                const issuedStatus = CircuitString.fromString("ISSUED");
                // Check entity_status = "ACTIVE"
                const isEntityActive = entityStatus.equals(activeStatus);
                // Check registration_status = "ISSUED"  
                const isRegistrationIssued = registrationStatus.equals(issuedStatus);
                // Basic compliance requires BOTH conditions
                const complianceFlag = isEntityActive.and(isRegistrationIssued);
                const complianceValue = Provable.if(complianceFlag, Field(1), Field(0));
                // 4. Return selective disclosure with proof of integrity
                return new GLEIFMerklePublicOutput({
                    name: name,
                    registration_status: registrationStatus,
                    lei: lei,
                    datasetRoot: datasetRoot,
                    companyVerified: complianceValue,
                    fieldsRevealed: Field(4)
                });
            }
        },
        // Extended compliance proof (7 fields including address info and both status fields)
        proveExtendedCompliance: {
            privateInputs: [
                Field,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                Signature // oracle signature
            ],
            async method(GLEIFToProve, datasetRoot, nameWitness, entityStatusWitness, registrationStatusWitness, leiWitness, countryWitness, cityWitness, jurisdictionWitness, name, entityStatus, registrationStatus, lei, country, city, jurisdiction, oracleSignature) {
                // Verify oracle signature
                const registryPublicKey = getPublicKeyFor('GLEIF');
                oracleSignature.verify(registryPublicKey, [datasetRoot]).assertTrue();
                // Verify all fields belong to signed dataset
                const fields = [
                    { witness: nameWitness, value: name },
                    { witness: entityStatusWitness, value: entityStatus },
                    { witness: registrationStatusWitness, value: registrationStatus },
                    { witness: leiWitness, value: lei },
                    { witness: countryWitness, value: country },
                    { witness: cityWitness, value: city },
                    { witness: jurisdictionWitness, value: jurisdiction }
                ];
                fields.forEach(field => {
                    const fieldHash = Poseidon.hash(field.value.values.map(c => c.toField()));
                    field.witness.calculateRoot(fieldHash).assertEquals(datasetRoot);
                });
                // Verify compliance (both entity_status and registration_status)
                const activeStatus = CircuitString.fromString("ACTIVE");
                const issuedStatus = CircuitString.fromString("ISSUED");
                const isEntityActive = entityStatus.equals(activeStatus);
                const isRegistrationIssued = registrationStatus.equals(issuedStatus);
                const complianceFlag = isEntityActive.and(isRegistrationIssued);
                const complianceValue = Provable.if(complianceFlag, Field(1), Field(0));
                return new GLEIFExtendedPublicOutput({
                    name,
                    registration_status: registrationStatus,
                    lei,
                    legalAddress_country: country,
                    legalAddress_city: city,
                    jurisdiction,
                    datasetRoot,
                    companyVerified: complianceValue,
                    fieldsRevealed: Field(7)
                });
            }
        }
    }
});
// Comprehensive verifier with full business logic (matching GLEIFOptimVerificationTestWithSign)
export const GLEIFComprehensiveVerifier = ZkProgram({
    name: 'GLEIFComprehensiveVerifier',
    publicInput: Field,
    publicOutput: GLEIFComprehensivePublicOutput,
    methods: {
        // Comprehensive business logic verification (matching GLEIFOptimVerificationTestWithSign)
        proveComprehensiveCompliance: {
            privateInputs: [
                Field,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                MerkleWitness9,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                CircuitString,
                Signature // Oracle signature on root
            ],
            async method(GLEIFToProve, datasetRoot, leiWitness, nameWitness, entityStatusWitness, registrationStatusWitness, conformityFlagWitness, lastUpdateWitness, nextRenewalWitness, bicWitness, micWitness, managingLouWitness, lei, name, entityStatus, registrationStatus, conformityFlag, lastUpdate, nextRenewal, bicCodes, micCodes, managingLou, oracleSignature) {
                // 1. Verify oracle signature on the complete dataset root
                const registryPublicKey = getPublicKeyFor('GLEIF');
                const isValidSignature = oracleSignature.verify(registryPublicKey, [datasetRoot]);
                isValidSignature.assertTrue();
                // 2. Verify all fields belong to the signed dataset (Merkle inclusion proofs)
                const fields = [
                    { witness: leiWitness, value: lei },
                    { witness: nameWitness, value: name },
                    { witness: entityStatusWitness, value: entityStatus },
                    { witness: registrationStatusWitness, value: registrationStatus },
                    { witness: conformityFlagWitness, value: conformityFlag },
                    { witness: lastUpdateWitness, value: lastUpdate },
                    { witness: nextRenewalWitness, value: nextRenewal },
                    { witness: bicWitness, value: bicCodes },
                    { witness: micWitness, value: micCodes },
                    { witness: managingLouWitness, value: managingLou }
                ];
                fields.forEach(field => {
                    const fieldHash = Poseidon.hash(field.value.values.map(c => c.toField()));
                    field.witness.calculateRoot(fieldHash).assertEquals(datasetRoot);
                });
                // 3. Business Logic Compliance Checks (matching GLEIFOptim)
                // Entity status must be ACTIVE
                const activeStatus = CircuitString.fromString("ACTIVE");
                const isEntityActive = entityStatus.equals(activeStatus);
                // Registration status must be ISSUED
                const issuedStatus = CircuitString.fromString("ISSUED");
                const isRegistrationIssued = registrationStatus.equals(issuedStatus);
                // Conformity flag must be compliant (CONFORMING, UNKNOWN, or empty)
                const conformingFlag = CircuitString.fromString("CONFORMING");
                const unknownFlag = CircuitString.fromString("UNKNOWN");
                const emptyFlag = CircuitString.fromString("");
                const isConformityOk = conformingFlag.equals(conformityFlag)
                    .or(unknownFlag.equals(conformityFlag))
                    .or(emptyFlag.equals(conformityFlag));
                // Temporal validation - dates should be valid (non-empty)
                const emptyDate = CircuitString.fromString("");
                const isLastUpdateValid = lastUpdate.equals(emptyDate).not();
                const isNextRenewalValid = nextRenewal.equals(emptyDate).not();
                const isTemporalValid = isLastUpdateValid.and(isNextRenewalValid);
                // LEI should exist (non-empty)
                const emptyLEI = CircuitString.fromString("");
                const hasValidLEI = lei.equals(emptyLEI).not();
                // 4. Calculate business rules passed
                const entityStatusPassed = Provable.if(isEntityActive, Field(1), Field(0));
                const registrationStatusPassed = Provable.if(isRegistrationIssued, Field(1), Field(0));
                const conformityFlagPassed = Provable.if(isConformityOk, Field(1), Field(0));
                const temporalValidPassed = Provable.if(isTemporalValid, Field(1), Field(0));
                const leiValidPassed = Provable.if(hasValidLEI, Field(1), Field(0));
                const businessRulesPassed = entityStatusPassed
                    .add(registrationStatusPassed)
                    .add(conformityFlagPassed)
                    .add(temporalValidPassed)
                    .add(leiValidPassed);
                // 5. Overall compliance (all rules must pass)
                const isGLEIFCompliant = isEntityActive
                    .and(isRegistrationIssued)
                    .and(isConformityOk)
                    .and(isTemporalValid)
                    .and(hasValidLEI);
                const complianceFlag = Provable.if(isGLEIFCompliant, Field(1), Field(0));
                // 6. Return comprehensive verification result
                return new GLEIFComprehensivePublicOutput({
                    lei: lei,
                    name: name,
                    entity_status: entityStatus,
                    registration_status: registrationStatus,
                    conformity_flag: conformityFlag,
                    isGLEIFCompliant: complianceFlag,
                    datasetRoot: datasetRoot,
                    fieldsRevealed: Field(10),
                    businessRulesPassed: businessRulesPassed
                });
            }
        }
    }
});
export class GLEIFMerkleProof extends ZkProgram.Proof(GLEIFMerkleVerifier) {
}
export class GLEIFComprehensiveProof extends ZkProgram.Proof(GLEIFComprehensiveVerifier) {
}
//# sourceMappingURL=GLEIFMerkleZKProgramWithSign.js.map