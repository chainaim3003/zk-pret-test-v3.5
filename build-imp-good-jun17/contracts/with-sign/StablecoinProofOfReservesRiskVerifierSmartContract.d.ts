import { SmartContract, State } from 'o1js';
import { LiquidityRatioProof } from '../../zk-programs/with-sign/StablecoinProofOfReservesRiskZKProgramWithSign.js';
export declare class LiquidityRatioVerifierSmartContract extends SmartContract {
    risk: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    reservesProved: State<import("o1js/dist/node/lib/provable/bool.js").Bool>;
    init(): void;
    verifyComplianceWithProof(proof: LiquidityRatioProof): Promise<void>;
}
