/**
 * ====================================================================
 * Risk Liquidity Advanced OptimMerkle Smart Contract
 * ====================================================================
 * Simple smart contract for Advanced Risk Liquidity verification
 * Follows the original pattern: 100→90 state change on compliance
 * ====================================================================
 */
import { SmartContract, State } from 'o1js';
import { RiskLiquidityAdvancedOptimMerkleProof } from '../../zk-programs/with-sign/RiskLiquidityAdvancedOptimMerkleZKProgramWithSign.js';
export declare class RiskLiquidityAdvancedOptimMerkleSmartContract extends SmartContract {
    riskComplianceStatus: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    totalVerifications: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyAdvancedRiskComplianceWithProof(proof: RiskLiquidityAdvancedOptimMerkleProof): Promise<void>;
}
