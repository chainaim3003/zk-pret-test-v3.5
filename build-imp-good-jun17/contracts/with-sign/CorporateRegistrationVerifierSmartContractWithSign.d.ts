import { SmartContract, State } from 'o1js';
import { CorporateRegistrationProof } from '../../zk-programs/with-sign/CorporateRegistrationZKProgramWithSign.js';
export declare class CorporateRegistrationVerifierSmartContract extends SmartContract {
    num: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyComplianceWithProof(proof: CorporateRegistrationProof): Promise<void>;
}
