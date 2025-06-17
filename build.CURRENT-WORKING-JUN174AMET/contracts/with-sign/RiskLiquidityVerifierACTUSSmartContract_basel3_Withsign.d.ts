import { SmartContract, State } from 'o1js';
import { LiquidityRatioProof } from '../../zk-programs/with-sign/RiskLiquidityACTUSZKProgram_basel3_Withsign.js';
export declare class LiquidityRatioVerifierSmartContract extends SmartContract {
    num: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyComplianceWithProof(proof: LiquidityRatioProof): Promise<void>;
}
