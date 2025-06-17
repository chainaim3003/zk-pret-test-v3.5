import { Field, Mina, PrivateKey, CircuitString, Signature, UInt64 } from 'o1js';
import { BusinessStdIntegrityOptimMerklePublicOutput } from '../../zk-programs/with-sign/BusinessStdIntegrityOptimMerkleZKProgramWithSign.js';
import { BusinessStdIntegrityOptimMerkleSmartContract } from '../../contracts/with-sign/BusinessStdIntegrityOptimMerkleSmartContract.js';
import { BusinessStdMerkleTree } from './BusinessStdIntegrityOptimMerkleUtils.js';
/**
 * REAL ZK Proof Test Utils for Business Standard Integrity Optimized Merkle Verification
 *
 * This is the ONLY utils file needed - contains 100% REAL ZK proof implementations.
 * NO MOCK FILES - this file contains the actual ZK circuit calls.
 *
 * Key Features:
 * ✅ Uses actual BusinessStdIntegrityOptimMerkleVerifier.proveCoreCompliance()
 * ✅ Validates all 24 mandatory fields - proof fails if any are missing
 * ✅ Proper business logic enforcement - proofs reflect real data compliance
 * ✅ Real oracle signatures and merkle tree validation
 * ✅ Comprehensive error handling with meaningful messages
 *
 * Business Rules Enforced:
 * - 24 core fields are MANDATORY → Proof generation fails if missing
 * - 14 additional fields are OPTIONAL → Skip gracefully if missing
 * - All data must pass ZK circuit validation logic
 */
