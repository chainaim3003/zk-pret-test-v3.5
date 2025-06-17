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
import { LiquidityRatioProof } from '../../zk-programs/with-sign/RiskLiquidityACTUSZKProgram_basel3_Withsign.js';
export class LiquidityRatioVerifierSmartContract extends SmartContract {
    constructor() {
        super(...arguments);
        this.num = State(); // State variable to hold a number
    }
    // Initialize the contract state
    init() {
        super.init(); // Call the parent class initializer
        this.num.set(Field(100)); // Set initial value of `num` to 100
    }
    // Method to verify compliance and update state
    async verifyComplianceWithProof(proof) {
        // Ensure the state of `num` matches its current value
        this.num.requireEquals(this.num.get());
        const currentNum = this.num.get();
        proof.verify();
        const out = proof.publicOutput.out;
        //console.log("out from smart contract",out);                        
        out.assertTrue();
        // Update the state
        const updatedNum = currentNum.sub(10);
        this.num.set(updatedNum);
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], LiquidityRatioVerifierSmartContract.prototype, "num", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LiquidityRatioProof]),
    __metadata("design:returntype", Promise)
], LiquidityRatioVerifierSmartContract.prototype, "verifyComplianceWithProof", null);
//# sourceMappingURL=RiskLiquidityVerifierACTUSSmartContract_basel3_Withsign.js.map