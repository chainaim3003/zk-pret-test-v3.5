import { Field, SmartContract, State, Signature, Bool, UInt64 } from 'o1js';
import { GLEIFEnhancedComplianceData, GLEIFEnhancedProof } from '../../zk-programs/with-sign/GLEIFEnhancedZKProgramWithSign.js';
/**
 * Enhanced Smart Contract that supports BOTH:
 * 1. Direct parameter verification (existing functionality)
 * 2. ZK proof verification (new off-chain capability)
 */
export declare class GLEIFEnhancedVerifierWithZKProofSmartContract extends SmartContract {
    isGLEIFCompliant: State<import("o1js/dist/node/lib/provable/bool.js").Bool>;
    complianceScore: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    riskLevel: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    lastVerificationTimestamp: State<UInt64>;
    totalVerifications: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    totalZKProofVerifications: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    lastVerificationWasZKProof: State<import("o1js/dist/node/lib/provable/bool.js").Bool>;
    zkProofVerificationHash: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyGLEIFComplianceWithParams(complianceData: GLEIFEnhancedComplianceData, oracleSignature: Signature): Promise<void>;
    verifyGLEIFComplianceWithZKProof(proof: GLEIFEnhancedProof): Promise<void>;
    verifyBatchGLEIFCompliance(complianceData: GLEIFEnhancedComplianceData, oracleSignature: Signature, zkProof: GLEIFEnhancedProof): Promise<void>;
    getEnhancedContractStats(): {
        isGLEIFCompliant: Bool;
        complianceScore: Field;
        riskLevel: Field;
        lastVerificationTimestamp: UInt64;
        totalVerifications: Field;
        totalZKProofVerifications: Field;
        lastVerificationWasZKProof: Bool;
        zkProofVerificationHash: Field;
    };
    getContractStats(): {
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        riskMitigationBase: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    verifyComplianceHistory(previousProofHash: Field, currentProof: GLEIFEnhancedProof): Promise<void>;
}
