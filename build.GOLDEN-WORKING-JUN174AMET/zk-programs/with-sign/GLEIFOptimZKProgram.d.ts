import { Signature, CircuitString, UInt64 } from 'o1js';
export declare const MERKLE_TREE_HEIGHT = 8;
declare const MerkleWitness8_base: typeof import("o1js/dist/node/lib/provable/merkle-tree.js").BaseMerkleWitness;
export declare class MerkleWitness8 extends MerkleWitness8_base {
}
declare const GLEIFOptimComplianceData_base: (new (value: {
    lei: CircuitString;
    name: CircuitString;
    entity_status: CircuitString;
    registration_status: CircuitString;
    conformity_flag: CircuitString;
    initialRegistrationDate: CircuitString;
    lastUpdateDate: CircuitString;
    nextRenewalDate: CircuitString;
    bic_codes: CircuitString;
    mic_codes: CircuitString;
    managing_lou: CircuitString;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    lei: CircuitString;
    name: CircuitString;
    entity_status: CircuitString;
    registration_status: CircuitString;
    conformity_flag: CircuitString;
    initialRegistrationDate: CircuitString;
    lastUpdateDate: CircuitString;
    nextRenewalDate: CircuitString;
    bic_codes: CircuitString;
    mic_codes: CircuitString;
    managing_lou: CircuitString;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    lei: CircuitString;
    name: CircuitString;
    entity_status: CircuitString;
    registration_status: CircuitString;
    conformity_flag: CircuitString;
    initialRegistrationDate: CircuitString;
    lastUpdateDate: CircuitString;
    nextRenewalDate: CircuitString;
    bic_codes: CircuitString;
    mic_codes: CircuitString;
    managing_lou: CircuitString;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    lei: string;
    name: string;
    entity_status: string;
    registration_status: string;
    conformity_flag: string;
    initialRegistrationDate: string;
    lastUpdateDate: string;
    nextRenewalDate: string;
    bic_codes: string;
    mic_codes: string;
    managing_lou: string;
    merkle_root: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        lei: CircuitString;
        name: CircuitString;
        entity_status: CircuitString;
        registration_status: CircuitString;
        conformity_flag: CircuitString;
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        bic_codes: CircuitString;
        mic_codes: CircuitString;
        managing_lou: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
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
        initialRegistrationDate: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        lastUpdateDate: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        nextRenewalDate: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        bic_codes: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        mic_codes: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        managing_lou: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        merkle_root: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        lei: CircuitString;
        name: CircuitString;
        entity_status: CircuitString;
        registration_status: CircuitString;
        conformity_flag: CircuitString;
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        bic_codes: CircuitString;
        mic_codes: CircuitString;
        managing_lou: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        lei: CircuitString;
        name: CircuitString;
        entity_status: CircuitString;
        registration_status: CircuitString;
        conformity_flag: CircuitString;
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        bic_codes: CircuitString;
        mic_codes: CircuitString;
        managing_lou: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
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
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        bic_codes: CircuitString;
        mic_codes: CircuitString;
        managing_lou: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
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
        initialRegistrationDate: {
            values: {
                value: string;
            }[];
        };
        lastUpdateDate: {
            values: {
                value: string;
            }[];
        };
        nextRenewalDate: {
            values: {
                value: string;
            }[];
        };
        bic_codes: {
            values: {
                value: string;
            }[];
        };
        mic_codes: {
            values: {
                value: string;
            }[];
        };
        managing_lou: {
            values: {
                value: string;
            }[];
        };
        merkle_root: string;
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
        initialRegistrationDate: {
            values: {
                value: string;
            }[];
        };
        lastUpdateDate: {
            values: {
                value: string;
            }[];
        };
        nextRenewalDate: {
            values: {
                value: string;
            }[];
        };
        bic_codes: {
            values: {
                value: string;
            }[];
        };
        mic_codes: {
            values: {
                value: string;
            }[];
        };
        managing_lou: {
            values: {
                value: string;
            }[];
        };
        merkle_root: string;
    }) => {
        lei: CircuitString;
        name: CircuitString;
        entity_status: CircuitString;
        registration_status: CircuitString;
        conformity_flag: CircuitString;
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        bic_codes: CircuitString;
        mic_codes: CircuitString;
        managing_lou: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        lei: CircuitString;
        name: CircuitString;
        entity_status: CircuitString;
        registration_status: CircuitString;
        conformity_flag: CircuitString;
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        bic_codes: CircuitString;
        mic_codes: CircuitString;
        managing_lou: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class GLEIFOptimComplianceData extends GLEIFOptimComplianceData_base {
}
declare const GLEIFOptimPublicOutput_base: (new (value: {
    lei: CircuitString;
    name: CircuitString;
    isGLEIFCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verification_timestamp: UInt64;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    lei: CircuitString;
    name: CircuitString;
    isGLEIFCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verification_timestamp: UInt64;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    lei: CircuitString;
    name: CircuitString;
    isGLEIFCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verification_timestamp: UInt64;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    lei: string;
    name: string;
    isGLEIFCompliant: boolean;
    verification_timestamp: bigint;
    merkle_root: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        lei: CircuitString;
        name: CircuitString;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        lei: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        name: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        isGLEIFCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: bigint | UInt64;
        merkle_root: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        lei: CircuitString;
        name: CircuitString;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        lei: CircuitString;
        name: CircuitString;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        lei: CircuitString;
        name: CircuitString;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
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
        isGLEIFCompliant: boolean;
        verification_timestamp: string;
        merkle_root: string;
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
        isGLEIFCompliant: boolean;
        verification_timestamp: string;
        merkle_root: string;
    }) => {
        lei: CircuitString;
        name: CircuitString;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        lei: CircuitString;
        name: CircuitString;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class GLEIFOptimPublicOutput extends GLEIFOptimPublicOutput_base {
}
export declare const GLEIFOptim: {
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
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, GLEIFOptimPublicOutput>) => Promise<boolean>;
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
    publicOutputType: typeof GLEIFOptimPublicOutput;
    privateInputTypes: {
        proveOptimizedCompliance: [typeof GLEIFOptimComplianceData, typeof Signature, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8];
    };
    rawMethods: {
        proveOptimizedCompliance: (publicInput: UInt64, ...args: [GLEIFOptimComplianceData, Signature, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8] & any[]) => Promise<GLEIFOptimPublicOutput>;
    };
} & {
    proveOptimizedCompliance: (publicInput: UInt64, ...args: [GLEIFOptimComplianceData, Signature, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, GLEIFOptimPublicOutput>>;
};
declare const GLEIFOptimProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: UInt64;
        publicOutput: GLEIFOptimPublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: UInt64;
        publicOutput: GLEIFOptimPublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof UInt64;
    publicOutputType: typeof GLEIFOptimPublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof UInt64;
        publicOutputType: typeof GLEIFOptimPublicOutput;
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
export declare class GLEIFOptimProof extends GLEIFOptimProof_base {
}
export {};
