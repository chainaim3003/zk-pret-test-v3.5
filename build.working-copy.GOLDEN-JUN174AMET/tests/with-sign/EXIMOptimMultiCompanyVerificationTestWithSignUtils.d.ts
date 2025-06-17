import { Field, UInt64 } from 'o1js';
import { EXIMOptimMultiCompanySmartContract, EXIMCompanyRecord, CompanyMerkleWitness } from '../../contracts/with-sign/EXIMOptimMultiCompanySmartContract.js';
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
    addOrUpdateCompany(iec: string, companyRecord: EXIMCompanyRecord): CompanyMerkleWitness;
    /**
     * Get merkle witness for a company
     */
    getCompanyWitness(iec: string): CompanyMerkleWitness | null;
    /**
     * Get company record
     */
    getCompanyRecord(iec: string): EXIMCompanyRecord | null;
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
export declare function getEXIMOptimMultiCompanyVerificationWithSignUtils(companyNames: string[]): Promise<{
    proofs: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, import("../../zk-programs/with-sign/EXIMOptimZKProgram.js").EXIMOptimPublicOutput>[];
    totalCompanies: number;
    companyRegistry: CompanyRegistry;
    contractState: import("../../contracts/with-sign/EXIMOptimMultiCompanySmartContract.js").RegistryInfo;
    globalStats: import("../../contracts/with-sign/EXIMOptimMultiCompanySmartContract.js").GlobalComplianceStats;
    verificationResults: ({
        companyName: string;
        iec: string;
        isCompliant: boolean;
        complianceScore: number;
        verificationTime: string;
        error?: undefined;
    } | {
        companyName: string;
        iec: string;
        isCompliant: boolean;
        complianceScore: number;
        verificationTime: string;
        error: any;
    })[];
}>;
/**
 * Helper function to verify a single company in an existing multi-company contract
 */
export declare function verifySingleCompanyInMultiContract(companyName: string, zkApp: EXIMOptimMultiCompanySmartContract, companyRegistry: CompanyRegistry): Promise<{
    message: string;
    suggestion: string;
}>;
export {};
