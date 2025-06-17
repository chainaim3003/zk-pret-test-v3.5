/**
 * ====================================================================
 * Risk Liquidity Basel3 OptimMerkle Smart Contract
 * ====================================================================
 * Simple smart contract for Basel3 LCR/NSFR Risk verification
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
import { Field, SmartContract, state, State, method, Provable } from 'o1js';
import { RiskLiquidityBasel3OptimMerkleProof } from '../../zk-programs/with-sign/RiskLiquidityBasel3OptimMerkleZKProgramWithSign.js';
export class RiskLiquidityBasel3OptimMerkleSmartContract extends SmartContract {
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
    // Method to verify Basel3 compliance and update state
    async verifyBasel3RiskComplianceWithProof(proof) {
        // Ensure the state variables match their current values
        this.riskComplianceStatus.requireEquals(this.riskComplianceStatus.get());
        this.totalVerifications.requireEquals(this.totalVerifications.get());
        // Get current state values
        const currentStatus = this.riskComplianceStatus.get();
        const currentVerificationCount = this.totalVerifications.get();
        // 🔧 CRITICAL DEBUG: Log current contract status BEFORE any operations
        console.log(`🔍 SMART CONTRACT DEBUG - BEFORE VERIFICATION:`);
        // 🔧 Use Provable.log for Field values in ZK circuits
        Provable.log('Current Status:', currentStatus);
        Provable.log('Current Verifications:', currentVerificationCount);
        // Verify the ZK proof (compliance guaranteed by circuit assertion)
        proof.verify();
        // Extract compliance result from proof (should always be true if proof exists)
        const publicOutput = proof.publicOutput;
        const isBasel3Compliant = publicOutput.basel3Compliant;
        // 🔧 CRITICAL DEBUG: Check exactly what the ZK proof contains
        console.log(`🔍 SMART CONTRACT DEBUG - ZK PROOF VALUES:`);
        // 🔧 Use Provable.log for debugging Bool and Field values in ZK circuits
        Provable.log('Basel3 Compliant:', isBasel3Compliant);
        Provable.log('LCR Ratio:', publicOutput.lcrRatio);
        Provable.log('NSFR Ratio:', publicOutput.nsfrRatio);
        Provable.log('LCR Threshold:', publicOutput.lcrThreshold);
        Provable.log('NSFR Threshold:', publicOutput.nsfrThreshold);
        // 🔧 CRITICAL TEST: For non-compliant scenarios, the assertion should fail
        // Note: We can't use .toBoolean() during compilation, so we rely on the assertion
        // 🔧 CRITICAL FIX: Smart contract should enforce compliance at verification time
        // This provides defense-in-depth: even if ZK proof exists, verify compliance flag
        // Non-compliant scenarios should be rejected at the smart contract level
        isBasel3Compliant.assertTrue('Basel3 compliance verification failed - both LCR and NSFR thresholds must be met');
        // 🔍 SMART CONTRACT DEBUG - COMPLIANCE CHECK PASSED
        // Note: Cannot use .toBoolean() in circuit code - use Provable.log instead
        Provable.log('✅ Basel3 Compliant:', isBasel3Compliant);
        console.log(`🔍 SMART CONTRACT DEBUG - COMPLIANCE CHECK PASSED`);
        console.log(`   📊 This means both LCR and NSFR thresholds were met`);
        // Update state to compliant status (90) - only reached if all checks pass
        console.log(`🔧 SMART CONTRACT DEBUG - UPDATING STATUS TO 90`);
        this.riskComplianceStatus.set(Field(90));
        // Update verification metadata
        const newVerificationCount = currentVerificationCount.add(Field(1));
        this.totalVerifications.set(newVerificationCount);
        console.log(`🔍 SMART CONTRACT DEBUG - AFTER VERIFICATION:`);
        console.log(`   - New Status: 90 (set)`);
        Provable.log('New Verifications:', newVerificationCount);
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], RiskLiquidityBasel3OptimMerkleSmartContract.prototype, "riskComplianceStatus", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], RiskLiquidityBasel3OptimMerkleSmartContract.prototype, "totalVerifications", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RiskLiquidityBasel3OptimMerkleProof]),
    __metadata("design:returntype", Promise)
], RiskLiquidityBasel3OptimMerkleSmartContract.prototype, "verifyBasel3RiskComplianceWithProof", null);
//# sourceMappingURL=RiskLiquidityBasel3OptimMerkleSmartContract.js.map