import { Mina, PrivateKey, PublicKey } from 'o1js';
export declare const Local: {
    getNetworkId: () => import("o1js").NetworkId;
    proofsEnabled: boolean;
    getNetworkConstants(): {
        genesisTimestamp: import("o1js/dist/node/lib/provable/int").UInt64;
        slotTime: import("o1js/dist/node/lib/provable/int").UInt64;
        accountCreationFee: import("o1js/dist/node/lib/provable/int").UInt64;
    };
    currentSlot(): import("o1js/dist/node/lib/provable/int").UInt32;
    hasAccount(publicKey: PublicKey, tokenId?: import("o1js/dist/node/lib/provable/field").Field | undefined): boolean;
    getAccount(publicKey: PublicKey, tokenId?: import("o1js/dist/node/lib/provable/field").Field | undefined): import("o1js/dist/node/bindings/mina-transaction/gen/transaction").Account;
    getNetworkState(): {
        snarkedLedgerHash: import("o1js/dist/node/lib/provable/field").Field;
        blockchainLength: import("o1js/dist/node/lib/provable/int").UInt32;
        minWindowDensity: import("o1js/dist/node/lib/provable/int").UInt32;
        totalCurrency: import("o1js/dist/node/lib/provable/int").UInt64;
        globalSlotSinceGenesis: import("o1js/dist/node/lib/provable/int").UInt32;
        stakingEpochData: {
            ledger: {
                hash: import("o1js/dist/node/lib/provable/field").Field;
                totalCurrency: import("o1js/dist/node/lib/provable/int").UInt64;
            };
            seed: import("o1js/dist/node/lib/provable/field").Field;
            startCheckpoint: import("o1js/dist/node/lib/provable/field").Field;
            lockCheckpoint: import("o1js/dist/node/lib/provable/field").Field;
            epochLength: import("o1js/dist/node/lib/provable/int").UInt32;
        };
        nextEpochData: {
            ledger: {
                hash: import("o1js/dist/node/lib/provable/field").Field;
                totalCurrency: import("o1js/dist/node/lib/provable/int").UInt64;
            };
            seed: import("o1js/dist/node/lib/provable/field").Field;
            startCheckpoint: import("o1js/dist/node/lib/provable/field").Field;
            lockCheckpoint: import("o1js/dist/node/lib/provable/field").Field;
            epochLength: import("o1js/dist/node/lib/provable/int").UInt32;
        };
    };
    sendTransaction(txn: Mina.Transaction<boolean, boolean>): Mina.PendingTransactionPromise;
    transaction(sender: Mina.FeePayerSpec, f: () => Promise<void>): import("o1js/dist/node/lib/mina/transaction").TransactionPromise<false, false>;
    applyJsonTransaction(json: string): void;
    fetchEvents(publicKey: PublicKey, tokenId?: import("o1js/dist/node/lib/provable/field").Field | undefined): Promise<any>;
    fetchActions(publicKey: PublicKey, actionStates?: Mina.ActionStates | undefined, tokenId?: import("o1js/dist/node/lib/provable/field").Field | undefined): Promise<{
        hash: string;
        actions: string[][];
    }[]>;
    getActions(publicKey: PublicKey, actionStates?: Mina.ActionStates | undefined, tokenId?: import("o1js/dist/node/lib/provable/field").Field | undefined): {
        hash: string;
        actions: string[][];
    }[];
    addAccount: (publicKey: PublicKey, balance: string) => void;
    testAccounts: [Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey, Mina.TestPublicKey];
    setGlobalSlot(slot: number | import("o1js/dist/node/lib/provable/int").UInt32): void;
    incrementGlobalSlot(increment: number | import("o1js/dist/node/lib/provable/int").UInt32): void;
    setBlockchainLength(height: import("o1js/dist/node/lib/provable/int").UInt32): void;
    setTotalCurrency(currency: import("o1js/dist/node/lib/provable/int").UInt64): void;
    setProofsEnabled(newProofsEnabled: boolean): void;
};
export declare const MCAdeployerAccount: Mina.TestPublicKey;
export declare const MCAdeployerKey: PrivateKey;
export declare const MCAsenderAccount: Mina.TestPublicKey;
export declare const MCAsenderKey: PrivateKey;
export declare const GLEIFdeployerAccount: Mina.TestPublicKey;
export declare const GLEIFdeployerKey: PrivateKey;
export declare const GLEIFsenderAccount: Mina.TestPublicKey;
export declare const GLEIFsenderKey: PrivateKey;
export declare const EXIMdeployerAccount: Mina.TestPublicKey;
export declare const EXIMdeployerKey: PrivateKey;
export declare const EXIMsenderAccount: Mina.TestPublicKey;
export declare const EXIMsenderKey: PrivateKey;
export declare const BusinessProverdeployerAccount: Mina.TestPublicKey;
export declare const BusinessProverdeployerKey: PrivateKey;
export declare const BusinessProversenderAccount: Mina.TestPublicKey;
export declare const BusinessProversenderKey: PrivateKey;
export declare const RiskProverdeployerAccount: Mina.TestPublicKey;
export declare const RiskProverdeployerKey: PrivateKey;
export declare const RiskProversenderAccount: Mina.TestPublicKey;
export declare const RiskProversenderKey: PrivateKey;
export declare const Registry: Map<string, {
    publicKey: PublicKey;
    privateKey: PrivateKey;
}>;
export declare function getPrivateKeyFor(key: string): PrivateKey;
export declare function getPublicKeyFor(key: string): PublicKey;
