import { Field, UInt64 } from 'o1js';
import { ComposedOptimProof } from './ComposedRecursiveOptim3LevelZKProgramWithSign.js';
/**
 * Represents a complete proof lineage showing all underlying proofs
 */
export interface ProofLineage {
    companyName: string;
    companyIdentifier: string;
    iteration: number;
    timestamp: number;
    composedProofHash: string;
    composedProof: ComposedOptimProof;
    level1ProofHash: string;
    level2ProofHash: string;
    level3ProofHash: string;
    corpRegProofHash: string;
    eximProofHash: string;
    gleifProofHash: string;
    corpRegProof: any;
    eximProof: any;
    gleifProof: any;
    overallComplianceScore: number;
    corpRegComplianceScore: number;
    eximComplianceScore: number;
    gleifComplianceScore: number;
    isFullyCompliant: boolean;
}
/**
 * Manages storage and retrieval of composed proofs with full lineage
 */
declare class ComposedProofRegistry {
    private proofs;
    private proofsTree;
    private nextIndex;
    constructor();
    /**
     * Store a composed proof with full lineage
     */
    storeProofWithLineage(lineage: ProofLineage): {
        index: number;
        witness: any;
    };
    /**
     * Get all proofs for a company
     */
    getCompanyProofs(companyId: string): ProofLineage[];
    /**
     * Get specific proof by company and iteration
     */
    getProofByIteration(companyId: string, iteration: number): ProofLineage | null;
    /**
     * Get latest proof for a company
     */
    getLatestProof(companyId: string): ProofLineage | null;
    /**
     * Get proof lineage examples for reporting
     */
    getProofLineageExamples(maxExamples?: number): ProofLineage[];
    /**
     * Get merkle root of all stored proofs
     */
    getRoot(): Field;
    /**
     * Get total number of proofs stored
     */
    getTotalProofs(): number;
    /**
     * Get all tracked companies
     */
    getAllCompanies(): string[];
}
export interface CompanyIteration {
    iteration: number;
    timestamp: number;
    complianceScore: number;
    isCompliant: boolean;
    composedProofHash: string;
    error?: string;
}
export interface CompanyResult {
    companyName: string;
    companyIdentifier: string;
    iterations: CompanyIteration[];
    successfulProofs: number;
    failedProofs: number;
    latestComplianceScore: number;
    complianceTrend: string;
}
export declare function getComposedRecursiveOptim3LevelVerificationWithSignUtils(companyName: string, companyCIN: string, testIterations?: number): Promise<{
    totalCompanies: number;
    totalComposedProofs: number;
    successfulVerifications: number;
    failedVerifications: number;
    companyResult: CompanyResult;
    proofLineageExamples: ProofLineage[];
    retrievalExamples: ({
        companyName: string;
        requestedSequence: string;
        found: boolean;
        complianceScore: number;
        timestamp: number;
        proofHash: string;
    } | {
        companyName: string;
        requestedSequence: number;
        found: boolean;
        complianceScore: number;
        timestamp: number;
        proofHash: string;
    })[];
    contractState: {
        totalProofsStored: import("o1js/dist/node/lib/provable/field.js").Field;
        totalCompaniesTracked: import("o1js/dist/node/lib/provable/field.js").Field;
        proofsRootHash: import("o1js/dist/node/lib/provable/field.js").Field;
        lastUpdateTimestamp: UInt64;
    };
    performanceMetrics: {
        proofGenerationTimes: number[];
        verificationTimes: number[];
        totalExecutionTime: number;
        averageProofGenerationTime: number;
        averageVerificationTime: number;
        storageUsed: number;
    };
    proofRegistry: ComposedProofRegistry;
}>;
export {};
