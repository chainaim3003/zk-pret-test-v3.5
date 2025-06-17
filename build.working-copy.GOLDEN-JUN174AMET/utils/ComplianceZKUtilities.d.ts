/**
 * ====================================================================
 * Layer 1: Compliance-Specific ZK Utilities (Simplified)
 * ====================================================================
 * Domain-specific utilities for compliance and risk scenarios
 * - Simplified to avoid complex Field operations
 * ====================================================================
 */
import { Field, Bool } from 'o1js';
/**
 * Calculate percentage with ZK constraints (simplified)
 */
export declare function calculatePercentageZK(numerator: Field, denominator: Field): Field;
/**
 * Assert threshold compliance with various operators
 */
export declare function assertThresholdComplianceZK(value: Field, threshold: Field, operator: 'gte' | 'lte' | 'eq'): void;
/**
 * Calculate ratio between two values
 */
export declare function calculateRatioZK(asset: Field, liability: Field): Field;
/**
 * Validate value is within compliance range
 */
export declare function validateComplianceRangeZK(value: Field, minThreshold: Field, maxThreshold: Field): Bool;
/**
 * Calculate weighted sum for compliance metrics (simplified)
 */
export declare function calculateWeightedSumZK(values: Field[], weights: Field[]): Field;
/**
 * Calculate concentration risk metric (simplified)
 */
export declare function calculateConcentrationRiskZK(assetValues: Field[], totalAssets: Field): Field;
/**
 * Assert liquidity compliance across multiple periods
 */
export declare function assertLiquidityComplianceZK(liquidityRatios: Field[], threshold: Field): void;
/**
 * Calculate net cash flow for a period
 */
export declare function calculateNetCashFlowZK(inflows: Field[], outflows: Field[]): Field[];
/**
 * Validate cash flow patterns meet regulatory requirements
 */
export declare function validateCashFlowPatternsZK(netCashFlows: Field[], minimumBuffer: Field): Bool;
/**
 * Calculate stress test impact
 */
export declare function calculateStressImpactZK(baseValue: Field, stressPercentage: Field): Field;
/**
 * Validate asset quality scores
 */
export declare function validateAssetQualityZK(qualityScores: Field[], minimumQuality: Field): Bool;
