/**
 * ====================================================================
 * Risk Liquidity Basel3 OptimMerkle ZK Program
 * ====================================================================
 * ZK Program for Basel3 LCR/NSFR Risk scenario
 * Uses Layer 0 and Layer 1 utilities for optimal code reuse
 * ====================================================================
 */
import { Field, Signature, CircuitString, UInt64 } from 'o1js';
export declare const MERKLE_TREE_HEIGHT = 8;
declare const MerkleWitness8_base: typeof import("o1js/dist/node/lib/provable/merkle-tree.js").BaseMerkleWitness;
export declare class MerkleWitness8 extends MerkleWitness8_base {
}
declare const RiskLiquidityBasel3OptimMerkleComplianceData_base: (new (value: {
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    hqlaLevel1Total: import("o1js/dist/node/lib/provable/field.js").Field;
    hqlaLevel2ATotal: import("o1js/dist/node/lib/provable/field.js").Field;
    hqlaLevel2BTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    netCashOutflowsTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    availableStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    requiredStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    lcrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    nsfrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
    newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
}) => {
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    hqlaLevel1Total: import("o1js/dist/node/lib/provable/field.js").Field;
    hqlaLevel2ATotal: import("o1js/dist/node/lib/provable/field.js").Field;
    hqlaLevel2BTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    netCashOutflowsTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    availableStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    requiredStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    lcrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    nsfrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
    newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    hqlaLevel1Total: import("o1js/dist/node/lib/provable/field.js").Field;
    hqlaLevel2ATotal: import("o1js/dist/node/lib/provable/field.js").Field;
    hqlaLevel2BTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    netCashOutflowsTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    availableStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    requiredStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    lcrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    nsfrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
    newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
}, {
    scenarioID: string;
    scenarioName: string;
    riskEvaluated: bigint;
    hqlaLevel1Total: bigint;
    hqlaLevel2ATotal: bigint;
    hqlaLevel2BTotal: bigint;
    netCashOutflowsTotal: bigint;
    availableStableFundingTotal: bigint;
    requiredStableFundingTotal: bigint;
    lcrRatio: bigint;
    nsfrRatio: bigint;
    lcrThreshold: bigint;
    nsfrThreshold: bigint;
    lcrCompliant: boolean;
    nsfrCompliant: boolean;
    basel3Compliant: boolean;
    periodsCount: bigint;
    liquidityThreshold: bigint;
    newInvoiceAmount: bigint;
    newInvoiceEvaluationMonth: bigint;
    merkleRoot: bigint;
    verificationTimestamp: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel1Total: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2ATotal: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2BTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        netCashOutflowsTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        availableStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        requiredStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        nsfrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
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
        hqlaLevel1Total: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2ATotal: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2BTotal: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        netCashOutflowsTotal: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        availableStableFundingTotal: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        requiredStableFundingTotal: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        lcrRatio: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        lcrCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        nsfrCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        basel3Compliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        periodsCount: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: bigint | UInt64;
    }) => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel1Total: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2ATotal: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2BTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        netCashOutflowsTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        availableStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        requiredStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        nsfrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
    };
    toInput: (x: {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel1Total: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2ATotal: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2BTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        netCashOutflowsTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        availableStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        requiredStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        nsfrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
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
        hqlaLevel1Total: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2ATotal: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2BTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        netCashOutflowsTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        availableStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        requiredStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        nsfrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
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
        hqlaLevel1Total: string;
        hqlaLevel2ATotal: string;
        hqlaLevel2BTotal: string;
        netCashOutflowsTotal: string;
        availableStableFundingTotal: string;
        requiredStableFundingTotal: string;
        lcrRatio: string;
        nsfrRatio: string;
        lcrThreshold: string;
        nsfrThreshold: string;
        lcrCompliant: boolean;
        nsfrCompliant: boolean;
        basel3Compliant: boolean;
        periodsCount: string;
        liquidityThreshold: string;
        newInvoiceAmount: string;
        newInvoiceEvaluationMonth: string;
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
        hqlaLevel1Total: string;
        hqlaLevel2ATotal: string;
        hqlaLevel2BTotal: string;
        netCashOutflowsTotal: string;
        availableStableFundingTotal: string;
        requiredStableFundingTotal: string;
        lcrRatio: string;
        nsfrRatio: string;
        lcrThreshold: string;
        nsfrThreshold: string;
        lcrCompliant: boolean;
        nsfrCompliant: boolean;
        basel3Compliant: boolean;
        periodsCount: string;
        liquidityThreshold: string;
        newInvoiceAmount: string;
        newInvoiceEvaluationMonth: string;
        merkleRoot: string;
        verificationTimestamp: string;
    }) => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel1Total: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2ATotal: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2BTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        netCashOutflowsTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        availableStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        requiredStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        nsfrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
    };
    empty: () => {
        scenarioID: CircuitString;
        scenarioName: CircuitString;
        riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel1Total: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2ATotal: import("o1js/dist/node/lib/provable/field.js").Field;
        hqlaLevel2BTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        netCashOutflowsTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        availableStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        requiredStableFundingTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        nsfrCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
    };
};
export declare class RiskLiquidityBasel3OptimMerkleComplianceData extends RiskLiquidityBasel3OptimMerkleComplianceData_base {
}
declare const RiskLiquidityBasel3OptimMerklePublicOutput_base: (new (value: {
    scenarioID: CircuitString;
    basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    scenarioID: CircuitString;
    basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    scenarioID: CircuitString;
    basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    scenarioID: string;
    basel3Compliant: boolean;
    lcrRatio: bigint;
    nsfrRatio: bigint;
    lcrThreshold: bigint;
    nsfrThreshold: bigint;
    verificationTimestamp: bigint;
    merkleRoot: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        scenarioID: CircuitString;
        basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        scenarioID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        basel3Compliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        lcrRatio: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: bigint | UInt64;
        merkleRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        scenarioID: CircuitString;
        basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        scenarioID: CircuitString;
        basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        scenarioID: CircuitString;
        basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        scenarioID: {
            values: {
                value: string;
            }[];
        };
        basel3Compliant: boolean;
        lcrRatio: string;
        nsfrRatio: string;
        lcrThreshold: string;
        nsfrThreshold: string;
        verificationTimestamp: string;
        merkleRoot: string;
    };
    fromJSON: (x: {
        scenarioID: {
            values: {
                value: string;
            }[];
        };
        basel3Compliant: boolean;
        lcrRatio: string;
        nsfrRatio: string;
        lcrThreshold: string;
        nsfrThreshold: string;
        verificationTimestamp: string;
        merkleRoot: string;
    }) => {
        scenarioID: CircuitString;
        basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        scenarioID: CircuitString;
        basel3Compliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        lcrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        lcrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        nsfrThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class RiskLiquidityBasel3OptimMerklePublicOutput extends RiskLiquidityBasel3OptimMerklePublicOutput_base {
}
export declare const RiskLiquidityBasel3OptimMerkleZKProgramWithSign: {
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
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, RiskLiquidityBasel3OptimMerklePublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveBasel3RiskCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof UInt64;
    publicOutputType: typeof RiskLiquidityBasel3OptimMerklePublicOutput;
    privateInputTypes: {
        proveBasel3RiskCompliance: [typeof RiskLiquidityBasel3OptimMerkleComplianceData, typeof Signature, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8];
    };
    rawMethods: {
        proveBasel3RiskCompliance: (publicInput: UInt64, ...args: [RiskLiquidityBasel3OptimMerkleComplianceData, Signature, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8] & any[]) => Promise<RiskLiquidityBasel3OptimMerklePublicOutput>;
    };
} & {
    proveBasel3RiskCompliance: (publicInput: UInt64, ...args: [RiskLiquidityBasel3OptimMerkleComplianceData, Signature, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, RiskLiquidityBasel3OptimMerklePublicOutput>>;
};
declare const RiskLiquidityBasel3OptimMerkleProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: UInt64;
        publicOutput: RiskLiquidityBasel3OptimMerklePublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: UInt64;
        publicOutput: RiskLiquidityBasel3OptimMerklePublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof UInt64;
    publicOutputType: typeof RiskLiquidityBasel3OptimMerklePublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof UInt64;
        publicOutputType: typeof RiskLiquidityBasel3OptimMerklePublicOutput;
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
export declare class RiskLiquidityBasel3OptimMerkleProof extends RiskLiquidityBasel3OptimMerkleProof_base {
}
/**
 * Helper function to create Basel3 compliance data structure
 * ✅ MINA BEST PRACTICES: Clean, simple approach using Field arithmetic
 */
export declare function createBasel3RiskComplianceData(scenarioID: string, scenarioName: string, hqlaComponents: {
    level1Total: number;
    level2ATotal: number;
    level2BTotal: number;
    netCashOutflowsTotal: number;
}, nsfrComponents: {
    availableStableFundingTotal: number;
    requiredStableFundingTotal: number;
}, thresholds: {
    lcrThreshold: number;
    nsfrThreshold: number;
}, additionalParams: {
    periodsCount: number;
    liquidityThreshold: number;
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
}, merkleRoot: Field, calculatedMetrics: {
    lcrRatio: number;
    nsfrRatio: number;
    lcrCompliant: boolean;
    nsfrCompliant: boolean;
    basel3Compliant: boolean;
}): RiskLiquidityBasel3OptimMerkleComplianceData;
/**
 * Calculate Basel3 ratios from component data
 */
export declare function calculateBasel3Ratios(hqlaComponents: {
    level1Total: number;
    level2ATotal: number;
    level2BTotal: number;
    netCashOutflowsTotal: number;
}, nsfrComponents: {
    availableStableFundingTotal: number;
    requiredStableFundingTotal: number;
}, thresholds: {
    lcrThreshold: number;
    nsfrThreshold: number;
}): {
    lcrRatio: number;
    nsfrRatio: number;
    lcrCompliant: boolean;
    nsfrCompliant: boolean;
    basel3Compliant: boolean;
};
/**
 * Validate Basel3 compliance data before ZK proof generation
 */
export declare function validateBasel3RiskComplianceData(complianceData: RiskLiquidityBasel3OptimMerkleComplianceData): boolean;
export {};
