import { Field, Signature, Proof, CircuitString } from 'o1js';
declare const ACTUSData_base: (new (value: {
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    scenarioName_str: string;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    cashInflows: any[];
    cashOutflows: any[];
    inflowLength: number;
    outflowLength: number;
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
    liquidityThreshold_LCR: number;
    classifiedContracts: any[];
    totalHQLA_L1: any[];
    totalHQLA_L2A: any[];
    totalHQLA_L2B: any[];
    totalNonHQLA: any[];
}) => {
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    scenarioName_str: string;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    cashInflows: any[];
    cashOutflows: any[];
    inflowLength: number;
    outflowLength: number;
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
    liquidityThreshold_LCR: number;
    classifiedContracts: any[];
    totalHQLA_L1: any[];
    totalHQLA_L2A: any[];
    totalHQLA_L2B: any[];
    totalNonHQLA: any[];
}) & {
    _isStruct: true;
} & import("o1js/dist/node/lib/provable/provable.js").Provable<{
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    scenarioName_str: string;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    cashInflows: any[];
    cashOutflows: any[];
    inflowLength: number;
    outflowLength: number;
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
    liquidityThreshold_LCR: number;
    classifiedContracts: any[];
    totalHQLA_L1: any[];
    totalHQLA_L2A: any[];
    totalHQLA_L2B: any[];
    totalNonHQLA: any[];
}, {
    scenarioID: string;
    scenarioName: string;
    scenarioName_str: string;
    riskEvaluated: bigint;
    cashInflows: any[];
    cashOutflows: any[];
    inflowLength: number;
    outflowLength: number;
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    liquidityThreshold: number;
    liquidityThreshold_LCR: number;
    classifiedContracts: any[];
    totalHQLA_L1: any[];
    totalHQLA_L2A: any[];
    totalHQLA_L2B: any[];
    totalNonHQLA: any[];
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
        inflowLength: number;
        outflowLength: number;
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        liquidityThreshold_LCR: number;
        classifiedContracts: any[];
        totalHQLA_L1: any[];
        totalHQLA_L2A: any[];
        totalHQLA_L2B: any[];
        totalNonHQLA: any[];
    }) => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        scenarioName_str: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflows: any[];
        cashOutflows: any[];
        inflowLength: number;
        outflowLength: number;
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        liquidityThreshold_LCR: number;
        classifiedContracts: any[];
        totalHQLA_L1: any[];
        totalHQLA_L2A: any[];
        totalHQLA_L2B: any[];
        totalNonHQLA: any[];
    };
    toInput: (x: {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        scenarioName_str: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflows: any[];
        cashOutflows: any[];
        inflowLength: number;
        outflowLength: number;
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        liquidityThreshold_LCR: number;
        classifiedContracts: any[];
        totalHQLA_L1: any[];
        totalHQLA_L2A: any[];
        totalHQLA_L2B: any[];
        totalNonHQLA: any[];
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
        inflowLength: number;
        outflowLength: number;
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        liquidityThreshold_LCR: number;
        classifiedContracts: any[];
        totalHQLA_L1: any[];
        totalHQLA_L2A: any[];
        totalHQLA_L2B: any[];
        totalNonHQLA: any[];
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
        inflowLength: number;
        outflowLength: number;
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        liquidityThreshold_LCR: number;
        classifiedContracts: unknown[];
        totalHQLA_L1: unknown[];
        totalHQLA_L2A: unknown[];
        totalHQLA_L2B: unknown[];
        totalNonHQLA: unknown[];
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
        inflowLength: number;
        outflowLength: number;
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        liquidityThreshold_LCR: number;
        classifiedContracts: unknown[];
        totalHQLA_L1: unknown[];
        totalHQLA_L2A: unknown[];
        totalHQLA_L2B: unknown[];
        totalNonHQLA: unknown[];
    }) => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        scenarioName_str: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflows: any[];
        cashOutflows: any[];
        inflowLength: number;
        outflowLength: number;
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        liquidityThreshold_LCR: number;
        classifiedContracts: any[];
        totalHQLA_L1: any[];
        totalHQLA_L2A: any[];
        totalHQLA_L2B: any[];
        totalNonHQLA: any[];
    };
    empty: () => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        scenarioName_str: string;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflows: any[];
        cashOutflows: any[];
        inflowLength: number;
        outflowLength: number;
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        liquidityThreshold_LCR: number;
        classifiedContracts: any[];
        totalHQLA_L1: any[];
        totalHQLA_L2A: any[];
        totalHQLA_L2B: any[];
        totalNonHQLA: any[];
    };
};
export declare class ACTUSData extends ACTUSData_base {
    constructor(data: {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        scenarioName_str: string;
        riskEvaluated: Field;
        cashInflows: number[];
        cashOutflows: number[];
        inflowLength: number;
        outflowLength: number;
        newInvoiceAmount: number;
        newInvoiceEvaluationMonth: number;
        liquidityThreshold: number;
        liquidityThreshold_LCR: number;
        classifiedContracts: {
            id: string;
            type: string;
            hqlaCategory: string;
            inflowTotal: number;
            outflowTotal: number;
        }[];
        totalHQLA_L1: number[];
        totalHQLA_L2A: number[];
        totalHQLA_L2B: number[];
        totalNonHQLA: number[];
    });
    private padArray;
    private padObjectArray;
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
export declare const LiquidityRatioZkprogram: {
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
    verify: (proof: Proof<import("o1js/dist/node/lib/provable/field.js").Field, liquidityratioDataPublicOutput>) => Promise<boolean>;
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
    proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [ACTUSData, Signature] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, liquidityratioDataPublicOutput>>;
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
export declare class LiquidityRatioProof extends LiquidityRatioProof_base {
}
export {};
