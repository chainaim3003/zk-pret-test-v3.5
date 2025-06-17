/**
 * Main function for GLEIF Merkle-based verification with selective disclosure
 * This function demonstrates the power of Merkle trees for scalable GLEIF verification
 */
export declare function getGLEIFMerkleVerificationWithSign(companyName: string, fieldsToReveal?: string[]): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFMerkleZKProgramWithSign.js").GLEIFMerklePublicOutput>>;
/**
 * Extended verification with more fields (6 fields including address info)
 */
export declare function getGLEIFExtendedMerkleVerification(companyName: string): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFMerkleZKProgramWithSign.js").GLEIFMerklePublicOutput>>;
/**
 * Enhanced bundling demonstration with ALL GLEIFOptimVerificationTestWithSign capabilities
 */
export declare function demonstrateComprehensiveGLEIFMerkleBundling(companyName: string): Promise<{
    proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFMerkleZKProgramWithSign.js").GLEIFComprehensivePublicOutput>;
    zkApp: import("../../contracts/with-sign/GLEIFOptimSingleCompanySmartContract.js").GLEIFOptimSingleCompanySmartContract;
    smartContractAddress: import("o1js/dist/node/lib/provable/crypto/signature.js").PublicKey;
    complianceStatus: boolean;
}>;
