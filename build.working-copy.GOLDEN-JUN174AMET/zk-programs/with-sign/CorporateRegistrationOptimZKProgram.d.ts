import { Signature, CircuitString, UInt64 } from 'o1js';
export declare const CORP_REG_MERKLE_TREE_HEIGHT = 8;
declare const CorporateRegistrationMerkleWitness8_base: typeof import("o1js/dist/node/lib/provable/merkle-tree.js").BaseMerkleWitness;
export declare class CorporateRegistrationMerkleWitness8 extends CorporateRegistrationMerkleWitness8_base {
}
export declare const CORP_REG_FIELD_INDICES: {
    companyName: number;
    category: number;
    classOfCompany: number;
    registrationNumber: number;
    listed: number;
    suspended: number;
    CIN: number;
    companyStatus: number;
    dateOfIncorporation: number;
    numberOfPartners: number;
    companyType: number;
    companySubcategory: number;
    rocCode: number;
    registrarOfCompanies: number;
    email: number;
    phone: number;
    website: number;
    activityDescription: number;
    companyActivityCode: number;
    industrialClass: number;
    mcaId: number;
    jurisdiction: number;
    legalForm: number;
    llpinDetails: number;
    foreignCompanyDetails: number;
    registeredAddressLine1: number;
    registeredAddressLine2: number;
    registeredCity: number;
    registeredState: number;
    registeredCountry: number;
    registeredPincode: number;
    corporateAddressLine1: number;
    corporateAddressLine2: number;
    corporateCity: number;
    corporateState: number;
    corporateCountry: number;
    corporatePincode: number;
    correspondenceAddressLine1: number;
    correspondenceAddressLine2: number;
    correspondenceCity: number;
    correspondenceState: number;
    correspondenceCountry: number;
    correspondencePincode: number;
    authorizedCapital: number;
    paidUpCapital: number;
    numberOfMembers: number;
    lastAgmDate: number;
    lastBsDate: number;
    lastAnnualReturnDate: number;
    listingStatus: number;
    suspendedAtStockExchange: number;
    marketCap: number;
    shareCapitalDetails: number;
    numberOfDirectors: number;
    directorDetails: number;
    complianceStatus: number;
    filingStatus: number;
    boardComposition: number;
    keyPersonnel: number;
    signatoryDetails: number;
    strikeOffDetails: number;
    dormantStatus: number;
    nbfcRegistration: number;
    prosecutionLaunched: number;
    conversionDetails: number;
    amalgamationDetails: number;
    regulatoryApprovals: number;
    licenses: number;
    createdAt: number;
    updatedAt: number;
    dataSource: number;
    apiVersion: number;
};
declare const CorporateRegistrationOptimComplianceData_base: (new (value: {
    companyName: CircuitString;
    CIN: CircuitString;
    registrationNumber: CircuitString;
    companyStatus: CircuitString;
    dateOfIncorporation: CircuitString;
    category: CircuitString;
    classOfCompany: CircuitString;
    numberOfPartners: CircuitString;
    listed: CircuitString;
    suspended: CircuitString;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    companyName: CircuitString;
    CIN: CircuitString;
    registrationNumber: CircuitString;
    companyStatus: CircuitString;
    dateOfIncorporation: CircuitString;
    category: CircuitString;
    classOfCompany: CircuitString;
    numberOfPartners: CircuitString;
    listed: CircuitString;
    suspended: CircuitString;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    companyName: CircuitString;
    CIN: CircuitString;
    registrationNumber: CircuitString;
    companyStatus: CircuitString;
    dateOfIncorporation: CircuitString;
    category: CircuitString;
    classOfCompany: CircuitString;
    numberOfPartners: CircuitString;
    listed: CircuitString;
    suspended: CircuitString;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    companyName: string;
    CIN: string;
    registrationNumber: string;
    companyStatus: string;
    dateOfIncorporation: string;
    category: string;
    classOfCompany: string;
    numberOfPartners: string;
    listed: string;
    suspended: string;
    merkle_root: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        companyName: CircuitString;
        CIN: CircuitString;
        registrationNumber: CircuitString;
        companyStatus: CircuitString;
        dateOfIncorporation: CircuitString;
        category: CircuitString;
        classOfCompany: CircuitString;
        numberOfPartners: CircuitString;
        listed: CircuitString;
        suspended: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        companyName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        CIN: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        registrationNumber: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        companyStatus: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        dateOfIncorporation: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        category: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        classOfCompany: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        numberOfPartners: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        listed: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        suspended: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        merkle_root: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        companyName: CircuitString;
        CIN: CircuitString;
        registrationNumber: CircuitString;
        companyStatus: CircuitString;
        dateOfIncorporation: CircuitString;
        category: CircuitString;
        classOfCompany: CircuitString;
        numberOfPartners: CircuitString;
        listed: CircuitString;
        suspended: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        companyName: CircuitString;
        CIN: CircuitString;
        registrationNumber: CircuitString;
        companyStatus: CircuitString;
        dateOfIncorporation: CircuitString;
        category: CircuitString;
        classOfCompany: CircuitString;
        numberOfPartners: CircuitString;
        listed: CircuitString;
        suspended: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        companyName: CircuitString;
        CIN: CircuitString;
        registrationNumber: CircuitString;
        companyStatus: CircuitString;
        dateOfIncorporation: CircuitString;
        category: CircuitString;
        classOfCompany: CircuitString;
        numberOfPartners: CircuitString;
        listed: CircuitString;
        suspended: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        companyName: {
            values: {
                value: string;
            }[];
        };
        CIN: {
            values: {
                value: string;
            }[];
        };
        registrationNumber: {
            values: {
                value: string;
            }[];
        };
        companyStatus: {
            values: {
                value: string;
            }[];
        };
        dateOfIncorporation: {
            values: {
                value: string;
            }[];
        };
        category: {
            values: {
                value: string;
            }[];
        };
        classOfCompany: {
            values: {
                value: string;
            }[];
        };
        numberOfPartners: {
            values: {
                value: string;
            }[];
        };
        listed: {
            values: {
                value: string;
            }[];
        };
        suspended: {
            values: {
                value: string;
            }[];
        };
        merkle_root: string;
    };
    fromJSON: (x: {
        companyName: {
            values: {
                value: string;
            }[];
        };
        CIN: {
            values: {
                value: string;
            }[];
        };
        registrationNumber: {
            values: {
                value: string;
            }[];
        };
        companyStatus: {
            values: {
                value: string;
            }[];
        };
        dateOfIncorporation: {
            values: {
                value: string;
            }[];
        };
        category: {
            values: {
                value: string;
            }[];
        };
        classOfCompany: {
            values: {
                value: string;
            }[];
        };
        numberOfPartners: {
            values: {
                value: string;
            }[];
        };
        listed: {
            values: {
                value: string;
            }[];
        };
        suspended: {
            values: {
                value: string;
            }[];
        };
        merkle_root: string;
    }) => {
        companyName: CircuitString;
        CIN: CircuitString;
        registrationNumber: CircuitString;
        companyStatus: CircuitString;
        dateOfIncorporation: CircuitString;
        category: CircuitString;
        classOfCompany: CircuitString;
        numberOfPartners: CircuitString;
        listed: CircuitString;
        suspended: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        companyName: CircuitString;
        CIN: CircuitString;
        registrationNumber: CircuitString;
        companyStatus: CircuitString;
        dateOfIncorporation: CircuitString;
        category: CircuitString;
        classOfCompany: CircuitString;
        numberOfPartners: CircuitString;
        listed: CircuitString;
        suspended: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class CorporateRegistrationOptimComplianceData extends CorporateRegistrationOptimComplianceData_base {
}
declare const CorporateRegistrationOptimPublicOutput_base: (new (value: {
    companyName: CircuitString;
    CIN: CircuitString;
    isCorpRegCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verification_timestamp: UInt64;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    companyName: CircuitString;
    CIN: CircuitString;
    isCorpRegCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verification_timestamp: UInt64;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    companyName: CircuitString;
    CIN: CircuitString;
    isCorpRegCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verification_timestamp: UInt64;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    companyName: string;
    CIN: string;
    isCorpRegCompliant: boolean;
    verification_timestamp: bigint;
    merkle_root: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        companyName: CircuitString;
        CIN: CircuitString;
        isCorpRegCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        companyName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        CIN: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        isCorpRegCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: bigint | UInt64;
        merkle_root: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        companyName: CircuitString;
        CIN: CircuitString;
        isCorpRegCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        companyName: CircuitString;
        CIN: CircuitString;
        isCorpRegCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        companyName: CircuitString;
        CIN: CircuitString;
        isCorpRegCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        companyName: {
            values: {
                value: string;
            }[];
        };
        CIN: {
            values: {
                value: string;
            }[];
        };
        isCorpRegCompliant: boolean;
        verification_timestamp: string;
        merkle_root: string;
    };
    fromJSON: (x: {
        companyName: {
            values: {
                value: string;
            }[];
        };
        CIN: {
            values: {
                value: string;
            }[];
        };
        isCorpRegCompliant: boolean;
        verification_timestamp: string;
        merkle_root: string;
    }) => {
        companyName: CircuitString;
        CIN: CircuitString;
        isCorpRegCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        companyName: CircuitString;
        CIN: CircuitString;
        isCorpRegCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class CorporateRegistrationOptimPublicOutput extends CorporateRegistrationOptimPublicOutput_base {
}
export declare const CorporateRegistrationOptim: {
    name: string;
    compile: (options?: {
        cache?: import("o1js/dist/node/lib/proof-system/cache.js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field.js").Field;
        };
    }>;
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, CorporateRegistrationOptimPublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveOptimizedCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof UInt64;
    publicOutputType: typeof CorporateRegistrationOptimPublicOutput;
    privateInputTypes: {
        proveOptimizedCompliance: [typeof CorporateRegistrationOptimComplianceData, typeof Signature, typeof CorporateRegistrationMerkleWitness8, typeof CorporateRegistrationMerkleWitness8, typeof CorporateRegistrationMerkleWitness8, typeof CorporateRegistrationMerkleWitness8, typeof CorporateRegistrationMerkleWitness8, typeof CorporateRegistrationMerkleWitness8, typeof CorporateRegistrationMerkleWitness8, typeof CorporateRegistrationMerkleWitness8, typeof CorporateRegistrationMerkleWitness8, typeof CorporateRegistrationMerkleWitness8];
    };
    rawMethods: {
        proveOptimizedCompliance: (publicInput: UInt64, ...args: [CorporateRegistrationOptimComplianceData, Signature, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8] & any[]) => Promise<CorporateRegistrationOptimPublicOutput>;
    };
} & {
    proveOptimizedCompliance: (publicInput: UInt64, ...args: [CorporateRegistrationOptimComplianceData, Signature, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8, CorporateRegistrationMerkleWitness8] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, CorporateRegistrationOptimPublicOutput>>;
};
declare const CorporateRegistrationOptimProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: UInt64;
        publicOutput: CorporateRegistrationOptimPublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: UInt64;
        publicOutput: CorporateRegistrationOptimPublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof UInt64;
    publicOutputType: typeof CorporateRegistrationOptimPublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof UInt64;
        publicOutputType: typeof CorporateRegistrationOptimPublicOutput;
    };
    fromJSON<S extends (new (...args: any) => import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<unknown, unknown>) & {
        prototype: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<any, any>;
        fromJSON: typeof import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof.fromJSON;
        dummy: typeof import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof.dummy;
        publicInputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        publicOutputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        tag: () => {
            name: string;
        };
    } & {
        prototype: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<unknown, unknown>;
    }>(this: S, { maxProofsVerified, proof: proofString, publicInput: publicInputJson, publicOutput: publicOutputJson, }: import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicInputType"], import("o1js/dist/node/lib/provable/field.js").Field>, import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicOutputType"], import("o1js/dist/node/lib/provable/field.js").Field>>>;
    dummy<Input, OutPut>(publicInput: Input, publicOutput: OutPut, maxProofsVerified: 0 | 1 | 2, domainLog2?: number | undefined): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<Input, OutPut>>;
};
export declare class CorporateRegistrationOptimProof extends CorporateRegistrationOptimProof_base {
}
export {};
