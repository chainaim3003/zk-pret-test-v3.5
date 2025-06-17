import { SmartContract, State } from 'o1js';
import { SecretHashProof } from './SecretHash.js';
export declare class HashVerifier extends SmartContract {
    storedHash: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    verifyProof(proof: SecretHashProof): Promise<void>;
}
