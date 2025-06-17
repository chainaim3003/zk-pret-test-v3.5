import { SmartContract, State } from 'o1js';
import { GLEIFProof } from '../../zk-programs/with-sign/GLEIFZKProgramWithSign.js';
export declare class GLEIFVerifierSmartContract extends SmartContract {
    num: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyComplianceWithProof(proof: GLEIFProof): Promise<void>;
}
