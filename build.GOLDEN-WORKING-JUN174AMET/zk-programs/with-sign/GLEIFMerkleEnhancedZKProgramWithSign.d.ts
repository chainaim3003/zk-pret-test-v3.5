import { Field, Signature, CircuitString, Bool, UInt64, PublicKey } from 'o1js';
import { GLEIFStructuredMerkleTree, MerkleWitness7 } from '../../tests/with-sign/GLEIFStructuredMerkleTree.js';
declare const GLEIFMerkleComplianceData_base: (new (value: {
    lei: CircuitString;
    companyName: CircuitString;
    registrationStatus: CircuitString;
    jurisdiction: CircuitString;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTimestamp: UInt64;
    isEntityActive: import("o1js/dist/node/lib/provable/bool.js").Bool;
    isRegistrationIssued: import("o1js/dist/node/lib/provable/bool.js").Bool;
    hasValidConformity: import("o1js/dist/node/lib/provable/bool.js").Bool;
    hasRecentUpdate: import("o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    lei: CircuitString;
    companyName: CircuitString;
    registrationStatus: CircuitString;
    jurisdiction: CircuitString;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTimestamp: UInt64;
    isEntityActive: import("o1js/dist/node/lib/provable/bool.js").Bool;
    isRegistrationIssued: import("o1js/dist/node/lib/provable/bool.js").Bool;
    hasValidConformity: import("o1js/dist/node/lib/provable/bool.js").Bool;
    hasRecentUpdate: import("o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    lei: CircuitString;
    companyName: CircuitString;
    registrationStatus: CircuitString;
    jurisdiction: CircuitString;
    merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTimestamp: UInt64;
    isEntityActive: import("o1js/dist/node/lib/provable/bool.js").Bool;
    isRegistrationIssued: import("o1js/dist/node/lib/provable/bool.js").Bool;
    hasValidConformity: import("o1js/dist/node/lib/provable/bool.js").Bool;
    hasRecentUpdate: import("o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    lei: string;
    companyName: string;
    registrationStatus: string;
    jurisdiction: string;
    merkleRoot: bigint;
    complianceScore: bigint;
    riskLevel: bigint;
    lastVerificationTimestamp: bigint;
    isEntityActive: boolean;
    isRegistrationIssued: boolean;
    hasValidConformity: boolean;
    hasRecentUpdate: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        lei: CircuitString;
        companyName: CircuitString;
        registrationStatus: CircuitString;
        jurisdiction: CircuitString;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: UInt64;
        isEntityActive: import("o1js/dist/node/lib/provable/bool.js").Bool;
        isRegistrationIssued: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasValidConformity: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasRecentUpdate: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        lei: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        companyName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        registrationStatus: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        jurisdiction: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        merkleRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: bigint | UInt64;
        isEntityActive: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        isRegistrationIssued: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasValidConformity: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasRecentUpdate: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        lei: CircuitString;
        companyName: CircuitString;
        registrationStatus: CircuitString;
        jurisdiction: CircuitString;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: UInt64;
        isEntityActive: import("o1js/dist/node/lib/provable/bool.js").Bool;
        isRegistrationIssued: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasValidConformity: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasRecentUpdate: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        lei: CircuitString;
        companyName: CircuitString;
        registrationStatus: CircuitString;
        jurisdiction: CircuitString;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: UInt64;
        isEntityActive: import("o1js/dist/node/lib/provable/bool.js").Bool;
        isRegistrationIssued: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasValidConformity: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasRecentUpdate: import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        lei: CircuitString;
        companyName: CircuitString;
        registrationStatus: CircuitString;
        jurisdiction: CircuitString;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: UInt64;
        isEntityActive: import("o1js/dist/node/lib/provable/bool.js").Bool;
        isRegistrationIssued: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasValidConformity: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasRecentUpdate: import("o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        lei: {
            values: {
                value: string;
            }[];
        };
        companyName: {
            values: {
                value: string;
            }[];
        };
        registrationStatus: {
            values: {
                value: string;
            }[];
        };
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
        merkleRoot: string;
        complianceScore: string;
        riskLevel: string;
        lastVerificationTimestamp: string;
        isEntityActive: boolean;
        isRegistrationIssued: boolean;
        hasValidConformity: boolean;
        hasRecentUpdate: boolean;
    };
    fromJSON: (x: {
        lei: {
            values: {
                value: string;
            }[];
        };
        companyName: {
            values: {
                value: string;
            }[];
        };
        registrationStatus: {
            values: {
                value: string;
            }[];
        };
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
        merkleRoot: string;
        complianceScore: string;
        riskLevel: string;
        lastVerificationTimestamp: string;
        isEntityActive: boolean;
        isRegistrationIssued: boolean;
        hasValidConformity: boolean;
        hasRecentUpdate: boolean;
    }) => {
        lei: CircuitString;
        companyName: CircuitString;
        registrationStatus: CircuitString;
        jurisdiction: CircuitString;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: UInt64;
        isEntityActive: import("o1js/dist/node/lib/provable/bool.js").Bool;
        isRegistrationIssued: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasValidConformity: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasRecentUpdate: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        lei: CircuitString;
        companyName: CircuitString;
        registrationStatus: CircuitString;
        jurisdiction: CircuitString;
        merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: UInt64;
        isEntityActive: import("o1js/dist/node/lib/provable/bool.js").Bool;
        isRegistrationIssued: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasValidConformity: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasRecentUpdate: import("o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
export declare class GLEIFMerkleComplianceData extends GLEIFMerkleComplianceData_base {
    hash(): Field;
    isCompliant(): Bool;
    meetsComplianceThreshold(threshold: Field): Bool;
    isAcceptableRisk(maxRiskLevel: Field): Bool;
}
declare const GLEIFMerkleProofInputs_base: (new (value: {
    legalAddressWitness: MerkleWitness7;
    headquartersAddressWitness: MerkleWitness7;
    businessMetadataWitness: MerkleWitness7;
    registrationInfoWitness: MerkleWitness7;
    legalAddressBundle: CircuitString;
    headquartersAddressBundle: CircuitString;
    businessMetadataBundle: CircuitString;
    registrationInfoBundle: CircuitString;
}) => {
    legalAddressWitness: MerkleWitness7;
    headquartersAddressWitness: MerkleWitness7;
    businessMetadataWitness: MerkleWitness7;
    registrationInfoWitness: MerkleWitness7;
    legalAddressBundle: CircuitString;
    headquartersAddressBundle: CircuitString;
    businessMetadataBundle: CircuitString;
    registrationInfoBundle: CircuitString;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    legalAddressWitness: MerkleWitness7;
    headquartersAddressWitness: MerkleWitness7;
    businessMetadataWitness: MerkleWitness7;
    registrationInfoWitness: MerkleWitness7;
    legalAddressBundle: CircuitString;
    headquartersAddressBundle: CircuitString;
    businessMetadataBundle: CircuitString;
    registrationInfoBundle: CircuitString;
}, {
    legalAddressWitness: any;
    headquartersAddressWitness: any;
    businessMetadataWitness: any;
    registrationInfoWitness: any;
    legalAddressBundle: string;
    headquartersAddressBundle: string;
    businessMetadataBundle: string;
    registrationInfoBundle: string;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        legalAddressWitness: MerkleWitness7;
        headquartersAddressWitness: MerkleWitness7;
        businessMetadataWitness: MerkleWitness7;
        registrationInfoWitness: MerkleWitness7;
        legalAddressBundle: CircuitString;
        headquartersAddressBundle: CircuitString;
        businessMetadataBundle: CircuitString;
        registrationInfoBundle: CircuitString;
    };
} & {
    fromValue: (value: {
        legalAddressWitness: any;
        headquartersAddressWitness: any;
        businessMetadataWitness: any;
        registrationInfoWitness: any;
        legalAddressBundle: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        headquartersAddressBundle: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        businessMetadataBundle: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        registrationInfoBundle: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
    }) => {
        legalAddressWitness: MerkleWitness7;
        headquartersAddressWitness: MerkleWitness7;
        businessMetadataWitness: MerkleWitness7;
        registrationInfoWitness: MerkleWitness7;
        legalAddressBundle: CircuitString;
        headquartersAddressBundle: CircuitString;
        businessMetadataBundle: CircuitString;
        registrationInfoBundle: CircuitString;
    };
    toInput: (x: {
        legalAddressWitness: MerkleWitness7;
        headquartersAddressWitness: MerkleWitness7;
        businessMetadataWitness: MerkleWitness7;
        registrationInfoWitness: MerkleWitness7;
        legalAddressBundle: CircuitString;
        headquartersAddressBundle: CircuitString;
        businessMetadataBundle: CircuitString;
        registrationInfoBundle: CircuitString;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        legalAddressWitness: MerkleWitness7;
        headquartersAddressWitness: MerkleWitness7;
        businessMetadataWitness: MerkleWitness7;
        registrationInfoWitness: MerkleWitness7;
        legalAddressBundle: CircuitString;
        headquartersAddressBundle: CircuitString;
        businessMetadataBundle: CircuitString;
        registrationInfoBundle: CircuitString;
    }) => {
        legalAddressWitness: any;
        headquartersAddressWitness: any;
        businessMetadataWitness: any;
        registrationInfoWitness: any;
        legalAddressBundle: {
            values: {
                value: string;
            }[];
        };
        headquartersAddressBundle: {
            values: {
                value: string;
            }[];
        };
        businessMetadataBundle: {
            values: {
                value: string;
            }[];
        };
        registrationInfoBundle: {
            values: {
                value: string;
            }[];
        };
    };
    fromJSON: (x: {
        legalAddressWitness: any;
        headquartersAddressWitness: any;
        businessMetadataWitness: any;
        registrationInfoWitness: any;
        legalAddressBundle: {
            values: {
                value: string;
            }[];
        };
        headquartersAddressBundle: {
            values: {
                value: string;
            }[];
        };
        businessMetadataBundle: {
            values: {
                value: string;
            }[];
        };
        registrationInfoBundle: {
            values: {
                value: string;
            }[];
        };
    }) => {
        legalAddressWitness: MerkleWitness7;
        headquartersAddressWitness: MerkleWitness7;
        businessMetadataWitness: MerkleWitness7;
        registrationInfoWitness: MerkleWitness7;
        legalAddressBundle: CircuitString;
        headquartersAddressBundle: CircuitString;
        businessMetadataBundle: CircuitString;
        registrationInfoBundle: CircuitString;
    };
    empty: () => {
        legalAddressWitness: MerkleWitness7;
        headquartersAddressWitness: MerkleWitness7;
        businessMetadataWitness: MerkleWitness7;
        registrationInfoWitness: MerkleWitness7;
        legalAddressBundle: CircuitString;
        headquartersAddressBundle: CircuitString;
        businessMetadataBundle: CircuitString;
        registrationInfoBundle: CircuitString;
    };
};
export declare class GLEIFMerkleProofInputs extends GLEIFMerkleProofInputs_base {
}
declare const GLEIFMerklePublicOutput_base: (new (value: {
    lei: CircuitString;
    companyName: CircuitString;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    merkleRootVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
    businessRulesVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verificationTimestamp: UInt64;
    verifierPublicKey: PublicKey;
    jurisdiction: CircuitString;
}) => {
    lei: CircuitString;
    companyName: CircuitString;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    merkleRootVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
    businessRulesVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verificationTimestamp: UInt64;
    verifierPublicKey: PublicKey;
    jurisdiction: CircuitString;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    lei: CircuitString;
    companyName: CircuitString;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    merkleRootVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
    businessRulesVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
    verificationTimestamp: UInt64;
    verifierPublicKey: PublicKey;
    jurisdiction: CircuitString;
}, {
    lei: string;
    companyName: string;
    isCompliant: boolean;
    complianceScore: bigint;
    riskLevel: bigint;
    merkleRootVerified: boolean;
    businessRulesVerified: boolean;
    verificationTimestamp: bigint;
    verifierPublicKey: {
        x: bigint;
        isOdd: boolean;
    };
    jurisdiction: string;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        lei: CircuitString;
        companyName: CircuitString;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRootVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
        businessRulesVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: UInt64;
        verifierPublicKey: PublicKey;
        jurisdiction: CircuitString;
    };
} & {
    fromValue: (value: {
        lei: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        companyName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        isCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRootVerified: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        businessRulesVerified: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: bigint | UInt64;
        verifierPublicKey: PublicKey | {
            x: bigint | import("o1js/dist/node/lib/provable/field.js").Field;
            isOdd: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        };
        jurisdiction: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
    }) => {
        lei: CircuitString;
        companyName: CircuitString;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRootVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
        businessRulesVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: UInt64;
        verifierPublicKey: PublicKey;
        jurisdiction: CircuitString;
    };
    toInput: (x: {
        lei: CircuitString;
        companyName: CircuitString;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRootVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
        businessRulesVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: UInt64;
        verifierPublicKey: PublicKey;
        jurisdiction: CircuitString;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        lei: CircuitString;
        companyName: CircuitString;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRootVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
        businessRulesVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: UInt64;
        verifierPublicKey: PublicKey;
        jurisdiction: CircuitString;
    }) => {
        lei: {
            values: {
                value: string;
            }[];
        };
        companyName: {
            values: {
                value: string;
            }[];
        };
        isCompliant: boolean;
        complianceScore: string;
        riskLevel: string;
        merkleRootVerified: boolean;
        businessRulesVerified: boolean;
        verificationTimestamp: string;
        verifierPublicKey: string;
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
    };
    fromJSON: (x: {
        lei: {
            values: {
                value: string;
            }[];
        };
        companyName: {
            values: {
                value: string;
            }[];
        };
        isCompliant: boolean;
        complianceScore: string;
        riskLevel: string;
        merkleRootVerified: boolean;
        businessRulesVerified: boolean;
        verificationTimestamp: string;
        verifierPublicKey: string;
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
    }) => {
        lei: CircuitString;
        companyName: CircuitString;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRootVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
        businessRulesVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: UInt64;
        verifierPublicKey: PublicKey;
        jurisdiction: CircuitString;
    };
    empty: () => {
        lei: CircuitString;
        companyName: CircuitString;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        merkleRootVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
        businessRulesVerified: import("o1js/dist/node/lib/provable/bool.js").Bool;
        verificationTimestamp: UInt64;
        verifierPublicKey: PublicKey;
        jurisdiction: CircuitString;
    };
};
export declare class GLEIFMerklePublicOutput extends GLEIFMerklePublicOutput_base {
}
export declare const GLEIFMerkleEnhancedZKProgram: {
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
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, GLEIFMerklePublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveCoreCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
        proveSelectiveCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof GLEIFMerklePublicOutput;
    privateInputTypes: {
        proveCoreCompliance: [typeof GLEIFMerkleComplianceData, typeof Signature, typeof UInt64, typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field), typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field)];
        proveSelectiveCompliance: [typeof GLEIFMerkleComplianceData, typeof GLEIFMerkleProofInputs, typeof Signature, typeof UInt64, typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field), typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field)];
    };
    rawMethods: {
        proveCoreCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [GLEIFMerkleComplianceData, Signature, UInt64, import("o1js/dist/node/lib/provable/field.js").Field, import("o1js/dist/node/lib/provable/field.js").Field] & any[]) => Promise<GLEIFMerklePublicOutput>;
        proveSelectiveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [GLEIFMerkleComplianceData, GLEIFMerkleProofInputs, Signature, UInt64, import("o1js/dist/node/lib/provable/field.js").Field, import("o1js/dist/node/lib/provable/field.js").Field] & any[]) => Promise<GLEIFMerklePublicOutput>;
    };
} & {
    proveCoreCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [GLEIFMerkleComplianceData, Signature, UInt64, import("o1js/dist/node/lib/provable/field.js").Field, import("o1js/dist/node/lib/provable/field.js").Field] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, GLEIFMerklePublicOutput>>;
    proveSelectiveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [GLEIFMerkleComplianceData, GLEIFMerkleProofInputs, Signature, UInt64, import("o1js/dist/node/lib/provable/field.js").Field, import("o1js/dist/node/lib/provable/field.js").Field] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, GLEIFMerklePublicOutput>>;
};
declare const GLEIFMerkleEnhancedProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: GLEIFMerklePublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: GLEIFMerklePublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof GLEIFMerklePublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof GLEIFMerklePublicOutput;
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
export declare class GLEIFMerkleEnhancedProof extends GLEIFMerkleEnhancedProof_base {
}
export declare class GLEIFMerkleUtils {
    /**
     * Create MerkleTree-based compliance data from API response
     */
    static createMerkleComplianceDataFromAPI(apiResponse: any, merkleTree: GLEIFStructuredMerkleTree, complianceScore?: number, riskLevel?: number): GLEIFMerkleComplianceData;
    /**
     * Create MerkleTree proof inputs for selective disclosure
     */
    static createMerkleProofInputs(merkleTree: GLEIFStructuredMerkleTree): GLEIFMerkleProofInputs;
    private static isRecentUpdate;
}
export {};
