import { Field, CircuitString } from 'o1js';
export declare const MERKLE_TREE_HEIGHT = 7;
declare const MerkleWitness7_base: typeof import("o1js/dist/node/lib/provable/merkle-tree").BaseMerkleWitness;
export declare class MerkleWitness7 extends MerkleWitness7_base {
}
declare const GLEIFLegalAddressBundle_base: (new (value: {
    country: CircuitString;
    city: CircuitString;
    addressLines: CircuitString;
    postalCode: CircuitString;
    region: CircuitString;
}) => {
    country: CircuitString;
    city: CircuitString;
    addressLines: CircuitString;
    postalCode: CircuitString;
    region: CircuitString;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    country: CircuitString;
    city: CircuitString;
    addressLines: CircuitString;
    postalCode: CircuitString;
    region: CircuitString;
}, {
    country: string;
    city: string;
    addressLines: string;
    postalCode: string;
    region: string;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        country: CircuitString;
        city: CircuitString;
        addressLines: CircuitString;
        postalCode: CircuitString;
        region: CircuitString;
    };
} & {
    fromValue: (value: {
        country: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        city: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        addressLines: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        postalCode: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        region: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
    }) => {
        country: CircuitString;
        city: CircuitString;
        addressLines: CircuitString;
        postalCode: CircuitString;
        region: CircuitString;
    };
    toInput: (x: {
        country: CircuitString;
        city: CircuitString;
        addressLines: CircuitString;
        postalCode: CircuitString;
        region: CircuitString;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        country: CircuitString;
        city: CircuitString;
        addressLines: CircuitString;
        postalCode: CircuitString;
        region: CircuitString;
    }) => {
        country: {
            values: {
                value: string;
            }[];
        };
        city: {
            values: {
                value: string;
            }[];
        };
        addressLines: {
            values: {
                value: string;
            }[];
        };
        postalCode: {
            values: {
                value: string;
            }[];
        };
        region: {
            values: {
                value: string;
            }[];
        };
    };
    fromJSON: (x: {
        country: {
            values: {
                value: string;
            }[];
        };
        city: {
            values: {
                value: string;
            }[];
        };
        addressLines: {
            values: {
                value: string;
            }[];
        };
        postalCode: {
            values: {
                value: string;
            }[];
        };
        region: {
            values: {
                value: string;
            }[];
        };
    }) => {
        country: CircuitString;
        city: CircuitString;
        addressLines: CircuitString;
        postalCode: CircuitString;
        region: CircuitString;
    };
    empty: () => {
        country: CircuitString;
        city: CircuitString;
        addressLines: CircuitString;
        postalCode: CircuitString;
        region: CircuitString;
    };
};
/**
 * Structured data bundles for selective disclosure in Merkle trees
 */
