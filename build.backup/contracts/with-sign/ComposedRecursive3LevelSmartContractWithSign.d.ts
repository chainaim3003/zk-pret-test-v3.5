import { SmartContract, State } from 'o1js';
import { ComposedProof } from '../../zk-programs/with-sign/Composed3levelZKProgramWithSign.js';
export declare class ComplianceVerifierSC extends SmartContract {
    verificationState: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyMaster(proof: ComposedProof): Promise<void>;
}
