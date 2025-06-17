var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, SmartContract, state, State, method, Bool, CircuitString, UInt64, Struct } from 'o1js';
import { CorporateRegistrationOptimProof } from '../../zk-programs/with-sign/CorporateRegistrationOptimZKProgram.js';
// =================================== Verification Record Structure ===================================
export class CorporateRegistrationVerificationRecord extends Struct({
    verificationIndex: Field,
    isCompliant: Bool,
    verificationTimestamp: UInt64,
    complianceScore: Field,
    merkleRoot: Field, // Merkle root of the verification data
}) {
}
// =================================== Corporate Registration Single Company Contract ===================================
export class CorporateRegistrationOptimSingleCompanySmartContract extends SmartContract {
    constructor() {
        super(...arguments);
        // =================================== Company Identity (Optimized for 8-field limit) ===================================
        this.companyIdentifierHash = State(); // Hash of CIN or Registration Number
        this.companyNameHash = State(); // Hash of company legal name
        this.jurisdictionHash = State(); // Hash of jurisdiction of registration
        // =================================== Current Compliance Status ===================================
        this.corpRegCompliant = State(); // Current compliance status
        this.currentComplianceScore = State(); // Current compliance score (0-100)
        this.lastVerificationTime = State(); // Most recent verification time
        // =================================== Verification History Tracking ===================================
        this.totalVerifications = State(); // Total number of verifications
        this.firstVerificationTime = State(); // When first verified
    }
    // =================================== NOTE: Removed fields to meet 8-field limit ===================================
    // ❌ @state(Field) verificationsMapRoot = State<Field>(); // REMOVED - can be computed off-chain
    // ❌ @state(UInt64) contractCreationTime = State<UInt64>(); // REMOVED - can use blockchain timestamp
    // =================================== NOTE: totalCompaniesVerified REMOVED ===================================
    // ❌ @state(Field) totalCompaniesVerified = State<Field>(); // REMOVED - meaningless for single company
    // =================================== Initialize Contract ===================================
    init() {
        super.init();
        // Company identity (empty initially - using zero hash for empty)
        this.companyIdentifierHash.set(Field(0));
        this.companyNameHash.set(Field(0));
        this.jurisdictionHash.set(Field(0));
        // Compliance status
        this.corpRegCompliant.set(Bool(false));
        this.currentComplianceScore.set(Field(0));
        this.lastVerificationTime.set(UInt64.from(0));
        // Verification history
        this.totalVerifications.set(Field(0));
        this.firstVerificationTime.set(UInt64.from(0));
    }
    // =================================== Enhanced Verification Method ===================================
    async verifyOptimizedComplianceWithProof(proof) {
        // Add required state preconditions for proper constraint generation
        this.companyIdentifierHash.requireEquals(this.companyIdentifierHash.get());
        this.totalVerifications.requireEquals(this.totalVerifications.get());
        this.firstVerificationTime.requireEquals(this.firstVerificationTime.get());
        this.corpRegCompliant.requireEquals(this.corpRegCompliant.get());
        // Get current state values
        const currentCompliantStatus = this.corpRegCompliant.get();
        const currentVerificationCount = this.totalVerifications.get();
        const currentCompanyIdHash = this.companyIdentifierHash.get();
        const currentFirstVerificationTime = this.firstVerificationTime.get();
        // =================================== Verify ZK Proof ===================================
        proof.verify();
        // =================================== Extract Proof Data ===================================
        const publicOutput = proof.publicOutput;
        const isCompliant = publicOutput.isCorpRegCompliant;
        const verificationTimestamp = publicOutput.verification_timestamp;
        // Extract company identification from proof and hash them
        const proofCompanyId = publicOutput.CIN;
        const proofCompanyName = publicOutput.companyName;
        const proofJurisdiction = CircuitString.fromString('India'); // Default for Corporate Registration
        // Create hashes for comparison and storage
        const proofCompanyIdHash = proofCompanyId.hash();
        const proofCompanyNameHash = proofCompanyName.hash();
        const proofJurisdictionHash = proofJurisdiction.hash();
        // =================================== Company Identity Validation ===================================
        const emptyHash = Field(0);
        const isContractEmpty = currentCompanyIdHash.equals(emptyHash);
        const isFirstVerification = currentVerificationCount.equals(Field(0));
        // If first verification, set company identity
        // If not first verification, ensure it's the same company
        const isValidCompany = isContractEmpty.and(isFirstVerification).or(currentCompanyIdHash.equals(proofCompanyIdHash));
        isValidCompany.assertTrue('Company identifier mismatch - this contract is for a different company');
        // =================================== Update Company Identity (First Time Only) ===================================
        // Set company identity hashes on first verification or keep existing
        this.companyIdentifierHash.set(proofCompanyIdHash);
        this.companyNameHash.set(proofCompanyNameHash);
        this.jurisdictionHash.set(proofJurisdictionHash);
        // =================================== Update Current Compliance State ===================================
        this.corpRegCompliant.set(isCompliant);
        // Calculate compliance score based on proof data (simplified)
        const complianceScore = isCompliant.toField().mul(100);
        this.currentComplianceScore.set(complianceScore);
        this.lastVerificationTime.set(verificationTimestamp);
        // =================================== Update Verification History ===================================
        const newVerificationCount = currentVerificationCount.add(1);
        this.totalVerifications.set(newVerificationCount);
        // Set first verification time if this is the first verification
        const shouldUseNewTime = isFirstVerification;
        const updatedFirstTime = shouldUseNewTime.toField().equals(Field(1))
            ? verificationTimestamp
            : currentFirstVerificationTime;
        this.firstVerificationTime.set(updatedFirstTime);
        // NOTE: verificationsMapRoot removed to meet o1js 8-field limit
        // Verification history can be tracked off-chain or via events
    }
    // =================================== Company Information Queries ===================================
    /**
     * Get complete company information and current status (returns hashes for privacy)
     */
    getCompanyInfo() {
        // Add required state preconditions
        this.companyIdentifierHash.requireEquals(this.companyIdentifierHash.get());
        this.companyNameHash.requireEquals(this.companyNameHash.get());
        this.jurisdictionHash.requireEquals(this.jurisdictionHash.get());
        this.corpRegCompliant.requireEquals(this.corpRegCompliant.get());
        this.currentComplianceScore.requireEquals(this.currentComplianceScore.get());
        return {
            companyIdentifierHash: this.companyIdentifierHash.get(),
            companyNameHash: this.companyNameHash.get(),
            jurisdictionHash: this.jurisdictionHash.get(),
            isCompliant: this.corpRegCompliant.get(),
            complianceScore: this.currentComplianceScore.get()
        };
    }
    /**
     * Get current compliance status (most recent verification)
     */
    getCurrentCompliance() {
        // Add required state preconditions
        this.corpRegCompliant.requireEquals(this.corpRegCompliant.get());
        this.lastVerificationTime.requireEquals(this.lastVerificationTime.get());
        this.currentComplianceScore.requireEquals(this.currentComplianceScore.get());
        return {
            isCompliant: this.corpRegCompliant.get(),
            lastVerificationTime: this.lastVerificationTime.get(),
            complianceScore: this.currentComplianceScore.get()
        };
    }
    /**
     * Get verification statistics
     */
    getVerificationStats() {
        // Add required state preconditions
        this.totalVerifications.requireEquals(this.totalVerifications.get());
        this.firstVerificationTime.requireEquals(this.firstVerificationTime.get());
        this.lastVerificationTime.requireEquals(this.lastVerificationTime.get());
        const hasBeenVerified = this.totalVerifications.get().greaterThan(Field(0));
        return {
            totalVerifications: this.totalVerifications.get(),
            firstVerificationTime: this.firstVerificationTime.get(),
            lastVerificationTime: this.lastVerificationTime.get(),
            hasBeenVerified: hasBeenVerified
        };
    }
    /**
     * Check if a specific company is tracked by this contract (using hash comparison)
     */
    isTrackingCompany(expectedCompanyIdHash) {
        // Add required state precondition
        this.companyIdentifierHash.requireEquals(this.companyIdentifierHash.get());
        const currentCompanyIdHash = this.companyIdentifierHash.get();
        const emptyHash = Field(0);
        const hasCompany = currentCompanyIdHash.equals(emptyHash).not();
        return hasCompany.and(currentCompanyIdHash.equals(expectedCompanyIdHash));
    }
    // =================================== Administrative Methods ===================================
    /**
     * Reset compliance status (admin function)
     */
    async resetCompliance() {
        // Add required state precondition
        this.corpRegCompliant.requireEquals(this.corpRegCompliant.get());
        this.corpRegCompliant.set(Bool(false));
        this.currentComplianceScore.set(Field(0));
    }
    /**
     * Reset entire contract for new company (admin function)
     * WARNING: This erases all history
     */
    async resetForNewCompany() {
        // Add required state preconditions
        this.companyIdentifierHash.requireEquals(this.companyIdentifierHash.get());
        this.totalVerifications.requireEquals(this.totalVerifications.get());
        // Reset company identity hashes
        this.companyIdentifierHash.set(Field(0));
        this.companyNameHash.set(Field(0));
        this.jurisdictionHash.set(Field(0));
        // Reset compliance
        this.corpRegCompliant.set(Bool(false));
        this.currentComplianceScore.set(Field(0));
        this.lastVerificationTime.set(UInt64.from(0));
        // Reset history
        this.totalVerifications.set(Field(0));
        this.firstVerificationTime.set(UInt64.from(0));
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimSingleCompanySmartContract.prototype, "companyIdentifierHash", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimSingleCompanySmartContract.prototype, "companyNameHash", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimSingleCompanySmartContract.prototype, "jurisdictionHash", void 0);
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], CorporateRegistrationOptimSingleCompanySmartContract.prototype, "corpRegCompliant", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimSingleCompanySmartContract.prototype, "currentComplianceScore", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], CorporateRegistrationOptimSingleCompanySmartContract.prototype, "lastVerificationTime", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimSingleCompanySmartContract.prototype, "totalVerifications", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], CorporateRegistrationOptimSingleCompanySmartContract.prototype, "firstVerificationTime", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CorporateRegistrationOptimProof]),
    __metadata("design:returntype", Promise)
], CorporateRegistrationOptimSingleCompanySmartContract.prototype, "verifyOptimizedComplianceWithProof", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CorporateRegistrationOptimSingleCompanySmartContract.prototype, "resetCompliance", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CorporateRegistrationOptimSingleCompanySmartContract.prototype, "resetForNewCompany", null);
//# sourceMappingURL=CorporateRegistrationOptimSingleCompanySmartContract.js.map