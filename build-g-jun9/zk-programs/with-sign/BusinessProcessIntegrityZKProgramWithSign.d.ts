import { Signature, Proof, CircuitString, Provable } from 'o1js';
declare const BusinessProcessIntegrityData_base: (new (value: {
    businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
    businessProcessType: CircuitString;
    expectedContent: CircuitString;
    actualContent: CircuitString;
    str: string;
}) => {
    businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
    businessProcessType: CircuitString;
    expectedContent: CircuitString;
    actualContent: CircuitString;
    str: string;
}) & {
    _isStruct: true;
} & Provable<{
    businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
    businessProcessType: CircuitString;
    expectedContent: CircuitString;
    actualContent: CircuitString;
    str: string;
}, {
    businessProcessID: bigint;
    businessProcessType: string;
    expectedContent: string;
    actualContent: string;
    str: string;
}> & {
    fromValue: (value: {
        businessProcessID: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        businessProcessType: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        expectedContent: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        actualContent: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        str: string;
    }) => {
        businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
        businessProcessType: CircuitString;
        expectedContent: CircuitString;
        actualContent: CircuitString;
        str: string;
    };
    toInput: (x: {
        businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
        businessProcessType: CircuitString;
        expectedContent: CircuitString;
        actualContent: CircuitString;
        str: string;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
        businessProcessType: CircuitString;
        expectedContent: CircuitString;
        actualContent: CircuitString;
        str: string;
    }) => {
        businessProcessID: string;
        businessProcessType: {
            values: {
                value: string;
            }[];
        };
        expectedContent: {
            values: {
                value: string;
            }[];
        };
        actualContent: {
            values: {
                value: string;
            }[];
        };
        str: string;
    };
    fromJSON: (x: {
        businessProcessID: string;
        businessProcessType: {
            values: {
                value: string;
            }[];
        };
        expectedContent: {
            values: {
                value: string;
            }[];
        };
        actualContent: {
            values: {
                value: string;
            }[];
        };
        str: string;
    }) => {
        businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
        businessProcessType: CircuitString;
        expectedContent: CircuitString;
        actualContent: CircuitString;
        str: string;
    };
    empty: () => {
        businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
        businessProcessType: CircuitString;
        expectedContent: CircuitString;
        actualContent: CircuitString;
        str: string;
    };
};
export declare class BusinessProcessIntegrityData extends BusinessProcessIntegrityData_base {
}
declare const BusinessProcessIntegrityPublicOutput_base: (new (value: {
    businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
    out: import("o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
    out: import("o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
    out: import("o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    businessProcessID: bigint;
    out: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
        out: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        businessProcessID: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        out: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
        out: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
        out: import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
        out: import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        businessProcessID: string;
        out: boolean;
    };
    fromJSON: (x: {
        businessProcessID: string;
        out: boolean;
    }) => {
        businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
        out: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        businessProcessID: import("o1js/dist/node/lib/provable/field.js").Field;
        out: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
export declare class BusinessProcessIntegrityPublicOutput extends BusinessProcessIntegrityPublicOutput_base {
}
export declare const BusinessProcessIntegrityZKProgram: {
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
    verify: (proof: Proof<import("o1js/dist/node/lib/provable/field.js").Field, BusinessProcessIntegrityPublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveComplianceSCF: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
        proveComplianceSTABLECOIN: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
        proveComplianceDVP: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof BusinessProcessIntegrityPublicOutput;
    privateInputTypes: {
        proveComplianceSCF: [typeof BusinessProcessIntegrityData, typeof Signature];
        proveComplianceSTABLECOIN: [typeof BusinessProcessIntegrityData, typeof Signature];
        proveComplianceDVP: [typeof BusinessProcessIntegrityData, typeof Signature];
    };
    rawMethods: {
        proveComplianceSCF: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [BusinessProcessIntegrityData, Signature] & any[]) => Promise<BusinessProcessIntegrityPublicOutput>;
        proveComplianceSTABLECOIN: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [BusinessProcessIntegrityData, Signature] & any[]) => Promise<BusinessProcessIntegrityPublicOutput>;
        proveComplianceDVP: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [BusinessProcessIntegrityData, Signature] & any[]) => Promise<BusinessProcessIntegrityPublicOutput>;
    };
} & {
    proveComplianceSCF: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [BusinessProcessIntegrityData, Signature] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, BusinessProcessIntegrityPublicOutput>>;
    proveComplianceSTABLECOIN: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [BusinessProcessIntegrityData, Signature] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, BusinessProcessIntegrityPublicOutput>>;
    proveComplianceDVP: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [BusinessProcessIntegrityData, Signature] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, BusinessProcessIntegrityPublicOutput>>;
};
declare const BusinessProcessIntegrityProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: BusinessProcessIntegrityPublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: BusinessProcessIntegrityPublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof BusinessProcessIntegrityPublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof BusinessProcessIntegrityPublicOutput;
    };
    fromJSON<S extends (new (...args: any) => Proof<unknown, unknown>) & {
        prototype: Proof<any, any>;
        fromJSON: typeof Proof.fromJSON;
        dummy: typeof Proof.dummy;
        publicInputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        publicOutputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        tag: () => {
            name: string;
        };
    } & {
        prototype: Proof<unknown, unknown>;
    }>(this: S, { maxProofsVerified, proof: proofString, publicInput: publicInputJson, publicOutput: publicOutputJson, }: import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof): Promise<Proof<import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicInputType"], import("o1js/dist/node/lib/provable/field.js").Field>, import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicOutputType"], import("o1js/dist/node/lib/provable/field.js").Field>>>;
    dummy<Input, OutPut>(publicInput: Input, publicOutput: OutPut, maxProofsVerified: 0 | 1 | 2, domainLog2?: number | undefined): Promise<Proof<Input, OutPut>>;
};
export declare class BusinessProcessIntegrityProof extends BusinessProcessIntegrityProof_base {
}
export {};
