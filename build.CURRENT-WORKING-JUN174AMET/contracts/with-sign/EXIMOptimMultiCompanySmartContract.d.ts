import { Field, SmartContract, State, Bool, CircuitString, UInt64 } from 'o1js';
import { EXIMOptimProof } from '../../zk-programs/with-sign/EXIMOptimZKProgram.js';
export declare const COMPANY_MERKLE_HEIGHT = 8;
declare const CompanyMerkleWitness_base: typeof import("o1js/dist/node/lib/provable/merkle-tree.js").BaseMerkleWitness;
export declare class CompanyMerkleWitness extends CompanyMerkleWitness_base {
}
declare const EXIMCompanyRecord_base: (new (value: {
    iecHash: import("o1js/dist/node/lib/provable/field.js").Field;
    entityNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTime: UInt64;
    firstVerificationTime: UInt64;
}) => {
    iecHash: import("o1js/dist/node/lib/provable/field.js").Field;
    entityNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTime: UInt64;
    firstVerificationTime: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    iecHash: import("o1js/dist/node/lib/provable/field.js").Field;
    entityNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTime: UInt64;
    firstVerificationTime: UInt64;
}, {
    iecHash: bigint;
    entityNameHash: bigint;
    jurisdictionHash: bigint;
    isCompliant: boolean;
    complianceScore: bigint;
    totalVerifications: bigint;
    lastVerificationTime: bigint;
    firstVerificationTime: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        iecHash: import("o1js/dist/node/lib/provable/field.js").Field;
        entityNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
        firstVerificationTime: UInt64;
    };
} & {
    fromValue: (value: {
        iecHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        entityNameHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: bigint | UInt64;
        firstVerificationTime: bigint | UInt64;
    }) => {
        iecHash: import("o1js/dist/node/lib/provable/field.js").Field;
        entityNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
        firstVerificationTime: UInt64;
    };
    toInput: (x: {
        iecHash: import("o1js/dist/node/lib/provable/field.js").Field;
        entityNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
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
        iecHash: import("o1js/dist/node/lib/provable/field.js").Field;
        entityNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
        firstVerificationTime: UInt64;
    }) => {
        iecHash: string;
        entityNameHash: string;
        jurisdictionHash: string;
        isCompliant: boolean;
        complianceScore: string;
        totalVerifications: string;
        lastVerificationTime: string;
        firstVerificationTime: string;
    };
    fromJSON: (x: {
        iecHash: string;
        entityNameHash: string;
        jurisdictionHash: string;
        isCompliant: boolean;
        complianceScore: string;
        totalVerifications: string;
        lastVerificationTime: string;
        firstVerificationTime: string;
    }) => {
        iecHash: import("o1js/dist/node/lib/provable/field.js").Field;
        entityNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
        firstVerificationTime: UInt64;
    };
    empty: () => {
        iecHash: import("o1js/dist/node/lib/provable/field.js").Field;
        entityNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTime: UInt64;
        firstVerificationTime: UInt64;
    };
};
export declare class EXIMCompanyRecord extends EXIMCompanyRecord_base {
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
declare const CompanyInfo_base: (new (value: {
    companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
    companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
    companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
    companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    companyIdentifierHash: bigint;
    companyNameHash: bigint;
    jurisdictionHash: bigint;
    isCompliant: boolean;
    complianceScore: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        companyIdentifierHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        companyIdentifierHash: string;
        companyNameHash: string;
        jurisdictionHash: string;
        isCompliant: boolean;
        complianceScore: string;
    };
    fromJSON: (x: {
        companyIdentifierHash: string;
        companyNameHash: string;
        jurisdictionHash: string;
        isCompliant: boolean;
        complianceScore: string;
    }) => {
        companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        jurisdictionHash: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class CompanyInfo extends CompanyInfo_base {
}
declare const CurrentCompliance_base: (new (value: {
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    lastVerificationTime: UInt64;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    lastVerificationTime: UInt64;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    lastVerificationTime: UInt64;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    isCompliant: boolean;
    lastVerificationTime: bigint;
    complianceScore: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        lastVerificationTime: UInt64;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        isCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        lastVerificationTime: bigint | UInt64;
        complianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        lastVerificationTime: UInt64;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        lastVerificationTime: UInt64;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        lastVerificationTime: UInt64;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        isCompliant: boolean;
        lastVerificationTime: string;
        complianceScore: string;
    };
    fromJSON: (x: {
        isCompliant: boolean;
        lastVerificationTime: string;
        complianceScore: string;
    }) => {
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        lastVerificationTime: UInt64;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        lastVerificationTime: UInt64;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class CurrentCompliance extends CurrentCompliance_base {
}
declare const VerificationStats_base: (new (value: {
    totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    firstVerificationTime: UInt64;
    lastVerificationTime: UInt64;
    hasBeenVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    firstVerificationTime: UInt64;
    lastVerificationTime: UInt64;
    hasBeenVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    firstVerificationTime: UInt64;
    lastVerificationTime: UInt64;
    hasBeenVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    totalVerifications: bigint;
    firstVerificationTime: bigint;
    lastVerificationTime: bigint;
    hasBeenVerified: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        firstVerificationTime: UInt64;
        lastVerificationTime: UInt64;
        hasBeenVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        totalVerifications: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        firstVerificationTime: bigint | UInt64;
        lastVerificationTime: bigint | UInt64;
        hasBeenVerified: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        firstVerificationTime: UInt64;
        lastVerificationTime: UInt64;
        hasBeenVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        firstVerificationTime: UInt64;
        lastVerificationTime: UInt64;
        hasBeenVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        firstVerificationTime: UInt64;
        lastVerificationTime: UInt64;
        hasBeenVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        totalVerifications: string;
        firstVerificationTime: string;
        lastVerificationTime: string;
        hasBeenVerified: boolean;
    };
    fromJSON: (x: {
        totalVerifications: string;
        firstVerificationTime: string;
        lastVerificationTime: string;
        hasBeenVerified: boolean;
    }) => {
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        firstVerificationTime: UInt64;
        lastVerificationTime: UInt64;
        hasBeenVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
        firstVerificationTime: UInt64;
        lastVerificationTime: UInt64;
        hasBeenVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
export declare class VerificationStats extends VerificationStats_base {
}
/**
 * EXIMOptimMultiCompanySmartContract now provides the SAME individual company tracking capabilities
 * as EXIMOptimSingleCompanySmartContract, plus multi-company management features:
 *
 * INDIVIDUAL COMPANY FEATURES (Same as SingleCompany):
 * - getCompanyInfo() - Complete company profile
 * - getCurrentCompliance() - Real-time compliance status
 * - getVerificationStats() - Verification history
 * - isTrackingCompany() - Company identity verification
 * - resetComplianceForCompany() - Admin reset functions
 *
 * COMPANY NAME-BASED QUERIES (New Feature):
 * - isTrackingCompanyByName() - Find company by name
 * - isCompanyEXIMCompliant() - Check compliance by company name
 * - getCompanyComplianceByName() - Full compliance info by name
 *
 * MULTI-COMPANY FEATURES:
 * - getRegistryInfo() - Global registry statistics
 * - getGlobalComplianceStats() - Portfolio-level metrics
 * - resetRegistry() - Reset entire registry
 */
export declare class EXIMOptimMultiCompanySmartContract extends SmartContract {
    companiesRootHash: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    totalCompaniesTracked: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    compliantCompaniesCount: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    globalComplianceScore: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    totalVerificationsGlobal: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    lastVerificationTime: State<UInt64>;
    registryVersion: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    contractCreationTime: State<UInt64>;
    init(): void;
    verifyOptimizedComplianceWithProof(proof: EXIMOptimProof, companyWitness: CompanyMerkleWitness, companyRecord: EXIMCompanyRecord): Promise<void>;
    /**
     * Get registry information
     */
    getRegistryInfo(): RegistryInfo;
    /**
     * Get global compliance statistics
     */
    getGlobalComplianceStats(): GlobalComplianceStats;
    /**
     * Get complete company information for a specific company (requires merkle proof)
     */
    getCompanyInfo(companyWitness: CompanyMerkleWitness, companyRecord: EXIMCompanyRecord): CompanyInfo;
    /**
     * Get current compliance status for a specific company (requires merkle proof)
     */
    getCurrentCompliance(companyWitness: CompanyMerkleWitness, companyRecord: EXIMCompanyRecord): CurrentCompliance;
    /**
     * Get verification statistics for a specific company (requires merkle proof)
     */
    getVerificationStats(companyWitness: CompanyMerkleWitness, companyRecord: EXIMCompanyRecord): VerificationStats;
    /**
     * Check if a specific company is tracked by this contract (using company name)
     */
    isTrackingCompanyByName(companyName: CircuitString, companyWitness: CompanyMerkleWitness, companyRecord: EXIMCompanyRecord): Bool;
    /**
     * Check if a specific company is EXIM compliant by company name
     */
    isCompanyEXIMCompliant(companyName: CircuitString, companyWitness: CompanyMerkleWitness, companyRecord: EXIMCompanyRecord): Bool;
    /**
     * Check if a specific IEC is being tracked (enhanced version with merkle proof)
     */
    isTrackingCompany(iecHash: Field, companyWitness: CompanyMerkleWitness, companyRecord: EXIMCompanyRecord): Bool;
    /**
     * Reset compliance status for a specific company (admin function)
     */
    resetComplianceForCompany(companyWitness: CompanyMerkleWitness, companyRecord: EXIMCompanyRecord): Promise<void>;
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
    /**
     * Helper method: Get company compliance info by name (off-chain usage)
     * Note: This requires the caller to provide the correct witness and record
     */
    getCompanyComplianceByName(companyName: CircuitString, companyWitness: CompanyMerkleWitness, companyRecord: EXIMCompanyRecord): {
        isTracked: Bool;
        isCompliant: Bool;
        complianceScore: Field;
        verificationCount: Field;
    };
}
export {};
