import { Field, Signature, CircuitString } from 'o1js';
declare const ACTUSData_base: (new (value: {
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    scenarioName_str: string;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    cashInflows: any[];
    cashOutflows: any[];
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
    inflowLength: number;
    outflowLength: number;
}) => {
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    scenarioName_str: string;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    cashInflows: any[];
    cashOutflows: any[];
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
    inflowLength: number;
    outflowLength: number;
}) & {
    _isStruct: true;
} & import("o1js/dist/node/lib/provable/provable.js").Provable<{
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    scenarioName_str: string;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    cashInflows: any[];
    cashOutflows: any[];
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
    inflowLength: number;
    outflowLength: number;
}, {
    scenarioID: string;
    scenarioName: string;
    scenarioName_str: string;
    riskEvaluated: bigint;
    cashInflows: any[];
    cashOutflows: any[];
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
    inflowLength: number;
    outflowLength: number;
}> & {
    fromValue: (value: {
        scenarioID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        scenarioName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        scenarioName_str: string;
        riskEvaluated: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflows: any[];
        cashOutflows: any[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        inflowLength: number;
        outflowLength: number;
    }) => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        scenarioName_str: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflows: any[];
        cashOutflows: any[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        inflowLength: number;
        outflowLength: number;
    };
    toInput: (x: {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        scenarioName_str: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflows: any[];
        cashOutflows: any[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        inflowLength: number;
        outflowLength: number;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        scenarioName_str: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflows: any[];
        cashOutflows: any[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        inflowLength: number;
        outflowLength: number;
    }) => {
        scenarioID: {
            values: {
                value: string;
            }[];
        };
        scenarioName: {
            values: {
                value: string;
            }[];
        };
        scenarioName_str: string;
        riskEvaluated: string;
        cashInflows: unknown[];
        cashOutflows: unknown[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        inflowLength: number;
        outflowLength: number;
    };
    fromJSON: (x: {
        scenarioID: {
            values: {
                value: string;
            }[];
        };
        scenarioName: {
            values: {
                value: string;
            }[];
        };
        scenarioName_str: string;
        riskEvaluated: string;
        cashInflows: unknown[];
        cashOutflows: unknown[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        inflowLength: number;
        outflowLength: number;
    }) => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        scenarioName_str: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflows: any[];
        cashOutflows: any[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        inflowLength: number;
        outflowLength: number;
    };
    empty: () => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        scenarioName_str: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflows: any[];
        cashOutflows: any[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        inflowLength: number;
        outflowLength: number;
    };
};
export declare class ACTUSData extends ACTUSData_base {
    constructor(data: {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        scenarioName_str: string;
        riskEvaluated: Field;
        cashInflows: any[];
        cashOutflows: any[];
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        inflowLength: number;
        outflowLength: number;
    });
    private padArray;
}
declare const liquidityratioDataPublicOutput_base: (new (value: {
    out: import("o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    out: import("o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    out: import("o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    out: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        out: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        out: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        out: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        out: import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        out: import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        out: boolean;
    };
    fromJSON: (x: {
        out: boolean;
    }) => {
        out: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        out: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
export declare class liquidityratioDataPublicOutput extends liquidityratioDataPublicOutput_base {
}
export declare const LiquidityRatio: {
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
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, liquidityratioDataPublicOutput>) => Promise<boolean>;
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
    publicOutputType: typeof liquidityratioDataPublicOutput;
    privateInputTypes: {
        proveCompliance: [typeof ACTUSData, typeof Signature];
    };
    rawMethods: {
        proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [ACTUSData, Signature] & any[]) => Promise<liquidityratioDataPublicOutput>;
    };
} & {
    proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [ACTUSData, Signature] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, liquidityratioDataPublicOutput>>;
};
declare const LiquidityRatioProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: liquidityratioDataPublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: liquidityratioDataPublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof liquidityratioDataPublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof liquidityratioDataPublicOutput;
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
export declare class LiquidityRatioProof extends LiquidityRatioProof_base {
}
export {};
