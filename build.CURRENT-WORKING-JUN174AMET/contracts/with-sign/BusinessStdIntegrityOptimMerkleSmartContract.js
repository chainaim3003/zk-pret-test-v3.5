var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SmartContract, state, State, method, Field, Bool, UInt64 } from 'o1js';
import { BusinessStdIntegrityOptimMerkleProof } from '../../zk-programs/with-sign/BusinessStdIntegrityOptimMerkleZKProgramWithSign.js';
export class BusinessStdIntegrityOptimMerkleSmartContract extends SmartContract {
    constructor() {
        super(...arguments);
        // State to track verification results
        this.merkleRoot = State();
        this.totalVerifications = State();
        this.successfulVerifications = State();
        this.lastVerificationTimestamp = State();
        this.isVerificationEnabled = State();
        this.risk = State(); // Risk score state (starts at 100, reduces to 90 on success)
        // Events for logging verification results
        this.events = {
            'verification-completed': Field,
            'verification-failed': Field,
            'compliance-status': Bool,
            'merkle-root-updated': Field,
        };
    }
    init() {
        super.init();
        // Initialize state
        this.merkleRoot.set(Field(0));
        this.totalVerifications.set(Field(0));
        this.successfulVerifications.set(Field(0));
        this.lastVerificationTimestamp.set(UInt64.from(0));
        this.isVerificationEnabled.set(Bool(true));
        this.risk.set(Field(100)); // Initialize risk score to 100
    }
    async verifyCoreCompliance(proof, currentTimestamp) {
        // Verify the ZK proof
        proof.verify();
        // Extract public outputs
        const publicOutput = proof.publicOutput;
        // Validate that verification is enabled
        const verificationEnabled = this.isVerificationEnabled.getAndRequireEquals();
        verificationEnabled.assertTrue();
        // Get current risk score
        const currentRisk = this.risk.getAndRequireEquals();
        // Update merkle root state
        this.merkleRoot.set(publicOutput.datasetRoot);
        // Update verification counters
        const currentTotal = this.totalVerifications.getAndRequireEquals();
        const newTotal = currentTotal.add(Field(1));
        this.totalVerifications.set(newTotal);
        // If compliance passed, increment successful verifications AND reduce risk
        const currentSuccessful = this.successfulVerifications.getAndRequireEquals();
        const newSuccessful = currentSuccessful.add(publicOutput.isBLCompliant.toField());
        this.successfulVerifications.set(newSuccessful);
        // Risk reduction logic: 100 → 90 on successful compliance
        // Only reduce risk if compliance is true
        const riskReduction = publicOutput.isBLCompliant.toField().mul(Field(10)); // 10 if true, 0 if false
        const updatedRisk = currentRisk.sub(riskReduction);
        this.risk.set(updatedRisk);
        // Update timestamp
        this.lastVerificationTimestamp.set(currentTimestamp);
        // Emit events
        this.emitEvent('verification-completed', newTotal);
        this.emitEvent('compliance-status', publicOutput.isBLCompliant);
        this.emitEvent('merkle-root-updated', publicOutput.datasetRoot);
        // Require minimum validation standards
        publicOutput.fieldsValidated.assertGreaterThanOrEqual(Field(24)); // At least 24 core fields
        publicOutput.patternValidationsPassed.assertGreaterThanOrEqual(Field(6)); // All pattern validations
        publicOutput.enumValidationsPassed.assertGreaterThanOrEqual(Field(4)); // All enum validations
        publicOutput.booleanValidationsPassed.assertGreaterThanOrEqual(Field(3)); // All boolean validations
        publicOutput.arrayValidationsPassed.assertGreaterThanOrEqual(Field(4)); // All array validations
        publicOutput.stringValidationsPassed.assertGreaterThanOrEqual(Field(7)); // All string validations
    }
    async verifyEnhancedCompliance(proof, currentTimestamp) {
        // Verify the ZK proof
        proof.verify();
        // Extract public outputs
        const publicOutput = proof.publicOutput;
        // Validate that verification is enabled
        const verificationEnabled = this.isVerificationEnabled.getAndRequireEquals();
        verificationEnabled.assertTrue();
        // Get current risk score
        const currentRisk = this.risk.getAndRequireEquals();
        // Update merkle root state
        this.merkleRoot.set(publicOutput.datasetRoot);
        // Update verification counters
        const currentTotal = this.totalVerifications.getAndRequireEquals();
        const newTotal = currentTotal.add(Field(1));
        this.totalVerifications.set(newTotal);
        // If compliance passed, increment successful verifications AND reduce risk
        const currentSuccessful = this.successfulVerifications.getAndRequireEquals();
        const newSuccessful = currentSuccessful.add(publicOutput.isBLCompliant.toField());
        this.successfulVerifications.set(newSuccessful);
        // Risk reduction logic: 100 → 90 on successful enhanced compliance
        // Only reduce risk if compliance is true
        const riskReduction = publicOutput.isBLCompliant.toField().mul(Field(10)); // 10 if true, 0 if false
        const updatedRisk = currentRisk.sub(riskReduction);
        this.risk.set(updatedRisk);
        // Update timestamp
        this.lastVerificationTimestamp.set(currentTimestamp);
        // Emit events
        this.emitEvent('verification-completed', newTotal);
        this.emitEvent('compliance-status', publicOutput.isBLCompliant);
        this.emitEvent('merkle-root-updated', publicOutput.datasetRoot);
        // Require enhanced validation standards
        publicOutput.fieldsValidated.assertGreaterThanOrEqual(Field(24)); // At least 24 core fields
        publicOutput.fieldsValidated.assertLessThanOrEqual(Field(50)); // Maximum reasonable field count
        publicOutput.patternValidationsPassed.assertGreaterThanOrEqual(Field(6)); // All core pattern validations
        publicOutput.enumValidationsPassed.assertGreaterThanOrEqual(Field(4)); // All enum validations
        publicOutput.booleanValidationsPassed.assertGreaterThanOrEqual(Field(3)); // All boolean validations
        publicOutput.arrayValidationsPassed.assertGreaterThanOrEqual(Field(4)); // All array validations
        publicOutput.stringValidationsPassed.assertGreaterThanOrEqual(Field(7)); // All string validations
        // Enhanced validations are optional - allow 0 or more
        publicOutput.enhancedValidationsPassed.assertGreaterThanOrEqual(Field(0)); // Allow any number of enhanced validations
    }
    async enableVerification() {
        // Only deployer can enable/disable
        this.requireSignature();
        this.isVerificationEnabled.set(Bool(true));
    }
    async disableVerification() {
        // Only deployer can enable/disable
        this.requireSignature();
        this.isVerificationEnabled.set(Bool(false));
    }
    async resetCounters() {
        // Only deployer can reset counters
        this.requireSignature();
        this.totalVerifications.set(Field(0));
        this.successfulVerifications.set(Field(0));
        this.lastVerificationTimestamp.set(UInt64.from(0));
    }
    // =================================== Query Methods (Non-@method for compatibility) ===================================
    /**
     * Get current merkle root
     */
    getMerkleRoot() {
        return this.merkleRoot.get();
    }
    /**
     * Get total number of verifications performed
     */
    getTotalVerifications() {
        return this.totalVerifications.get();
    }
    /**
     * Get number of successful verifications
     */
    getSuccessfulVerifications() {
        return this.successfulVerifications.get();
    }
    /**
     * Get last verification timestamp
     */
    getLastVerificationTimestamp() {
        return this.lastVerificationTimestamp.get();
    }
    /**
     * Calculate success rate as percentage (0-100)
     */
    getSuccessRate() {
        const total = this.totalVerifications.get();
        const successful = this.successfulVerifications.get();
        return total.equals(Field(0)) ? Field(0) : successful.mul(Field(100)).div(total);
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], BusinessStdIntegrityOptimMerkleSmartContract.prototype, "merkleRoot", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], BusinessStdIntegrityOptimMerkleSmartContract.prototype, "totalVerifications", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], BusinessStdIntegrityOptimMerkleSmartContract.prototype, "successfulVerifications", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], BusinessStdIntegrityOptimMerkleSmartContract.prototype, "lastVerificationTimestamp", void 0);
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], BusinessStdIntegrityOptimMerkleSmartContract.prototype, "isVerificationEnabled", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], BusinessStdIntegrityOptimMerkleSmartContract.prototype, "risk", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BusinessStdIntegrityOptimMerkleProof,
        UInt64]),
    __metadata("design:returntype", Promise)
], BusinessStdIntegrityOptimMerkleSmartContract.prototype, "verifyCoreCompliance", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BusinessStdIntegrityOptimMerkleProof,
        UInt64]),
    __metadata("design:returntype", Promise)
], BusinessStdIntegrityOptimMerkleSmartContract.prototype, "verifyEnhancedCompliance", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BusinessStdIntegrityOptimMerkleSmartContract.prototype, "enableVerification", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BusinessStdIntegrityOptimMerkleSmartContract.prototype, "disableVerification", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BusinessStdIntegrityOptimMerkleSmartContract.prototype, "resetCounters", null);
//# sourceMappingURL=BusinessStdIntegrityOptimMerkleSmartContract.js.map