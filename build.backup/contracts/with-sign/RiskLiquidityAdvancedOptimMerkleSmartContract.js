/**
 * ====================================================================
 * Risk Liquidity Advanced OptimMerkle Smart Contract
 * ====================================================================
 * Simple smart contract for Advanced Risk Liquidity verification
 * Follows the original pattern: 100→90 state change on compliance
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
export class RiskLiquidityAdvancedOptimMerkleSmartContract extends SmartContract {
    constructor() {
        super(...arguments);
        this.riskComplianceStatus = State(); // Main compliance status (100 = not verified, 90 = verified)
        this.totalVerifications = State(); // Count of successful verifications
    }
    // Initialize the contract state
    init() {
        super.init();
        this.riskComplianceStatus.set(Field(100)); // Start with unverified status (100)
        this.totalVerifications.set(Field(0)); // Zero verifications initially  
    }
    // Method to verify Advanced Risk compliance and update state
    async verifyAdvancedRiskComplianceWithProof(proof) {
        // Ensure the state variables match their current values
        this.riskComplianceStatus.requireEquals(this.riskComplianceStatus.get());
        this.totalVerifications.requireEquals(this.totalVerifications.get());
        // Get current state values
        const currentStatus = this.riskComplianceStatus.get();
        const currentVerificationCount = this.totalVerifications.get();
        // Verify the ZK proof
        proof.verify();
        // Extract compliance result from proof
        const publicOutput = proof.publicOutput;
        const isRiskCompliant = publicOutput.riskCompliant;
        // Advanced Risk compliance achieved: change status from 100 to 90
        isRiskCompliant.assertTrue();
        // Update the state: 100 → 90 (compliance achieved)
        const updatedStatus = currentStatus.sub(Field(10));
        this.riskComplianceStatus.set(updatedStatus);
        // Update verification metadata
        const newVerificationCount = currentVerificationCount.add(Field(1));
        this.totalVerifications.set(newVerificationCount);
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], RiskLiquidityAdvancedOptimMerkleSmartContract.prototype, "riskComplianceStatus", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], RiskLiquidityAdvancedOptimMerkleSmartContract.prototype, "totalVerifications", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RiskLiquidityAdvancedOptimMerkleProof]),
    __metadata("design:returntype", Promise)
], RiskLiquidityAdvancedOptimMerkleSmartContract.prototype, "verifyAdvancedRiskComplianceWithProof", null);
//# sourceMappingURL=RiskLiquidityAdvancedOptimMerkleSmartContract.js.map