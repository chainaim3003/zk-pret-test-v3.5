/**
 * ====================================================================
 * Generic Temporal Risk Processing Framework
 * ====================================================================
 * Base classes for period-agnostic risk processing
 * Supports daily, monthly, quarterly, yearly periods
 * Maintains functional equivalence with existing implementations
 * ====================================================================
 */
import { Field, Signature } from 'o1js';
export interface ACTUSEvent {
    type: string;
    time: string;
    payoff: number;
    currency: string;
    nominalValue?: number;
    nominalRate?: number;
    nominalAccrued?: number;
    contractId?: string;
    contractIndex?: number;
    hqlaCategory?: string;
}
export interface TemporalACTUSData {
    periodsCount: number;
    periodType: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
    periodSize: number;
    rawEvents: any[];
    dateRange: {
        start: Date;
        end: Date;
    };
    cashFlows: {
        inflows: number[][];
        outflows: number[][];
        netFlows: number[];
    };
    eventDetails: {
        contractEvents: ACTUSEvent[];
        contractClassifications: any[];
        eventToMonthMapping: number[];
        eventToContractMapping: number[];
        startDate: Date;
    };
    processingTimestamp: number;
    contractDetails: any[];
    currency: string;
}
export interface GenericRiskClassification<T> {
    periodsCount: number;
    periodType: string;
    classifiedData: T[];
    aggregatedMetrics: Record<string, number[]>;
    riskMetrics: {
        periodMetrics: number[];
        cumulativeMetrics: number[];
        averageMetrics: number;
        worstCase: number;
    };
}
export interface Basel3HQLA {
    L1: number;
    L2A: number;
    L2B: number;
    NonHQLA: number;
}
export interface SolvencyIICategories {
    equity: number;
    bonds: number;
    alternatives: number;
}
export interface IFRSStages {
    stage1: number;
    stage2: number;
    stage3: number;
}
export interface GenericTemporalMerkleTree {
    leaves: {
        rawDataHash: Field;
        temporalStructureHash: Field;
        cashFlowsHash: Field;
        classificationsHash: Field;
        parametersHash: Field;
    };
    merkleRoot: Field;
    witnesses: Field[];
    metadata: {
        periodsCount: number;
        periodType: string;
        dataIntegrityTimestamp: number;
    };
}
/**
 * Abstract base class for generic risk processors
 * Maintains functional equivalence with existing implementations
 */
export declare abstract class GenericRiskProcessor<T> {
    abstract periodType: string;
    /**
     * Process temporal ACTUS data into risk classifications
     * Must maintain functional equivalence with existing logic
     */
    abstract processRiskData(temporalData: TemporalACTUSData): GenericRiskClassification<T>;
    /**
     * Create aggregated metric arrays for backward compatibility
     */
    protected createAggregatedArrays(classifiedData: T[]): Record<string, number[]>;
    /**
     * Calculate temporal metrics from classified data
     */
    protected calculateTemporalMetrics(classifiedData: T[]): {
        periodMetrics: number[];
        cumulativeMetrics: number[];
        averageMetrics: number;
        worstCase: number;
    };
}
/**
 * Abstract base class for generic temporal ZK programs
 * Preserves existing ZK program patterns while enabling generics
 */
export declare abstract class GenericTemporalRiskZKProgram<T> {
    abstract periodType: string;
    /**
     * Core risk calculation logic - must be implemented by subclasses
     * Should maintain functional equivalence with existing ZK programs
     */
    abstract riskCalculation(data: GenericRiskClassification<T>, thresholds: Record<string, number>): boolean;
    /**
     * Verify oracle signature on raw data + merkle root
     * Standard pattern across all implementations
     */
    protected verifyOracleSignature(signature: Signature, rawData: any[], merkleRoot: Field, publicKey: any): void;
    /**
     * Verify merkle inclusion proofs
     * Standard pattern across all implementations
     */
    protected verifyMerkleInclusion(witnesses: Field[], // Changed from MerkleWitness[] to Field[]
    merkleRoot: Field, leafHashes: Field[]): void;
    /**
     * Verify temporal data processing integrity
     * Ensures processed data matches raw input
     */
    protected verifyTemporalProcessing(temporalData: TemporalACTUSData, riskClassification: GenericRiskClassification<T>): void;
    /**
     * Validate thresholds against risk metrics
     * Common pattern across all risk frameworks
     */
    protected validateThresholds(riskMetrics: GenericRiskClassification<T>['riskMetrics'], thresholds: Record<string, number>): void;
    /**
     * Hash raw ACTUS data for signature verification
     */
    private hashRawData;
    /**
     * Simple hash function for data integrity
     */
    private simpleHash;
}
export interface GenericRiskProof {
    periodType: string;
    periodsCount: number;
    compliant: boolean;
    riskMetrics: any;
    verificationTimestamp: number;
    merkleRoot?: Field;
}
/**
 * Convert existing ACTUS data to generic temporal format
 * Maintains full backward compatibility while preserving event-level detail
 */
export declare function convertToGenericFormat(periodsCount: number, periodType: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly', inflows: number[][], outflows: number[][], rawEvents: any[], contractDetails: any[]): TemporalACTUSData;
/**
 * Extract date range from raw ACTUS events
 * Maintains compatibility with existing date processing
 */
export declare function extractDateRangeFromEvents(rawEvents: any[]): {
    start: Date;
    end: Date;
};
/**
 * Determine period type from date range
 * Helper for automatic period detection
 */
export declare function determinePeriodType(dateRange: {
    start: Date;
    end: Date;
}): {
    periodType: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
    expectedPeriods: number;
};
