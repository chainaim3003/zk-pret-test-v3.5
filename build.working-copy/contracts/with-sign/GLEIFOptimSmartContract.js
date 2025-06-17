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
import { GLEIFOptimProof } from '../../zk-programs/with-sign/GLEIFOptimZKProgram.js';
export class GLEIFOptimSmartContract extends SmartContract {
    constructor() {
        super(...arguments);
        // =================================== State Variables ===================================
        this.GLEIFCompliant = State(); // Main compliance status
        this.totalVerifications = State(); // Count of verifications performed
        this.lastVerificationTime = State(); // Timestamp of last verification
    }
    // =================================== Initialize Contract ===================================
    init() {
        super.init();
        this.GLEIFCompliant.set(Bool(false)); // Start as non-compliant
        this.totalVerifications.set(Field(0)); // Zero verifications initially  
        this.lastVerificationTime.set(UInt64.from(0)); // No verification time
    }
    // =================================== Main Verification Method ===================================
    async verifyOptimizedComplianceWithProof(proof) {
        // Ensure the state of GLEIFCompliant matches its current value (following the working pattern)
        this.GLEIFCompliant.requireEquals(this.GLEIFCompliant.get());
        this.totalVerifications.requireEquals(this.totalVerifications.get());
        // Get current state values
        const currentCompliantStatus = this.GLEIFCompliant.get();
        const currentVerificationCount = this.totalVerifications.get();
        // =================================== Verify ZK Proof ===================================
        proof.verify();
        // =================================== Extract Proof Data ===================================
        const publicOutput = proof.publicOutput;
        const isCompliant = publicOutput.isGLEIFCompliant;
        const verificationTimestamp = publicOutput.verification_timestamp;
        // =================================== Update Contract State ===================================
        // Update compliance status from proof result
        this.GLEIFCompliant.set(isCompliant);
        // Increment verification counter
        const newVerificationCount = currentVerificationCount.add(1);
        this.totalVerifications.set(newVerificationCount);
        // Update last verification timestamp
        this.lastVerificationTime.set(verificationTimestamp);
    }
    // =================================== Administrative Methods ===================================
    /**
     * Reset compliance status (admin function)
     */
    async resetCompliance() {
        this.GLEIFCompliant.requireEquals(this.GLEIFCompliant.get());
        this.GLEIFCompliant.set(Bool(false));
    }
}
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], GLEIFOptimSmartContract.prototype, "GLEIFCompliant", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], GLEIFOptimSmartContract.prototype, "totalVerifications", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], GLEIFOptimSmartContract.prototype, "lastVerificationTime", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GLEIFOptimProof]),
    __metadata("design:returntype", Promise)
], GLEIFOptimSmartContract.prototype, "verifyOptimizedComplianceWithProof", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GLEIFOptimSmartContract.prototype, "resetCompliance", null);
//# sourceMappingURL=GLEIFOptimSmartContract.js.map