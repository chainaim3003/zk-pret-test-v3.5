import { Proof, CircuitString } from 'o1js';
declare const BusinessStandardDataIntegrityComplianceData_base: (new (value: {
    businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
    expectedContent: CircuitString;
    actualContent: string;
    actualContentFilename: string;
}) => {
    businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
    expectedContent: CircuitString;
    actualContent: string;
    actualContentFilename: string;
}) & {
    _isStruct: true;
} & import("o1js/dist/node/lib/provable/provable.js").Provable<{
    businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
    expectedContent: CircuitString;
    actualContent: string;
    actualContentFilename: string;
}, {
    businessStandardDataIntegrityEvaluationId: bigint;
    expectedContent: string;
    actualContent: string;
    actualContentFilename: string;
}> & {
    fromValue: (value: {
        businessStandardDataIntegrityEvaluationId: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        expectedContent: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        actualContent: string;
        actualContentFilename: string;
    }) => {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        expectedContent: CircuitString;
        actualContent: string;
        actualContentFilename: string;
    };
    toInput: (x: {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        expectedContent: CircuitString;
        actualContent: string;
        actualContentFilename: string;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        expectedContent: CircuitString;
        actualContent: string;
        actualContentFilename: string;
    }) => {
        businessStandardDataIntegrityEvaluationId: string;
        expectedContent: {
            values: {
                value: string;
            }[];
        };
        actualContent: string;
        actualContentFilename: string;
    };
    fromJSON: (x: {
        businessStandardDataIntegrityEvaluationId: string;
        expectedContent: {
            values: {
                value: string;
            }[];
        };
        actualContent: string;
        actualContentFilename: string;
    }) => {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        expectedContent: CircuitString;
        actualContent: string;
        actualContentFilename: string;
    };
    empty: () => {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        expectedContent: CircuitString;
        actualContent: string;
        actualContentFilename: string;
    };
};
export declare class BusinessStandardDataIntegrityComplianceData extends BusinessStandardDataIntegrityComplianceData_base {
}
declare const BusinessStandardDataIntegrityPublicOutput_base: (new (value: {}) => {}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{}, {}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {};
} & {
    fromValue: (value: {}) => {};
    toInput: (x: {}) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {}) => {};
    fromJSON: (x: {}) => {};
    empty: () => {};
};
export declare class BusinessStandardDataIntegrityPublicOutput extends BusinessStandardDataIntegrityPublicOutput_base {
}
export declare const BusinessStandardDataIntegrityZKProgram: {
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
    verify: (proof: Proof<import("o1js/dist/node/lib/provable/field.js").Field, BusinessStandardDataIntegrityPublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof BusinessStandardDataIntegrityPublicOutput;
    privateInputTypes: {
        proveCompliance: [typeof BusinessStandardDataIntegrityComplianceData];
    };
    rawMethods: {
        proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [BusinessStandardDataIntegrityComplianceData] & any[]) => Promise<BusinessStandardDataIntegrityPublicOutput>;
    };
} & {
    proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [BusinessStandardDataIntegrityComplianceData] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, BusinessStandardDataIntegrityPublicOutput>>;
};
declare const BusinessStandardDataIntegrityProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: BusinessStandardDataIntegrityPublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: BusinessStandardDataIntegrityPublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof BusinessStandardDataIntegrityPublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof BusinessStandardDataIntegrityPublicOutput;
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
export declare class BusinessStandardDataIntegrityProof extends BusinessStandardDataIntegrityProof_base {
}
export {};
