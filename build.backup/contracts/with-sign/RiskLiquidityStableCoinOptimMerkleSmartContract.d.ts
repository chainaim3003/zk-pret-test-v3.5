/**
 * ====================================================================
 * Risk Liquidity StableCoin OptimMerkle Smart Contract
 * ====================================================================
 * Simple smart contract for StableCoin Proof of Reserves verification
 * Follows the original pattern: 100→90 state change on compliance
 * ====================================================================
 */
import { SmartContract, State } from 'o1js';
import { RiskLiquidityStableCoinOptimMerkleProof } from '../../zk-programs/with-sign/RiskLiquidityStableCoinOptimMerkleZKProgramWithSign.js';
export declare class RiskLiquidityStableCoinOptimMerkleSmartContract extends SmartContract {
    riskComplianceStatus: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    totalVerifications: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyStableCoinRiskComplianceWithProof(proof: RiskLiquidityStableCoinOptimMerkleProof): Promise<void>;
}
