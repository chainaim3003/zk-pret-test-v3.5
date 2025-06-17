import { Field, UInt64 } from 'o1js';
import { CorporateRegistrationOptimMultiCompanySmartContract, CorporateRegistrationCompanyRecord, CompanyMerkleWitness } from '../../contracts/with-sign/CorporateRegistrationOptimMultiCompanySmartContract.js';
/**
 * Company registry for managing multiple companies in merkle tree
 */
declare class CompanyRegistry {
    private companiesTree;
    private companyRecords;
    private nextIndex;
    constructor();
    /**
     * Add or update a company in the registry
     */
    addOrUpdateCompany(cin: string, companyRecord: CorporateRegistrationCompanyRecord): CompanyMerkleWitness;
    /**
     * Get merkle witness for a company
     */
    getCompanyWitness(cin: string): CompanyMerkleWitness | null;
    /**
     * Get company record
     */
    getCompanyRecord(cin: string): CorporateRegistrationCompanyRecord | null;
    /**
     * Get merkle root of companies tree
     */
    getRoot(): Field;
    /**
     * Get all tracked companies
     */
    getAllCompanies(): string[];
    /**
     * Get total number of companies
     */
    getTotalCompanies(): number;
}
export declare function getCorporateRegistrationOptimMultiCompanyVerificationWithSignUtils(companyNames: string[]): Promise<{
    proofs: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, import("../../zk-programs/with-sign/CorporateRegistrationOptimZKProgram.js").CorporateRegistrationOptimPublicOutput>[];
    totalCompanies: number;
    companyRegistry: CompanyRegistry;
    contractState: import("../../contracts/with-sign/CorporateRegistrationOptimMultiCompanySmartContract.js").RegistryInfo;
    globalStats: import("../../contracts/with-sign/CorporateRegistrationOptimMultiCompanySmartContract.js").GlobalComplianceStats;
    verificationResults: ({
        companyName: string;
        cin: string;
        isCompliant: boolean;
        complianceScore: number;
        verificationTime: string;
        error?: undefined;
    } | {
        companyName: string;
        cin: string;
        isCompliant: boolean;
        complianceScore: number;
        verificationTime: string;
        error: any;
    })[];
}>;
/**
 * Helper function to verify a single company in an existing multi-company contract
 */
export declare function verifySingleCompanyInMultiContract(companyName: string, zkApp: CorporateRegistrationOptimMultiCompanySmartContract, companyRegistry: CompanyRegistry): Promise<{
    message: string;
    suggestion: string;
}>;
export {};
