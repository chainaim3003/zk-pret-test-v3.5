import { SmartContract, State } from 'o1js';
import { EXIMProof } from '../../zk-programs/with-sign/EXIMZKProgramWithSign.js';
export declare class EXIMVerifierSmartContract extends SmartContract {
    num: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyComplianceWithProof(proof: EXIMProof): Promise<void>;
}