export declare class BusinessStdIntegrityOptimMerkleTestUtils {
    static proofsEnabled: boolean;
    /**
     * Deploy local Mina blockchain and compile ZK programs
     */
    static localDeploy(): Promise<{
        Local: {
            getNetworkId: () => import("o1js").NetworkId;
            proofsEnabled: boolean;
            getNetworkConstants(): {
                genesisTimestamp: UInt64;
                slotTime: UInt64;
                accountCreationFee: UInt64;
            };
            currentSlot(): import("o1js/dist/node/lib/provable/int.js").UInt32;
            hasAccount(publicKey: import("o1js/dist/node/lib/provable/crypto/signature.js").PublicKey, tokenId?: import("o1js/dist/node/lib/provable/field.js").Field | undefined): boolean;
            getAccount(publicKey: import("o1js/dist/node/lib/provable/crypto/signature.js").PublicKey, tokenId?: import("o1js/dist/node/lib/provable/field.js").Field | undefined): import("o1js/dist/node/bindings/mina-transaction/gen/transaction.js").Account;
            getNetworkState(): {
                snarkedLedgerHash: import("o1js/dist/node/lib/provable/field.js").Field;
                blockchainLength: import("o1js/dist/node/lib/provable/int.js").UInt32;
                minWindowDensity: import("o1js/dist/node/lib/provable/int.js").UInt32;
                totalCurrency: UInt64;
                globalSlotSinceGenesis: import("o1js/dist/node/lib/provable/int.js").UInt32;
                stakingEpochData: {
                    ledger: {
                        hash: import("o1js/dist/node/lib/provable/field.js").Field;
                        totalCurrency: UInt64;
                    };
                    seed: import("o1js/dist/node/lib/provable/field.js").Field;
                    startCheckpoint: import("o1js/dist/node/lib/provable/field.js").Field;
                    lockCheckpoint: import("o1js/dist/node/lib/provable/field.js").Field;
                    epochLength: import("o1js/dist/node/lib/provable/int.js").UInt32;
                };
                nextEpochData: {
                    ledger: {
                        hash: import("o1js/dist/node/lib/provable/field.js").Field;
                        totalCurrency: UInt64;
                    };
                    seed: import("o1js/dist/node/lib/provable/field.js").Field;
                    startCheckpoint: import("o1js/dist/node/lib/provable/field.js").Field;
                    lockCheckpoint: import("o1js/dist/node/lib/provable/field.js").Field;
                    epochLength: import("o1js/dist/node/lib/provable/int.js").UInt32;
                };
            };
            sendTransaction(txn: Mina.Transaction<boolean, boolean>): Mina.PendingTransactionPromise;
            transaction(sender: Mina.FeePayerSpec, f: () => Promise<void>): import("o1js/dist/node/lib/mina/transaction.js").TransactionPromise<false, false>;
            applyJsonTransaction(json: string): void;
            fetchEvents(publicKey: import("o1js/dist/node/lib/provable/crypto/signature.js").PublicKey, tokenId?: import("o1js/dist/node/lib/provable/field.js").Field | undefined): Promise<any>;
            fetchActions(publicKey: import("o1js/dist/node/lib/provable/crypto/signature.js").PublicKey, actionStates?: Mina.ActionStates | undefined, tokenId?: import("o1js/dist/node/lib/provable/field.js").Field | undefined): Promise<{
                hash: string;
                actions: string[][];
            }[]>;
            getActions(publicKey: import("o1js/dist/node/lib/provable/crypto/signature.js").PublicKey, actionStates?: Mina.ActionStates | undefined, tokenId?: import("o1js/dist/node/lib/provable/field.js").Field | undefined): {
                hash: string;
                actions: string[][];
            }[];
            addAccount: (publicKey: import("o1js/dist/node/lib/provable/crypto/signature.js").PublicKey, balance: string) => void;
            testAccounts: [Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey];
            setGlobalSlot(slot: number | import("o1js/dist/node/lib/provable/int.js").UInt32): void;
            incrementGlobalSlot(increment: number | import("o1js/dist/node/lib/provable/int.js").UInt32): void;
            setBlockchainLength(height: import("o1js/dist/node/lib/provable/int.js").UInt32): void;
            setTotalCurrency(currency: UInt64): void;
            setProofsEnabled(newProofsEnabled: boolean): void;
        };
        deployerKey: PrivateKey;
        deployerAccount: Mina.TestPublicKey;
        senderKey: PrivateKey;
        senderAccount: Mina.TestPublicKey;
        zkAppPrivateKey: PrivateKey;
        zkAppAddress: import("o1js/dist/node/lib/provable/crypto/signature.js").PublicKey;
        zkApp: BusinessStdIntegrityOptimMerkleSmartContract;
        compilationResult: {
            verificationKey: {
                data: string;
                hash: import("o1js/dist/node/lib/provable/field.js").Field;
            };
        };
    }>;
    /**
     * Create oracle signature using the correct BPMN key from registry
     */
    static createOracleSignature(merkleRoot: Field): {
        signature: Signature;
        privateKey: PrivateKey;
    };
    /**
     * Create Business Standard Merkle Tree from BL data
     */
    static createBLMerkleTree(blData: any): Promise<BusinessStdMerkleTree>;
    /**
     * Validate critical field requirements before proof generation
     */
    static validateCriticalFields(values: CircuitString[], fieldNames: string[], requiredCount?: number): boolean;
    /**
     * Generate REAL Core Compliance Proof (24 required fields)
     *
     * This method generates ACTUAL ZK proofs using the real BusinessStdIntegrityOptimMerkleVerifier
     * NO MOCKS - all data must actually comply with business rules
     */
    static generateCoreComplianceProof(blData: any): Promise<{
        proof: any;
        publicOutput: BusinessStdIntegrityOptimMerklePublicOutput;
    }>;
    /**
     * Generate REAL Enhanced Compliance Proof (24 core + 14 additional fields)
     *
     * Core fields are MANDATORY, additional fields are OPTIONAL
     */
    static generateEnhancedComplianceProof(blData: any): Promise<{
        proof: any;
        publicOutput: BusinessStdIntegrityOptimMerklePublicOutput;
    }>;
    /**
     * Deploy smart contract to local blockchain
     */
    static deployContract(zkApp: BusinessStdIntegrityOptimMerkleSmartContract, zkAppPrivateKey: PrivateKey, deployerKey: PrivateKey): Promise<void>;
    /**
     * Test core compliance verification on smart contract
     */
    static testCoreCompliance(zkApp: BusinessStdIntegrityOptimMerkleSmartContract, proof: any, senderKey: PrivateKey): Promise<void>;
    /**
     * Test enhanced compliance verification on smart contract
     */
    static testEnhancedCompliance(zkApp: BusinessStdIntegrityOptimMerkleSmartContract, proof: any, senderKey: PrivateKey): Promise<void>;
    /**
     * Run comprehensive test with REAL ZK proofs
     *
     * This is the main entry point that tests the complete flow:
     * 1. Setup local blockchain and compile programs
     * 2. Deploy smart contract
     * 3. Generate and verify REAL ZK proofs
     * 4. Test contract interactions
     */
    static runComprehensiveTest(blData: any): Promise<{
        success: boolean;
        coreResult: {
            proof: any;
            publicOutput: BusinessStdIntegrityOptimMerklePublicOutput;
        };
        enhancedResult: {
            proof: any;
            publicOutput: BusinessStdIntegrityOptimMerklePublicOutput;
        };
        contractState: {
            merkleRoot: import("o1js/dist/node/lib/provable/field.js").Field;
            totalVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
            successfulVerifications: import("o1js/dist/node/lib/provable/field.js").Field;
            successRate: import("o1js/dist/node/lib/provable/field.js").Field;
        };
        error?: undefined;
    } | {
        success: boolean;
        error: string;
        coreResult?: undefined;
        enhancedResult?: undefined;
        contractState?: undefined;
    }>;
}
