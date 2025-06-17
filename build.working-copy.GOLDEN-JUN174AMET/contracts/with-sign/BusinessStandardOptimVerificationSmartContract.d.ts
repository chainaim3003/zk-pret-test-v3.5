import { SmartContract, State } from 'o1js';
import { BusinessStandardOptimProof } from '../../zk-programs/with-sign/BusinessStandardOptimZKProgram.js';
export declare class BusinessStandardOptimVerificationSmartContract extends SmartContract {
    risk: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyComplianceWithProof(proof: BusinessStandardOptimProof): Promise<void>;
}
