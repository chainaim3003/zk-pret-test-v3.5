import { SmartContract, State, Field, Bool, PublicKey, Signature, UInt64, UInt32, CircuitString, MerkleMapWitness, Provable } from 'o1js';
declare const GLEIFCompanyData_base: (new (value: {
    lei: CircuitString;
    legalName: CircuitString;
    status: CircuitString;
    jurisdiction: CircuitString;
    registrationDate: UInt64;
    lastUpdateDate: UInt64;
    entityType: CircuitString;
}) => {
    lei: CircuitString;
    legalName: CircuitString;
    status: CircuitString;
    jurisdiction: CircuitString;
    registrationDate: UInt64;
    lastUpdateDate: UInt64;
    entityType: CircuitString;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    lei: CircuitString;
    legalName: CircuitString;
    status: CircuitString;
    jurisdiction: CircuitString;
    registrationDate: UInt64;
    lastUpdateDate: UInt64;
    entityType: CircuitString;
}, {
    lei: string;
    legalName: string;
    status: string;
    jurisdiction: string;
    registrationDate: bigint;
    lastUpdateDate: bigint;
    entityType: string;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        lei: CircuitString;
        legalName: CircuitString;
        status: CircuitString;
        jurisdiction: CircuitString;
        registrationDate: UInt64;
        lastUpdateDate: UInt64;
        entityType: CircuitString;
    };
} & {
    fromValue: (value: {
        lei: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        legalName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        status: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        jurisdiction: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        registrationDate: bigint | UInt64;
        lastUpdateDate: bigint | UInt64;
        entityType: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
    }) => {
        lei: CircuitString;
        legalName: CircuitString;
        status: CircuitString;
        jurisdiction: CircuitString;
        registrationDate: UInt64;
        lastUpdateDate: UInt64;
        entityType: CircuitString;
    };
    toInput: (x: {
        lei: CircuitString;
        legalName: CircuitString;
        status: CircuitString;
        jurisdiction: CircuitString;
        registrationDate: UInt64;
        lastUpdateDate: UInt64;
        entityType: CircuitString;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        lei: CircuitString;
        legalName: CircuitString;
        status: CircuitString;
        jurisdiction: CircuitString;
        registrationDate: UInt64;
        lastUpdateDate: UInt64;
        entityType: CircuitString;
    }) => {
        lei: {
            values: {
                value: string;
            }[];
        };
        legalName: {
            values: {
                value: string;
            }[];
        };
        status: {
            values: {
                value: string;
            }[];
        };
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
        registrationDate: string;
        lastUpdateDate: string;
        entityType: {
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
        legalName: {
            values: {
                value: string;
            }[];
        };
        status: {
            values: {
                value: string;
            }[];
        };
        jurisdiction: {
            values: {
                value: string;
            }[];
        };
        registrationDate: string;
        lastUpdateDate: string;
        entityType: {
            values: {
                value: string;
            }[];
        };
    }) => {
        lei: CircuitString;
        legalName: CircuitString;
        status: CircuitString;
        jurisdiction: CircuitString;
        registrationDate: UInt64;
        lastUpdateDate: UInt64;
        entityType: CircuitString;
    };
    empty: () => {
        lei: CircuitString;
        legalName: CircuitString;
        status: CircuitString;
        jurisdiction: CircuitString;
        registrationDate: UInt64;
        lastUpdateDate: UInt64;
        entityType: CircuitString;
    };
};
/**
 * GLEIF Company Data Structure
 * Represents essential GLEIF entity information in circuit-compatible format
 */
