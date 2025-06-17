import { GLEIFOptimSingleCompanySmartContract } from '../../contracts/with-sign/GLEIFOptimSingleCompanySmartContract.js';
/**
 * Utility function for GLEIF Merkle verification (without smart contract deployment)
 * This is equivalent to your existing GLEIFVerificationTestWithSignUtils.ts but using Merkle trees
 */
export declare function getGLEIFMerkleVerificationUtils(companyName: string, fieldsToReveal?: string[]): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFMerkleZKProgramWithSign.js").GLEIFMerklePublicOutput>>;
/**
 * Extended verification function that reveals more fields
 */
export declare function getGLEIFExtendedMerkleVerificationUtils(companyName: string, typeOfNet: string): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFMerkleZKProgramWithSign.js").GLEIFMerklePublicOutput>>;
/**
 * Comprehensive business logic verification (matching GLEIFOptimVerificationTestWithSign)
 * This function combines Merkle tree scalability with full business logic validation
 */
export declare function getGLEIFComprehensiveMerkleVerificationUtils(companyName: string): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFMerkleZKProgramWithSign.js").GLEIFComprehensivePublicOutput>>;
/**
 * Comprehensive verification WITH smart contract deployment and verification
 * This provides the complete bundling of all GLEIFOptimVerificationTestWithSign capabilities
 */
export declare function getGLEIFComprehensiveWithSmartContractUtils(companyName: string): Promise<{
    proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFMerkleZKProgramWithSign.js").GLEIFComprehensivePublicOutput>;
    zkApp: GLEIFOptimSingleCompanySmartContract;
    smartContractAddress: import("o1js/dist/node/lib/provable/crypto/signature.js").PublicKey;
    complianceStatus: boolean;
}>;
