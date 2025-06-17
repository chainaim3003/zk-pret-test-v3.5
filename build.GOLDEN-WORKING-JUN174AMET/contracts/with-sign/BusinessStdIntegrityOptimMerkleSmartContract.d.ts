import { SmartContract, State, Field, UInt64 } from 'o1js';
import { BusinessStdIntegrityOptimMerkleProof } from '../../zk-programs/with-sign/BusinessStdIntegrityOptimMerkleZKProgramWithSign.js';
export declare class BusinessStdIntegrityOptimMerkleSmartContract extends SmartContract {
    merkleRoot: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    totalVerifications: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    successfulVerifications: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    lastVerificationTimestamp: State<UInt64>;
    isVerificationEnabled: State<import("o1js/dist/node/lib/provable/bool.js").Bool>;
    risk: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    events: {
        'verification-completed': typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        'verification-failed': typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        'compliance-status': typeof import("o1js/dist/node/lib/provable/bool.js").Bool & ((x: boolean | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/bool.js").Bool) => import("o1js/dist/node/lib/provable/bool.js").Bool);
        'merkle-root-updated': typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    };
    init(): void;
    verifyCoreCompliance(proof: BusinessStdIntegrityOptimMerkleProof, currentTimestamp: UInt64): Promise<void>;
    verifyEnhancedCompliance(proof: BusinessStdIntegrityOptimMerkleProof, currentTimestamp: UInt64): Promise<void>;
    enableVerification(): Promise<void>;
    disableVerification(): Promise<void>;
    resetCounters(): Promise<void>;
    /**
     * Get current merkle root
     */
    getMerkleRoot(): Field;
    /**
     * Get total number of verifications performed
     */
    getTotalVerifications(): Field;
    /**
     * Get number of successful verifications
     */
    getSuccessfulVerifications(): Field;
    /**
     * Get last verification timestamp
     */
    getLastVerificationTimestamp(): UInt64;
    /**
     * Calculate success rate as percentage (0-100)
     */
    getSuccessRate(): Field;
}
