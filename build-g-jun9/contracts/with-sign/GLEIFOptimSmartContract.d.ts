import { SmartContract, State, UInt64 } from 'o1js';
import { GLEIFOptimProof } from '../../zk-programs/with-sign/GLEIFOptimZKProgram.js';
export declare class GLEIFOptimSmartContract extends SmartContract {
    GLEIFCompliant: State<import("o1js/dist/node/lib/provable/bool.js").Bool>;
    totalVerifications: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    lastVerificationTime: State<UInt64>;
    init(): void;
    verifyOptimizedComplianceWithProof(proof: GLEIFOptimProof): Promise<void>;
    /**
     * Reset compliance status (admin function)
     */
    resetCompliance(): Promise<void>;
}
