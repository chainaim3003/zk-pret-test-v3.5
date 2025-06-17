import { SmartContract, State, Field, CircuitString, UInt64 } from 'o1js';
import { ComposedOptimProof } from './ComposedRecursiveOptim3LevelZKProgramWithSign.js';
declare const ComposedProofMerkleWitness_base: typeof import("o1js/dist/node/lib/provable/merkle-tree.js").BaseMerkleWitness;
/**
 * Merkle witness for proof storage tree (16 levels = 65k proofs max)
 */
export declare class ComposedProofMerkleWitness extends ComposedProofMerkleWitness_base {
}
declare const ContractStateInfo_base: (new (value: {
    totalProofsStored: import("o1js/dist/node/lib/provable/field.js").Field;
    proofsRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
    lastUpdateTimestamp: UInt64;
}) => {
    totalProofsStored: import("o1js/dist/node/lib/provable/field.js").Field;
    proofsRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
    lastUpdateTimestamp: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    totalProofsStored: import("o1js/dist/node/lib/provable/field.js").Field;
    proofsRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
    lastUpdateTimestamp: UInt64;
}, {
    totalProofsStored: bigint;
    proofsRootHash: bigint;
    lastUpdateTimestamp: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        totalProofsStored: import("o1js/dist/node/lib/provable/field.js").Field;
        proofsRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        lastUpdateTimestamp: UInt64;
    };
} & {
    fromValue: (value: {
        totalProofsStored: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        proofsRootHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        lastUpdateTimestamp: bigint | UInt64;
    }) => {
        totalProofsStored: import("o1js/dist/node/lib/provable/field.js").Field;
        proofsRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        lastUpdateTimestamp: UInt64;
    };
    toInput: (x: {
        totalProofsStored: import("o1js/dist/node/lib/provable/field.js").Field;
        proofsRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        lastUpdateTimestamp: UInt64;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        totalProofsStored: import("o1js/dist/node/lib/provable/field.js").Field;
        proofsRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        lastUpdateTimestamp: UInt64;
    }) => {
        totalProofsStored: string;
        proofsRootHash: string;
        lastUpdateTimestamp: string;
    };
    fromJSON: (x: {
        totalProofsStored: string;
        proofsRootHash: string;
        lastUpdateTimestamp: string;
    }) => {
        totalProofsStored: import("o1js/dist/node/lib/provable/field.js").Field;
        proofsRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        lastUpdateTimestamp: UInt64;
    };
    empty: () => {
        totalProofsStored: import("o1js/dist/node/lib/provable/field.js").Field;
        proofsRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        lastUpdateTimestamp: UInt64;
    };
};
/**
 * Simple structure for returning contract state information
 * Kept minimal to respect o1js constraints
 */
export declare class ContractStateInfo extends ContractStateInfo_base {
}
/**
 * Smart Contract for Composed Recursive Optim 3-Level Verification
 *
 * Design Principles:
 * - Minimal state variables (only 3) to respect o1js limits
 * - Simple methods that do one thing each
 * - Event emission for off-chain indexing of complex data
 * - Focus on verification rather than complex analytics
 */
export declare class ComposedOptimComplianceVerifierSC extends SmartContract {
    /**
     * Merkle root of all stored composed proofs
     * Each leaf is hash(companyId + sequenceNumber + proofHash + timestamp)
     */
    proofsRoot: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    /**
     * Total number of composed proofs stored
     * Used for indexing new proofs and statistics
     */
    totalProofsStored: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    /**
     * Timestamp of last proof addition
     * Used for tracking contract activity
     */
    lastUpdateTimestamp: State<UInt64>;
    init(): void;
    /**
     * Verify and store a composed proof with lineage tracking
     * This is the main method for adding new composed proofs
     */
    verifyAndStoreComposedProof(composedProof: ComposedOptimProof, companyIdentifier: CircuitString, proofWitness: ComposedProofMerkleWitness): Promise<void>;
    /**
     * Verify that a specific proof exists in storage
     * Used for proof existence validation
     */
    verifyProofExists(companyIdentifier: CircuitString, sequenceNumber: Field, proofHash: Field, timestamp: UInt64, proofWitness: ComposedProofMerkleWitness): Promise<void>;
    /**
     * Simple verification of a composed proof without storage
     * Used for standalone proof validation
     */
    verifyComposedProofOnly(composedProof: ComposedOptimProof, expectedCompanyIdentifier: CircuitString): Promise<void>;
    /**
     * Get basic contract state information
     * Returns simple struct to respect o1js constraints
     */
    getContractState(): Promise<void>;
    /**
     * Check if contract has any proofs stored
     */
    hasProofs(): Promise<void>;
    /**
     * Get total number of proofs stored
     */
    getTotalProofs(): Promise<void>;
    /**
     * Check if a company has proofs by verifying against the latest known proof
     * This is a simplified check - full history requires off-chain indexing
     */
    companyHasProofs(companyIdentifier: CircuitString, latestSequenceNumber: Field, latestProofHash: Field, latestTimestamp: UInt64, proofWitness: ComposedProofMerkleWitness): Promise<void>;
}
/**
 * Off-chain utility class for working with the smart contract
 * Handles complex analytics and queries using contract events
 */
export declare class ComposedOptimContractUtils {
    private contract;
    constructor(contract: ComposedOptimComplianceVerifierSC);
    /**
     * Get comprehensive company compliance history using events
     * This is done off-chain to avoid o1js constraints
     */
    getCompanyComplianceHistory(companyId: string): Promise<{
        totalProofs: number;
        proofs: Array<{
            sequence: number;
            complianceScore: number;
            isCompliant: boolean;
            timestamp: number;
            proofHash: string;
        }>;
        latestCompliance: number;
        complianceTrend: 'improving' | 'stable' | 'declining';
    }>;
    /**
     * Get global compliance statistics across all companies
     */
    getGlobalComplianceStats(): Promise<{
        totalCompanies: number;
        totalProofs: number;
        averageCompliance: number;
        compliantCompaniesCount: number;
        complianceDistribution: {
            [score: string]: number;
        };
    }>;
    /**
     * Search for companies by compliance criteria
     */
    findCompaniesByCompliance(minScore: number, requiredServices: string[]): Promise<Array<{
        companyId: string;
        latestScore: number;
        latestProofTimestamp: number;
    }>>;
}
/**
 * Factory function to create and deploy the contract
 */
export declare function deployComposedOptimContract(deployerAccount: any, deployerKey: any): Promise<{
    contract: ComposedOptimComplianceVerifierSC;
    address: any;
    utils: ComposedOptimContractUtils;
}>;
export {};
