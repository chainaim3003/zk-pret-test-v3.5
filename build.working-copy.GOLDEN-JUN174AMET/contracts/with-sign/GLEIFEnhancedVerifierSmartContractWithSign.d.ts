import { Bool, Field, SmartContract, State, CircuitString, Signature, UInt64, PublicKey, Provable } from 'o1js';
import { GLEIFEnhancedProof, GLEIFEnhancedComplianceData } from '../../zk-programs/with-sign/GLEIFEnhancedZKProgramWithSign.js';
declare const GLEIFSimplifiedComplianceAction_base: (new (value: {
    actionType: import("o1js/dist/node/lib/provable/field.js").Field;
    leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
    companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    timestamp: UInt64;
    verifier: PublicKey;
    proofHash: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    actionType: import("o1js/dist/node/lib/provable/field.js").Field;
    leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
    companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    timestamp: UInt64;
    verifier: PublicKey;
    proofHash: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    actionType: import("o1js/dist/node/lib/provable/field.js").Field;
    leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
    companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
    timestamp: UInt64;
    verifier: PublicKey;
    proofHash: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    actionType: bigint;
    leiHash: bigint;
    companyNameHash: bigint;
    complianceScore: bigint;
    riskLevel: bigint;
    timestamp: bigint;
    verifier: {
        x: bigint;
        isOdd: boolean;
    };
    proofHash: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        actionType: import("o1js/dist/node/lib/provable/field.js").Field;
        leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        timestamp: UInt64;
        verifier: PublicKey;
        proofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        actionType: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        leiHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        timestamp: bigint | UInt64;
        verifier: PublicKey | {
            x: bigint | import("o1js/dist/node/lib/provable/field.js").Field;
            isOdd: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        };
        proofHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        actionType: import("o1js/dist/node/lib/provable/field.js").Field;
        leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        timestamp: UInt64;
        verifier: PublicKey;
        proofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        actionType: import("o1js/dist/node/lib/provable/field.js").Field;
        leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        timestamp: UInt64;
        verifier: PublicKey;
        proofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        actionType: import("o1js/dist/node/lib/provable/field.js").Field;
        leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        timestamp: UInt64;
        verifier: PublicKey;
        proofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        actionType: string;
        leiHash: string;
        companyNameHash: string;
        complianceScore: string;
        riskLevel: string;
        timestamp: string;
        verifier: string;
        proofHash: string;
    };
    fromJSON: (x: {
        actionType: string;
        leiHash: string;
        companyNameHash: string;
        complianceScore: string;
        riskLevel: string;
        timestamp: string;
        verifier: string;
        proofHash: string;
    }) => {
        actionType: import("o1js/dist/node/lib/provable/field.js").Field;
        leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        timestamp: UInt64;
        verifier: PublicKey;
        proofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        actionType: import("o1js/dist/node/lib/provable/field.js").Field;
        leiHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        complianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        riskLevel: import("o1js/dist/node/lib/provable/field.js").Field;
        timestamp: UInt64;
        verifier: PublicKey;
        proofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class GLEIFSimplifiedComplianceAction extends GLEIFSimplifiedComplianceAction_base {
    static VERIFY: import("o1js/dist/node/lib/provable/field.js").Field;
    static UPDATE: import("o1js/dist/node/lib/provable/field.js").Field;
    static REVOKE: import("o1js/dist/node/lib/provable/field.js").Field;
    static GROUP_VERIFY: import("o1js/dist/node/lib/provable/field.js").Field;
    static HISTORICAL_VERIFY: import("o1js/dist/node/lib/provable/field.js").Field;
    static createVerifyAction(leiString: CircuitString, companyNameString: CircuitString, complianceScore: Field, riskLevel: Field, timestamp: UInt64, verifier: PublicKey, proofHash: Field): GLEIFSimplifiedComplianceAction;
    hash(): Field;
}
export declare class GLEIFEnhancedVerifierSmartContractWithSign extends SmartContract {
    isGLEIFCompliant: State<import("o1js/dist/node/lib/provable/bool.js").Bool>;
    riskMitigationBase: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    smartContractActive: State<import("o1js/dist/node/lib/provable/bool.js").Bool>;
    admin: State<PublicKey>;
    complianceMapRoot: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    complianceActionState: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    totalVerifications: State<UInt64>;
    reducer: {
        dispatch(action: GLEIFSimplifiedComplianceAction): void;
        reduce<State_1>(actions: import("o1js/dist/node/lib/provable/merkle-list.js").MerkleList<import("o1js/dist/node/lib/provable/merkle-list.js").MerkleList<GLEIFSimplifiedComplianceAction>>, stateType: Provable<State_1, any>, reduce: (state: State_1, action: GLEIFSimplifiedComplianceAction) => State_1, initial: State_1, options?: {
            maxUpdatesWithActions?: number | undefined;
            maxActionsPerUpdate?: number | undefined;
            skipActionStatePrecondition?: boolean | undefined;
        } | undefined): State_1;
        forEach(actions: import("o1js/dist/node/lib/provable/merkle-list.js").MerkleList<import("o1js/dist/node/lib/provable/merkle-list.js").MerkleList<GLEIFSimplifiedComplianceAction>>, reduce: (action: GLEIFSimplifiedComplianceAction) => void, options?: {
            maxUpdatesWithActions?: number | undefined;
            maxActionsPerUpdate?: number | undefined;
            skipActionStatePrecondition?: boolean | undefined;
        } | undefined): void;
        getActions({ fromActionState, endActionState, }?: {
            fromActionState?: import("o1js/dist/node/lib/provable/field.js").Field | undefined;
            endActionState?: import("o1js/dist/node/lib/provable/field.js").Field | undefined;
        } | undefined): import("o1js/dist/node/lib/provable/merkle-list.js").MerkleList<import("o1js/dist/node/lib/provable/merkle-list.js").MerkleList<GLEIFSimplifiedComplianceAction>>;
        fetchActions({ fromActionState, endActionState, }?: {
            fromActionState?: import("o1js/dist/node/lib/provable/field.js").Field | undefined;
            endActionState?: import("o1js/dist/node/lib/provable/field.js").Field | undefined;
        } | undefined): Promise<GLEIFSimplifiedComplianceAction[][]>;
    };
    events: {
        'compliance-verified': typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        'smart-contract-disabled': typeof PublicKey;
        'smart-contract-enabled': typeof PublicKey;
    };
    init(): void;
    /**
     * Verify GLEIF compliance with parameters (basic GLEIF checks only)
     */
    verifyGLEIFComplianceWithParams(input: GLEIFEnhancedComplianceData, oracleSignature: Signature): Promise<void>;
    /**
     * Verify GLEIF compliance using ZK Program proof (simple state update)
     * All complex business logic is handled in the ZK program off-chain
     */
    verifyGLEIFComplianceWithZKProof(proof: GLEIFEnhancedProof): Promise<void>;
    /**
     * Get contract statistics
     * (NOT a @method - this is a query function)
     */
    getContractStats(): {
        smartContractActive: Bool;
        isGLEIFCompliant: Bool;
        riskMitigationBase: Field;
        totalVerifications: UInt64;
    };
    /**
     * Emergency disable smart contract (admin only)
     */
    emergencyDisableSmartContract(): Promise<void>;
    /**
     * Re-enable smart contract (admin only)
     */
    enableSmartContract(): Promise<void>;
}
export {};
