import { Field, SmartContract, State, Bool, UInt64 } from 'o1js';
import { CorporateRegistrationOptimProof } from '../../zk-programs/with-sign/CorporateRegistrationOptimZKProgram.js';
declare const CorporateRegistrationVerificationRecord_base: (new (value: {
    verificationIndex: import("o1js/dist/node/lib/provable/field.js").Field;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verificationTimestamp: UInt64;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    verificationIndex: import("o1js/dist/node/lib/provable/field.js").Field;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verificationTimestamp: UInt64;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    verificationIndex: import("o1js/dist/node/lib/provable/field.js").Field;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verificationTimestamp: UInt64;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    verificationIndex: bigint;
    isCompliant: boolean;
    verificationTimestamp: bigint;
    complianceScore: bigint;
    merkleRoot: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        verificationIndex: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: UInt64;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        verificationIndex: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: bigint | UInt64;
        complianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        verificationIndex: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: UInt64;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        verificationIndex: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: UInt64;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        verificationIndex: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: UInt64;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        verificationIndex: string;
        isCompliant: boolean;
        verificationTimestamp: string;
        complianceScore: string;
        merkleRoot: string;
    };
    fromJSON: (x: {
        verificationIndex: string;
        isCompliant: boolean;
        verificationTimestamp: string;
        complianceScore: string;
        merkleRoot: string;
    }) => {
        verificationIndex: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: UInt64;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        verificationIndex: import("o1js/dist/node/lib/provable/field.js").Field;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: UInt64;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class CorporateRegistrationVerificationRecord extends CorporateRegistrationVerificationRecord_base {
}
export declare class CorporateRegistrationOptimSingleCompanySmartContract extends SmartContract {
    companyIdentifierHash: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    companyNameHash: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    jurisdictionHash: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    corpRegCompliant: State<import("o1js/dist/node/lib/provable/bool.js").Bool>;
    currentComplianceScore: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    lastVerificationTime: State<UInt64>;
    totalVerifications: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    firstVerificationTime: State<UInt64>;
    init(): void;
    verifyOptimizedComplianceWithProof(proof: CorporateRegistrationOptimProof): Promise<void>;
    /**
     * Get complete company information and current status (returns hashes for privacy)
     */
    getCompanyInfo(): {
        companyIdentifierHash: Field;
        companyNameHash: Field;
        jurisdictionHash: Field;
        isCompliant: Bool;
        complianceScore: Field;
    };
    /**
     * Get current compliance status (most recent verification)
     */
    getCurrentCompliance(): {
        isCompliant: Bool;
        lastVerificationTime: UInt64;
        complianceScore: Field;
    };
    /**
     * Get verification statistics
     */
    getVerificationStats(): {
        totalVerifications: Field;
        firstVerificationTime: UInt64;
        lastVerificationTime: UInt64;
        hasBeenVerified: Bool;
    };
    /**
     * Check if a specific company is tracked by this contract (using hash comparison)
     */
    isTrackingCompany(expectedCompanyIdHash: Field): Bool;
    /**
     * Reset compliance status (admin function)
     */
    resetCompliance(): Promise<void>;
    /**
     * Reset entire contract for new company (admin function)
     * WARNING: This erases all history
     */
    resetForNewCompany(): Promise<void>;
}
export {};
