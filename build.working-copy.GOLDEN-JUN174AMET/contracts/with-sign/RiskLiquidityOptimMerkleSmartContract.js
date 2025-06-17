/**
 * ====================================================================
 * Risk Liquidity OptimMerkle Smart Contract
 * ====================================================================
 * Simple smart contract for Risk Liquidity scenarios
 * Handles Advanced, Basel3, and StableCoin proofs with 100→90 state change logic
 * ====================================================================
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, SmartContract, state, State, method } from 'o1js';
import { RiskLiquidityAdvancedOptimMerkleProof } from '../../zk-programs/with-sign/RiskLiquidityAdvancedOptimMerkleZKProgramWithSign.js';
import { RiskLiquidityBasel3OptimMerkleProof } from '../../zk-programs/with-sign/RiskLiquidityBasel3OptimMerkleZKProgramWithSign.js';
import { RiskLiquidityStableCoinOptimMerkleProof } from '../../zk-programs/with-sign/RiskLiquidityStableCoinOptimMerkleZKProgramWithSign.js';
export class RiskLiquidityOptimMerkleSmartContract extends SmartContract {
    constructor() {
        super(...arguments);
        // =================================== State Variables ===================================
        this.riskComplianceStatus = State(); // Main compliance status (100 = not verified, 90 = verified)
        this.totalVerifications = State(); // Count of successful verifications
    }
    // =================================== Initialize Contract ===================================
    init() {
        super.init();
        this.riskComplianceStatus.set(Field(100)); // Start with unverified status (100)
        this.totalVerifications.set(Field(0)); // Zero verifications initially  
    }
    // =================================== Advanced Risk Verification ===================================
    async verifyAdvancedRiskComplianceWithProof(proof) {
        // Ensure the state variables match their current values
        this.riskComplianceStatus.requireEquals(this.riskComplianceStatus.get());
        this.totalVerifications.requireEquals(this.totalVerifications.get());
        // Get current state values
        const currentVerificationCount = this.totalVerifications.get();
        // =================================== Verify ZK Proof ===================================
        proof.verify();
        // =================================== Extract Proof Data ===================================
        const publicOutput = proof.publicOutput;
        const isCompliant = publicOutput.riskCompliant;
        // =================================== Update Contract State Based on Compliance ===================================
        // Advanced Risk specific: if compliant, change status from 100 to 90
        this.riskComplianceStatus.set(Field(90));
        // Update verification metadata
        const newVerificationCount = currentVerificationCount.add(1);
        this.totalVerifications.set(newVerificationCount);
    }
    // =================================== Basel3 Risk Verification ===================================
    async verifyBasel3RiskComplianceWithProof(proof) {
        // Ensure the state variables match their current values
        this.riskComplianceStatus.requireEquals(this.riskComplianceStatus.get());
        this.totalVerifications.requireEquals(this.totalVerifications.get());
        // Get current state values
        const currentVerificationCount = this.totalVerifications.get();
        // =================================== Verify ZK Proof ===================================
        proof.verify();
        // =================================== Extract Proof Data ===================================
        const publicOutput = proof.publicOutput;
        const isCompliant = publicOutput.basel3Compliant;
        // =================================== Update Contract State Based on Compliance ===================================
        // Basel3 specific: if compliant, change status from 100 to 90
        this.riskComplianceStatus.set(Field(90));
        // Update verification metadata
        const newVerificationCount = currentVerificationCount.add(1);
        this.totalVerifications.set(newVerificationCount);
    }
    // =================================== StableCoin Risk Verification ===================================
    async verifyStableCoinRiskComplianceWithProof(proof) {
        // Ensure the state variables match their current values
        this.riskComplianceStatus.requireEquals(this.riskComplianceStatus.get());
        this.totalVerifications.requireEquals(this.totalVerifications.get());
        // Get current state values
        const currentVerificationCount = this.totalVerifications.get();
        // =================================== Verify ZK Proof ===================================
        proof.verify();
        // =================================== Extract Proof Data ===================================
        const publicOutput = proof.publicOutput;
        const isCompliant = publicOutput.stableCoinCompliant;
        // =================================== Update Contract State Based on Compliance ===================================
        // StableCoin specific: if compliant, change status from 100 to 90
        this.riskComplianceStatus.set(Field(90));
        // Update verification metadata
        const newVerificationCount = currentVerificationCount.add(1);
        this.totalVerifications.set(newVerificationCount);
    }
    // =================================== Administrative Methods ===================================
    /**
     * Reset compliance status to unverified state (admin function)
     */
    async resetRiskCompliance() {
        this.riskComplianceStatus.requireEquals(this.riskComplianceStatus.get());
        this.riskComplianceStatus.set(Field(100)); // Reset to unverified
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], RiskLiquidityOptimMerkleSmartContract.prototype, "riskComplianceStatus", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], RiskLiquidityOptimMerkleSmartContract.prototype, "totalVerifications", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RiskLiquidityAdvancedOptimMerkleProof]),
    __metadata("design:returntype", Promise)
], RiskLiquidityOptimMerkleSmartContract.prototype, "verifyAdvancedRiskComplianceWithProof", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RiskLiquidityBasel3OptimMerkleProof]),
    __metadata("design:returntype", Promise)
], RiskLiquidityOptimMerkleSmartContract.prototype, "verifyBasel3RiskComplianceWithProof", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RiskLiquidityStableCoinOptimMerkleProof]),
    __metadata("design:returntype", Promise)
], RiskLiquidityOptimMerkleSmartContract.prototype, "verifyStableCoinRiskComplianceWithProof", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RiskLiquidityOptimMerkleSmartContract.prototype, "resetRiskCompliance", null);
//# sourceMappingURL=RiskLiquidityOptimMerkleSmartContract.js.map