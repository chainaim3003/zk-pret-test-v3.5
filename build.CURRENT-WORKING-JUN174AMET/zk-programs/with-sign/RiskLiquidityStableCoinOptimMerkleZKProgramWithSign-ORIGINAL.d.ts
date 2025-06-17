/**
 * ====================================================================
 * Risk Liquidity StableCoin OptimMerkle ZK Program
 * ====================================================================
 * ZK Program for StableCoin Proof of Reserves Risk scenario
 * Uses Layer 0 and Layer 1 utilities for optimal code reuse
 * ====================================================================
 */
import { Field, Signature, CircuitString, UInt64 } from 'o1js';
import { MerkleWitness8 } from '../../utils/CoreZKUtilities.js';
export declare const MERKLE_TREE_HEIGHT = 8;
declare const RiskLiquidityStableCoinOptimMerkleComplianceData_base: (new (value: {
    scenarioID: CircuitString;
    scenarioName: CircuitString;
    riskEvaluated: import("o1js/dist/node/lib/provable/field.js").Field;
    cashReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    treasuryReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    corporateReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    otherReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    outstandingTokensTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    tokenValue: import("o1js/dist/node/lib/provable/field.js").Field;
    averageLiquidityScore: import("o1js/dist/node/lib/provable/field.js").Field;
    averageCreditRating: import("o1js/dist/node/lib/provable/field.js").Field;
    averageMaturity: import("o1js/dist/node/lib/provable/field.js").Field;
    backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
    assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
    backingRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    concentrationLimit: import("o1js/dist/node/lib/provable/field.js").Field;
    qualityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    backingCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    concentrationCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    qualityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
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
    cashReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    treasuryReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    corporateReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    otherReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    outstandingTokensTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    tokenValue: import("o1js/dist/node/lib/provable/field.js").Field;
    averageLiquidityScore: import("o1js/dist/node/lib/provable/field.js").Field;
    averageCreditRating: import("o1js/dist/node/lib/provable/field.js").Field;
    averageMaturity: import("o1js/dist/node/lib/provable/field.js").Field;
    backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
    assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
    backingRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    concentrationLimit: import("o1js/dist/node/lib/provable/field.js").Field;
    qualityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    backingCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    concentrationCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    qualityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
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
    cashReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    treasuryReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    corporateReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    otherReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    outstandingTokensTotal: import("o1js/dist/node/lib/provable/field.js").Field;
    tokenValue: import("o1js/dist/node/lib/provable/field.js").Field;
    averageLiquidityScore: import("o1js/dist/node/lib/provable/field.js").Field;
    averageCreditRating: import("o1js/dist/node/lib/provable/field.js").Field;
    averageMaturity: import("o1js/dist/node/lib/provable/field.js").Field;
    backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
    assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
    backingRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    concentrationLimit: import("o1js/dist/node/lib/provable/field.js").Field;
    qualityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
    backingCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    concentrationCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    qualityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
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
    cashReservesTotal: bigint;
    treasuryReservesTotal: bigint;
    corporateReservesTotal: bigint;
    otherReservesTotal: bigint;
    outstandingTokensTotal: bigint;
    tokenValue: bigint;
    averageLiquidityScore: bigint;
    averageCreditRating: bigint;
    averageMaturity: bigint;
    backingRatio: bigint;
    liquidityRatio: bigint;
    concentrationRisk: bigint;
    assetQualityScore: bigint;
    backingRatioThreshold: bigint;
    liquidityRatioThreshold: bigint;
    concentrationLimit: bigint;
    qualityThreshold: bigint;
    backingCompliant: boolean;
    liquidityCompliant: boolean;
    concentrationCompliant: boolean;
    qualityCompliant: boolean;
    stableCoinCompliant: boolean;
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
        cashReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        treasuryReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        corporateReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        otherReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        outstandingTokensTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        tokenValue: import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        averageCreditRating: import("o1js/dist/node/lib/provable/field.js").Field;
        averageMaturity: import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationLimit: import("o1js/dist/node/lib/provable/field.js").Field;
        qualityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        backingCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        concentrationCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        qualityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
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
        cashReservesTotal: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        treasuryReservesTotal: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        corporateReservesTotal: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        otherReservesTotal: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        outstandingTokensTotal: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        tokenValue: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        averageCreditRating: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        averageMaturity: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatio: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatioThreshold: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatioThreshold: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationLimit: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        qualityThreshold: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        backingCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        concentrationCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        qualityCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        stableCoinCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
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
        cashReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        treasuryReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        corporateReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        otherReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        outstandingTokensTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        tokenValue: import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        averageCreditRating: import("o1js/dist/node/lib/provable/field.js").Field;
        averageMaturity: import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationLimit: import("o1js/dist/node/lib/provable/field.js").Field;
        qualityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        backingCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        concentrationCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        qualityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
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
        cashReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        treasuryReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        corporateReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        otherReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        outstandingTokensTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        tokenValue: import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        averageCreditRating: import("o1js/dist/node/lib/provable/field.js").Field;
        averageMaturity: import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationLimit: import("o1js/dist/node/lib/provable/field.js").Field;
        qualityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        backingCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        concentrationCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        qualityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
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
        cashReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        treasuryReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        corporateReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        otherReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        outstandingTokensTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        tokenValue: import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        averageCreditRating: import("o1js/dist/node/lib/provable/field.js").Field;
        averageMaturity: import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationLimit: import("o1js/dist/node/lib/provable/field.js").Field;
        qualityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        backingCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        concentrationCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        qualityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
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
        cashReservesTotal: string;
        treasuryReservesTotal: string;
        corporateReservesTotal: string;
        otherReservesTotal: string;
        outstandingTokensTotal: string;
        tokenValue: string;
        averageLiquidityScore: string;
        averageCreditRating: string;
        averageMaturity: string;
        backingRatio: string;
        liquidityRatio: string;
        concentrationRisk: string;
        assetQualityScore: string;
        backingRatioThreshold: string;
        liquidityRatioThreshold: string;
        concentrationLimit: string;
        qualityThreshold: string;
        backingCompliant: boolean;
        liquidityCompliant: boolean;
        concentrationCompliant: boolean;
        qualityCompliant: boolean;
        stableCoinCompliant: boolean;
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
        cashReservesTotal: string;
        treasuryReservesTotal: string;
        corporateReservesTotal: string;
        otherReservesTotal: string;
        outstandingTokensTotal: string;
        tokenValue: string;
        averageLiquidityScore: string;
        averageCreditRating: string;
        averageMaturity: string;
        backingRatio: string;
        liquidityRatio: string;
        concentrationRisk: string;
        assetQualityScore: string;
        backingRatioThreshold: string;
        liquidityRatioThreshold: string;
        concentrationLimit: string;
        qualityThreshold: string;
        backingCompliant: boolean;
        liquidityCompliant: boolean;
        concentrationCompliant: boolean;
        qualityCompliant: boolean;
        stableCoinCompliant: boolean;
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
        cashReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        treasuryReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        corporateReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        otherReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        outstandingTokensTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        tokenValue: import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        averageCreditRating: import("o1js/dist/node/lib/provable/field.js").Field;
        averageMaturity: import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationLimit: import("o1js/dist/node/lib/provable/field.js").Field;
        qualityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        backingCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        concentrationCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        qualityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
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
        cashReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        treasuryReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        corporateReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        otherReservesTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        outstandingTokensTotal: import("o1js/dist/node/lib/provable/field.js").Field;
        tokenValue: import("o1js/dist/node/lib/provable/field.js").Field;
        averageLiquidityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        averageCreditRating: import("o1js/dist/node/lib/provable/field.js").Field;
        averageMaturity: import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        backingRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatioThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationLimit: import("o1js/dist/node/lib/provable/field.js").Field;
        qualityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        backingCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        liquidityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        concentrationCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        qualityCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        periodsCount: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityThreshold: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceAmount: import("o1js/dist/node/lib/provable/field.js").Field;
        newInvoiceEvaluationMonth: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
    };
};
export declare class RiskLiquidityStableCoinOptimMerkleComplianceData extends RiskLiquidityStableCoinOptimMerkleComplianceData_base {
}
declare const RiskLiquidityStableCoinOptimMerklePublicOutput_base: (new (value: {
    scenarioID: CircuitString;
    stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
    assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    scenarioID: CircuitString;
    stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
    assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    scenarioID: CircuitString;
    stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
    concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
    assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    scenarioID: string;
    stableCoinCompliant: boolean;
    backingRatio: bigint;
    liquidityRatio: bigint;
    concentrationRisk: bigint;
    assetQualityScore: bigint;
    verificationTimestamp: bigint;
    merkleRoot: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        scenarioID: CircuitString;
        stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        scenarioID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        stableCoinCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        backingRatio: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: bigint | UInt64;
        merkleRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        scenarioID: CircuitString;
        stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        scenarioID: CircuitString;
        stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        scenarioID: CircuitString;
        stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        scenarioID: {
            values: {
                value: string;
            }[];
        };
        stableCoinCompliant: boolean;
        backingRatio: string;
        liquidityRatio: string;
        concentrationRisk: string;
        assetQualityScore: string;
        verificationTimestamp: string;
        merkleRoot: string;
    };
    fromJSON: (x: {
        scenarioID: {
            values: {
                value: string;
            }[];
        };
        stableCoinCompliant: boolean;
        backingRatio: string;
        liquidityRatio: string;
        concentrationRisk: string;
        assetQualityScore: string;
        verificationTimestamp: string;
        merkleRoot: string;
    }) => {
        scenarioID: CircuitString;
        stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        scenarioID: CircuitString;
        stableCoinCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        backingRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        liquidityRatio: import("o1js/dist/node/lib/provable/field.js").Field;
        concentrationRisk: import("o1js/dist/node/lib/provable/field.js").Field;
        assetQualityScore: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class RiskLiquidityStableCoinOptimMerklePublicOutput extends RiskLiquidityStableCoinOptimMerklePublicOutput_base {
}
export declare const RiskLiquidityStableCoinOptimMerkleZKProgramWithSign: {
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
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, RiskLiquidityStableCoinOptimMerklePublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveStableCoinRiskCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof UInt64;
    publicOutputType: typeof RiskLiquidityStableCoinOptimMerklePublicOutput;
    privateInputTypes: {
        proveStableCoinRiskCompliance: [typeof RiskLiquidityStableCoinOptimMerkleComplianceData, typeof Signature, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8, typeof MerkleWitness8];
    };
    rawMethods: {
        proveStableCoinRiskCompliance: (publicInput: UInt64, ...args: [RiskLiquidityStableCoinOptimMerkleComplianceData, Signature, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8] & any[]) => Promise<RiskLiquidityStableCoinOptimMerklePublicOutput>;
    };
} & {
    proveStableCoinRiskCompliance: (publicInput: UInt64, ...args: [RiskLiquidityStableCoinOptimMerkleComplianceData, Signature, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8, MerkleWitness8] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, RiskLiquidityStableCoinOptimMerklePublicOutput>>;
};
declare const RiskLiquidityStableCoinOptimMerkleProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: UInt64;
        publicOutput: RiskLiquidityStableCoinOptimMerklePublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: UInt64;
        publicOutput: RiskLiquidityStableCoinOptimMerklePublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof UInt64;
    publicOutputType: typeof RiskLiquidityStableCoinOptimMerklePublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof UInt64;
        publicOutputType: typeof RiskLiquidityStableCoinOptimMerklePublicOutput;
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
export declare class RiskLiquidityStableCoinOptimMerkleProof extends RiskLiquidityStableCoinOptimMerkleProof_base {
}
/**
 * Helper function to create StableCoin compliance data structure
 */
export declare function createStableCoinRiskComplianceData(scenarioID: string, scenarioName: string, reserveComponents: {
    cashReservesTotal: number;
    treasuryReservesTotal: number;
    corporateReservesTotal: number;
    otherReservesTotal: number;
}, tokenInfo: {
    outstandingTokensTotal: number;
    tokenValue: number;
}, qualityMetrics: {
    averageLiquidityScore: number;
    averageCreditRating: number;
    averageMaturity: number;
    assetQualityScore: number;
}, thresholds: {
    backingRatioThreshold: number;
    liquidityRatioThreshold: number;
    concentrationLimit: number;
    qualityThreshold: number;
}, additionalParams: {
    periodsCount: number;
    liquidityThreshold: number;
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
}, merkleRoot: Field, calculatedMetrics: {
    backingRatio: number;
    liquidityRatio: number;
    concentrationRisk: number;
    backingCompliant: boolean;
    liquidityCompliant: boolean;
    concentrationCompliant: boolean;
    qualityCompliant: boolean;
    stableCoinCompliant: boolean;
}): RiskLiquidityStableCoinOptimMerkleComplianceData;
/**
 * Calculate StableCoin compliance metrics from component data
 */
export declare function calculateStableCoinMetrics(reserveComponents: {
    cashReservesTotal: number;
    treasuryReservesTotal: number;
    corporateReservesTotal: number;
    otherReservesTotal: number;
}, tokenInfo: {
    outstandingTokensTotal: number;
    tokenValue: number;
}, thresholds: {
    backingRatioThreshold: number;
    liquidityRatioThreshold: number;
    concentrationLimit: number;
    qualityThreshold: number;
}, qualityMetrics: {
    assetQualityScore: number;
}): {
    backingRatio: number;
    liquidityRatio: number;
    concentrationRisk: number;
    backingCompliant: boolean;
    liquidityCompliant: boolean;
    concentrationCompliant: boolean;
    qualityCompliant: boolean;
    stableCoinCompliant: boolean;
};
/**
 * Validate StableCoin compliance data before ZK proof generation
 * Note: This validation runs OUTSIDE the ZK circuit, so we can use .toBigInt()
 */
export declare function validateStableCoinRiskComplianceData(complianceData: RiskLiquidityStableCoinOptimMerkleComplianceData): boolean;
export {};
