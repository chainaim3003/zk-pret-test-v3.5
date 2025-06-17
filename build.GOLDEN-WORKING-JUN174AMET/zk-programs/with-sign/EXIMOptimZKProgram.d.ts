import { Signature, CircuitString, UInt64 } from 'o1js';
export declare const EXIM_MERKLE_TREE_HEIGHT = 8;
declare const EXIMMerkleWitness8_base: typeof import("o1js/dist/node/lib/provable/merkle-tree.js").BaseMerkleWitness;
export declare class EXIMMerkleWitness8 extends EXIMMerkleWitness8_base {
}
export declare const EXIM_FIELD_INDICES: {
    iec: number;
    entityName: number;
    iecIssueDate: number;
    pan: number;
    iecStatus: number;
    iecModificationDate: number;
    dataAsOn: number;
    addressLine1: number;
    addressLine2: number;
    city: number;
    state: number;
    email: number;
    exporterType: number;
    activeComplianceStatusCode: number;
    starStatus: number;
    natureOfConcern: number;
};
declare const EXIMOptimComplianceData_base: (new (value: {
    iec: CircuitString;
    entityName: CircuitString;
    iecIssueDate: CircuitString;
    pan: CircuitString;
    iecStatus: import("o1js/dist/node/lib/provable/field.js").Field;
    iecModificationDate: CircuitString;
    dataAsOn: CircuitString;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    iec: CircuitString;
    entityName: CircuitString;
    iecIssueDate: CircuitString;
    pan: CircuitString;
    iecStatus: import("o1js/dist/node/lib/provable/field.js").Field;
    iecModificationDate: CircuitString;
    dataAsOn: CircuitString;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    iec: CircuitString;
    entityName: CircuitString;
    iecIssueDate: CircuitString;
    pan: CircuitString;
    iecStatus: import("o1js/dist/node/lib/provable/field.js").Field;
    iecModificationDate: CircuitString;
    dataAsOn: CircuitString;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    iec: string;
    entityName: string;
    iecIssueDate: string;
    pan: string;
    iecStatus: bigint;
    iecModificationDate: string;
    dataAsOn: string;
    merkle_root: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        iec: CircuitString;
        entityName: CircuitString;
        iecIssueDate: CircuitString;
        pan: CircuitString;
        iecStatus: import("o1js/dist/node/lib/provable/field.js").Field;
        iecModificationDate: CircuitString;
        dataAsOn: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        iec: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        entityName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        iecIssueDate: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        pan: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        iecStatus: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        iecModificationDate: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        dataAsOn: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        merkle_root: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        iec: CircuitString;
        entityName: CircuitString;
        iecIssueDate: CircuitString;
        pan: CircuitString;
        iecStatus: import("o1js/dist/node/lib/provable/field.js").Field;
        iecModificationDate: CircuitString;
        dataAsOn: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        iec: CircuitString;
        entityName: CircuitString;
        iecIssueDate: CircuitString;
        pan: CircuitString;
        iecStatus: import("o1js/dist/node/lib/provable/field.js").Field;
        iecModificationDate: CircuitString;
        dataAsOn: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        iec: CircuitString;
        entityName: CircuitString;
        iecIssueDate: CircuitString;
        pan: CircuitString;
        iecStatus: import("o1js/dist/node/lib/provable/field.js").Field;
        iecModificationDate: CircuitString;
        dataAsOn: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        iec: {
            values: {
                value: string;
            }[];
        };
        entityName: {
            values: {
                value: string;
            }[];
        };
        iecIssueDate: {
            values: {
                value: string;
            }[];
        };
        pan: {
            values: {
                value: string;
            }[];
        };
        iecStatus: string;
        iecModificationDate: {
            values: {
                value: string;
            }[];
        };
        dataAsOn: {
            values: {
                value: string;
            }[];
        };
        merkle_root: string;
    };
    fromJSON: (x: {
        iec: {
            values: {
                value: string;
            }[];
        };
        entityName: {
            values: {
                value: string;
            }[];
        };
        iecIssueDate: {
            values: {
                value: string;
            }[];
        };
        pan: {
            values: {
                value: string;
            }[];
        };
        iecStatus: string;
        iecModificationDate: {
            values: {
                value: string;
            }[];
        };
        dataAsOn: {
            values: {
                value: string;
            }[];
        };
        merkle_root: string;
    }) => {
        iec: CircuitString;
        entityName: CircuitString;
        iecIssueDate: CircuitString;
        pan: CircuitString;
        iecStatus: import("o1js/dist/node/lib/provable/field.js").Field;
        iecModificationDate: CircuitString;
        dataAsOn: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        iec: CircuitString;
        entityName: CircuitString;
        iecIssueDate: CircuitString;
        pan: CircuitString;
        iecStatus: import("o1js/dist/node/lib/provable/field.js").Field;
        iecModificationDate: CircuitString;
        dataAsOn: CircuitString;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class EXIMOptimComplianceData extends EXIMOptimComplianceData_base {
}
declare const EXIMOptimPublicOutput_base: (new (value: {
    iec: CircuitString;
    entityName: CircuitString;
    isEXIMCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verification_timestamp: UInt64;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    iec: CircuitString;
    entityName: CircuitString;
    isEXIMCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verification_timestamp: UInt64;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    iec: CircuitString;
    entityName: CircuitString;
    isEXIMCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verification_timestamp: UInt64;
    merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    iec: string;
    entityName: string;
    isEXIMCompliant: boolean;
    verification_timestamp: bigint;
    merkle_root: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        iec: CircuitString;
        entityName: CircuitString;
        isEXIMCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        iec: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        entityName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        isEXIMCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: bigint | UInt64;
        merkle_root: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        iec: CircuitString;
        entityName: CircuitString;
        isEXIMCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        iec: CircuitString;
        entityName: CircuitString;
        isEXIMCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        iec: CircuitString;
        entityName: CircuitString;
        isEXIMCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        iec: {
            values: {
                value: string;
            }[];
        };
        entityName: {
            values: {
                value: string;
            }[];
        };
        isEXIMCompliant: boolean;
        verification_timestamp: string;
        merkle_root: string;
    };
    fromJSON: (x: {
        iec: {
            values: {
                value: string;
            }[];
        };
        entityName: {
            values: {
                value: string;
            }[];
        };
        isEXIMCompliant: boolean;
        verification_timestamp: string;
        merkle_root: string;
    }) => {
        iec: CircuitString;
        entityName: CircuitString;
        isEXIMCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        iec: CircuitString;
        entityName: CircuitString;
        isEXIMCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verification_timestamp: UInt64;
        merkle_root: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class EXIMOptimPublicOutput extends EXIMOptimPublicOutput_base {
}
export declare const EXIMOptim: {
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
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, EXIMOptimPublicOutput>) => Promise<boolean>;
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
    publicOutputType: typeof EXIMOptimPublicOutput;
    privateInputTypes: {
        proveOptimizedCompliance: [typeof EXIMOptimComplianceData, typeof Signature, typeof EXIMMerkleWitness8, typeof EXIMMerkleWitness8, typeof EXIMMerkleWitness8, typeof EXIMMerkleWitness8, typeof EXIMMerkleWitness8, typeof EXIMMerkleWitness8, typeof EXIMMerkleWitness8];
    };
    rawMethods: {
        proveOptimizedCompliance: (publicInput: UInt64, ...args: [EXIMOptimComplianceData, Signature, EXIMMerkleWitness8, EXIMMerkleWitness8, EXIMMerkleWitness8, EXIMMerkleWitness8, EXIMMerkleWitness8, EXIMMerkleWitness8, EXIMMerkleWitness8] & any[]) => Promise<EXIMOptimPublicOutput>;
    };
} & {
    proveOptimizedCompliance: (publicInput: UInt64, ...args: [EXIMOptimComplianceData, Signature, EXIMMerkleWitness8, EXIMMerkleWitness8, EXIMMerkleWitness8, EXIMMerkleWitness8, EXIMMerkleWitness8, EXIMMerkleWitness8, EXIMMerkleWitness8] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, EXIMOptimPublicOutput>>;
};
declare const EXIMOptimProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: UInt64;
        publicOutput: EXIMOptimPublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: UInt64;
        publicOutput: EXIMOptimPublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof UInt64;
    publicOutputType: typeof EXIMOptimPublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof UInt64;
        publicOutputType: typeof EXIMOptimPublicOutput;
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
export declare class EXIMOptimProof extends EXIMOptimProof_base {
}
export {};
