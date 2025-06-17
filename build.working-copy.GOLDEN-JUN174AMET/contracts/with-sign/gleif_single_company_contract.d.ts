import { Field, SmartContract, State, Bool, CircuitString, UInt64 } from 'o1js';
import { GLEIFOptimProof } from '../../zk-programs/with-sign/GLEIFOptimZKProgram.js';
export declare class GLEIFOptimSingleCompanySmartContract extends SmartContract {
    companyLEI: State<CircuitString>;
    companyName: State<CircuitString>;
    jurisdiction: State<CircuitString>;
    entityStatus: State<CircuitString>;
    GLEIFCompliant: State<import("o1js/dist/node/lib/provable/bool.js").Bool>;
    currentComplianceScore: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    lastVerificationTime: State<UInt64>;
    lastGLEIFUpdate: State<UInt64>;
    totalVerifications: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    verificationsMapRoot: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    firstVerificationTime: State<UInt64>;
    contractCreationTime: State<UInt64>;
    init(): void;
    verifyOptimizedComplianceWithProof(proof: GLEIFOptimProof, isFirstVerification: Bool): Promise<void>;
    /**
     * Get complete company GLEIF information and current status
     */
    getCompanyGLEIFInfo(): {
        companyLEI: CircuitString;
        companyName: CircuitString;
        jurisdiction: CircuitString;
        entityStatus: CircuitString;
        isCompliant: Bool;
        complianceScore: Field;
        lastGLEIFUpdate: UInt64;
    };
    /**
     * Get current GLEIF compliance status (most recent verification)
     */
    getCurrentGLEIFCompliance(): {
        isCompliant: Bool;
        lastVerificationTime: UInt64;
        complianceScore: Field;
        lei: CircuitString;
    };
    /**
     * Get GLEIF verification statistics
     */
    getGLEIFVerificationStats(): {
        totalVerifications: Field;
        firstVerificationTime: UInt64;
        lastVerificationTime: UInt64;
        contractAge: UInt64;
        hasBeenVerified: Bool;
        daysSinceLastUpdate: Field;
    };
    /**
     * Check if a specific company is tracked by this contract
     */
    isTrackingGLEIFCompany(expectedLEI: CircuitString): Bool;
    /**
     * Check if GLEIF data is stale (over 1 year old)
     */
    isGLEIFDataStale(): Bool;
    /**
     * Reset GLEIF compliance status (admin function)
     */
    resetGLEIFCompliance(): Promise<void>;
    /**
     * Update GLEIF data timestamp (admin function)
     */
    updateGLEIFDataTimestamp(newUpdateTime: UInt64): Promise<void>;
    /**
     * Reset entire contract for new company (admin function)
     * WARNING: This erases all history
     */
    resetForNewGLEIFCompany(): Promise<void>;
}
