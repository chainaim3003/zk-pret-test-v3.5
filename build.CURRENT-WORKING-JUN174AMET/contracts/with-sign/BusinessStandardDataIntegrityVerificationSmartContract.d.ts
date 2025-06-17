import { SmartContract, State } from 'o1js';
import { BusinessStandardDataIntegrityProof } from '../../zk-programs/with-sign/BusinessStandardDataIntegrityZKProgram.js';
export declare class BusinessStandardDataIntegrityVerificationSmartContract extends SmartContract {
    risk: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyComplianceWithProof(proof: BusinessStandardDataIntegrityProof): Promise<void>;
}
