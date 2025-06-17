import { Signature, CircuitString } from 'o1js';
import { MerkleWitness9 } from '../../tests/with-sign/GLEIFMerkleUtils.js';
declare const GLEIFMerklePublicOutput_base: (new (value: {
    name: CircuitString;
    registration_status: CircuitString;
    lei: CircuitString;
    datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
    fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    name: CircuitString;
    registration_status: CircuitString;
    lei: CircuitString;
    datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
    fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    name: CircuitString;
    registration_status: CircuitString;
    lei: CircuitString;
    datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
    fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    name: string;
    registration_status: string;
    lei: string;
    datasetRoot: bigint;
    companyVerified: bigint;
    fieldsRevealed: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        name: CircuitString;
        registration_status: CircuitString;
        lei: CircuitString;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        name: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        registration_status: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        lei: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        datasetRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        name: CircuitString;
        registration_status: CircuitString;
        lei: CircuitString;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        name: CircuitString;
        registration_status: CircuitString;
        lei: CircuitString;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        name: CircuitString;
        registration_status: CircuitString;
        lei: CircuitString;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        name: {
            values: {
                value: string;
            }[];
        };
        registration_status: {
            values: {
                value: string;
            }[];
        };
        lei: {
            values: {
                value: string;
            }[];
        };
        datasetRoot: string;
        companyVerified: string;
        fieldsRevealed: string;
    };
    fromJSON: (x: {
        name: {
            values: {
                value: string;
            }[];
        };
        registration_status: {
            values: {
                value: string;
            }[];
        };
        lei: {
            values: {
                value: string;
            }[];
        };
        datasetRoot: string;
        companyVerified: string;
        fieldsRevealed: string;
    }) => {
        name: CircuitString;
        registration_status: CircuitString;
        lei: CircuitString;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        name: CircuitString;
        registration_status: CircuitString;
        lei: CircuitString;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class GLEIFMerklePublicOutput extends GLEIFMerklePublicOutput_base {
}
declare const GLEIFExtendedPublicOutput_base: (new (value: {
    name: CircuitString;
    registration_status: CircuitString;
    lei: CircuitString;
    legalAddress_country: CircuitString;
    legalAddress_city: CircuitString;
    jurisdiction: CircuitString;
    datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
    fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    name: CircuitString;
    registration_status: CircuitString;
    lei: CircuitString;
    legalAddress_country: CircuitString;
    legalAddress_city: CircuitString;
    jurisdiction: CircuitString;
    datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
    fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    name: CircuitString;
    registration_status: CircuitString;
    lei: CircuitString;
    legalAddress_country: CircuitString;
    legalAddress_city: CircuitString;
    jurisdiction: CircuitString;
    datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
    fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    name: string;
    registration_status: string;
    lei: string;
    legalAddress_country: string;
    legalAddress_city: string;
    jurisdiction: string;
    datasetRoot: bigint;
    companyVerified: bigint;
    fieldsRevealed: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        name: CircuitString;
        registration_status: CircuitString;
        lei: CircuitString;
        legalAddress_country: CircuitString;
        legalAddress_city: CircuitString;
        jurisdiction: CircuitString;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        name: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        registration_status: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        lei: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        legalAddress_country: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        legalAddress_city: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        jurisdiction: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        datasetRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        name: CircuitString;
        registration_status: CircuitString;
        lei: CircuitString;
        legalAddress_country: CircuitString;
        legalAddress_city: CircuitString;
        jurisdiction: CircuitString;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        name: CircuitString;
        registration_status: CircuitString;
        lei: CircuitString;
        legalAddress_country: CircuitString;
        legalAddress_city: CircuitString;
        jurisdiction: CircuitString;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        name: CircuitString;
        registration_status: CircuitString;
        lei: CircuitString;
        legalAddress_country: CircuitString;
        legalAddress_city: CircuitString;
        jurisdiction: CircuitString;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        name: {
            values: {
                value: string;
            }[];
        };
        registration_status: {
            values: {
                value: string;
            }[];
        };
        lei: {
            values: {
                value: string;
            }[];
        };
        legalAddress_country: {
            values: {
                value: string;
            }[];
        };
        legalAddress_city: {
            values: {
                value: string;
            }[];
        };
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
        datasetRoot: string;
        companyVerified: string;
        fieldsRevealed: string;
    };
    fromJSON: (x: {
        name: {
            values: {
                value: string;
            }[];
        };
        registration_status: {
            values: {
                value: string;
            }[];
        };
        lei: {
            values: {
                value: string;
            }[];
        };
        legalAddress_country: {
            values: {
                value: string;
            }[];
        };
        legalAddress_city: {
            values: {
                value: string;
            }[];
        };
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
        datasetRoot: string;
        companyVerified: string;
        fieldsRevealed: string;
    }) => {
        name: CircuitString;
        registration_status: CircuitString;
        lei: CircuitString;
        legalAddress_country: CircuitString;
        legalAddress_city: CircuitString;
        jurisdiction: CircuitString;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        name: CircuitString;
        registration_status: CircuitString;
        lei: CircuitString;
        legalAddress_country: CircuitString;
        legalAddress_city: CircuitString;
        jurisdiction: CircuitString;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        companyVerified: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class GLEIFExtendedPublicOutput extends GLEIFExtendedPublicOutput_base {
}
declare const GLEIFComprehensivePublicOutput_base: (new (value: {
    lei: CircuitString;
    name: CircuitString;
    entity_status: CircuitString;
    registration_status: CircuitString;
    conformity_flag: CircuitString;
    isGLEIFCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
    datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    businessRulesPassed: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    lei: CircuitString;
    name: CircuitString;
    entity_status: CircuitString;
    registration_status: CircuitString;
    conformity_flag: CircuitString;
    isGLEIFCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
    datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    businessRulesPassed: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    lei: CircuitString;
    name: CircuitString;
    entity_status: CircuitString;
    registration_status: CircuitString;
    conformity_flag: CircuitString;
    isGLEIFCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
    datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
    businessRulesPassed: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    lei: string;
    name: string;
    entity_status: string;
    registration_status: string;
    conformity_flag: string;
    isGLEIFCompliant: bigint;
    datasetRoot: bigint;
    fieldsRevealed: bigint;
    businessRulesPassed: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        lei: CircuitString;
        name: CircuitString;
        entity_status: CircuitString;
        registration_status: CircuitString;
        conformity_flag: CircuitString;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
        businessRulesPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        lei: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        name: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        entity_status: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        registration_status: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        conformity_flag: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        isGLEIFCompliant: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        datasetRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        businessRulesPassed: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        lei: CircuitString;
        name: CircuitString;
        entity_status: CircuitString;
        registration_status: CircuitString;
        conformity_flag: CircuitString;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
        businessRulesPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        lei: CircuitString;
        name: CircuitString;
        entity_status: CircuitString;
        registration_status: CircuitString;
        conformity_flag: CircuitString;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
        businessRulesPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        lei: CircuitString;
        name: CircuitString;
        entity_status: CircuitString;
        registration_status: CircuitString;
        conformity_flag: CircuitString;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
        businessRulesPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        lei: {
            values: {
                value: string;
            }[];
        };
        name: {
            values: {
                value: string;
            }[];
        };
        entity_status: {
            values: {
                value: string;
            }[];
        };
        registration_status: {
            values: {
                value: string;
            }[];
        };
        conformity_flag: {
            values: {
                value: string;
            }[];
        };
        isGLEIFCompliant: string;
        datasetRoot: string;
        fieldsRevealed: string;
        businessRulesPassed: string;
    };
    fromJSON: (x: {
        lei: {
            values: {
                value: string;
            }[];
        };
        name: {
            values: {
                value: string;
            }[];
        };
        entity_status: {
            values: {
                value: string;
            }[];
        };
        registration_status: {
            values: {
                value: string;
            }[];
        };
        conformity_flag: {
            values: {
                value: string;
            }[];
        };
        isGLEIFCompliant: string;
        datasetRoot: string;
        fieldsRevealed: string;
        businessRulesPassed: string;
    }) => {
        lei: CircuitString;
        name: CircuitString;
        entity_status: CircuitString;
        registration_status: CircuitString;
        conformity_flag: CircuitString;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
        businessRulesPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        lei: CircuitString;
        name: CircuitString;
        entity_status: CircuitString;
        registration_status: CircuitString;
        conformity_flag: CircuitString;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsRevealed: import("o1js/dist/node/lib/provable/field.js").Field;
        businessRulesPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class GLEIFComprehensivePublicOutput extends GLEIFComprehensivePublicOutput_base {
}
export declare const GLEIFMerkleVerifier: {
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
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, GLEIFMerklePublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveSelectiveCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
        proveExtendedCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof GLEIFMerklePublicOutput;
    privateInputTypes: {
        proveSelectiveCompliance: [typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field), typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof Signature];
        proveExtendedCompliance: [typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field), typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof Signature];
    };
    rawMethods: {
        proveSelectiveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [import("o1js/dist/node/lib/provable/field.js").Field, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, CircuitString, CircuitString, CircuitString, CircuitString, Signature] & any[]) => Promise<GLEIFMerklePublicOutput>;
        proveExtendedCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [import("o1js/dist/node/lib/provable/field.js").Field, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, Signature] & any[]) => Promise<GLEIFMerklePublicOutput>;
    };
} & {
    proveSelectiveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [import("o1js/dist/node/lib/provable/field.js").Field, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, CircuitString, CircuitString, CircuitString, CircuitString, Signature] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, GLEIFMerklePublicOutput>>;
    proveExtendedCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [import("o1js/dist/node/lib/provable/field.js").Field, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, Signature] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, GLEIFMerklePublicOutput>>;
};
export declare const GLEIFComprehensiveVerifier: {
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
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, GLEIFComprehensivePublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveComprehensiveCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof GLEIFComprehensivePublicOutput;
    privateInputTypes: {
        proveComprehensiveCompliance: [typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field), typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof MerkleWitness9, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof Signature];
    };
    rawMethods: {
        proveComprehensiveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [import("o1js/dist/node/lib/provable/field.js").Field, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, Signature] & any[]) => Promise<GLEIFComprehensivePublicOutput>;
    };
} & {
    proveComprehensiveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [import("o1js/dist/node/lib/provable/field.js").Field, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, MerkleWitness9, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, Signature] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, GLEIFComprehensivePublicOutput>>;
};
declare const GLEIFMerkleProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: GLEIFMerklePublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: GLEIFMerklePublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof GLEIFMerklePublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof GLEIFMerklePublicOutput;
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
export declare class GLEIFMerkleProof extends GLEIFMerkleProof_base {
}
declare const GLEIFComprehensiveProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: GLEIFComprehensivePublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: GLEIFComprehensivePublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof GLEIFComprehensivePublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof GLEIFComprehensivePublicOutput;
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
export declare class GLEIFComprehensiveProof extends GLEIFComprehensiveProof_base {
}
export {};
