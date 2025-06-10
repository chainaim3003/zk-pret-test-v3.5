/**
 * Utility function for GLEIF Merkle verification (without smart contract deployment)
 * This is equivalent to your existing GLEIFVerificationTestWithSignUtils.ts but using Merkle trees
 */
export declare function getGLEIFMerkleVerificationUtils(companyName: string, typeOfNet: string, fieldsToReveal?: string[]): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFMerkleZKProgramWithSign.js").GLEIFMerklePublicOutput>>;
/**
 * Extended verification function that reveals more fields
 */
export declare function getGLEIFExtendedMerkleVerificationUtils(companyName: string, typeOfNet: string): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, import("../../zk-programs/with-sign/GLEIFMerkleZKProgramWithSign.js").GLEIFMerklePublicOutput>>;
/**
 * Comparison function to show the difference between original and Merkle approaches
 */
export declare function compareGLEIFApproaches(companyName: string, typeOfNet: string): Promise<void>;
