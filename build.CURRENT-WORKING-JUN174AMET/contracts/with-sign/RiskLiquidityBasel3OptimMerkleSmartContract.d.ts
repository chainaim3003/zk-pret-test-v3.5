/**
 * ====================================================================
 * Risk Liquidity Basel3 OptimMerkle Smart Contract
 * ====================================================================
 * Simple smart contract for Basel3 LCR/NSFR Risk verification
 * Follows the original pattern: 100→90 state change on compliance
 * ====================================================================
 */
import { SmartContract, State } from 'o1js';
import { RiskLiquidityBasel3OptimMerkleProof } from '../../zk-programs/with-sign/RiskLiquidityBasel3OptimMerkleZKProgramWithSign.js';
export declare class RiskLiquidityBasel3OptimMerkleSmartContract extends SmartContract {
    riskComplianceStatus: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    totalVerifications: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyBasel3RiskComplianceWithProof(proof: RiskLiquidityBasel3OptimMerkleProof): Promise<void>;
}
