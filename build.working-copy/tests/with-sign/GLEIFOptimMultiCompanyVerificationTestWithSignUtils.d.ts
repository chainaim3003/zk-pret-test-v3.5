import { Field, UInt64 } from 'o1js';
import { GLEIFOptimMultiCompanySmartContract, GLEIFCompanyRecord, CompanyMerkleWitness } from '../../contracts/with-sign/GLEIFOptimMultiCompanySmartContract.js';
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
    addOrUpdateCompany(lei: string, companyRecord: GLEIFCompanyRecord): CompanyMerkleWitness;
    /**
     * Get merkle witness for a company
     */
    getCompanyWitness(lei: string): CompanyMerkleWitness | null;
    /**
     * Get company record
     */
    getCompanyRecord(lei: string): GLEIFCompanyRecord | null;
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
export declare function getGLEIFOptimMultiCompanyVerificationWithSignUtils(companyNames: string[]): Promise<{
    proofs: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, import("../../zk-programs/with-sign/GLEIFOptimZKProgram.js").GLEIFOptimPublicOutput>[];
    totalCompanies: number;
    companyRegistry: CompanyRegistry;
    contractState: import("../../contracts/with-sign/GLEIFOptimMultiCompanySmartContract.js").RegistryInfo;
    globalStats: import("../../contracts/with-sign/GLEIFOptimMultiCompanySmartContract.js").GlobalComplianceStats;
    verificationResults: ({
        companyName: string;
        lei: string;
        isCompliant: boolean;
        complianceScore: number;
        verificationTime: string;
        error?: undefined;
    } | {
        companyName: string;
        lei: string;
        isCompliant: boolean;
        complianceScore: number;
        verificationTime: string;
        error: any;
    })[];
}>;
/**
 * Helper function to verify a single company in an existing multi-company contract
 */
export declare function verifySingleCompanyInMultiContract(companyName: string, zkApp: GLEIFOptimMultiCompanySmartContract, companyRegistry: CompanyRegistry): Promise<{
    message: string;
    suggestion: string;
}>;
export {};
