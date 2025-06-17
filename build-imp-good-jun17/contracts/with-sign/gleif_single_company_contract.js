var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, SmartContract, state, State, method, Bool, CircuitString, UInt64 } from 'o1js';
import { GLEIFOptimProof } from '../../zk-programs/with-sign/GLEIFOptimZKProgram.js';
// =================================== Enhanced GLEIF Single Company Smart Contract ===================================
export class GLEIFOptimSingleCompanySmartContract extends SmartContract {
    constructor() {
        super(...arguments);
        // =================================== Company Identity (Enhanced) ===================================
        this.companyLEI = State(); // Legal Entity Identifier
        this.companyName = State(); // Company legal name
        this.jurisdiction = State(); // Legal jurisdiction
        this.entityStatus = State(); // ACTIVE/INACTIVE
        // =================================== Current Compliance Status ===================================
        this.GLEIFCompliant = State(); // Current compliance status
        this.currentComplianceScore = State(); // Current compliance score (0-100)
        this.lastVerificationTime = State(); // Most recent verification time
        this.lastGLEIFUpdate = State(); // Last GLEIF data update
        // =================================== Verification History Tracking ===================================
        this.totalVerifications = State(); // Total number of verifications
        this.verificationsMapRoot = State(); // Merkle root of all verification records
        this.firstVerificationTime = State(); // When first verified
        this.contractCreationTime = State(); // When contract was deployed
    }
    // =================================== Initialize Contract ===================================
    init() {
        super.init();
        // Company identity (empty initially)
        this.companyLEI.set(CircuitString.fromString(''));
        this.companyName.set(CircuitString.fromString(''));
        this.jurisdiction.set(CircuitString.fromString(''));
        this.entityStatus.set(CircuitString.fromString(''));
        // Compliance status
        this.GLEIFCompliant.set(Bool(false));
        this.currentComplianceScore.set(Field(0));
        this.lastVerificationTime.set(UInt64.from(0));
        this.lastGLEIFUpdate.set(UInt64.from(0));
        // Verification history
        this.totalVerifications.set(Field(0));
        this.verificationsMapRoot.set(Field(0)); // Empty merkle tree root
        this.firstVerificationTime.set(UInt64.from(0));
        this.contractCreationTime.set(UInt64.from(Date.now()));
    }
    // =================================== Enhanced Verification Method ===================================
    async verifyOptimizedComplianceWithProof(proof, isFirstVerification) {
        // Get current state values
        const currentCompliantStatus = this.GLEIFCompliant.get();
        const currentVerificationCount = this.totalVerifications.get();
        const currentLEI = this.companyLEI.get();
        const currentFirstVerificationTime = this.firstVerificationTime.get();
        // =================================== Verify ZK Proof ===================================
        proof.verify();
        // =================================== Extract Proof Data ===================================
        const publicOutput = proof.publicOutput;
        const proofLEI = publicOutput.lei;
        const proofName = publicOutput.name;
        const isCompliant = publicOutput.isGLEIFCompliant;
        const verificationTimestamp = publicOutput.verification_timestamp;
        // =================================== Company Identity Validation ===================================
        const emptyLEI = CircuitString.fromString('');
        const isContractEmpty = currentLEI.equals(emptyLEI);
        // If first verification, set company identity
        // If not first verification, ensure it's the same company
        const isValidCompany = isContractEmpty.and(isFirstVerification).or(currentLEI.equals(proofLEI));
        isValidCompany.assertTrue();
        // =================================== Update Company Identity (First Time Only) ===================================
        this.companyLEI.set(proofLEI);
        this.companyName.set(proofName);
        // Extract additional fields from proof if available
        // this.jurisdiction.set(publicOutput.jurisdiction || CircuitString.fromString(''));
        // this.entityStatus.set(publicOutput.entityStatus || CircuitString.fromString(''));
        // =================================== Update Current Compliance State ===================================
        this.GLEIFCompliant.set(isCompliant);
        this.currentComplianceScore.set(isCompliant.toField().mul(100)); // Simplified scoring
        this.lastVerificationTime.set(verificationTimestamp);
        this.lastGLEIFUpdate.set(verificationTimestamp); // Assume verification includes fresh GLEIF data
        // =================================== Update Verification History ===================================
        const newVerificationCount = currentVerificationCount.add(1);
        this.totalVerifications.set(newVerificationCount);
        // Set first verification time if this is the first verification
        const shouldUseNewTime = isFirstVerification;
        const updatedFirstTime = shouldUseNewTime.toField().equals(Field(1))
            ? verificationTimestamp
            : currentFirstVerificationTime;
        this.firstVerificationTime.set(updatedFirstTime);
        // TODO: Update verificationsMapRoot with new verification record
    }
    // =================================== Company Information Queries ===================================
    /**
     * Get complete company GLEIF information and current status
     */
    getCompanyGLEIFInfo() {
        return {
            companyLEI: this.companyLEI.get(),
            companyName: this.companyName.get(),
            jurisdiction: this.jurisdiction.get(),
            entityStatus: this.entityStatus.get(),
            isCompliant: this.GLEIFCompliant.get(),
            complianceScore: this.currentComplianceScore.get(),
            lastGLEIFUpdate: this.lastGLEIFUpdate.get()
        };
    }
    /**
     * Get current GLEIF compliance status (most recent verification)
     */
    getCurrentGLEIFCompliance() {
        return {
            isCompliant: this.GLEIFCompliant.get(),
            lastVerificationTime: this.lastVerificationTime.get(),
            complianceScore: this.currentComplianceScore.get(),
            lei: this.companyLEI.get()
        };
    }
    /**
     * Get GLEIF verification statistics
     */
    getGLEIFVerificationStats() {
        const currentTime = UInt64.from(Date.now());
        const creationTime = this.contractCreationTime.get();
        const contractAge = currentTime.sub(creationTime);
        const hasBeenVerified = this.totalVerifications.get().greaterThan(Field(0));
        // Calculate days since last GLEIF update
        const lastUpdate = this.lastGLEIFUpdate.get();
        const daysSinceUpdate = currentTime.sub(lastUpdate).div(UInt64.from(86400000)); // ms to days
        return {
            totalVerifications: this.totalVerifications.get(),
            firstVerificationTime: this.firstVerificationTime.get(),
            lastVerificationTime: this.lastVerificationTime.get(),
            contractAge: contractAge,
            hasBeenVerified: hasBeenVerified,
            daysSinceLastUpdate: daysSinceUpdate.value
        };
    }
    /**
     * Check if a specific company is tracked by this contract
     */
    isTrackingGLEIFCompany(expectedLEI) {
        const currentLEI = this.companyLEI.get();
        const emptyLEI = CircuitString.fromString('');
        const hasCompany = currentLEI.equals(emptyLEI).not();
        return hasCompany.and(currentLEI.equals(expectedLEI));
    }
    /**
     * Check if GLEIF data is stale (over 1 year old)
     */
    isGLEIFDataStale() {
        const currentTime = UInt64.from(Date.now());
        const lastUpdate = this.lastGLEIFUpdate.get();
        const oneYear = UInt64.from(365 * 24 * 60 * 60 * 1000); // One year in milliseconds
        return currentTime.sub(lastUpdate).greaterThan(oneYear);
    }
    // =================================== Administrative Methods ===================================
    /**
     * Reset GLEIF compliance status (admin function)
     */
    async resetGLEIFCompliance() {
        this.GLEIFCompliant.set(Bool(false));
        this.currentComplianceScore.set(Field(0));
    }
    /**
     * Update GLEIF data timestamp (admin function)
     */
    async updateGLEIFDataTimestamp(newUpdateTime) {
        this.lastGLEIFUpdate.set(newUpdateTime);
    }
    /**
     * Reset entire contract for new company (admin function)
     * WARNING: This erases all history
     */
    async resetForNewGLEIFCompany() {
        // Reset company identity
        this.companyLEI.set(CircuitString.fromString(''));
        this.companyName.set(CircuitString.fromString(''));
        this.jurisdiction.set(CircuitString.fromString(''));
        this.entityStatus.set(CircuitString.fromString(''));
        // Reset compliance
        this.GLEIFCompliant.set(Bool(false));
        this.currentComplianceScore.set(Field(0));
        this.lastVerificationTime.set(UInt64.from(0));
        this.lastGLEIFUpdate.set(UInt64.from(0));
        // Reset history
        this.totalVerifications.set(Field(0));
        this.verificationsMapRoot.set(Field(0));
        this.firstVerificationTime.set(UInt64.from(0));
    }
}
__decorate([
    state(CircuitString),
    __metadata("design:type", Object)
], GLEIFOptimSingleCompanySmartContract.prototype, "companyLEI", void 0);
__decorate([
    state(CircuitString),
    __metadata("design:type", Object)
], GLEIFOptimSingleCompanySmartContract.prototype, "companyName", void 0);
__decorate([
    state(CircuitString),
    __metadata("design:type", Object)
], GLEIFOptimSingleCompanySmartContract.prototype, "jurisdiction", void 0);
__decorate([
    state(CircuitString),
    __metadata("design:type", Object)
], GLEIFOptimSingleCompanySmartContract.prototype, "entityStatus", void 0);
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], GLEIFOptimSingleCompanySmartContract.prototype, "GLEIFCompliant", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GLEIFOptimSingleCompanySmartContract.prototype, "currentComplianceScore", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], GLEIFOptimSingleCompanySmartContract.prototype, "lastVerificationTime", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], GLEIFOptimSingleCompanySmartContract.prototype, "lastGLEIFUpdate", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GLEIFOptimSingleCompanySmartContract.prototype, "totalVerifications", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GLEIFOptimSingleCompanySmartContract.prototype, "verificationsMapRoot", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], GLEIFOptimSingleCompanySmartContract.prototype, "firstVerificationTime", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], GLEIFOptimSingleCompanySmartContract.prototype, "contractCreationTime", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GLEIFOptimProof,
        Bool]),
    __metadata("design:returntype", Promise)
], GLEIFOptimSingleCompanySmartContract.prototype, "verifyOptimizedComplianceWithProof", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GLEIFOptimSingleCompanySmartContract.prototype, "resetGLEIFCompliance", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64]),
    __metadata("design:returntype", Promise)
], GLEIFOptimSingleCompanySmartContract.prototype, "updateGLEIFDataTimestamp", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GLEIFOptimSingleCompanySmartContract.prototype, "resetForNewGLEIFCompany", null);
//# sourceMappingURL=gleif_single_company_contract.js.map