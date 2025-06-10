/**
 * Main function for GLEIF Merkle-based verification with selective disclosure
 * This function demonstrates the power of Merkle trees for scalable GLEIF verification
 */
export declare function getGLEIFMerkleVerificationWithSign(companyName: string, typeOfNet: string, fieldsToReveal?: string[]): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFMerkleZKProgramWithSign.js").GLEIFMerklePublicOutput>>;
/**
 * Extended verification with more fields (6 fields including address info)
 */
export declare function getGLEIFExtendedMerkleVerification(companyName: string, typeOfNet: string): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFMerkleZKProgramWithSign.js").GLEIFMerklePublicOutput>>;
/**
 * Batch verification for multiple companies
 */
export declare function getGLEIFBatchMerkleVerification(companyNames: string[], typeOfNet: string): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFMerkleZKProgramWithSign.js").GLEIFBatchPublicOutput> | null>;
/**
 * Demonstration function showing all verification types
 */
export declare function demonstrateGLEIFMerkleCapabilities(companyName: string, typeOfNet: string): Promise<void>;
