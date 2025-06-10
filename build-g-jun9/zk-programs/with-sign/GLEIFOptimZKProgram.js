import { Field, Signature, Struct, ZkProgram, CircuitString, MerkleWitness, UInt64, Bool, } from 'o1js';
import { getPublicKeyFor } from '../../core/OracleRegistry.js';
// =================================== Merkle Tree Configuration ===================================
export const MERKLE_TREE_HEIGHT = 8; // Height 8 for up to 256 fields
export class MerkleWitness8 extends MerkleWitness(MERKLE_TREE_HEIGHT) {
}
// =================================== Optimized GLEIF Data Structure ===================================
export class GLEIFOptimComplianceData extends Struct({
    // Core identifiers
    lei: CircuitString,
    name: CircuitString,
    // Compliance critical fields
    entity_status: CircuitString,
    registration_status: CircuitString,
    conformity_flag: CircuitString,
    // Temporal validation fields
    initialRegistrationDate: CircuitString,
    lastUpdateDate: CircuitString,
    nextRenewalDate: CircuitString,
    // Related IDs
    bic_codes: CircuitString,
    mic_codes: CircuitString,
    managing_lou: CircuitString,
    // Merkle tree root containing all other fields
    merkle_root: Field,
}) {
}
// =================================== Public Output Structure ===================================
export class GLEIFOptimPublicOutput extends Struct({
    lei: CircuitString,
    name: CircuitString,
    isGLEIFCompliant: Bool,
    verification_timestamp: UInt64,
    merkle_root: Field,
}) {
}
// =================================== Utility Functions ===================================
function isEntityStatusActive(status) {
    const activeStatus = CircuitString.fromString("ACTIVE");
    return status.equals(activeStatus);
}
function isRegistrationStatusIssued(status) {
    const issuedStatus = CircuitString.fromString("ISSUED");
    return status.equals(issuedStatus);
}
function isConformityCompliant(flag) {
    const conformingFlag = CircuitString.fromString("CONFORMING");
    const unknownFlag = CircuitString.fromString("UNKNOWN");
    const emptyFlag = CircuitString.fromString("");
    // Accept CONFORMING, UNKNOWN, or empty (many entities don't have this field)
    return conformingFlag.equals(flag)
        .or(unknownFlag.equals(flag))
        .or(emptyFlag.equals(flag));
}
function isDateValid(dateStr) {
    // Basic validation - check if date string is not empty
    const emptyDate = CircuitString.fromString("");
    return dateStr.equals(emptyDate).not();
}
function isDateInValidRange(lastUpdate, nextRenewal, currentTimestamp) {
    // Simplified temporal validation
    // In a real implementation, you'd parse dates and compare properly
    // For now, just check that both dates exist and are not empty
    const validLastUpdate = isDateValid(lastUpdate);
    const validNextRenewal = isDateValid(nextRenewal);
    return validLastUpdate.and(validNextRenewal);
}
// =================================== ZK Program ===================================
export const GLEIFOptim = ZkProgram({
    name: 'GLEIFOptim',
    publicInput: UInt64,
    publicOutput: GLEIFOptimPublicOutput,
    methods: {
        proveOptimizedCompliance: {
            privateInputs: [
                GLEIFOptimComplianceData,
                Signature,
                // Merkle witnesses for selective disclosure
                MerkleWitness8,
                MerkleWitness8,
                MerkleWitness8,
                MerkleWitness8,
                MerkleWitness8,
                MerkleWitness8,
                MerkleWitness8,
                MerkleWitness8, // mic_codes witness
            ],
            async method(currentTimestamp, complianceData, oracleSignature, entityStatusWitness, registrationStatusWitness, conformityFlagWitness, lastUpdateWitness, nextRenewalWitness, leiWitness, bicWitness, micWitness) {
                // =================================== Oracle Signature Verification ===================================
                // Verify oracle signed the merkle root
                const registryPublicKey = getPublicKeyFor('GLEIF');
                const isValidSignature = oracleSignature.verify(registryPublicKey, [complianceData.merkle_root]);
                isValidSignature.assertTrue();
                // =================================== Merkle Inclusion Proofs ===================================
                // Verify each field exists in the merkle tree
                const merkleRoot = complianceData.merkle_root;
                // Verify entity status in merkle tree
                const entityStatusHash = complianceData.entity_status.hash();
                const entityStatusRoot = entityStatusWitness.calculateRoot(entityStatusHash);
                entityStatusRoot.assertEquals(merkleRoot);
                // Verify registration status in merkle tree
                const registrationStatusHash = complianceData.registration_status.hash();
                const registrationStatusRoot = registrationStatusWitness.calculateRoot(registrationStatusHash);
                registrationStatusRoot.assertEquals(merkleRoot);
                // Verify conformity flag in merkle tree
                const conformityFlagHash = complianceData.conformity_flag.hash();
                const conformityFlagRoot = conformityFlagWitness.calculateRoot(conformityFlagHash);
                conformityFlagRoot.assertEquals(merkleRoot);
                // Verify temporal fields in merkle tree
                const lastUpdateHash = complianceData.lastUpdateDate.hash();
                const lastUpdateRoot = lastUpdateWitness.calculateRoot(lastUpdateHash);
                lastUpdateRoot.assertEquals(merkleRoot);
                const nextRenewalHash = complianceData.nextRenewalDate.hash();
                const nextRenewalRoot = nextRenewalWitness.calculateRoot(nextRenewalHash);
                nextRenewalRoot.assertEquals(merkleRoot);
                // Verify LEI in merkle tree
                const leiHash = complianceData.lei.hash();
                const leiRoot = leiWitness.calculateRoot(leiHash);
                leiRoot.assertEquals(merkleRoot);
                // Verify BIC codes in merkle tree
                const bicHash = complianceData.bic_codes.hash();
                const bicRoot = bicWitness.calculateRoot(bicHash);
                bicRoot.assertEquals(merkleRoot);
                // Verify MIC codes in merkle tree
                const micHash = complianceData.mic_codes.hash();
                const micRoot = micWitness.calculateRoot(micHash);
                micRoot.assertEquals(merkleRoot);
                // =================================== Business Logic Compliance Checks ===================================
                // 1. Entity status must be ACTIVE
                const isEntityActive = isEntityStatusActive(complianceData.entity_status);
                // 2. Registration status must be ISSUED
                const isRegistrationIssued = isRegistrationStatusIssued(complianceData.registration_status);
                // 3. Conformity flag must be compliant (or unknown/empty which is acceptable)
                const isConformityOk = isConformityCompliant(complianceData.conformity_flag);
                // 4. Temporal validation - dates should be valid and current
                const isTemporalValid = isDateInValidRange(complianceData.lastUpdateDate, complianceData.nextRenewalDate, currentTimestamp);
                // 5. LEI should exist (non-empty)
                const hasValidLEI = complianceData.lei.equals(CircuitString.fromString("")).not();
                // =================================== Overall Compliance Determination ===================================
                // Entity is GLEIF compliant if ALL conditions are met
                const isGLEIFCompliant = isEntityActive
                    .and(isRegistrationIssued)
                    .and(isConformityOk)
                    .and(isTemporalValid)
                    .and(hasValidLEI);
                // =================================== Return Public Output ===================================
                return new GLEIFOptimPublicOutput({
                    lei: complianceData.lei,
                    name: complianceData.name,
                    isGLEIFCompliant,
                    verification_timestamp: currentTimestamp,
                    merkle_root: complianceData.merkle_root,
                });
            },
        },
    },
});
export class GLEIFOptimProof extends ZkProgram.Proof(GLEIFOptim) {
}
//# sourceMappingURL=GLEIFOptimZKProgram.js.map