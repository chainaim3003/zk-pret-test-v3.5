/**
 * ====================================================================
 * Layer 0: Universal ZK Primitives
 * ====================================================================
 * Core ZK utilities used by ALL ZK programs across the entire system
 * - GLEIF, EXIM, Corporate Registration, Risk scenarios, etc.
 * - Contains fundamental operations: signatures, Merkle proofs, hashing
 * ====================================================================
 */
import { Field, Signature, MerkleTree, UInt64, PublicKey } from 'o1js';
declare const MerkleWitness8_base: typeof import("o1js/dist/node/lib/provable/merkle-tree").BaseMerkleWitness;
export declare class MerkleWitness8 extends MerkleWitness8_base {
}
declare const MerkleWitness9_base: typeof import("o1js/dist/node/lib/provable/merkle-tree").BaseMerkleWitness;
export declare class MerkleWitness9 extends MerkleWitness9_base {
}
declare const MerkleWitness10_base: typeof import("o1js/dist/node/lib/provable/merkle-tree").BaseMerkleWitness;
export declare class MerkleWitness10 extends MerkleWitness10_base {
}
export type AnyMerkleWitness = MerkleWitness8 | MerkleWitness9 | MerkleWitness10;
/**
 * Universal oracle signature verification
 * Used by ALL ZK programs that require oracle data verification
 */
export declare function verifyOracleSignatureZK(signature: Signature, data: Field[], oraclePublicKey: PublicKey): void;
/**
 * Universal Merkle witness verification
 * Core operation used across all Merkle-based proofs
 */
export declare function verifyMerkleWitnessZK(witness: AnyMerkleWitness, expectedRoot: Field, leafValue: Field): void;
/**
 * Universal data hashing
 * Standard hashing function for ZK data integrity
 */
export declare function hashDataZK(data: Field[]): Field;
/**
 * Universal timestamp validation
 * Validates timestamps within acceptable tolerance
 */
export declare function validateTimestampZK(timestamp: UInt64, tolerance: UInt64): void;
/**
 * Build Merkle tree from array of Field elements
 * Used across all scenarios that need Merkle tree construction
 */
export declare function buildMerkleTreeZK(leaves: Field[]): MerkleTree;
/**
 * Verify multiple Merkle witnesses at once
 * Optimized function for scenarios with multiple data points
 */
export declare function verifyMultipleMerkleWitnessesZK(witnesses: AnyMerkleWitness[], expectedRoot: Field, leafValues: Field[]): void;
/**
 * Safe Field creation that handles decimal values
 * Automatically rounds decimals to integers before Field creation
 */
export declare function safeFieldFrom(value: number): Field;
/**
 * Safe array sum that returns a Field
 * Handles decimal totals automatically
 */
export declare function safeArraySumToField(array: number[]): Field;
/**
 * Convert string array to Field array
 * Common utility for data preparation
 */
export declare function stringArrayToFieldsZK(strings: string[]): Field[];
/**
 * Convert number array to Field array
 * Common utility for numerical data
 */
export declare function numberArrayToFieldsZK(numbers: number[]): Field[];
export {};
