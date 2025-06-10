var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SmartContract, method, State, state, Field, } from 'o1js';
import { ComposedProof } from '../../zk-programs/with-sign/Composed3levelZKProgramWithSign.js';
export class ComplianceVerifierSC extends SmartContract {
    constructor() {
        super(...arguments);
        this.verificationState = State();
    }
    init() {
        super.init();
        this.verificationState.set(Field(100)); // Initial valid state
    }
    //
    async verifyMaster(proof) {
        proof.verify();
        const currentState = this.verificationState.get();
        this.verificationState.requireEquals(currentState);
        //const output = proof.publicOutput;
        // output.complianceStatus.assertEquals(Field(1));
        // output.authorityChain.assertEquals(Field(6)); // MCA(1) + GLEIF(2) + EXIM(3)
        // Update state with new composite hash
        const newState = currentState.sub(10);
        this.verificationState.set(newState);
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], ComplianceVerifierSC.prototype, "verificationState", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ComposedProof]),
    __metadata("design:returntype", Promise)
], ComplianceVerifierSC.prototype, "verifyMaster", null);
//# sourceMappingURL=ComposedRecursive3LevelSmartContractWithSign.js.map