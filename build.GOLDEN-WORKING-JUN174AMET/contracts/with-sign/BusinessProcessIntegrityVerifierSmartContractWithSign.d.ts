import { SmartContract, State, Signature } from 'o1js';
import { BusinessProcessIntegrityProof } from '../../zk-programs/with-sign/BusinessProcessIntegrityZKProgramWithSign.js';
import { BusinessProcessIntegrityData } from '../../zk-programs/with-sign/BusinessProcessIntegrityZKProgramWithSign.js';
export declare class BusinessProcessIntegrityVerifierSmartContract extends SmartContract {
    risk: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyComplianceWithParamsSCF(input: BusinessProcessIntegrityData, oracleSignature: Signature): Promise<void>;
    verifyComplianceWithParamsSTABLECOIN(input: BusinessProcessIntegrityData, oracleSignature: Signature): Promise<void>;
    verifyComplianceWithParamsDVP(input: BusinessProcessIntegrityData, oracleSignature: Signature): Promise<void>;
    verifyComplianceWithProof(proof: BusinessProcessIntegrityProof): Promise<void>;
}
