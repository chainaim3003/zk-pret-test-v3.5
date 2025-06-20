var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, SmartContract, state, State, method, Bool, UInt64 } from 'o1js';
import { CorporateRegistrationOptimProof } from '../../zk-programs/with-sign/CorporateRegistrationOptimZKProgram.js';
export class CorporateRegistrationOptimSmartContract extends SmartContract {
    constructor() {
        super(...arguments);
        // =================================== State Variables ===================================
        this.corpRegCompliant = State(); // Main compliance status
        this.totalVerifications = State(); // Count of verifications performed
        this.lastVerificationTime = State(); // Timestamp of last verification
        this.totalCompaniesVerified = State(); // Count of unique companies verified
    }
    // =================================== Initialize Contract ===================================
    init() {
        super.init();
        this.corpRegCompliant.set(Bool(false)); // Start as non-compliant
        this.totalVerifications.set(Field(0)); // Zero verifications initially  
        this.lastVerificationTime.set(UInt64.from(0)); // No verification time
        this.totalCompaniesVerified.set(Field(0)); // Zero companies verified
    }
    // =================================== Main Verification Method ===================================
    async verifyOptimizedComplianceWithProof(proof) {
        // Ensure the state values match their current values (following the working pattern)
        this.corpRegCompliant.requireEquals(this.corpRegCompliant.get());
        this.totalVerifications.requireEquals(this.totalVerifications.get());
        this.totalCompaniesVerified.requireEquals(this.totalCompaniesVerified.get());
        // Get current state values
        const currentCompliantStatus = this.corpRegCompliant.get();
        const currentVerificationCount = this.totalVerifications.get();
        const currentCompaniesCount = this.totalCompaniesVerified.get();
        // =================================== Verify ZK Proof ===================================
        proof.verify();
        // =================================== Extract Proof Data ===================================
        const publicOutput = proof.publicOutput;
        const isCompliant = publicOutput.isCorpRegCompliant;
        const verificationTimestamp = publicOutput.verification_timestamp;
        // =================================== Update Contract State ===================================
        // Update compliance status from proof result
        this.corpRegCompliant.set(isCompliant);
        // Increment verification counter
        const newVerificationCount = currentVerificationCount.add(1);
        this.totalVerifications.set(newVerificationCount);
        // Increment companies verified counter
        const newCompaniesCount = currentCompaniesCount.add(1);
        this.totalCompaniesVerified.set(newCompaniesCount);
        // Update last verification timestamp
        this.lastVerificationTime.set(verificationTimestamp);
    }
    // =================================== Query Methods (Non-@method for compatibility) ===================================
    /**
     * Get current compliance status
     */
    getComplianceStatus() {
        return this.corpRegCompliant.get();
    }
    /**
     * Get total number of verifications performed
     */
    getTotalVerifications() {
        return this.totalVerifications.get();
    }
    /**
     * Get last verification timestamp
     */
    getLastVerificationTime() {
        return this.lastVerificationTime.get();
    }
    // =================================== Administrative Methods ===================================
    /**
     * Reset compliance status (admin function)
     */
    async resetCompliance() {
        this.corpRegCompliant.requireEquals(this.corpRegCompliant.get());
        this.corpRegCompliant.set(Bool(false));
    }
    /**
     * Reset all counters (admin function)
     */
    async resetCounters() {
        this.totalVerifications.requireEquals(this.totalVerifications.get());
        this.totalCompaniesVerified.requireEquals(this.totalCompaniesVerified.get());
        this.totalVerifications.set(Field(0));
        this.totalCompaniesVerified.set(Field(0));
        this.lastVerificationTime.set(UInt64.from(0));
    }
}
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], CorporateRegistrationOptimSmartContract.prototype, "corpRegCompliant", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimSmartContract.prototype, "totalVerifications", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], CorporateRegistrationOptimSmartContract.prototype, "lastVerificationTime", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimSmartContract.prototype, "totalCompaniesVerified", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CorporateRegistrationOptimProof]),
    __metadata("design:returntype", Promise)
], CorporateRegistrationOptimSmartContract.prototype, "verifyOptimizedComplianceWithProof", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CorporateRegistrationOptimSmartContract.prototype, "resetCompliance", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CorporateRegistrationOptimSmartContract.prototype, "resetCounters", null);
//# sourceMappingURL=CorporateRegistrationOptimSmartContract.js.map