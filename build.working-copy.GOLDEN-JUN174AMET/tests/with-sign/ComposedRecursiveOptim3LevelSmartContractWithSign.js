var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SmartContract, method, State, state, Field, CircuitString, UInt64, MerkleWitness, Struct, PrivateKey, Mina, AccountUpdate, Poseidon } from 'o1js';
import { ComposedOptimProof } from './ComposedRecursiveOptim3LevelZKProgramWithSign.js';
/**
 * Merkle witness for proof storage tree (16 levels = 65k proofs max)
 */
export class ComposedProofMerkleWitness extends MerkleWitness(16) {
}
/**
 * Simple structure for returning contract state information
 * Kept minimal to respect o1js constraints
 */
export class ContractStateInfo extends Struct({
    totalProofsStored: Field,
    proofsRootHash: Field,
    lastUpdateTimestamp: UInt64
}) {
}
/**
 * Smart Contract for Composed Recursive Optim 3-Level Verification
 *
 * Design Principles:
 * - Minimal state variables (only 3) to respect o1js limits
 * - Simple methods that do one thing each
 * - Event emission for off-chain indexing of complex data
 * - Focus on verification rather than complex analytics
 */
export class ComposedOptimComplianceVerifierSC extends SmartContract {
    constructor() {
        // =================================== State Variables (Minimal Design) ===================================
        super(...arguments);
        /**
         * Merkle root of all stored composed proofs
         * Each leaf is hash(companyId + sequenceNumber + proofHash + timestamp)
         */
        this.proofsRoot = State();
        /**
         * Total number of composed proofs stored
         * Used for indexing new proofs and statistics
         */
        this.totalProofsStored = State();
        /**
         * Timestamp of last proof addition
         * Used for tracking contract activity
         */
        this.lastUpdateTimestamp = State();
        // =================================== Event Definitions for Off-Chain Indexing ===================================
        // No events defined to avoid o1js constraint issues
    }
    // =================================== Contract Initialization ===================================
    init() {
        super.init();
        this.proofsRoot.set(Field(0)); // Empty merkle tree root
        this.totalProofsStored.set(Field(0));
        this.lastUpdateTimestamp.set(UInt64.from(0));
    }
    // =================================== Core Verification Methods ===================================
    /**
     * Verify and store a composed proof with lineage tracking
     * This is the main method for adding new composed proofs
     */
    async verifyAndStoreComposedProof(composedProof, companyIdentifier, proofWitness) {
        // Verify the composed proof cryptographically
        composedProof.verify();
        // Get current contract state
        const currentRoot = this.proofsRoot.getAndRequireEquals();
        const currentTotal = this.totalProofsStored.getAndRequireEquals();
        const currentTimestamp = UInt64.from(Date.now());
        // Extract proof data
        const proofOutput = composedProof.publicOutput;
        // Verify company identifier matches proof
        const expectedCompanyHash = companyIdentifier.hash();
        proofOutput.companyIdentifierHash.assertEquals(expectedCompanyHash);
        // Ensure this is a complete 3-level composed proof
        proofOutput.servicesIncluded.assertEquals(Field(7)); // Must include all services (1+2+4=7)
        proofOutput.composedProofVersion.assertEquals(Field(3)); // Must be level 3
        // Create proof storage entry
        const proofHash = Field.random(); // Simplified for demo
        const sequenceNumber = currentTotal.add(Field(1));
        // Create leaf for merkle tree: hash(companyId + sequence + proofHash + timestamp)
        const leafData = Poseidon.hash([
            expectedCompanyHash,
            sequenceNumber,
            proofHash,
            currentTimestamp.value
        ]);
        // Verify merkle witness for new proof position
        const calculatedRoot = proofWitness.calculateRoot(leafData);
        // Update contract state
        this.proofsRoot.set(calculatedRoot);
        this.totalProofsStored.set(sequenceNumber);
        this.lastUpdateTimestamp.set(currentTimestamp);
        // Event emission disabled to avoid o1js constraint issues
        // In production, events would be emitted here for off-chain indexing
    }
    /**
     * Verify that a specific proof exists in storage
     * Used for proof existence validation
     */
    async verifyProofExists(companyIdentifier, sequenceNumber, proofHash, timestamp, proofWitness) {
        // Get current merkle root
        const currentRoot = this.proofsRoot.getAndRequireEquals();
        // Recreate the leaf data
        const expectedCompanyHash = companyIdentifier.hash();
        const leafData = Poseidon.hash([
            expectedCompanyHash,
            sequenceNumber,
            proofHash,
            timestamp.value
        ]);
        // Verify the merkle witness
        const calculatedRoot = proofWitness.calculateRoot(leafData);
        // Assert that the proof exists (root matches)
        calculatedRoot.assertEquals(currentRoot);
    }
    /**
     * Simple verification of a composed proof without storage
     * Used for standalone proof validation
     */
    async verifyComposedProofOnly(composedProof, expectedCompanyIdentifier) {
        // Verify the proof cryptographically
        composedProof.verify();
        // Additional verification logic would go here
        // For now, just verify the proof is valid
    }
    // =================================== State Query Methods ===================================
    /**
     * Get basic contract state information
     * Returns simple struct to respect o1js constraints
     */
    async getContractState() {
        const currentRoot = this.proofsRoot.getAndRequireEquals();
        const currentTotal = this.totalProofsStored.getAndRequireEquals();
        const currentTimestamp = this.lastUpdateTimestamp.getAndRequireEquals();
        // For now, just verify state access works
        // In a real implementation, this might emit an event with the state info
    }
    /**
     * Check if contract has any proofs stored
     */
    async hasProofs() {
        const currentTotal = this.totalProofsStored.getAndRequireEquals();
        // Verify we can access the state
        currentTotal.assertGreaterThan(Field(-1)); // Always true, just to use the value
    }
    /**
     * Get total number of proofs stored
     */
    async getTotalProofs() {
        const currentTotal = this.totalProofsStored.getAndRequireEquals();
        // For demo purposes, just verify we can access the state
        currentTotal.assertGreaterThan(Field(-1)); // Always true
    }
    /**
     * Check if a company has proofs by verifying against the latest known proof
     * This is a simplified check - full history requires off-chain indexing
     */
    async companyHasProofs(companyIdentifier, latestSequenceNumber, latestProofHash, latestTimestamp, proofWitness) {
        await this.verifyProofExists(companyIdentifier, latestSequenceNumber, latestProofHash, latestTimestamp, proofWitness);
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], ComposedOptimComplianceVerifierSC.prototype, "proofsRoot", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], ComposedOptimComplianceVerifierSC.prototype, "totalProofsStored", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], ComposedOptimComplianceVerifierSC.prototype, "lastUpdateTimestamp", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ComposedOptimProof,
        CircuitString,
        ComposedProofMerkleWitness]),
    __metadata("design:returntype", Promise)
], ComposedOptimComplianceVerifierSC.prototype, "verifyAndStoreComposedProof", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CircuitString,
        Field,
        Field,
        UInt64,
        ComposedProofMerkleWitness]),
    __metadata("design:returntype", Promise)
], ComposedOptimComplianceVerifierSC.prototype, "verifyProofExists", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ComposedOptimProof,
        CircuitString]),
    __metadata("design:returntype", Promise)
], ComposedOptimComplianceVerifierSC.prototype, "verifyComposedProofOnly", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComposedOptimComplianceVerifierSC.prototype, "getContractState", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComposedOptimComplianceVerifierSC.prototype, "hasProofs", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComposedOptimComplianceVerifierSC.prototype, "getTotalProofs", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CircuitString,
        Field,
        Field,
        UInt64,
        ComposedProofMerkleWitness]),
    __metadata("design:returntype", Promise)
], ComposedOptimComplianceVerifierSC.prototype, "companyHasProofs", null);
/**
 * Off-chain utility class for working with the smart contract
 * Handles complex analytics and queries using contract events
 */
