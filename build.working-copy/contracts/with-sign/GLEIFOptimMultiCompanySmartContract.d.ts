import { Field, SmartContract, State, Bool, UInt64 } from 'o1js';
import { GLEIFOptimProof } from '../../zk-programs/with-sign/GLEIFOptimZKProgram.js';
export declare const COMPANY_MERKLE_HEIGHT = 8;
declare const CompanyMerkleWitness_base: typeof import("o1js/dist/node/lib/provable/merkle-tree.js").BaseMerkleWitness;
export declare class CompanyMerkleWitness extends CompanyMerkleWitness_base {
}
declare const GLEIFCompanyRecord_base: (new (value: {
    leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
    legalNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTime: UInt64;
    firstVerificationTime: UInt64;
}) => {
    leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
    legalNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTime: UInt64;
    firstVerificationTime: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
    legalNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTime: UInt64;
    firstVerificationTime: UInt64;
}, {
    leiHash: bigint;
    legalNameHash: bigint;
    jurisdictionHash: bigint;
    isCompliant: boolean;
    complianceScore: bigint;
    totalVerifications: bigint;
    lastVerificationTime: bigint;
    firstVerificationTime: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
        legalNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
        firstVerificationTime: UInt64;
    };
} & {
    fromValue: (value: {
        leiHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        legalNameHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: bigint | UInt64;
        firstVerificationTime: bigint | UInt64;
    }) => {
        leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
        legalNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
        firstVerificationTime: UInt64;
    };
    toInput: (x: {
        leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
        legalNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
        firstVerificationTime: UInt64;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
        legalNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
        firstVerificationTime: UInt64;
    }) => {
        leiHash: string;
        legalNameHash: string;
        jurisdictionHash: string;
        isCompliant: boolean;
        complianceScore: string;
        totalVerifications: string;
        lastVerificationTime: string;
        firstVerificationTime: string;
    };
    fromJSON: (x: {
        leiHash: string;
        legalNameHash: string;
        jurisdictionHash: string;
        isCompliant: boolean;
        complianceScore: string;
        totalVerifications: string;
        lastVerificationTime: string;
        firstVerificationTime: string;
    }) => {
        leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
        legalNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
        firstVerificationTime: UInt64;
    };
    empty: () => {
        leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
        legalNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
        firstVerificationTime: UInt64;
    };
};
export declare class GLEIFCompanyRecord extends GLEIFCompanyRecord_base {
}
declare const RegistryInfo_base: (new (value: {
    totalCompaniesTracked: import("o1js/dist/node/lib/provable/field.js").Field;
    compliantCompaniesCount: import("o1js/dist/node/lib/provable/field.js").Field;
    globalComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    totalVerificationsGlobal: import("o1js/dist/node/lib/provable/field.js").Field;
    companiesRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
    registryVersion: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    totalCompaniesTracked: import("o1js/dist/node/lib/provable/field.js").Field;
    compliantCompaniesCount: import("o1js/dist/node/lib/provable/field.js").Field;
    globalComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    totalVerificationsGlobal: import("o1js/dist/node/lib/provable/field.js").Field;
    companiesRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
    registryVersion: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    totalCompaniesTracked: import("o1js/dist/node/lib/provable/field.js").Field;
    compliantCompaniesCount: import("o1js/dist/node/lib/provable/field.js").Field;
    globalComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    totalVerificationsGlobal: import("o1js/dist/node/lib/provable/field.js").Field;
    companiesRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
    registryVersion: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    totalCompaniesTracked: bigint;
    compliantCompaniesCount: bigint;
    globalComplianceScore: bigint;
    totalVerificationsGlobal: bigint;
    companiesRootHash: bigint;
    registryVersion: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        totalCompaniesTracked: import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompaniesCount: import("o1js/dist/node/lib/provable/field.js").Field;
        globalComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerificationsGlobal: import("o1js/dist/node/lib/provable/field.js").Field;
        companiesRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        registryVersion: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        totalCompaniesTracked: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompaniesCount: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        globalComplianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerificationsGlobal: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        companiesRootHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        registryVersion: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        totalCompaniesTracked: import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompaniesCount: import("o1js/dist/node/lib/provable/field.js").Field;
        globalComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerificationsGlobal: import("o1js/dist/node/lib/provable/field.js").Field;
        companiesRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        registryVersion: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        totalCompaniesTracked: import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompaniesCount: import("o1js/dist/node/lib/provable/field.js").Field;
        globalComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerificationsGlobal: import("o1js/dist/node/lib/provable/field.js").Field;
        companiesRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        registryVersion: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        totalCompaniesTracked: import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompaniesCount: import("o1js/dist/node/lib/provable/field.js").Field;
        globalComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerificationsGlobal: import("o1js/dist/node/lib/provable/field.js").Field;
        companiesRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        registryVersion: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        totalCompaniesTracked: string;
        compliantCompaniesCount: string;
        globalComplianceScore: string;
        totalVerificationsGlobal: string;
        companiesRootHash: string;
        registryVersion: string;
    };
    fromJSON: (x: {
        totalCompaniesTracked: string;
        compliantCompaniesCount: string;
        globalComplianceScore: string;
        totalVerificationsGlobal: string;
        companiesRootHash: string;
        registryVersion: string;
    }) => {
        totalCompaniesTracked: import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompaniesCount: import("o1js/dist/node/lib/provable/field.js").Field;
        globalComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerificationsGlobal: import("o1js/dist/node/lib/provable/field.js").Field;
        companiesRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        registryVersion: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        totalCompaniesTracked: import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompaniesCount: import("o1js/dist/node/lib/provable/field.js").Field;
        globalComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerificationsGlobal: import("o1js/dist/node/lib/provable/field.js").Field;
        companiesRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        registryVersion: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class RegistryInfo extends RegistryInfo_base {
}
declare const GlobalComplianceStats_base: (new (value: {
    totalCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
    compliantCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
    compliancePercentage: import("o1js/dist/node/lib/provable/field.js").Field;
    totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTime: UInt64;
}) => {
    totalCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
    compliantCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
    compliancePercentage: import("o1js/dist/node/lib/provable/field.js").Field;
    totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTime: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    totalCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
    compliantCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
    compliancePercentage: import("o1js/dist/node/lib/provable/field.js").Field;
    totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTime: UInt64;
}, {
    totalCompanies: bigint;
    compliantCompanies: bigint;
    compliancePercentage: bigint;
    totalVerifications: bigint;
    lastVerificationTime: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        totalCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
        compliancePercentage: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
    };
} & {
    fromValue: (value: {
        totalCompanies: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompanies: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        compliancePercentage: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: bigint | UInt64;
    }) => {
        totalCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
        compliancePercentage: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
    };
    toInput: (x: {
        totalCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
        compliancePercentage: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        totalCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
        compliancePercentage: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
    }) => {
        totalCompanies: string;
        compliantCompanies: string;
        compliancePercentage: string;
        totalVerifications: string;
        lastVerificationTime: string;
    };
    fromJSON: (x: {
        totalCompanies: string;
        compliantCompanies: string;
        compliancePercentage: string;
        totalVerifications: string;
        lastVerificationTime: string;
    }) => {
        totalCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
        compliancePercentage: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
    };
    empty: () => {
        totalCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
        compliantCompanies: import("o1js/dist/node/lib/provable/field.js").Field;
        compliancePercentage: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
    };
};
export declare class GlobalComplianceStats extends GlobalComplianceStats_base {
}
export declare class GLEIFOptimMultiCompanySmartContract extends SmartContract {
    companiesRootHash: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    totalCompaniesTracked: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    compliantCompaniesCount: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    globalComplianceScore: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    totalVerificationsGlobal: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    lastVerificationTime: State<UInt64>;
    registryVersion: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    contractCreationTime: State<UInt64>;
    init(): void;
    verifyOptimizedComplianceWithProof(proof: GLEIFOptimProof, companyWitness: CompanyMerkleWitness, companyRecord: GLEIFCompanyRecord): Promise<void>;
    /**
     * Get registry information
     */
    getRegistryInfo(): RegistryInfo;
    /**
     * Get global compliance statistics
     */
    getGlobalComplianceStats(): GlobalComplianceStats;
    /**
     * Check if a specific LEI is being tracked (simplified version)
     */
    isTrackingCompany(leiHash: Field): Bool;
    /**
     * Reset registry (admin function)
     */
    resetRegistry(): Promise<void>;
    /**
     * Get contract metadata
     */
    getContractInfo(): {
        companiesRootHash: Field;
        totalCompanies: Field;
        compliantCompanies: Field;
        totalVerifications: Field;
        creationTime: UInt64;
        version: Field;
    };
}
export {};
