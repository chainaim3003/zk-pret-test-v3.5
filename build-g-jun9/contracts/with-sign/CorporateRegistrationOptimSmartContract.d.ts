import { Field, SmartContract, State, Bool, UInt64 } from 'o1js';
import { CorporateRegistrationOptimProof } from '../../zk-programs/with-sign/CorporateRegistrationOptimZKProgram.js';
export declare class CorporateRegistrationOptimSmartContract extends SmartContract {
    corpRegCompliant: State<import("o1js/dist/node/lib/provable/bool.js").Bool>;
    totalVerifications: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    lastVerificationTime: State<UInt64>;
    totalCompaniesVerified: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyOptimizedComplianceWithProof(proof: CorporateRegistrationOptimProof): Promise<void>;
    /**
     * Get current compliance status
     */
    getComplianceStatus(): Bool;
    /**
     * Get total number of verifications performed
     */
    getTotalVerifications(): Field;
    /**
     * Get last verification timestamp
     */
    getLastVerificationTime(): UInt64;
    /**
     * Reset compliance status (admin function)
     */
    resetCompliance(): Promise<void>;
    /**
     * Reset all counters (admin function)
     */
    resetCounters(): Promise<void>;
}
