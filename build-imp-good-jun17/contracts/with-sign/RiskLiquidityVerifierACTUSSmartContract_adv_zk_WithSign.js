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
// import { LiquidityRatioProof} from './RiskLiquidityACTUSZKProgram_adv_zk_WithSign.js';
import { LiquidityRatioProof } from '../../zk-programs/with-sign/RiskLiquidityACTUSZKProgram_adv_zk_WithSign.js';
//import { CorporateRegistrationProof } from './CorporateRegistrationZKProgram.js';
//await CorporateRegistrationProof.compile();
// Define the ComplianceData struct
/*export class ComplianceData extends Struct({
  companyID: CircuitString,          // CIN
  companyName: CircuitString,s        // Company Name
  roc: CircuitString,                // ROC
  registrationNumber: Field,         // Registration Number
  incorporationDate: CircuitString,  // Incorporation Date
  email: CircuitString,              // Email
  corporateAddress: CircuitString,   // Corporate Address
  listed: Field,                     // Listed (boolean as Field)
  companyType: CircuitString,        // Company Type
  companyCategory: CircuitString,    // Company Category
  companySubcategory: CircuitString, // Company Subcategory
  companyStatus: CircuitString,      // Company Status
  authorizedCapital: Field,          // Authorized Capital
  paidUpCapital: Field,              // Paid-up Capital
  lastAGMDate: CircuitString,        // Last AGM Date
  balanceSheetDate: CircuitString,   // Balance Sheet Date
  activeCompliance: CircuitString,   // Active Compliance
  companyActivity: CircuitString,    // Company Activity
  jurisdiction: CircuitString,       // Jurisdiction
  regionalDirector: CircuitString,   // Regional Director
  mcaID: Field,                      // MCA ID
}) {}
*/
// SmartContract definition
//await CorporateRegistration.compile();
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
    //console.log("num value set successfully");
    // Method to verify compliance and update state
    /* @method async verifyComplianceWithParams(input: ComplianceData) {
       // Ensure the state of `num` matches its current value
       this.num.requireEquals(this.num.get());
       const currentNum = this.num.get();
     
       // Convert CircuitString to Field using hash()
       const activeComplianceHash = input.activeCompliance.hash();
       const companyStatusHash = input.companyStatus.hash();
     
       // Define the expected hashes for "Active" and "ACTIVE Compliance"
       const expectedActiveComplianceHash = CircuitString.fromString("Active").hash();
       const expectedCompanyStatusHash = CircuitString.fromString("ACTIVE Compliant").hash();
     
       // Verification logic: check active compliance and company status
       activeComplianceHash.assertEquals(expectedActiveComplianceHash);
       companyStatusHash.assertEquals(expectedCompanyStatusHash);
       // Update the state
       const updatedNum = currentNum.sub(10);
       this.num.set(updatedNum);
     }
   await CorporateRegistration.compile();
   
   {*/
    // Method to verify compliance and update state
    async verifyComplianceWithProof(proof) {
        // Ensure the state of `num` matches its current value
        this.num.requireEquals(this.num.get());
        const currentNum = this.num.get();
        // Convert CircuitString to Field using hash()
        //const activeComplianceHash = input.activeCompliance.hash();
        //const companyStatusHash = input.companyStatus.hash();
        // Define the expected hashes for "Active" and "ACTIVE Compliance"
        //const expectedActiveComplianceHash = CircuitString.fromString("Active").hash();
        // Verification logic: check active compliance and company status
        //activeComplianceHash.assertEquals(expectedActiveComplianceHash);
        proof.verify();
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
//# sourceMappingURL=RiskLiquidityVerifierACTUSSmartContract_adv_zk_WithSign.js.map