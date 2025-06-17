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
import { BusinessStandardDataIntegrityProof } from '../../zk-programs/with-sign/BusinessStandardDataIntegrityZKProgram.js';
export class BusinessStandardDataIntegrityVerificationSmartContract extends SmartContract {
    constructor() {
        super(...arguments);
        this.risk = State(); // State variable to hold risk score
    }
    // Initialize the contract state
    init() {
        super.init(); // Call the parent class initializer
        this.risk.set(Field(100)); // Set initial value of `risk` to 100
    }
    // Method to verify compliance and update state
    async verifyComplianceWithProof(proof) {
        // Ensure the state of `risk` matches its current value
        this.risk.requireEquals(this.risk.get());
        const currentRisk = this.risk.get();
        // Verify the cryptographic proof
        proof.verify();
        // Get the boolean result from the proof (with explicit casting if needed)
        const publicOutput = proof.publicOutput;
        const result = publicOutput.result;
        const evaluationId = publicOutput.businessStandardDataIntegrityEvaluationId;
        // Log the evaluation details
        Provable.asProver(() => {
            console.log('Evaluation ID:', evaluationId.toJSON(), 'Result:', result.toJSON());
        });
        // Only proceed if result is true
        result.assertTrue();
        // Update the state only if proof is valid and result is true
        const updatedRisk = currentRisk.sub(10);
        this.risk.set(updatedRisk);
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], BusinessStandardDataIntegrityVerificationSmartContract.prototype, "risk", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BusinessStandardDataIntegrityProof]),
    __metadata("design:returntype", Promise)
], BusinessStandardDataIntegrityVerificationSmartContract.prototype, "verifyComplianceWithProof", null);
//# sourceMappingURL=BusinessStandardDataIntegrityVerificationSmartContract.js.map