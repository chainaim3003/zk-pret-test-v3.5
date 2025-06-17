/**
 * ====================================================================
 * Risk Liquidity Advanced OptimMerkle ZK Program
 * ====================================================================
 * ZK Program for Advanced Risk Liquidity scenario
 * Uses Layer 0 and Layer 1 utilities for optimal code reuse
 * ====================================================================
 */
import { Field, Signature, CircuitString, UInt64 } from 'o1js';
export declare const MERKLE_TREE_HEIGHT = 8;
declare const MerkleWitness8_base: typeof import("o1js/dist/node/lib/provable/merkle-tree.js").BaseMerkleWitness;
export declare class MerkleWitness8 extends MerkleWitness8_base {
}
declare const RiskLiquidityAdvancedOptimMerkleComplianceData_base: (new (value: {
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    cashInflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
    cashOutflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
    periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
    newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
    newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
}) => {
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    cashInflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
    cashOutflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
    periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
    newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
    newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    cashInflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
    cashOutflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
    periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
    newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
    newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
}, {
    scenarioID: string;
    scenarioName: string;
    riskEvaluated: bigint;
    cashInflowsHash: bigint;
    cashOutflowsHash: bigint;
    periodsCount: bigint;
    newInvoiceAmount: bigint;
    newInvoiceEvaluationMonth: bigint;
    liquidityThreshold: bigint;
    liquidityCompliant: boolean;
    averageLiquidityRatio: bigint;
    worstCaseLiquidityRatio: bigint;
    merkleRoot: bigint;
    verificationTimestamp: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
        cashOutflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
    };
} & {
    fromValue: (value: {
        scenarioID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        scenarioName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        riskEvaluated: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflowsHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        cashOutflowsHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        periodsCount: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        averageLiquidityRatio: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: bigint | UInt64;
    }) => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
        cashOutflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
    };
    toInput: (x: {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
        cashOutflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
        cashOutflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
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
        riskEvaluated: string;
        cashInflowsHash: string;
        cashOutflowsHash: string;
        periodsCount: string;
        newInvoiceAmount: string;
        newInvoiceEvaluationMonth: string;
        liquidityThreshold: string;
        liquidityCompliant: boolean;
        averageLiquidityRatio: string;
        worstCaseLiquidityRatio: string;
        merkleRoot: string;
        verificationTimestamp: string;
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
        riskEvaluated: string;
        cashInflowsHash: string;
        cashOutflowsHash: string;
        periodsCount: string;
        newInvoiceAmount: string;
        newInvoiceEvaluationMonth: string;
        liquidityThreshold: string;
        liquidityCompliant: boolean;
        averageLiquidityRatio: string;
        worstCaseLiquidityRatio: string;
        merkleRoot: string;
        verificationTimestamp: string;
    }) => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
        cashOutflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
    };
    empty: () => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        cashInflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
        cashOutflowsHash: import("o1js/dist/node/lib/provable/field.js").Field;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
    };
};
export declare class RiskLiquidityAdvancedOptimMerkleComplianceData extends RiskLiquidityAdvancedOptimMerkleComplianceData_base {
}
declare const RiskLiquidityAdvancedOptimMerklePublicOutput_base: (new (value: {
    scenarioID: CircuitString;
    riskCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    scenarioID: CircuitString;
    riskCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    scenarioID: CircuitString;
    riskCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    scenarioID: string;
    riskCompliant: boolean;
    liquidityThreshold: bigint;
    averageLiquidityRatio: bigint;
    worstCaseLiquidityRatio: bigint;
    verificationTimestamp: bigint;
    merkleRoot: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        scenarioID: CircuitString;
        riskCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        scenarioID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        riskCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityThreshold: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityRatio: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: bigint | UInt64;
        merkleRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        scenarioID: CircuitString;
        riskCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        scenarioID: CircuitString;
        riskCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        scenarioID: CircuitString;
        riskCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        scenarioID: {
            values: {
                value: string;
            }[];
        };
        riskCompliant: boolean;
        liquidityThreshold: string;
        averageLiquidityRatio: string;
        worstCaseLiquidityRatio: string;
        verificationTimestamp: string;
        merkleRoot: string;
    };
    fromJSON: (x: {
        scenarioID: {
            values: {
                value: string;
            }[];
        };
        riskCompliant: boolean;
        liquidityThreshold: string;
        averageLiquidityRatio: string;
        worstCaseLiquidityRatio: string;
        verificationTimestamp: string;
        merkleRoot: string;
    }) => {
        scenarioID: CircuitString;
        riskCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        scenarioID: CircuitString;
        riskCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        worstCaseLiquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class RiskLiquidityAdvancedOptimMerklePublicOutput extends RiskLiquidityAdvancedOptimMerklePublicOutput_base {
}
export declare const RiskLiquidityAdvancedOptimMerkleZKProgramWithSign: {
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
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, RiskLiquidityAdvancedOptimMerklePublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveAdvancedRiskCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof UInt64;
    publicOutputType: typeof RiskLiquidityAdvancedOptimMerklePublicOutput;
    privateInputTypes: {
        proveAdvancedRiskCompliance: [typeof RiskLiquidityAdvancedOptimMerkleComplianceData, typeof Signature, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8];
    };
    rawMethods: {
        proveAdvancedRiskCompliance: (publicInput: UInt64, ...args: [RiskLiquidityAdvancedOptimMerkleComplianceData, Signature, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8] & any[]) => Promise<RiskLiquidityAdvancedOptimMerklePublicOutput>;
    };
} & {
    proveAdvancedRiskCompliance: (publicInput: UInt64, ...args: [RiskLiquidityAdvancedOptimMerkleComplianceData, Signature, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, RiskLiquidityAdvancedOptimMerklePublicOutput>>;
};
declare const RiskLiquidityAdvancedOptimMerkleProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: UInt64;
        publicOutput: RiskLiquidityAdvancedOptimMerklePublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: UInt64;
        publicOutput: RiskLiquidityAdvancedOptimMerklePublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof UInt64;
    publicOutputType: typeof RiskLiquidityAdvancedOptimMerklePublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof UInt64;
        publicOutputType: typeof RiskLiquidityAdvancedOptimMerklePublicOutput;
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
export declare class RiskLiquidityAdvancedOptimMerkleProof extends RiskLiquidityAdvancedOptimMerkleProof_base {
}
/**
 * ✅ ZK-COMPLIANT: Convert arrays to Field representation using Poseidon hash (no division)
 */
export declare function encodeArrayToField(numbers: number[]): Field;
/**
 * ✅ ZK-COMPLIANT: Helper function to create compliance data structure
 */
export declare function createAdvancedRiskComplianceData(scenarioID: string, scenarioName: string, cashInflows: number[], cashOutflows: number[], newInvoiceAmount: number, newInvoiceEvaluationMonth: number, liquidityThreshold: number, merkleRoot: Field, liquidityMetrics: {
    averageLiquidityRatio: number;
    worstCaseLiquidityRatio: number;
    liquidityCompliant: boolean;
}): RiskLiquidityAdvancedOptimMerkleComplianceData;
/**
 * ✅ ZK-COMPLIANT: Validate compliance data before ZK proof generation
 */
export declare function validateAdvancedRiskComplianceData(complianceData: RiskLiquidityAdvancedOptimMerkleComplianceData): boolean;
export {};