export declare class GLEIFLegalAddressBundle extends GLEIFLegalAddressBundle_base {
    hash(): Field;
}
declare const GLEIFHeadquartersAddressBundle_base: (new (value: {
    country: CircuitString;
    city: CircuitString;
    addressLines: CircuitString;
    postalCode: CircuitString;
    region: CircuitString;
}) => {
    country: CircuitString;
    city: CircuitString;
    addressLines: CircuitString;
    postalCode: CircuitString;
    region: CircuitString;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    country: CircuitString;
    city: CircuitString;
    addressLines: CircuitString;
    postalCode: CircuitString;
    region: CircuitString;
}, {
    country: string;
    city: string;
    addressLines: string;
    postalCode: string;
    region: string;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        country: CircuitString;
        city: CircuitString;
        addressLines: CircuitString;
        postalCode: CircuitString;
        region: CircuitString;
    };
} & {
    fromValue: (value: {
        country: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        city: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        addressLines: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        postalCode: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        region: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
    }) => {
        country: CircuitString;
        city: CircuitString;
        addressLines: CircuitString;
        postalCode: CircuitString;
        region: CircuitString;
    };
    toInput: (x: {
        country: CircuitString;
        city: CircuitString;
        addressLines: CircuitString;
        postalCode: CircuitString;
        region: CircuitString;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        country: CircuitString;
        city: CircuitString;
        addressLines: CircuitString;
        postalCode: CircuitString;
        region: CircuitString;
    }) => {
        country: {
            values: {
                value: string;
            }[];
        };
        city: {
            values: {
                value: string;
            }[];
        };
        addressLines: {
            values: {
                value: string;
            }[];
        };
        postalCode: {
            values: {
                value: string;
            }[];
        };
        region: {
            values: {
                value: string;
            }[];
        };
    };
    fromJSON: (x: {
        country: {
            values: {
                value: string;
            }[];
        };
        city: {
            values: {
                value: string;
            }[];
        };
        addressLines: {
            values: {
                value: string;
            }[];
        };
        postalCode: {
            values: {
                value: string;
            }[];
        };
        region: {
            values: {
                value: string;
            }[];
        };
    }) => {
        country: CircuitString;
        city: CircuitString;
        addressLines: CircuitString;
        postalCode: CircuitString;
        region: CircuitString;
    };
    empty: () => {
        country: CircuitString;
        city: CircuitString;
        addressLines: CircuitString;
        postalCode: CircuitString;
        region: CircuitString;
    };
};
export declare class GLEIFHeadquartersAddressBundle extends GLEIFHeadquartersAddressBundle_base {
    hash(): Field;
}
declare const GLEIFBusinessMetadataBundle_base: (new (value: {
    legalForm: CircuitString;
    jurisdiction: CircuitString;
    category: CircuitString;
    status: CircuitString;
    expiration: CircuitString;
}) => {
    legalForm: CircuitString;
    jurisdiction: CircuitString;
    category: CircuitString;
    status: CircuitString;
    expiration: CircuitString;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    legalForm: CircuitString;
    jurisdiction: CircuitString;
    category: CircuitString;
    status: CircuitString;
    expiration: CircuitString;
}, {
    legalForm: string;
    jurisdiction: string;
    category: string;
    status: string;
    expiration: string;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        legalForm: CircuitString;
        jurisdiction: CircuitString;
        category: CircuitString;
        status: CircuitString;
        expiration: CircuitString;
    };
} & {
    fromValue: (value: {
        legalForm: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        jurisdiction: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        category: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        status: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        expiration: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
    }) => {
        legalForm: CircuitString;
        jurisdiction: CircuitString;
        category: CircuitString;
        status: CircuitString;
        expiration: CircuitString;
    };
    toInput: (x: {
        legalForm: CircuitString;
        jurisdiction: CircuitString;
        category: CircuitString;
        status: CircuitString;
        expiration: CircuitString;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        legalForm: CircuitString;
        jurisdiction: CircuitString;
        category: CircuitString;
        status: CircuitString;
        expiration: CircuitString;
    }) => {
        legalForm: {
            values: {
                value: string;
            }[];
        };
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
        category: {
            values: {
                value: string;
            }[];
        };
        status: {
            values: {
                value: string;
            }[];
        };
        expiration: {
            values: {
                value: string;
            }[];
        };
    };
    fromJSON: (x: {
        legalForm: {
            values: {
                value: string;
            }[];
        };
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
        category: {
            values: {
                value: string;
            }[];
        };
        status: {
            values: {
                value: string;
            }[];
        };
        expiration: {
            values: {
                value: string;
            }[];
        };
    }) => {
        legalForm: CircuitString;
        jurisdiction: CircuitString;
        category: CircuitString;
        status: CircuitString;
        expiration: CircuitString;
    };
    empty: () => {
        legalForm: CircuitString;
        jurisdiction: CircuitString;
        category: CircuitString;
        status: CircuitString;
        expiration: CircuitString;
    };
};
export declare class GLEIFBusinessMetadataBundle extends GLEIFBusinessMetadataBundle_base {
    hash(): Field;
}
declare const GLEIFRegistrationInfoBundle_base: (new (value: {
    initialRegistrationDate: CircuitString;
    lastUpdateDate: CircuitString;
    nextRenewalDate: CircuitString;
    managingLou: CircuitString;
    corroborationLevel: CircuitString;
}) => {
    initialRegistrationDate: CircuitString;
    lastUpdateDate: CircuitString;
    nextRenewalDate: CircuitString;
    managingLou: CircuitString;
    corroborationLevel: CircuitString;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    initialRegistrationDate: CircuitString;
    lastUpdateDate: CircuitString;
    nextRenewalDate: CircuitString;
    managingLou: CircuitString;
    corroborationLevel: CircuitString;
}, {
    initialRegistrationDate: string;
    lastUpdateDate: string;
    nextRenewalDate: string;
    managingLou: string;
    corroborationLevel: string;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        managingLou: CircuitString;
        corroborationLevel: CircuitString;
    };
} & {
    fromValue: (value: {
        initialRegistrationDate: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        lastUpdateDate: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        nextRenewalDate: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        managingLou: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        corroborationLevel: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
    }) => {
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        managingLou: CircuitString;
        corroborationLevel: CircuitString;
    };
    toInput: (x: {
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        managingLou: CircuitString;
        corroborationLevel: CircuitString;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        managingLou: CircuitString;
        corroborationLevel: CircuitString;
    }) => {
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
    };
    fromJSON: (x: {
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
    }) => {
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        managingLou: CircuitString;
        corroborationLevel: CircuitString;
    };
    empty: () => {
        initialRegistrationDate: CircuitString;
        lastUpdateDate: CircuitString;
        nextRenewalDate: CircuitString;
        managingLou: CircuitString;
        corroborationLevel: CircuitString;
    };
};
export declare class GLEIFRegistrationInfoBundle extends GLEIFRegistrationInfoBundle_base {
    hash(): Field;
}
export declare enum GLEIFMerkleFieldIndex {
    LEGAL_ADDRESS_BUNDLE = 0,
    HEADQUARTERS_ADDRESS_BUNDLE = 1,
    BUSINESS_METADATA_BUNDLE = 2,
    REGISTRATION_INFO_BUNDLE = 3,
    LEGAL_NAME = 4,
    LEI = 5,
    OTHER_NAMES = 6,
    PARENT_LEI = 7,
    SUBSIDIARIES_INFO = 8,
    BIC_CODES = 9,
    MIC_CODES = 10,
    COMPLIANCE_INDICATORS = 11
}
declare const GLEIFGroupAnalysis_base: (new (value: {
    groupId: import("o1js/dist/node/lib/provable/field").Field;
    totalEntities: import("o1js/dist/node/lib/provable/field").Field;
    parentLEI: CircuitString;
    hierarchyLevel: import("o1js/dist/node/lib/provable/field").Field;
    averageComplianceScore: import("o1js/dist/node/lib/provable/field").Field;
    groupRiskLevel: import("o1js/dist/node/lib/provable/field").Field;
    hasSubsidiaries: import("o1js/dist/node/lib/provable/bool").Bool;
    isSubsidiary: import("o1js/dist/node/lib/provable/bool").Bool;
}) => {
    groupId: import("o1js/dist/node/lib/provable/field").Field;
    totalEntities: import("o1js/dist/node/lib/provable/field").Field;
    parentLEI: CircuitString;
    hierarchyLevel: import("o1js/dist/node/lib/provable/field").Field;
    averageComplianceScore: import("o1js/dist/node/lib/provable/field").Field;
    groupRiskLevel: import("o1js/dist/node/lib/provable/field").Field;
    hasSubsidiaries: import("o1js/dist/node/lib/provable/bool").Bool;
    isSubsidiary: import("o1js/dist/node/lib/provable/bool").Bool;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    groupId: import("o1js/dist/node/lib/provable/field").Field;
    totalEntities: import("o1js/dist/node/lib/provable/field").Field;
    parentLEI: CircuitString;
    hierarchyLevel: import("o1js/dist/node/lib/provable/field").Field;
    averageComplianceScore: import("o1js/dist/node/lib/provable/field").Field;
    groupRiskLevel: import("o1js/dist/node/lib/provable/field").Field;
    hasSubsidiaries: import("o1js/dist/node/lib/provable/bool").Bool;
    isSubsidiary: import("o1js/dist/node/lib/provable/bool").Bool;
}, {
    groupId: bigint;
    totalEntities: bigint;
    parentLEI: string;
    hierarchyLevel: bigint;
    averageComplianceScore: bigint;
    groupRiskLevel: bigint;
    hasSubsidiaries: boolean;
    isSubsidiary: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        groupId: import("o1js/dist/node/lib/provable/field").Field;
        totalEntities: import("o1js/dist/node/lib/provable/field").Field;
        parentLEI: CircuitString;
        hierarchyLevel: import("o1js/dist/node/lib/provable/field").Field;
        averageComplianceScore: import("o1js/dist/node/lib/provable/field").Field;
        groupRiskLevel: import("o1js/dist/node/lib/provable/field").Field;
        hasSubsidiaries: import("o1js/dist/node/lib/provable/bool").Bool;
        isSubsidiary: import("o1js/dist/node/lib/provable/bool").Bool;
    };
} & {
    fromValue: (value: {
        groupId: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        totalEntities: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        parentLEI: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        hierarchyLevel: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        averageComplianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        groupRiskLevel: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        hasSubsidiaries: boolean | import("o1js/dist/node/lib/provable/bool").Bool;
        isSubsidiary: boolean | import("o1js/dist/node/lib/provable/bool").Bool;
    }) => {
        groupId: import("o1js/dist/node/lib/provable/field").Field;
        totalEntities: import("o1js/dist/node/lib/provable/field").Field;
        parentLEI: CircuitString;
        hierarchyLevel: import("o1js/dist/node/lib/provable/field").Field;
        averageComplianceScore: import("o1js/dist/node/lib/provable/field").Field;
        groupRiskLevel: import("o1js/dist/node/lib/provable/field").Field;
        hasSubsidiaries: import("o1js/dist/node/lib/provable/bool").Bool;
        isSubsidiary: import("o1js/dist/node/lib/provable/bool").Bool;
    };
    toInput: (x: {
        groupId: import("o1js/dist/node/lib/provable/field").Field;
        totalEntities: import("o1js/dist/node/lib/provable/field").Field;
        parentLEI: CircuitString;
        hierarchyLevel: import("o1js/dist/node/lib/provable/field").Field;
        averageComplianceScore: import("o1js/dist/node/lib/provable/field").Field;
        groupRiskLevel: import("o1js/dist/node/lib/provable/field").Field;
        hasSubsidiaries: import("o1js/dist/node/lib/provable/bool").Bool;
        isSubsidiary: import("o1js/dist/node/lib/provable/bool").Bool;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        groupId: import("o1js/dist/node/lib/provable/field").Field;
        totalEntities: import("o1js/dist/node/lib/provable/field").Field;
        parentLEI: CircuitString;
        hierarchyLevel: import("o1js/dist/node/lib/provable/field").Field;
        averageComplianceScore: import("o1js/dist/node/lib/provable/field").Field;
        groupRiskLevel: import("o1js/dist/node/lib/provable/field").Field;
        hasSubsidiaries: import("o1js/dist/node/lib/provable/bool").Bool;
        isSubsidiary: import("o1js/dist/node/lib/provable/bool").Bool;
    }) => {
        groupId: string;
        totalEntities: string;
        parentLEI: {
            values: {
                value: string;
            }[];
        };
        hierarchyLevel: string;
        averageComplianceScore: string;
        groupRiskLevel: string;
        hasSubsidiaries: boolean;
        isSubsidiary: boolean;
    };
    fromJSON: (x: {
        groupId: string;
        totalEntities: string;
        parentLEI: {
            values: {
                value: string;
            }[];
        };
        hierarchyLevel: string;
        averageComplianceScore: string;
        groupRiskLevel: string;
        hasSubsidiaries: boolean;
        isSubsidiary: boolean;
    }) => {
        groupId: import("o1js/dist/node/lib/provable/field").Field;
        totalEntities: import("o1js/dist/node/lib/provable/field").Field;
        parentLEI: CircuitString;
        hierarchyLevel: import("o1js/dist/node/lib/provable/field").Field;
        averageComplianceScore: import("o1js/dist/node/lib/provable/field").Field;
        groupRiskLevel: import("o1js/dist/node/lib/provable/field").Field;
        hasSubsidiaries: import("o1js/dist/node/lib/provable/bool").Bool;
        isSubsidiary: import("o1js/dist/node/lib/provable/bool").Bool;
    };
    empty: () => {
        groupId: import("o1js/dist/node/lib/provable/field").Field;
        totalEntities: import("o1js/dist/node/lib/provable/field").Field;
        parentLEI: CircuitString;
        hierarchyLevel: import("o1js/dist/node/lib/provable/field").Field;
        averageComplianceScore: import("o1js/dist/node/lib/provable/field").Field;
        groupRiskLevel: import("o1js/dist/node/lib/provable/field").Field;
        hasSubsidiaries: import("o1js/dist/node/lib/provable/bool").Bool;
        isSubsidiary: import("o1js/dist/node/lib/provable/bool").Bool;
    };
};
export declare class GLEIFGroupAnalysis extends GLEIFGroupAnalysis_base {
    hash(): Field;
}
export declare class GLEIFStructuredMerkleTree {
    private tree;
    private fieldMapping;
    private dataStore;
    private fieldCategories;
    private optimizationData;
    values: Array<{
        fieldName: string;
        grouping: string;
        value: Field;
    }>;
    constructor(gleifData?: any);
    private initializeFieldMappings;
    /**
     * Get the current Merkle root
     */
    get root(): Field;
    /**
     * Set a field value in the Merkle tree
     */
    setField(fieldName: string, value: Field): void;
    /**
     * Helper method to get the category of a field
     */
    private getFieldCategory;
    /**
     * Get a field value from the data store
     */
    getField(fieldName: string): Field;
    /**
     * Get a field value as CircuitString
     */
    getFieldAsCircuitString(fieldName: string): CircuitString;
    /**
     * Generate a Merkle witness for a specific field
     */
    witness(fieldName: string): MerkleWitness7;
    /**
     * Populate the tree from GLEIF API response
     */
    populateFromGLEIFData(apiResponse: any): void;
    /**
     * Get summary of the tree structure
     */
    getSummary(): {
        root: string;
        populatedFields: string[];
        totalFields: number;
    };
    /**
     * Get optimization analysis for the merkle tree
     */
    getOptimizationAnalysis(): {
        totalFields: number;
        populatedFields: number;
        emptyFields: number;
        storageEfficiency: number;
        recommendedOptimizations: string[];
        totalGroups: number;
        individualFields: number;
        bundledFields: number;
        estimatedFieldsInBundles: number;
        constraintCostAll: number;
        constraintCostCore: number;
        constraintCostWithAddress: number;
    };
    /**
     * Get all available field names
     */
    getAvailableFields(): string[];
    /**
     * Get fields by category
     */
    getFieldsByCategory(category: string): string[];
    /**
     * Get all field categories
     */
    getFieldCategories(): string[];
}
export declare class GLEIFGroupAnalyzer {
    /**
     * Analyze group structure from multiple GLEIF entities
     */
    static analyzeGroup(entities: any[]): GLEIFGroupAnalysis;
    /**
     * Create group Merkle tree with multiple entities
     */
    static createGroupMerkleTree(entities: any[]): {
        tree: GLEIFStructuredMerkleTree;
        groupAnalysis: GLEIFGroupAnalysis;
        entityTrees: GLEIFStructuredMerkleTree[];
    };
    /**
     * Identify related entities by jurisdiction, managing LOU, or other indicators
     */
    static identifyRelatedEntities(primaryEntity: any, allEntities: any[]): any[];
    private static areNamesRelated;
    private static hasRelationship;
}
export declare class GLEIFMerkleUtils {
    /**
     * Create a complete Merkle tree from GLEIF API response
     */
    static createFromGLEIFResponse(apiResponse: any): GLEIFStructuredMerkleTree;
    /**
     * Verify Merkle proof for a specific field
     */
    static verifyFieldProof(tree: GLEIFStructuredMerkleTree, fieldName: string, expectedValue: Field): boolean;
    /**
     * Generate proof bundle for selective disclosure
     */
    static generateProofBundle(tree: GLEIFStructuredMerkleTree, fieldsToProve: string[]): {
        proofs: Array<{
            field: string;
            witness: MerkleWitness7;
            value: Field;
        }>;
        root: Field;
    };
}
export {};
