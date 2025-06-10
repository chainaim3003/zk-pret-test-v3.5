import { Field, Signature, Proof, CircuitString, Bool, UInt64, PublicKey } from 'o1js';
declare const GLEIFEnhancedComplianceData_base: (new (value: {
    type: CircuitString;
    id: CircuitString;
    lei: CircuitString;
    name: CircuitString;
    registration_status: CircuitString;
    entity_status: CircuitString;
    validation_status: CircuitString;
    jurisdiction: CircuitString;
    legalForm_id: CircuitString;
    registeredAt_id: CircuitString;
    initialRegistrationDate: CircuitString;
    lastUpdateDate: CircuitString;
    nextRenewalDate: CircuitString;
    legalAddress_country: CircuitString;
    legalAddress_city: CircuitString;
    headquartersAddress_country: CircuitString;
    managingLou: CircuitString;
    corroborationLevel: CircuitString;
    conformityFlag: CircuitString;
    companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
    parentLEI: CircuitString;
    subsidiaryCount: import("o1js/dist/node/lib/provable/field.js").Field;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTimestamp: UInt64;
}) => {
    type: CircuitString;
    id: CircuitString;
    lei: CircuitString;
    name: CircuitString;
    registration_status: CircuitString;
    entity_status: CircuitString;
    validation_status: CircuitString;
    jurisdiction: CircuitString;
    legalForm_id: CircuitString;
    registeredAt_id: CircuitString;
    initialRegistrationDate: CircuitString;
    lastUpdateDate: CircuitString;
    nextRenewalDate: CircuitString;
    legalAddress_country: CircuitString;
    legalAddress_city: CircuitString;
    headquartersAddress_country: CircuitString;
    managingLou: CircuitString;
    corroborationLevel: CircuitString;
    conformityFlag: CircuitString;
    companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
    parentLEI: CircuitString;
    subsidiaryCount: import("o1js/dist/node/lib/provable/field.js").Field;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTimestamp: UInt64;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    type: CircuitString;
    id: CircuitString;
    lei: CircuitString;
    name: CircuitString;
    registration_status: CircuitString;
    entity_status: CircuitString;
    validation_status: CircuitString;
    jurisdiction: CircuitString;
    legalForm_id: CircuitString;
    registeredAt_id: CircuitString;
    initialRegistrationDate: CircuitString;
    lastUpdateDate: CircuitString;
    nextRenewalDate: CircuitString;
    legalAddress_country: CircuitString;
    legalAddress_city: CircuitString;
    headquartersAddress_country: CircuitString;
    managingLou: CircuitString;
    corroborationLevel: CircuitString;
    conformityFlag: CircuitString;
    companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
    parentLEI: CircuitString;
    subsidiaryCount: import("o1js/dist/node/lib/provable/field.js").Field;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    lastVerificationTimestamp: UInt64;
}, {
    type: string;
    id: string;
    lei: string;
    name: string;
    registration_status: string;
    entity_status: string;
    validation_status: string;
    jurisdiction: string;
    legalForm_id: string;
    registeredAt_id: string;
    initialRegistrationDate: string;
    lastUpdateDate: string;
    nextRenewalDate: string;
    legalAddress_country: string;
    legalAddress_city: string;
    headquartersAddress_country: string;
    managingLou: string;
    corroborationLevel: string;
    conformityFlag: string;
    companyGroup: bigint;
    parentLEI: string;
    subsidiaryCount: bigint;
    complianceScore: bigint;
    riskLevel: bigint;
    lastVerificationTimestamp: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        type: CircuitString;
        id: CircuitString;
        lei: CircuitString;
        name: CircuitString;
        registration_status: CircuitString;
        entity_status: CircuitString;
        validation_status: CircuitString;
        jurisdiction: CircuitString;
        legalForm_id: CircuitString;
        registeredAt_id: CircuitString;
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        legalAddress_country: CircuitString;
        legalAddress_city: CircuitString;
        headquartersAddress_country: CircuitString;
        managingLou: CircuitString;
        corroborationLevel: CircuitString;
        conformityFlag: CircuitString;
        companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
        parentLEI: CircuitString;
        subsidiaryCount: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: UInt64;
    };
} & {
    fromValue: (value: {
        type: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        id: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        lei: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        name: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        registration_status: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        entity_status: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        validation_status: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        jurisdiction: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        legalForm_id: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        registeredAt_id: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        initialRegistrationDate: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        lastUpdateDate: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        nextRenewalDate: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        legalAddress_country: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        legalAddress_city: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        headquartersAddress_country: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        managingLou: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        corroborationLevel: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        conformityFlag: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        companyGroup: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        parentLEI: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        subsidiaryCount: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: bigint | UInt64;
    }) => {
        type: CircuitString;
        id: CircuitString;
        lei: CircuitString;
        name: CircuitString;
        registration_status: CircuitString;
        entity_status: CircuitString;
        validation_status: CircuitString;
        jurisdiction: CircuitString;
        legalForm_id: CircuitString;
        registeredAt_id: CircuitString;
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        legalAddress_country: CircuitString;
        legalAddress_city: CircuitString;
        headquartersAddress_country: CircuitString;
        managingLou: CircuitString;
        corroborationLevel: CircuitString;
        conformityFlag: CircuitString;
        companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
        parentLEI: CircuitString;
        subsidiaryCount: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: UInt64;
    };
    toInput: (x: {
        type: CircuitString;
        id: CircuitString;
        lei: CircuitString;
        name: CircuitString;
        registration_status: CircuitString;
        entity_status: CircuitString;
        validation_status: CircuitString;
        jurisdiction: CircuitString;
        legalForm_id: CircuitString;
        registeredAt_id: CircuitString;
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        legalAddress_country: CircuitString;
        legalAddress_city: CircuitString;
        headquartersAddress_country: CircuitString;
        managingLou: CircuitString;
        corroborationLevel: CircuitString;
        conformityFlag: CircuitString;
        companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
        parentLEI: CircuitString;
        subsidiaryCount: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: UInt64;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        type: CircuitString;
        id: CircuitString;
        lei: CircuitString;
        name: CircuitString;
        registration_status: CircuitString;
        entity_status: CircuitString;
        validation_status: CircuitString;
        jurisdiction: CircuitString;
        legalForm_id: CircuitString;
        registeredAt_id: CircuitString;
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        legalAddress_country: CircuitString;
        legalAddress_city: CircuitString;
        headquartersAddress_country: CircuitString;
        managingLou: CircuitString;
        corroborationLevel: CircuitString;
        conformityFlag: CircuitString;
        companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
        parentLEI: CircuitString;
        subsidiaryCount: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: UInt64;
    }) => {
        type: {
            values: {
                value: string;
            }[];
        };
        id: {
            values: {
                value: string;
            }[];
        };
        lei: {
            values: {
                value: string;
            }[];
        };
        name: {
            values: {
                value: string;
            }[];
        };
        registration_status: {
            values: {
                value: string;
            }[];
        };
        entity_status: {
            values: {
                value: string;
            }[];
        };
        validation_status: {
            values: {
                value: string;
            }[];
        };
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
        legalForm_id: {
            values: {
                value: string;
            }[];
        };
        registeredAt_id: {
            values: {
                value: string;
            }[];
        };
        initialRegistrationDate: {
            values: {
                value: string;
            }[];
        };
        lastUpdateDate: {
            values: {
                value: string;
            }[];
        };
        nextRenewalDate: {
            values: {
                value: string;
            }[];
        };
        legalAddress_country: {
            values: {
                value: string;
            }[];
        };
        legalAddress_city: {
            values: {
                value: string;
            }[];
        };
        headquartersAddress_country: {
            values: {
                value: string;
            }[];
        };
        managingLou: {
            values: {
                value: string;
            }[];
        };
        corroborationLevel: {
            values: {
                value: string;
            }[];
        };
        conformityFlag: {
            values: {
                value: string;
            }[];
        };
        companyGroup: string;
        parentLEI: {
            values: {
                value: string;
            }[];
        };
        subsidiaryCount: string;
        complianceScore: string;
        riskLevel: string;
        lastVerificationTimestamp: string;
    };
    fromJSON: (x: {
        type: {
            values: {
                value: string;
            }[];
        };
        id: {
            values: {
                value: string;
            }[];
        };
        lei: {
            values: {
                value: string;
            }[];
        };
        name: {
            values: {
                value: string;
            }[];
        };
        registration_status: {
            values: {
                value: string;
            }[];
        };
        entity_status: {
            values: {
                value: string;
            }[];
        };
        validation_status: {
            values: {
                value: string;
            }[];
        };
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
        legalForm_id: {
            values: {
                value: string;
            }[];
        };
        registeredAt_id: {
            values: {
                value: string;
            }[];
        };
        initialRegistrationDate: {
            values: {
                value: string;
            }[];
        };
        lastUpdateDate: {
            values: {
                value: string;
            }[];
        };
        nextRenewalDate: {
            values: {
                value: string;
            }[];
        };
        legalAddress_country: {
            values: {
                value: string;
            }[];
        };
        legalAddress_city: {
            values: {
                value: string;
            }[];
        };
        headquartersAddress_country: {
            values: {
                value: string;
            }[];
        };
        managingLou: {
            values: {
                value: string;
            }[];
        };
        corroborationLevel: {
            values: {
                value: string;
            }[];
        };
        conformityFlag: {
            values: {
                value: string;
            }[];
        };
        companyGroup: string;
        parentLEI: {
            values: {
                value: string;
            }[];
        };
        subsidiaryCount: string;
        complianceScore: string;
        riskLevel: string;
        lastVerificationTimestamp: string;
    }) => {
        type: CircuitString;
        id: CircuitString;
        lei: CircuitString;
        name: CircuitString;
        registration_status: CircuitString;
        entity_status: CircuitString;
        validation_status: CircuitString;
        jurisdiction: CircuitString;
        legalForm_id: CircuitString;
        registeredAt_id: CircuitString;
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        legalAddress_country: CircuitString;
        legalAddress_city: CircuitString;
        headquartersAddress_country: CircuitString;
        managingLou: CircuitString;
        corroborationLevel: CircuitString;
        conformityFlag: CircuitString;
        companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
        parentLEI: CircuitString;
        subsidiaryCount: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: UInt64;
    };
    empty: () => {
        type: CircuitString;
        id: CircuitString;
        lei: CircuitString;
        name: CircuitString;
        registration_status: CircuitString;
        entity_status: CircuitString;
        validation_status: CircuitString;
        jurisdiction: CircuitString;
        legalForm_id: CircuitString;
        registeredAt_id: CircuitString;
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        legalAddress_country: CircuitString;
        legalAddress_city: CircuitString;
        headquartersAddress_country: CircuitString;
        managingLou: CircuitString;
        corroborationLevel: CircuitString;
        conformityFlag: CircuitString;
        companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
        parentLEI: CircuitString;
        subsidiaryCount: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        lastVerificationTimestamp: UInt64;
    };
};
export declare class GLEIFEnhancedComplianceData extends GLEIFEnhancedComplianceData_base {
    hash(): Field;
    isBasicGLEIFCompliant(currentTimestamp: UInt64): Bool;
    isCompliant(): Bool;
    isCompliantWithThresholds(complianceThreshold: Field, riskThreshold: Field, currentTimestamp?: UInt64): Bool;
    isValidRegistrationStatus(): Bool;
    isValidEntityStatus(): Bool;
    isValidConformityFlag(): Bool;
    isWithinValidPeriod(currentTimestamp: UInt64): Bool;
    meetsComplianceThreshold(threshold: Field): Bool;
    isAcceptableRisk(maxRiskLevel: Field): Bool;
    isValidLEI(): Bool;
    isPartOfGroup(): Bool;
    isTemporallyValid(currentTimestamp: UInt64): Bool;
}
declare const GLEIFEnhancedPublicOutput_base: (new (value: {
    name: CircuitString;
    id: CircuitString;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    verifierPublicKey: PublicKey;
    companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
    isGroupCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    jurisdiction: CircuitString;
    regulatoryCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
    hasHistoricalCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceStreakDays: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    name: CircuitString;
    id: CircuitString;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    verifierPublicKey: PublicKey;
    companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
    isGroupCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    jurisdiction: CircuitString;
    regulatoryCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
    hasHistoricalCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceStreakDays: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    name: CircuitString;
    id: CircuitString;
    isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    verifierPublicKey: PublicKey;
    companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
    isGroupCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    jurisdiction: CircuitString;
    regulatoryCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
    hasHistoricalCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
    complianceStreakDays: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    name: string;
    id: string;
    isCompliant: boolean;
    complianceScore: bigint;
    riskLevel: bigint;
    verificationTimestamp: bigint;
    verifierPublicKey: {
        x: bigint;
        isOdd: boolean;
    };
    companyGroup: bigint;
    isGroupCompliant: boolean;
    jurisdiction: string;
    regulatoryCompliance: boolean;
    hasHistoricalCompliance: boolean;
    complianceStreakDays: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        name: CircuitString;
        id: CircuitString;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        verifierPublicKey: PublicKey;
        companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
        isGroupCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        jurisdiction: CircuitString;
        regulatoryCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasHistoricalCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceStreakDays: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        name: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        id: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        isCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: bigint | UInt64;
        verifierPublicKey: PublicKey | {
            x: bigint | import("o1js/dist/node/lib/provable/field.js").Field;
            isOdd: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        };
        companyGroup: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        isGroupCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        jurisdiction: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        regulatoryCompliance: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasHistoricalCompliance: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceStreakDays: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        name: CircuitString;
        id: CircuitString;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        verifierPublicKey: PublicKey;
        companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
        isGroupCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        jurisdiction: CircuitString;
        regulatoryCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasHistoricalCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceStreakDays: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        name: CircuitString;
        id: CircuitString;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        verifierPublicKey: PublicKey;
        companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
        isGroupCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        jurisdiction: CircuitString;
        regulatoryCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasHistoricalCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceStreakDays: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        name: CircuitString;
        id: CircuitString;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        verifierPublicKey: PublicKey;
        companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
        isGroupCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        jurisdiction: CircuitString;
        regulatoryCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasHistoricalCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceStreakDays: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        name: {
            values: {
                value: string;
            }[];
        };
        id: {
            values: {
                value: string;
            }[];
        };
        isCompliant: boolean;
        complianceScore: string;
        riskLevel: string;
        verificationTimestamp: string;
        verifierPublicKey: string;
        companyGroup: string;
        isGroupCompliant: boolean;
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
        regulatoryCompliance: boolean;
        hasHistoricalCompliance: boolean;
        complianceStreakDays: string;
    };
    fromJSON: (x: {
        name: {
            values: {
                value: string;
            }[];
        };
        id: {
            values: {
                value: string;
            }[];
        };
        isCompliant: boolean;
        complianceScore: string;
        riskLevel: string;
        verificationTimestamp: string;
        verifierPublicKey: string;
        companyGroup: string;
        isGroupCompliant: boolean;
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
        regulatoryCompliance: boolean;
        hasHistoricalCompliance: boolean;
        complianceStreakDays: string;
    }) => {
        name: CircuitString;
        id: CircuitString;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        verifierPublicKey: PublicKey;
        companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
        isGroupCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        jurisdiction: CircuitString;
        regulatoryCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasHistoricalCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceStreakDays: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        name: CircuitString;
        id: CircuitString;
        isCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        verifierPublicKey: PublicKey;
        companyGroup: import("o1js/dist/node/lib/provable/field.js").Field;
        isGroupCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        jurisdiction: CircuitString;
        regulatoryCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
        hasHistoricalCompliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
        complianceStreakDays: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class GLEIFEnhancedPublicOutput extends GLEIFEnhancedPublicOutput_base {
}
export declare const GLEIFEnhancedZKProgram: {
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
    verify: (proof: Proof<import("o1js/dist/node/lib/provable/field.js").Field, GLEIFEnhancedPublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
        proveMultiCompanyCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
        proveHistoricalCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof GLEIFEnhancedPublicOutput;
    privateInputTypes: {
        proveCompliance: [typeof GLEIFEnhancedComplianceData, typeof Signature, typeof UInt64, typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field), typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field)];
        proveMultiCompanyCompliance: [typeof GLEIFEnhancedComplianceData, typeof GLEIFEnhancedComplianceData, typeof Signature, typeof UInt64, typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field)];
        proveHistoricalCompliance: [typeof GLEIFEnhancedComplianceData, typeof Signature, typeof UInt64, typeof UInt64, typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field)];
    };
    rawMethods: {
        proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [GLEIFEnhancedComplianceData, Signature, UInt64, import("o1js/dist/node/lib/provable/field.js").Field, import("o1js/dist/node/lib/provable/field.js").Field] & any[]) => Promise<GLEIFEnhancedPublicOutput>;
        proveMultiCompanyCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [GLEIFEnhancedComplianceData, GLEIFEnhancedComplianceData, Signature, UInt64, import("o1js/dist/node/lib/provable/field.js").Field] & any[]) => Promise<GLEIFEnhancedPublicOutput>;
        proveHistoricalCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [GLEIFEnhancedComplianceData, Signature, UInt64, UInt64, import("o1js/dist/node/lib/provable/field.js").Field] & any[]) => Promise<GLEIFEnhancedPublicOutput>;
    };
} & {
    proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [GLEIFEnhancedComplianceData, Signature, UInt64, import("o1js/dist/node/lib/provable/field.js").Field, import("o1js/dist/node/lib/provable/field.js").Field] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, GLEIFEnhancedPublicOutput>>;
    proveMultiCompanyCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [GLEIFEnhancedComplianceData, GLEIFEnhancedComplianceData, Signature, UInt64, import("o1js/dist/node/lib/provable/field.js").Field] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, GLEIFEnhancedPublicOutput>>;
    proveHistoricalCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [GLEIFEnhancedComplianceData, Signature, UInt64, UInt64, import("o1js/dist/node/lib/provable/field.js").Field] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, GLEIFEnhancedPublicOutput>>;
};
declare const GLEIFEnhancedProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: GLEIFEnhancedPublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: GLEIFEnhancedPublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof GLEIFEnhancedPublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof GLEIFEnhancedPublicOutput;
    };
    fromJSON<S extends (new (...args: any) => Proof<unknown, unknown>) & {
        prototype: Proof<any, any>;
        fromJSON: typeof Proof.fromJSON;
        dummy: typeof Proof.dummy;
        publicInputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        publicOutputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        tag: () => {
            name: string;
        };
    } & {
        prototype: Proof<unknown, unknown>;
    }>(this: S, { maxProofsVerified, proof: proofString, publicInput: publicInputJson, publicOutput: publicOutputJson, }: import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof): Promise<Proof<import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicInputType"], import("o1js/dist/node/lib/provable/field.js").Field>, import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicOutputType"], import("o1js/dist/node/lib/provable/field.js").Field>>>;
    dummy<Input, OutPut>(publicInput: Input, publicOutput: OutPut, maxProofsVerified: 0 | 1 | 2, domainLog2?: number | undefined): Promise<Proof<Input, OutPut>>;
};
export declare class GLEIFEnhancedProof extends GLEIFEnhancedProof_base {
}
export declare class GLEIFEnhancedUtils {
    /**
     * Create enhanced compliance data from API response
     */
    static createEnhancedComplianceDataFromAPI(apiResponse: any, complianceScore?: number, riskLevel?: number): GLEIFEnhancedComplianceData;
    /**
     * Validate enhanced LEI format
     */
    static isValidEnhancedLEIFormat(lei: string): boolean;
    /**
     * Calculate compliance score based on multiple factors
     */
    static calculateComplianceScore(factors: {
        statusActive: boolean;
        recentUpdate: boolean;
        validJurisdiction: boolean;
        hasParentLEI: boolean;
        managingLouKnown: boolean;
    }): number;
}
export {};
