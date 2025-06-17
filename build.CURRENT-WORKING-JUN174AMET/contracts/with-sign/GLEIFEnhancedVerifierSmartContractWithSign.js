var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Bool, Field, SmartContract, state, State, method, Struct, Signature, Poseidon, UInt64, PublicKey, MerkleMap, Reducer, } from 'o1js';
import { GLEIFEnhancedProof, GLEIFEnhancedComplianceData, } from '../../zk-programs/with-sign/GLEIFEnhancedZKProgramWithSign.js';
import { getPublicKeyFor } from '../../core/OracleRegistry.js';
// =================================== Simplified Compliance Action Structure ===================================
export class GLEIFSimplifiedComplianceAction extends Struct({
    actionType: Field,
    leiHash: Field,
    companyNameHash: Field,
    complianceScore: Field,
    riskLevel: Field,
    timestamp: UInt64,
    verifier: PublicKey,
    proofHash: Field, // Hash of verification proof
    // Total: 8 fields - well within 100 field limit
}) {
    // Create verification action with hashed data
    static createVerifyAction(leiString, companyNameString, complianceScore, riskLevel, timestamp, verifier, proofHash) {
        return new GLEIFSimplifiedComplianceAction({
            actionType: GLEIFSimplifiedComplianceAction.VERIFY,
            leiHash: leiString.hash(),
            companyNameHash: companyNameString.hash(),
            complianceScore,
            riskLevel,
            timestamp,
            verifier,
            proofHash,
        });
    }
    // Hash function for the action
    hash() {
        return Poseidon.hash([
            this.actionType,
            this.leiHash,
            this.complianceScore,
            this.timestamp.value,
            this.proofHash,
        ]);
    }
}
// Action type constants
GLEIFSimplifiedComplianceAction.VERIFY = Field(0);
GLEIFSimplifiedComplianceAction.UPDATE = Field(1);
GLEIFSimplifiedComplianceAction.REVOKE = Field(2);
GLEIFSimplifiedComplianceAction.GROUP_VERIFY = Field(3);
GLEIFSimplifiedComplianceAction.HISTORICAL_VERIFY = Field(4);
// =================================== Enhanced GLEIF Smart Contract ===================================
export class GLEIFEnhancedVerifierSmartContractWithSign extends SmartContract {
    constructor() {
        super(...arguments);
        // Core state variables - SIMPLIFIED
        this.isGLEIFCompliant = State(); // Simple boolean for GLEIF compliance
        this.riskMitigationBase = State(); // Risk mitigation base indicator
        this.smartContractActive = State(); // Smart contract operational state
        this.admin = State(); // Contract administrator
        this.complianceMapRoot = State(); // Merkle map root for compliance data
        this.complianceActionState = State(); // Reducer state for compliance actions
        this.totalVerifications = State(); // Total number of verifications performed
        // REMOVED: lastUpdateTimestamp to stay within 8-field limit
        // Reducer for compliance actions (maintains history)
        this.reducer = Reducer({ actionType: GLEIFSimplifiedComplianceAction });
        // Simplified events for external monitoring
        this.events = {
            'compliance-verified': Field,
            'smart-contract-disabled': PublicKey,
            'smart-contract-enabled': PublicKey,
        };
    }
    // Initialize the contract state with explicit defaults
    init() {
        super.init();
        this.isGLEIFCompliant.set(Bool(false)); // Default: NOT GLEIF compliant until proven
        this.riskMitigationBase.set(Field(0)); // Default: No risk mitigation
        this.smartContractActive.set(Bool(true)); // Default: Smart contract is operational
        this.admin.set(this.sender.getAndRequireSignature());
        this.complianceMapRoot.set(new MerkleMap().getRoot());
        this.complianceActionState.set(Reducer.initialActionState);
        this.totalVerifications.set(UInt64.from(0));
    }
    // =================================== PARAMS-BASED VERIFICATION METHODS ===================================
    /**
     * Verify GLEIF compliance with parameters (basic GLEIF checks only)
     */
    async verifyGLEIFComplianceWithParams(input, oracleSignature) {
        // Ensure smart contract is active
        this.smartContractActive.getAndRequireEquals().assertTrue();
        this.isGLEIFCompliant.requireEquals(this.isGLEIFCompliant.get());
        // =================================== Oracle Signature Verification ===================================
        const complianceDataHash = Poseidon.hash(GLEIFEnhancedComplianceData.toFields(input));
        const registryPublicKey = getPublicKeyFor('GLEIF');
        const isValidSignature = oracleSignature.verify(registryPublicKey, [complianceDataHash]);
        isValidSignature.assertTrue();
        // =================================== Basic GLEIF Compliance Verification ===================================
        // Only basic GLEIF compliance checks - no complex risk/scoring logic
        const currentTimestamp = this.network.timestamp.getAndRequireEquals();
        const isBasicGLEIFCompliant = input.isBasicGLEIFCompliant(currentTimestamp);
        // Simple assertion - either compliant or not
        isBasicGLEIFCompliant.assertTrue();
        // Update simple boolean state
        this.isGLEIFCompliant.set(Bool(true));
        // Update counters
        const currentVerifications = this.totalVerifications.getAndRequireEquals();
        this.totalVerifications.set(currentVerifications.add(1));
        // Create and dispatch simplified compliance action
        const action = GLEIFSimplifiedComplianceAction.createVerifyAction(input.lei, input.name, input.complianceScore, input.riskLevel, currentTimestamp, this.sender.getAndRequireSignature(), complianceDataHash);
        this.reducer.dispatch(action);
        // Emit minimal verification event  
        this.emitEvent('compliance-verified', complianceDataHash);
    }
    /**
     * Verify GLEIF compliance using ZK Program proof (simple state update)
     * All complex business logic is handled in the ZK program off-chain
     */
    async verifyGLEIFComplianceWithZKProof(proof) {
        // Ensure smart contract is active
        this.smartContractActive.getAndRequireEquals().assertTrue();
        this.isGLEIFCompliant.requireEquals(this.isGLEIFCompliant.get());
        // Verify the ZK proof (all business logic was done off-chain)
        proof.verify();
        // Extract public outputs from the proof
        const publicOutput = proof.publicOutput;
        // Simple assertion based on ZK program result
        publicOutput.isCompliant.assertTrue('ZK program determined entity is not compliant');
        // Update simple boolean state based on proof
        this.isGLEIFCompliant.set(Bool(true));
        // Update verification counter
        const currentVerifications = this.totalVerifications.getAndRequireEquals();
        this.totalVerifications.set(currentVerifications.add(1));
        // Create simplified compliance action for history
        const action = GLEIFSimplifiedComplianceAction.createVerifyAction(publicOutput.id, // LEI from proof
        publicOutput.name, // Company name from proof
        publicOutput.complianceScore, publicOutput.riskLevel, this.network.timestamp.getAndRequireEquals(), this.sender.getAndRequireSignature(), publicOutput.verificationTimestamp.value);
        this.reducer.dispatch(action);
        // Emit minimal verification event
        this.emitEvent('compliance-verified', publicOutput.verificationTimestamp.value);
    }
    // =================================== ADMINISTRATIVE METHODS ===================================
    /**
     * Get contract statistics
     * (NOT a @method - this is a query function)
     */
    getContractStats() {
        return {
            smartContractActive: this.smartContractActive.getAndRequireEquals(),
            isGLEIFCompliant: this.isGLEIFCompliant.getAndRequireEquals(),
            riskMitigationBase: this.riskMitigationBase.getAndRequireEquals(),
            totalVerifications: this.totalVerifications.getAndRequireEquals(),
        };
    }
    /**
     * Emergency disable smart contract (admin only)
     */
    async emergencyDisableSmartContract() {
        const admin = this.admin.getAndRequireEquals();
        this.sender.getAndRequireSignature().assertEquals(admin);
        this.smartContractActive.set(Bool(false));
        // Note: lastUpdateTimestamp removed to fit o1js limit
        this.emitEvent('smart-contract-disabled', admin);
    }
    /**
     * Re-enable smart contract (admin only)
     */
    async enableSmartContract() {
        const admin = this.admin.getAndRequireEquals();
        this.sender.getAndRequireSignature().assertEquals(admin);
        this.smartContractActive.set(Bool(true));
        // Note: lastUpdateTimestamp removed to fit o1js limit
        this.emitEvent('smart-contract-enabled', admin);
    }
}
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierSmartContractWithSign.prototype, "isGLEIFCompliant", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierSmartContractWithSign.prototype, "riskMitigationBase", void 0);
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierSmartContractWithSign.prototype, "smartContractActive", void 0);
__decorate([
    state(PublicKey),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierSmartContractWithSign.prototype, "admin", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierSmartContractWithSign.prototype, "complianceMapRoot", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierSmartContractWithSign.prototype, "complianceActionState", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], GLEIFEnhancedVerifierSmartContractWithSign.prototype, "totalVerifications", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GLEIFEnhancedComplianceData,
        Signature]),
    __metadata("design:returntype", Promise)
], GLEIFEnhancedVerifierSmartContractWithSign.prototype, "verifyGLEIFComplianceWithParams", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GLEIFEnhancedProof]),
    __metadata("design:returntype", Promise)
], GLEIFEnhancedVerifierSmartContractWithSign.prototype, "verifyGLEIFComplianceWithZKProof", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GLEIFEnhancedVerifierSmartContractWithSign.prototype, "emergencyDisableSmartContract", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GLEIFEnhancedVerifierSmartContractWithSign.prototype, "enableSmartContract", null);
//# sourceMappingURL=GLEIFEnhancedVerifierSmartContractWithSign.js.map