export declare class GLEIFCompanyData extends GLEIFCompanyData_base {
    hash(): Field;
    isCompliant(): Bool;
    isValidLEI(): Bool;
}
declare const GLEIFVerificationProof_base: (new (value: {
    companyData: GLEIFCompanyData;
    apiResponseHash: import("o1js/dist/node/lib/provable/field").Field;
    oracleSignature: Signature;
    verificationTimestamp: UInt64;
    blockHeight: UInt32;
    merkleRoot: import("o1js/dist/node/lib/provable/field").Field;
}) => {
    companyData: GLEIFCompanyData;
    apiResponseHash: import("o1js/dist/node/lib/provable/field").Field;
    oracleSignature: Signature;
    verificationTimestamp: UInt64;
    blockHeight: UInt32;
    merkleRoot: import("o1js/dist/node/lib/provable/field").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    companyData: GLEIFCompanyData;
    apiResponseHash: import("o1js/dist/node/lib/provable/field").Field;
    oracleSignature: Signature;
    verificationTimestamp: UInt64;
    blockHeight: UInt32;
    merkleRoot: import("o1js/dist/node/lib/provable/field").Field;
}, {
    companyData: {
        lei: string;
        legalName: string;
        status: string;
        jurisdiction: string;
        registrationDate: bigint;
        lastUpdateDate: bigint;
        entityType: string;
    };
    apiResponseHash: bigint;
    oracleSignature: any;
    verificationTimestamp: bigint;
    blockHeight: bigint;
    merkleRoot: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        companyData: GLEIFCompanyData;
        apiResponseHash: import("o1js/dist/node/lib/provable/field").Field;
        oracleSignature: Signature;
        verificationTimestamp: UInt64;
        blockHeight: UInt32;
        merkleRoot: import("o1js/dist/node/lib/provable/field").Field;
    };
} & {
    fromValue: (value: {
        companyData: GLEIFCompanyData | {
            lei: string | CircuitString | {
                values: import("o1js/dist/node/lib/provable/string").Character[];
            };
            legalName: string | CircuitString | {
                values: import("o1js/dist/node/lib/provable/string").Character[];
            };
            status: string | CircuitString | {
                values: import("o1js/dist/node/lib/provable/string").Character[];
            };
            jurisdiction: string | CircuitString | {
                values: import("o1js/dist/node/lib/provable/string").Character[];
            };
            registrationDate: bigint | UInt64;
            lastUpdateDate: bigint | UInt64;
            entityType: string | CircuitString | {
                values: import("o1js/dist/node/lib/provable/string").Character[];
            };
        };
        apiResponseHash: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        oracleSignature: any;
        verificationTimestamp: bigint | UInt64;
        blockHeight: bigint | UInt32;
        merkleRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        companyData: GLEIFCompanyData;
        apiResponseHash: import("o1js/dist/node/lib/provable/field").Field;
        oracleSignature: Signature;
        verificationTimestamp: UInt64;
        blockHeight: UInt32;
        merkleRoot: import("o1js/dist/node/lib/provable/field").Field;
    };
    toInput: (x: {
        companyData: GLEIFCompanyData;
        apiResponseHash: import("o1js/dist/node/lib/provable/field").Field;
        oracleSignature: Signature;
        verificationTimestamp: UInt64;
        blockHeight: UInt32;
        merkleRoot: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        companyData: GLEIFCompanyData;
        apiResponseHash: import("o1js/dist/node/lib/provable/field").Field;
        oracleSignature: Signature;
        verificationTimestamp: UInt64;
        blockHeight: UInt32;
        merkleRoot: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        companyData: {
            lei: {
                values: {
                    value: string;
                }[];
            };
            legalName: {
                values: {
                    value: string;
                }[];
            };
            status: {
                values: {
                    value: string;
                }[];
            };
            jurisdiction: {
                values: {
                    value: string;
                }[];
            };
            registrationDate: string;
            lastUpdateDate: string;
            entityType: {
                values: {
                    value: string;
                }[];
            };
        };
        apiResponseHash: string;
        oracleSignature: any;
        verificationTimestamp: string;
        blockHeight: string;
        merkleRoot: string;
    };
    fromJSON: (x: {
        companyData: {
            lei: {
                values: {
                    value: string;
                }[];
            };
            legalName: {
                values: {
                    value: string;
                }[];
            };
            status: {
                values: {
                    value: string;
                }[];
            };
            jurisdiction: {
                values: {
                    value: string;
                }[];
            };
            registrationDate: string;
            lastUpdateDate: string;
            entityType: {
                values: {
                    value: string;
                }[];
            };
        };
        apiResponseHash: string;
        oracleSignature: any;
        verificationTimestamp: string;
        blockHeight: string;
        merkleRoot: string;
    }) => {
        companyData: GLEIFCompanyData;
        apiResponseHash: import("o1js/dist/node/lib/provable/field").Field;
        oracleSignature: Signature;
        verificationTimestamp: UInt64;
        blockHeight: UInt32;
        merkleRoot: import("o1js/dist/node/lib/provable/field").Field;
    };
    empty: () => {
        companyData: GLEIFCompanyData;
        apiResponseHash: import("o1js/dist/node/lib/provable/field").Field;
        oracleSignature: Signature;
        verificationTimestamp: UInt64;
        blockHeight: UInt32;
        merkleRoot: import("o1js/dist/node/lib/provable/field").Field;
    };
};
/**
 * GLEIF Verification Proof Structure
 * Contains cryptographic proof of GLEIF API verification
 */
export declare class GLEIFVerificationProof extends GLEIFVerificationProof_base {
    verify(oraclePublicKey: PublicKey): Bool;
    hash(): Field;
}
declare const GLEIFComplianceAction_base: (new (value: {
    actionType: import("o1js/dist/node/lib/provable/field").Field;
    lei: CircuitString;
    status: CircuitString;
    timestamp: UInt64;
    verifier: PublicKey;
    proofHash: import("o1js/dist/node/lib/provable/field").Field;
}) => {
    actionType: import("o1js/dist/node/lib/provable/field").Field;
    lei: CircuitString;
    status: CircuitString;
    timestamp: UInt64;
    verifier: PublicKey;
    proofHash: import("o1js/dist/node/lib/provable/field").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    actionType: import("o1js/dist/node/lib/provable/field").Field;
    lei: CircuitString;
    status: CircuitString;
    timestamp: UInt64;
    verifier: PublicKey;
    proofHash: import("o1js/dist/node/lib/provable/field").Field;
}, {
    actionType: bigint;
    lei: string;
    status: string;
    timestamp: bigint;
    verifier: {
        x: bigint;
        isOdd: boolean;
    };
    proofHash: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        actionType: import("o1js/dist/node/lib/provable/field").Field;
        lei: CircuitString;
        status: CircuitString;
        timestamp: UInt64;
        verifier: PublicKey;
        proofHash: import("o1js/dist/node/lib/provable/field").Field;
    };
} & {
    fromValue: (value: {
        actionType: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        lei: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        status: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        timestamp: bigint | UInt64;
        verifier: PublicKey | {
            x: bigint | import("o1js/dist/node/lib/provable/field").Field;
            isOdd: boolean | import("o1js/dist/node/lib/provable/bool").Bool;
        };
        proofHash: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        actionType: import("o1js/dist/node/lib/provable/field").Field;
        lei: CircuitString;
        status: CircuitString;
        timestamp: UInt64;
        verifier: PublicKey;
        proofHash: import("o1js/dist/node/lib/provable/field").Field;
    };
    toInput: (x: {
        actionType: import("o1js/dist/node/lib/provable/field").Field;
        lei: CircuitString;
        status: CircuitString;
        timestamp: UInt64;
        verifier: PublicKey;
        proofHash: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        actionType: import("o1js/dist/node/lib/provable/field").Field;
        lei: CircuitString;
        status: CircuitString;
        timestamp: UInt64;
        verifier: PublicKey;
        proofHash: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        actionType: string;
        lei: {
            values: {
                value: string;
            }[];
        };
        status: {
            values: {
                value: string;
            }[];
        };
        timestamp: string;
        verifier: string;
        proofHash: string;
    };
    fromJSON: (x: {
        actionType: string;
        lei: {
            values: {
                value: string;
            }[];
        };
        status: {
            values: {
                value: string;
            }[];
        };
        timestamp: string;
        verifier: string;
        proofHash: string;
    }) => {
        actionType: import("o1js/dist/node/lib/provable/field").Field;
        lei: CircuitString;
        status: CircuitString;
        timestamp: UInt64;
        verifier: PublicKey;
        proofHash: import("o1js/dist/node/lib/provable/field").Field;
    };
    empty: () => {
        actionType: import("o1js/dist/node/lib/provable/field").Field;
        lei: CircuitString;
        status: CircuitString;
        timestamp: UInt64;
        verifier: PublicKey;
        proofHash: import("o1js/dist/node/lib/provable/field").Field;
    };
};
/**
 * Compliance Action for Reducer
 * Represents actions in the compliance history
 */
export declare class GLEIFComplianceAction extends GLEIFComplianceAction_base {
    static VERIFY: import("o1js/dist/node/lib/provable/field").Field;
    static UPDATE: import("o1js/dist/node/lib/provable/field").Field;
    static REVOKE: import("o1js/dist/node/lib/provable/field").Field;
    static createVerifyAction(lei: CircuitString, status: CircuitString, timestamp: UInt64, verifier: PublicKey, proofHash: Field): GLEIFComplianceAction;
    static createUpdateAction(lei: CircuitString, newStatus: CircuitString, timestamp: UInt64, verifier: PublicKey, proofHash: Field): GLEIFComplianceAction;
}
/**
 * GLEIF Compliance Verifier Smart Contract
 *
 * This contract provides:
 * 1. Cryptographic verification of GLEIF compliance data
 * 2. Historical compliance tracking with immutable audit trail
 * 3. Privacy-preserving compliance proofs
 * 4. Cross-chain verification capabilities
 * 5. Oracle integration with tamper-proof guarantees
 */
export declare class GLEIFComplianceVerifier extends SmartContract {
    isActive: State<import("o1js/dist/node/lib/provable/bool").Bool>;
    admin: State<PublicKey>;
    oraclePublicKey: State<PublicKey>;
    complianceMapRoot: State<import("o1js/dist/node/lib/provable/field").Field>;
    complianceActionState: State<import("o1js/dist/node/lib/provable/field").Field>;
    totalVerifications: State<UInt64>;
    contractMetadata: State<import("o1js/dist/node/lib/provable/field").Field>;
    reducer: {
        dispatch(action: GLEIFComplianceAction): void;
        reduce<State_1>(actions: import("o1js/dist/node/lib/provable/merkle-list").MerkleList<import("o1js/dist/node/lib/provable/merkle-list").MerkleList<GLEIFComplianceAction>>, stateType: Provable<State_1, any>, reduce: (state: State_1, action: GLEIFComplianceAction) => State_1, initial: State_1, options?: {
            maxUpdatesWithActions?: number | undefined;
            maxActionsPerUpdate?: number | undefined;
            skipActionStatePrecondition?: boolean | undefined;
        } | undefined): State_1;
        forEach(actions: import("o1js/dist/node/lib/provable/merkle-list").MerkleList<import("o1js/dist/node/lib/provable/merkle-list").MerkleList<GLEIFComplianceAction>>, reduce: (action: GLEIFComplianceAction) => void, options?: {
            maxUpdatesWithActions?: number | undefined;
            maxActionsPerUpdate?: number | undefined;
            skipActionStatePrecondition?: boolean | undefined;
        } | undefined): void;
        getActions({ fromActionState, endActionState, }?: {
            fromActionState?: import("o1js/dist/node/lib/provable/field").Field | undefined;
            endActionState?: import("o1js/dist/node/lib/provable/field").Field | undefined;
        } | undefined): import("o1js/dist/node/lib/provable/merkle-list").MerkleList<import("o1js/dist/node/lib/provable/merkle-list").MerkleList<GLEIFComplianceAction>>;
        fetchActions({ fromActionState, endActionState, }?: {
            fromActionState?: import("o1js/dist/node/lib/provable/field").Field | undefined;
            endActionState?: import("o1js/dist/node/lib/provable/field").Field | undefined;
        } | undefined): Promise<GLEIFComplianceAction[][]>;
    };
    events: {
        'gleif-verification': typeof GLEIFComplianceAction;
        'compliance-updated': typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
        'contract-disabled': typeof PublicKey;
        'oracle-updated': typeof PublicKey;
    };
    /**
     * Initialize the contract state after deployment
     * This must be called right after deployment to set up the contract
     */
    initializeContract(adminKey: PublicKey): Promise<void>;
    /**
     * Set the trusted oracle public key (admin only)
     */
    setOraclePublicKey(newOracleKey: PublicKey): Promise<void>;
    /**
     * Initialize admin (should be called right after deployment)
     */
    initializeAdmin(adminKey: PublicKey): Promise<void>;
    /**
     * Verify GLEIF compliance for a company
     * This is the main verification method that creates immutable compliance records
     */
    verifyGLEIFCompliance(proof: GLEIFVerificationProof, complianceMapWitness: MerkleMapWitness): Promise<void>;
    /**
     * Check if a company is currently GLEIF compliant
     * This method allows anyone to verify compliance without revealing sensitive data
     * (NOT a @method - this is a query function)
     */
    checkCompliance(lei: CircuitString, complianceMapWitness: MerkleMapWitness): Bool;
    /**
     * Update compliance status for an existing entity (oracle only)
     */
    updateComplianceStatus(proof: GLEIFVerificationProof, complianceMapWitness: MerkleMapWitness): Promise<void>;
    /**
     * Process accumulated compliance actions (for batch processing)
     * This method processes all pending actions in the reducer
     */
    processComplianceActions(): Promise<void>;
    /**
     * Generate a zero-knowledge proof of compliance without revealing entity details
     * This method enables privacy-preserving compliance verification
     * (NOT a @method - this is a query function)
     */
    proveComplianceZK(lei: CircuitString, complianceMapWitness: MerkleMapWitness, revealJurisdiction: Bool): Field;
    /**
     * Emergency disable function (admin only)
     * Disables the contract in case of security issues
     */
    emergencyDisable(): Promise<void>;
    /**
     * Re-enable contract (admin only)
     */
    reEnableContract(): Promise<void>;
    /**
     * Transfer admin rights (current admin only)
     */
    transferAdmin(newAdmin: PublicKey): Promise<void>;
    /**
     * Upgrade contract version (admin only)
     */
    upgradeVersion(newVersion: Field): Promise<void>;
    /**
     * Get contract statistics (view function)
     * Returns basic contract metrics
     * (NOT a @method - this is a query function)
     */
    getContractStats(): {
        isActive: Bool;
        totalVerifications: UInt64;
        metadata: Field;
    };
}
/**
 * Utility functions for GLEIF compliance verification
 */
export declare class GLEIFUtils {
    /**
     * Create a GLEIF company data structure from API response
     */
    static createCompanyDataFromAPI(apiResponse: any): GLEIFCompanyData;
    /**
     * Create a verification proof from oracle data
     */
    static createVerificationProof(companyData: GLEIFCompanyData, apiResponseHash: Field, oracleSignature: Signature, blockHeight: UInt32, merkleRoot?: Field): GLEIFVerificationProof;
    /**
     * Validate LEI format (simplified)
     */
    static isValidLEIFormat(lei: string): boolean;
    /**
     * Extract LEI from various input formats
     */
    static extractLEI(input: string): string | null;
}
export {};
