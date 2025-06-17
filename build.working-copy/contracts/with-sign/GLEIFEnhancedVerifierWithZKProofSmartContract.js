var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, SmartContract, state, State, method, Signature, Bool, UInt64, Permissions, Poseidon, } from 'o1js';
import { GLEIFEnhancedComplianceData, GLEIFEnhancedProof } from '../../zk-programs/with-sign/GLEIFEnhancedZKProgramWithSign.js';
import { getPublicKeyFor } from '../../core/OracleRegistry.js';
/**
 * Enhanced Smart Contract that supports BOTH:
 * 1. Direct parameter verification (existing functionality)
 * 2. ZK proof verification (new off-chain capability)
 */
export class GLEIFEnhancedVerifierWithZKProofSmartContract extends SmartContract {
    constructor() {
        super(...arguments);
        // Existing state variables (preserves compatibility)
        this.isGLEIFCompliant = State();
        this.complianceScore = State();
        this.riskLevel = State();
        this.lastVerificationTimestamp = State();
        this.totalVerifications = State();
        // New state variables for ZK proof tracking
        this.totalZKProofVerifications = State();
        this.lastVerificationWasZKProof = State();
        this.zkProofVerificationHash = State();
    }
    init() {
        super.init();
        // Initialize existing state (preserves compatibility)
        this.isGLEIFCompliant.set(Bool(false));
        this.complianceScore.set(Field(0));
        this.riskLevel.set(Field(5));
        this.lastVerificationTimestamp.set(UInt64.from(0));
        this.totalVerifications.set(Field(0));
        // Initialize new ZK proof state
        this.totalZKProofVerifications.set(Field(0));
        this.lastVerificationWasZKProof.set(Bool(false));
        this.zkProofVerificationHash.set(Field(0));
        this.account.permissions.set({
            ...Permissions.default(),
            editState: Permissions.proofOrSignature(),
        });
    }
    // EXISTING METHOD - Direct parameter verification (preserves all existing functionality)
    async verifyGLEIFComplianceWithParams(complianceData, oracleSignature) {
        // Verify oracle signature (existing logic)
        const dataHash = Poseidon.hash(GLEIFEnhancedComplianceData.toFields(complianceData));
        const registryPublicKey = getPublicKeyFor('GLEIF');
        const isValidSignature = oracleSignature.verify(registryPublicKey, [dataHash]);
        isValidSignature.assertTrue();
        // Verify business rules using efficient operations (existing logic)
        const isCompliant = complianceData.isCompliant();
        // Update contract state (existing logic)
        this.isGLEIFCompliant.set(isCompliant);
        this.complianceScore.set(complianceData.complianceScore);
        this.riskLevel.set(complianceData.riskLevel);
        this.lastVerificationTimestamp.set(complianceData.lastVerificationTimestamp);
        this.lastVerificationWasZKProof.set(Bool(false)); // Mark as direct verification
        // Increment verification count (existing logic)
        const currentCount = this.totalVerifications.getAndRequireEquals();
        this.totalVerifications.set(currentCount.add(Field(1)));
    }
    // NEW METHOD - ZK proof verification (adds new capability without breaking existing)
    async verifyGLEIFComplianceWithZKProof(proof) {
        // Verify the ZK proof
        proof.verify();
        // Extract verified data from the proof's public output
        const publicOutput = proof.publicOutput;
        // Update contract state with ZK-verified results
        this.isGLEIFCompliant.set(publicOutput.isCompliant);
        this.complianceScore.set(publicOutput.complianceScore);
        this.riskLevel.set(publicOutput.riskLevel);
        this.lastVerificationTimestamp.set(UInt64.from(Date.now()));
        this.lastVerificationWasZKProof.set(Bool(true)); // Mark as ZK proof verification
        // Create a hash of the proof for tracking
        const proofHash = Poseidon.hash([
            publicOutput.name.hash(),
            publicOutput.id.hash(),
            publicOutput.complianceScore,
            publicOutput.riskLevel
        ]);
        this.zkProofVerificationHash.set(proofHash);
        // Increment both total and ZK proof verification counts
        const currentCount = this.totalVerifications.getAndRequireEquals();
        this.totalVerifications.set(currentCount.add(Field(1)));
        const currentZKCount = this.totalZKProofVerifications.getAndRequireEquals();
        this.totalZKProofVerifications.set(currentZKCount.add(Field(1)));
    }
    // NEW METHOD - Batch verification combining both approaches
    async verifyBatchGLEIFCompliance(
    // Direct verification data
    complianceData, oracleSignature, 
    // ZK proof data
    zkProof) {
        // Verify both the direct parameters AND the ZK proof
        // 1. Direct verification
        const dataHash = Poseidon.hash(GLEIFEnhancedComplianceData.toFields(complianceData));
        const registryPublicKey = getPublicKeyFor('GLEIF');
        const isValidSignature = oracleSignature.verify(registryPublicKey, [dataHash]);
        isValidSignature.assertTrue();
        // 2. ZK proof verification
        zkProof.verify();
        // 3. Cross-validate that both methods agree
        const directCompliant = complianceData.isCompliant();
        const zkCompliant = zkProof.publicOutput.isCompliant;
        const methodsAgree = directCompliant.equals(zkCompliant);
        methodsAgree.assertTrue();
        // 4. Update state with the agreed-upon results
        this.isGLEIFCompliant.set(directCompliant);
        this.complianceScore.set(complianceData.complianceScore);
        this.riskLevel.set(complianceData.riskLevel);
        this.lastVerificationTimestamp.set(UInt64.from(Date.now()));
        this.lastVerificationWasZKProof.set(Bool(true)); // Mark as enhanced verification
        // 5. Update all counters
        const currentCount = this.totalVerifications.getAndRequireEquals();
        this.totalVerifications.set(currentCount.add(Field(1)));
        const currentZKCount = this.totalZKProofVerifications.getAndRequireEquals();
        this.totalZKProofVerifications.set(currentZKCount.add(Field(1)));
    }
    // ENHANCED METHOD - Get comprehensive contract statistics (NOT a @method)
    getEnhancedContractStats() {
        return {
            isGLEIFCompliant: this.isGLEIFCompliant.getAndRequireEquals(),
            complianceScore: this.complianceScore.getAndRequireEquals(),
            riskLevel: this.riskLevel.getAndRequireEquals(),
            lastVerificationTimestamp: this.lastVerificationTimestamp.getAndRequireEquals(),
            totalVerifications: this.totalVerifications.getAndRequireEquals(),
            totalZKProofVerifications: this.totalZKProofVerifications.getAndRequireEquals(),
            lastVerificationWasZKProof: this.lastVerificationWasZKProof.getAndRequireEquals(),
            zkProofVerificationHash: this.zkProofVerificationHash.getAndRequireEquals(),
        };
    }
    // PRESERVED METHOD - Original contract stats for backward compatibility
    getContractStats() {
        return {
            isGLEIFCompliant: this.isGLEIFCompliant.getAndRequireEquals(),
            riskMitigationBase: Field(0),
            totalVerifications: this.totalVerifications.getAndRequireEquals(),
        };
    }
    // NEW METHOD - Verify compliance history consistency
    async verifyComplianceHistory(previousProofHash, currentProof) {
        // Verify the new proof
        currentProof.verify();
        // Verify it builds on the previous verification
        const storedHash = this.zkProofVerificationHash.getAndRequireEquals();
        storedHash.assertEquals(previousProofHash);
        // Update with new verification
        const newProofHash = Poseidon.hash([
            currentProof.publicOutput.name.hash(),
            currentProof.publicOutput.id.hash(),
            currentProof.publicOutput.complianceScore,
            currentProof.publicOutput.riskLevel
        ]);
        this.zkProofVerificationHash.set(newProofHash);
        this.isGLEIFCompliant.set(currentProof.publicOutput.isCompliant);
        this.lastVerificationTimestamp.set(UInt64.from(Date.now()));
        const currentCount = this.totalVerifications.getAndRequireEquals();
        this.totalVerifications.set(currentCount.add(Field(1)));
    }
}
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierWithZKProofSmartContract.prototype, "isGLEIFCompliant", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierWithZKProofSmartContract.prototype, "complianceScore", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierWithZKProofSmartContract.prototype, "riskLevel", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierWithZKProofSmartContract.prototype, "lastVerificationTimestamp", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierWithZKProofSmartContract.prototype, "totalVerifications", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierWithZKProofSmartContract.prototype, "totalZKProofVerifications", void 0);
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierWithZKProofSmartContract.prototype, "lastVerificationWasZKProof", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierWithZKProofSmartContract.prototype, "zkProofVerificationHash", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GLEIFEnhancedComplianceData,
        Signature]),
    __metadata("design:returntype", Promise)
], GLEIFEnhancedVerifierWithZKProofSmartContract.prototype, "verifyGLEIFComplianceWithParams", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GLEIFEnhancedProof]),
    __metadata("design:returntype", Promise)
], GLEIFEnhancedVerifierWithZKProofSmartContract.prototype, "verifyGLEIFComplianceWithZKProof", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GLEIFEnhancedComplianceData,
        Signature,
        GLEIFEnhancedProof]),
    __metadata("design:returntype", Promise)
], GLEIFEnhancedVerifierWithZKProofSmartContract.prototype, "verifyBatchGLEIFCompliance", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Field,
        GLEIFEnhancedProof]),
    __metadata("design:returntype", Promise)
], GLEIFEnhancedVerifierWithZKProofSmartContract.prototype, "verifyComplianceHistory", null);
//# sourceMappingURL=GLEIFEnhancedVerifierWithZKProofSmartContract.js.map