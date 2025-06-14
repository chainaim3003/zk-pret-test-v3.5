/**
 * ====================================================================
 * Risk Liquidity Basel3 OptimMerkle Smart Contract
 * ====================================================================
 * Simple smart contract for Basel3 LCR/NSFR Risk verification
 * Follows the original pattern: 100→90 state change on compliance
 * ====================================================================
 */

import { Field, SmartContract, state, State, method } from 'o1js';
import { RiskLiquidityBasel3OptimMerkleProof } from '../../zk-programs/with-sign/RiskLiquidityBasel3OptimMerkleZKProgramWithSign.js';

export class RiskLiquidityBasel3OptimMerkleSmartContract extends SmartContract {
    @state(Field) riskComplianceStatus = State<Field>();           // Main compliance status (100 = not verified, 90 = verified)
    @state(Field) totalVerifications = State<Field>();             // Count of successful verifications

    // Initialize the contract state
    init() {
        super.init();
        this.riskComplianceStatus.set(Field(100));           // Start with unverified status (100)
        this.totalVerifications.set(Field(0));               // Zero verifications initially  
    }

    // Method to verify Basel3 compliance and update state
    @method async verifyBasel3RiskComplianceWithProof(proof: RiskLiquidityBasel3OptimMerkleProof) {
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
        const isBasel3Compliant = publicOutput.basel3Compliant;

        // Update state based on compliance result
        // If compliant: 100 → 90 (compliance achieved)
        // If non-compliant: 100 → 110 (non-compliance verified)
        const updatedStatus = isBasel3Compliant.toField()
            .mul(Field(90))  // If compliant (true=1): 1 * 90 = 90
            .add(isBasel3Compliant.not().toField().mul(Field(110))); // If non-compliant (false=1): 1 * 110 = 110
        
        this.riskComplianceStatus.set(updatedStatus);
        
        // Update verification metadata
        const newVerificationCount = currentVerificationCount.add(Field(1));
        this.totalVerifications.set(newVerificationCount);
    }
}
