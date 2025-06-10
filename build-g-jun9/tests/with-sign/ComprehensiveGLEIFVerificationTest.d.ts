import { UInt64 } from 'o1js';
/**
 * Comprehensive GLEIF Verification Test - Demonstrating Both Parameter-Based and Proof-Based Verification
 *
 * This test follows the same pattern as BusinessProcessIntegrityVerificationFileTestWithSign.ts
 * and demonstrates both verification patterns working together.
 */
export declare function runComprehensiveGLEIFVerificationTest(companyName: string, typeOfNet?: string): Promise<{
    parameterVerification: boolean;
    proofVerification: boolean;
    compliance: import("o1js/dist/node/lib/provable/bool.js").Bool;
    finalState: {
        smartContractActive: import("o1js/dist/node/lib/provable/bool.js").Bool;
        isGLEIFCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        riskMitigationBase: import("o1js/dist/node/lib/provable/field.js").Field;
        totalVerifications: UInt64;
    };
}>;
