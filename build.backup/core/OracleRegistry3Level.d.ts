import { PrivateKey, PublicKey } from 'o1js';
export declare const AuthorityRegistry: Map<string, {
    publicKey: PublicKey;
    privateKey: PrivateKey;
}>;
export declare function initializeRegistry(testAccounts: {
    key: PrivateKey;
}[]): void;
export declare function getAuthorityKeys(authority: string): {
    publicKey: PublicKey;
    privateKey: PrivateKey;
};
