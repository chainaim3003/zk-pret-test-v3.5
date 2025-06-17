var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, SmartContract, state, State, method, Bool, CircuitString, UInt64, Struct, MerkleWitness, Poseidon } from 'o1js';
import { CorporateRegistrationOptimProof } from '../../zk-programs/with-sign/CorporateRegistrationOptimZKProgram.js';
// =================================== Merkle Tree Configuration ===================================
export const COMPANY_MERKLE_HEIGHT = 8; // Height 8 for up to 256 companies
export class CompanyMerkleWitness extends MerkleWitness(COMPANY_MERKLE_HEIGHT) {
}
// =================================== Company Record Structure ===================================
export class CorporateRegistrationCompanyRecord extends Struct({
    cinHash: Field,
    companyNameHash: Field,
    jurisdictionHash: Field,
    isCompliant: Bool,
    complianceScore: Field,
    totalVerifications: Field,
    lastVerificationTime: UInt64,
    firstVerificationTime: UInt64, // First verification timestamp
}) {
}
// =================================== Query Result Structures ===================================
export class RegistryInfo extends Struct({
    totalCompaniesTracked: Field,
    compliantCompaniesCount: Field,
    globalComplianceScore: Field,
    totalVerificationsGlobal: Field,
    companiesRootHash: Field,
    registryVersion: Field,
}) {
}
export class GlobalComplianceStats extends Struct({
    totalCompanies: Field,
    compliantCompanies: Field,
    compliancePercentage: Field,
    totalVerifications: Field,
    lastVerificationTime: UInt64,
}) {
}
// =================================== Corporate Registration Multi-Company Contract ===================================
export class CorporateRegistrationOptimMultiCompanySmartContract extends SmartContract {
    constructor() {
        super(...arguments);
        // =================================== Multi-Company State (8 fields maximum) ===================================
        this.companiesRootHash = State(); // Merkle root of all companies
        this.totalCompaniesTracked = State(); // Total number of companies tracked
        this.compliantCompaniesCount = State(); // Number currently compliant
        this.globalComplianceScore = State(); // Average compliance score
        this.totalVerificationsGlobal = State(); // Total verifications across all companies
        this.lastVerificationTime = State(); // Most recent verification timestamp
        this.registryVersion = State(); // Registry version for upgrades
        this.contractCreationTime = State(); // When contract was deployed
    }
    // =================================== Initialize Contract ===================================
    init() {
        super.init();
        // Initialize empty company tracking
        this.companiesRootHash.set(Field(0)); // Empty merkle tree root
        this.totalCompaniesTracked.set(Field(0));
        this.compliantCompaniesCount.set(Field(0));
        this.globalComplianceScore.set(Field(0));
        this.totalVerificationsGlobal.set(Field(0));
        // Initialize timestamps
        this.lastVerificationTime.set(UInt64.from(0));
        this.contractCreationTime.set(UInt64.from(Date.now()));
        // Initialize version
        this.registryVersion.set(Field(1)); // Version 1.0
    }
    // =================================== Main Verification Method ===================================
    async verifyOptimizedComplianceWithProof(proof, companyWitness, companyRecord) {
        // Add required state preconditions for proper constraint generation
        this.companiesRootHash.requireEquals(this.companiesRootHash.get());
        this.totalCompaniesTracked.requireEquals(this.totalCompaniesTracked.get());
        this.compliantCompaniesCount.requireEquals(this.compliantCompaniesCount.get());
        this.totalVerificationsGlobal.requireEquals(this.totalVerificationsGlobal.get());
        // Get current state values
        const currentRootHash = this.companiesRootHash.get();
        const currentTotalCompanies = this.totalCompaniesTracked.get();
        const currentCompliantCount = this.compliantCompaniesCount.get();
        const currentTotalVerifications = this.totalVerificationsGlobal.get();
        // =================================== Verify ZK Proof ===================================
        proof.verify();
        // =================================== Extract Proof Data ===================================
        const publicOutput = proof.publicOutput;
        const isCompliant = publicOutput.isCorpRegCompliant;
        const verificationTimestamp = publicOutput.verification_timestamp;
        // Extract company identification from proof and hash them
        const proofCIN = publicOutput.CIN;
        const proofCompanyName = publicOutput.companyName;
        const proofJurisdiction = CircuitString.fromString('India'); // Corporate Registration is India-specific
        // Create hashes for comparison and storage
        const proofCINHash = proofCIN.hash();
        const proofCompanyNameHash = proofCompanyName.hash();
        const proofJurisdictionHash = proofJurisdiction.hash();
        // =================================== Verify Company Record Consistency ===================================
        // Ensure the company record matches the proof data
        companyRecord.cinHash.assertEquals(proofCINHash);
        companyRecord.companyNameHash.assertEquals(proofCompanyNameHash);
        companyRecord.jurisdictionHash.assertEquals(proofJurisdictionHash);
        companyRecord.isCompliant.assertEquals(isCompliant);
        companyRecord.lastVerificationTime.assertEquals(verificationTimestamp);
        // =================================== Merkle Tree Management ===================================
        // Calculate the hash of the company record
        const companyRecordHash = Poseidon.hash([
            companyRecord.cinHash,
            companyRecord.companyNameHash,
            companyRecord.jurisdictionHash,
            companyRecord.isCompliant.toField(),
            companyRecord.complianceScore,
            companyRecord.totalVerifications,
            companyRecord.lastVerificationTime.value,
            companyRecord.firstVerificationTime.value
        ]);
        // Calculate new merkle root with the company record
        const calculatedRoot = companyWitness.calculateRoot(companyRecordHash);
        // For new companies, verify the witness points to an empty position
        // For existing companies, this would need additional logic to verify previous state
        // Simplified: accept the calculated root as the new state
        this.companiesRootHash.set(calculatedRoot);
        // =================================== Update Global Statistics ===================================
        // This is simplified logic - in practice, you'd need to track whether this is a new company
        // or an update to an existing company to properly update counts
        // For now, assume each verification could be either new or update
        // A more sophisticated implementation would require additional state management
        // Update global verification count
        const newTotalVerifications = currentTotalVerifications.add(1);
        this.totalVerificationsGlobal.set(newTotalVerifications);
        // Update last verification time
        this.lastVerificationTime.set(verificationTimestamp);
        // Update company count (simplified - would need better logic for tracking new vs existing)
        // For demonstration, we increment if this appears to be a new verification
        const potentialNewTotal = currentTotalCompanies.add(1);
        this.totalCompaniesTracked.set(potentialNewTotal);
        // Update compliant count (simplified calculation)
        const complianceChange = isCompliant.toField();
        const newCompliantCount = currentCompliantCount.add(complianceChange);
        this.compliantCompaniesCount.set(newCompliantCount);
        // Calculate and update global compliance score
        const globalScore = potentialNewTotal.equals(Field(0)).toField().equals(Field(1))
            ? Field(0) // No companies yet
            : newCompliantCount.mul(100).div(potentialNewTotal);
        this.globalComplianceScore.set(globalScore);
    }
    // =================================== Query Methods ===================================
    /**
     * Get registry information
     */
    getRegistryInfo() {
        // Add required state preconditions
        this.companiesRootHash.requireEquals(this.companiesRootHash.get());
        this.totalCompaniesTracked.requireEquals(this.totalCompaniesTracked.get());
        this.compliantCompaniesCount.requireEquals(this.compliantCompaniesCount.get());
        this.globalComplianceScore.requireEquals(this.globalComplianceScore.get());
        this.totalVerificationsGlobal.requireEquals(this.totalVerificationsGlobal.get());
        this.registryVersion.requireEquals(this.registryVersion.get());
        return new RegistryInfo({
            totalCompaniesTracked: this.totalCompaniesTracked.get(),
            compliantCompaniesCount: this.compliantCompaniesCount.get(),
            globalComplianceScore: this.globalComplianceScore.get(),
            totalVerificationsGlobal: this.totalVerificationsGlobal.get(),
            companiesRootHash: this.companiesRootHash.get(),
            registryVersion: this.registryVersion.get(),
        });
    }
    /**
     * Get global compliance statistics
     */
    getGlobalComplianceStats() {
        // Add required state preconditions
        this.totalCompaniesTracked.requireEquals(this.totalCompaniesTracked.get());
        this.compliantCompaniesCount.requireEquals(this.compliantCompaniesCount.get());
        this.totalVerificationsGlobal.requireEquals(this.totalVerificationsGlobal.get());
        this.lastVerificationTime.requireEquals(this.lastVerificationTime.get());
        const totalCompanies = this.totalCompaniesTracked.get();
        const compliantCompanies = this.compliantCompaniesCount.get();
        // Calculate compliance percentage
        const compliancePercentage = totalCompanies.equals(Field(0)).toField().equals(Field(1))
            ? Field(0) // No companies yet
            : compliantCompanies.mul(100).div(totalCompanies);
        return new GlobalComplianceStats({
            totalCompanies: totalCompanies,
            compliantCompanies: compliantCompanies,
            compliancePercentage: compliancePercentage,
            totalVerifications: this.totalVerificationsGlobal.get(),
            lastVerificationTime: this.lastVerificationTime.get(),
        });
    }
    /**
     * Check if a specific CIN is being tracked (simplified version)
     */
    isTrackingCompany(cinHash) {
        // Add required state precondition
        this.totalCompaniesTracked.requireEquals(this.totalCompaniesTracked.get());
        // Simplified: just check if we have any companies tracked
        // A full implementation would need merkle proof verification
        return this.totalCompaniesTracked.get().greaterThan(Field(0));
    }
    // =================================== Administrative Methods ===================================
    /**
     * Reset registry (admin function)
     */
    async resetRegistry() {
        // Add required state preconditions
        this.companiesRootHash.requireEquals(this.companiesRootHash.get());
        this.totalCompaniesTracked.requireEquals(this.totalCompaniesTracked.get());
        this.registryVersion.requireEquals(this.registryVersion.get());
        // Reset all state to initial values
        this.companiesRootHash.set(Field(0));
        this.totalCompaniesTracked.set(Field(0));
        this.compliantCompaniesCount.set(Field(0));
        this.globalComplianceScore.set(Field(0));
        this.totalVerificationsGlobal.set(Field(0));
        this.lastVerificationTime.set(UInt64.from(0));
        this.registryVersion.set(this.registryVersion.get().add(1));
    }
    /**
     * Get contract metadata
     */
    getContractInfo() {
        // Add required state preconditions
        this.companiesRootHash.requireEquals(this.companiesRootHash.get());
        this.totalCompaniesTracked.requireEquals(this.totalCompaniesTracked.get());
        this.compliantCompaniesCount.requireEquals(this.compliantCompaniesCount.get());
        this.totalVerificationsGlobal.requireEquals(this.totalVerificationsGlobal.get());
        this.contractCreationTime.requireEquals(this.contractCreationTime.get());
        this.registryVersion.requireEquals(this.registryVersion.get());
        return {
            companiesRootHash: this.companiesRootHash.get(),
            totalCompanies: this.totalCompaniesTracked.get(),
            compliantCompanies: this.compliantCompaniesCount.get(),
            totalVerifications: this.totalVerificationsGlobal.get(),
            creationTime: this.contractCreationTime.get(),
            version: this.registryVersion.get(),
        };
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimMultiCompanySmartContract.prototype, "companiesRootHash", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimMultiCompanySmartContract.prototype, "totalCompaniesTracked", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimMultiCompanySmartContract.prototype, "compliantCompaniesCount", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimMultiCompanySmartContract.prototype, "globalComplianceScore", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimMultiCompanySmartContract.prototype, "totalVerificationsGlobal", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], CorporateRegistrationOptimMultiCompanySmartContract.prototype, "lastVerificationTime", void 0);
__decorate([
    state(Field),
    __metadata("design:type", Object)
], CorporateRegistrationOptimMultiCompanySmartContract.prototype, "registryVersion", void 0);
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], CorporateRegistrationOptimMultiCompanySmartContract.prototype, "contractCreationTime", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CorporateRegistrationOptimProof,
        CompanyMerkleWitness,
        CorporateRegistrationCompanyRecord]),
    __metadata("design:returntype", Promise)
], CorporateRegistrationOptimMultiCompanySmartContract.prototype, "verifyOptimizedComplianceWithProof", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CorporateRegistrationOptimMultiCompanySmartContract.prototype, "resetRegistry", null);
//# sourceMappingURL=CorporateRegistrationOptimMultiCompanySmartContract.js.map