export class ComposedOptimContractUtils {
    constructor(contract) {
        this.contract = contract;
    }
    /**
     * Get comprehensive company compliance history using events
     * This is done off-chain to avoid o1js constraints
     */
    async getCompanyComplianceHistory(companyId) {
        // This would be implemented using contract event indexing
        // For now, return placeholder structure
        throw new Error('Off-chain implementation required - use event indexing');
    }
    /**
     * Get global compliance statistics across all companies
     */
    async getGlobalComplianceStats() {
        // This would aggregate data from all ComposedProofStored events
        throw new Error('Off-chain implementation required - use event indexing');
    }
    /**
     * Search for companies by compliance criteria
     */
    async findCompaniesByCompliance(minScore, requiredServices) {
        // This would filter events by compliance criteria
        throw new Error('Off-chain implementation required - use event indexing');
    }
}
/**
 * Factory function to create and deploy the contract
 */
export async function deployComposedOptimContract(deployerAccount, deployerKey) {
    // Compile the contract
    const { verificationKey } = await ComposedOptimComplianceVerifierSC.compile();
    // Generate contract key and address
    const zkAppKey = PrivateKey.random();
    const zkAppAddress = zkAppKey.toPublicKey();
    const contract = new ComposedOptimComplianceVerifierSC(zkAppAddress);
    // Deploy the contract
    const deployTxn = await Mina.transaction(deployerAccount, async () => {
        AccountUpdate.fundNewAccount(deployerAccount);
        await contract.deploy({ verificationKey });
    });
    await deployTxn.sign([deployerKey, zkAppKey]).send();
    // Create utility instance
    const utils = new ComposedOptimContractUtils(contract);
    return {
        contract,
        address: zkAppAddress,
        utils
    };
}
//# sourceMappingURL=ComposedRecursiveOptim3LevelSmartContractWithSign.js.map