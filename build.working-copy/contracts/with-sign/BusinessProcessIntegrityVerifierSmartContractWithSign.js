var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, SmartContract, state, State, method, Provable, Poseidon, Signature, Bytes, UInt8 } from 'o1js';
import { BusinessProcessIntegrityProof } from '../../zk-programs/with-sign/BusinessProcessIntegrityZKProgramWithSign.js';
import { BusinessProcessIntegrityData } from '../../zk-programs/with-sign/BusinessProcessIntegrityZKProgramWithSign.js';
import { getPublicKeyFor } from '../../core/OracleRegistry.js';
import { verifyProcessSCF, verifyProcessDVP } from '../../contracts/bpmnCircuit.js';
class Bytes80 extends Bytes(20) {
}
// Define the ComplianceData struct
// SmartContract definition
export class BusinessProcessIntegrityVerifierSmartContract extends SmartContract {
    constructor() {
        super(...arguments);
        this.risk = State(); // State variable to hold a variable called risk
    }
    // Initialize the contract state
    init() {
        super.init(); // Call the parent class initializer
        this.risk.set(Field(100)); // Set initial value of `num` to 100
    }
    //console.log("risk  value intialized successfully");
    // Method to verify BusinessProcessIntegrityDatacompliance passed in to the contract as a 
    // complianceData object which is verified thru the execution of the circuit on-chain and update state
    async verifyComplianceWithParamsSCF(input, oracleSignature) {
        // Ensure the state of `risk` matches its current value
        this.risk.requireEquals(this.risk.get());
        const currentNum = this.risk.get();
        // =================================== Oracle Signature Verification ===================================
        const complianceDataHash = Poseidon.hash(BusinessProcessIntegrityData.toFields(input));
        const registryPublicKey = getPublicKeyFor('BPMN');
        const isValidSignature = oracleSignature.verify(registryPublicKey, [complianceDataHash]);
        isValidSignature.assertTrue();
        const actualContent = input.actualContent;
        console.log('actual ||||||||||||||| content |||||||||||||||||', actualContent.length());
        const out = verifyProcessSCF(actualContent.values.map((c) => UInt8.from(c.toField())));
        Provable.asProver(() => {
            console.log('out ', out.toJSON());
        });
        out.assertTrue();
        // Update the state
        const updatedNum = currentNum.sub(10);
        this.risk.set(updatedNum);
    }
    // Method to verify BusinessProcessIntegrityDatacompliance passed in to the contract as a 
    // complianceData object which is verified thru the execution of the circuit on-chain and update state
    async verifyComplianceWithParamsSTABLECOIN(input, oracleSignature) {
        // Ensure the state of `risk` matches its current value
        this.risk.requireEquals(this.risk.get());
        const currentNum = this.risk.get();
        // =================================== Oracle Signature Verification ===================================
        const complianceDataHash = Poseidon.hash(BusinessProcessIntegrityData.toFields(input));
        const registryPublicKey = getPublicKeyFor('BPMN');
        const isValidSignature = oracleSignature.verify(registryPublicKey, [complianceDataHash]);
        isValidSignature.assertTrue();
        const actualContent = input.actualContent;
        console.log('actual ||||||||||||||| content |||||||||||||||||', actualContent.length());
        const out = verifyProcessSCF(actualContent.values.map((c) => UInt8.from(c.toField())));
        Provable.asProver(() => {
            console.log('out ', out.toJSON());
        });
        out.assertTrue();
        // Update the state
        const updatedNum = currentNum.sub(10);
        this.risk.set(updatedNum);
    }
    // Method to verify BusinessProcessIntegrityDatacompliance passed in to the contract as a 
    // complianceData object which is verified thru the execution of the circuit on-chain and update state
    async verifyComplianceWithParamsDVP(input, oracleSignature) {
        // Ensure the state of `risk` matches its current value
        this.risk.requireEquals(this.risk.get());
        const currentNum = this.risk.get();
        // =================================== Oracle Signature Verification ===================================
        const complianceDataHash = Poseidon.hash(BusinessProcessIntegrityData.toFields(input));
        const registryPublicKey = getPublicKeyFor('BPMN');
        const isValidSignature = oracleSignature.verify(registryPublicKey, [complianceDataHash]);
        isValidSignature.assertTrue();
        const actualContent = input.actualContent;
        console.log('actual ||||||||||||||| content |||||||||||||||||', actualContent.length());
        const out = verifyProcessDVP(actualContent.values.map((c) => UInt8.from(c.toField())));
        Provable.asProver(() => {
            console.log('out ', out.toJSON());
        });
        out.assertTrue();
        // Update the state
        const updatedNum = currentNum.sub(10);
        this.risk.set(updatedNum);
    }
    /* This method verifies the compliance based on the
       Proof generated in the ZKProgram.
    */
    async verifyComplianceWithProof(proof) {
        // Ensure the state of `num` matches its current value
        this.risk.requireEquals(this.risk.get());
        const currentNum = this.risk.get();
        proof.verify();
        const out = proof.publicOutput.out;
        out.assertTrue();
        const updatedNum = currentNum.sub(10);
        // If this.risk is State<Field>, store newState.value
        this.risk.set(updatedNum);
        const finalNum = this.risk.get();
        Provable.asProver(() => {
            console.log('final new state value  ', finalNum.toJSON());
        });
        /*
           const newState = Provable.if(
                 out, // out must be a Bool
                 updatedNum,  // if out is true, use updatedNum
                 currentNum   // if out is false, keep currentNum
            );
        */
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], BusinessProcessIntegrityVerifierSmartContract.prototype, "risk", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BusinessProcessIntegrityData, Signature]),
    __metadata("design:returntype", Promise)
], BusinessProcessIntegrityVerifierSmartContract.prototype, "verifyComplianceWithParamsSCF", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BusinessProcessIntegrityData, Signature]),
    __metadata("design:returntype", Promise)
], BusinessProcessIntegrityVerifierSmartContract.prototype, "verifyComplianceWithParamsSTABLECOIN", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BusinessProcessIntegrityData, Signature]),
    __metadata("design:returntype", Promise)
], BusinessProcessIntegrityVerifierSmartContract.prototype, "verifyComplianceWithParamsDVP", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BusinessProcessIntegrityProof]),
    __metadata("design:returntype", Promise)
], BusinessProcessIntegrityVerifierSmartContract.prototype, "verifyComplianceWithProof", null);
//# sourceMappingURL=BusinessProcessIntegrityVerifierSmartContractWithSign.js.map