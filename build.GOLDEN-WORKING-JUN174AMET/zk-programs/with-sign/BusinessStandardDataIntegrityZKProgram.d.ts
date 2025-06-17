import { Signature, CircuitString, Provable } from 'o1js';
declare const BusinessStandardDataIntegrityComplianceData_base: (new (value: {
    businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
    expectedContent: CircuitString;
    actualContent: CircuitString;
    actualContentFilename: string;
}) => {
    businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
    expectedContent: CircuitString;
    actualContent: CircuitString;
    actualContentFilename: string;
}) & {
    _isStruct: true;
} & Provable<{
    businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
    expectedContent: CircuitString;
    actualContent: CircuitString;
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
        actualContent: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        actualContentFilename: string;
    }) => {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        expectedContent: CircuitString;
        actualContent: CircuitString;
        actualContentFilename: string;
    };
    toInput: (x: {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        expectedContent: CircuitString;
        actualContent: CircuitString;
        actualContentFilename: string;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        expectedContent: CircuitString;
        actualContent: CircuitString;
        actualContentFilename: string;
    }) => {
        businessStandardDataIntegrityEvaluationId: string;
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
        actualContentFilename: string;
    };
    fromJSON: (x: {
        businessStandardDataIntegrityEvaluationId: string;
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
        actualContentFilename: string;
    }) => {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        expectedContent: CircuitString;
        actualContent: CircuitString;
        actualContentFilename: string;
    };
    empty: () => {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        expectedContent: CircuitString;
        actualContent: CircuitString;
        actualContentFilename: string;
    };
};
export declare class BusinessStandardDataIntegrityComplianceData extends BusinessStandardDataIntegrityComplianceData_base {
}
declare const BusinessStandardDataIntegrityPublicOutput_base: (new (value: {
    businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
    result: import("o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
    result: import("o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
    result: import("o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    businessStandardDataIntegrityEvaluationId: bigint;
    result: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        result: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        businessStandardDataIntegrityEvaluationId: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        result: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        result: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        result: import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        result: import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        businessStandardDataIntegrityEvaluationId: string;
        result: boolean;
    };
    fromJSON: (x: {
        businessStandardDataIntegrityEvaluationId: string;
        result: boolean;
    }) => {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        result: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        businessStandardDataIntegrityEvaluationId: import("o1js/dist/node/lib/provable/field.js").Field;
        result: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
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
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, BusinessStandardDataIntegrityPublicOutput>) => Promise<boolean>;
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
        proveCompliance: [typeof CircuitString, typeof BusinessStandardDataIntegrityComplianceData, typeof import("o1js/dist/node/lib/provable/bool.js").Bool & ((x: boolean | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/bool.js").Bool) => import("o1js/dist/node/lib/provable/bool.js").Bool), typeof Signature];
    };
    rawMethods: {
        proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [CircuitString, BusinessStandardDataIntegrityComplianceData, import("o1js/dist/node/lib/provable/bool.js").Bool, Signature] & any[]) => Promise<BusinessStandardDataIntegrityPublicOutput>;
    };
} & {
    proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [CircuitString, BusinessStandardDataIntegrityComplianceData, import("o1js/dist/node/lib/provable/bool.js").Bool, Signature] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, BusinessStandardDataIntegrityPublicOutput>>;
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
export declare class BusinessStandardDataIntegrityProof extends BusinessStandardDataIntegrityProof_base {
}
export {};
