/**
 * ====================================================================
 * Risk Liquidity OptimMerkle Smart Contract
 * ====================================================================
 * Simple smart contract for Risk Liquidity scenarios
 * Handles Advanced, Basel3, and StableCoin proofs with 100→90 state change logic
 * ====================================================================
 */
import { SmartContract, State } from 'o1js';
import { RiskLiquidityAdvancedOptimMerkleProof } from '../../zk-programs/with-sign/RiskLiquidityAdvancedOptimMerkleZKProgramWithSign.js';
import { RiskLiquidityBasel3OptimMerkleProof } from '../../zk-programs/with-sign/RiskLiquidityBasel3OptimMerkleZKProgramWithSign.js';
import { RiskLiquidityStableCoinOptimMerkleProof } from '../../zk-programs/with-sign/RiskLiquidityStableCoinOptimMerkleZKProgramWithSign.js';
export declare class RiskLiquidityOptimMerkleSmartContract extends SmartContract {
    riskComplianceStatus: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    totalVerifications: State<import("o1js/dist/node/lib/provable/field.js").Field>;
    init(): void;
    verifyAdvancedRiskComplianceWithProof(proof: RiskLiquidityAdvancedOptimMerkleProof): Promise<void>;
    verifyBasel3RiskComplianceWithProof(proof: RiskLiquidityBasel3OptimMerkleProof): Promise<void>;
    verifyStableCoinRiskComplianceWithProof(proof: RiskLiquidityStableCoinOptimMerkleProof): Promise<void>;
    /**
     * Reset compliance status to unverified state (admin function)
     */
    resetRiskCompliance(): Promise<void>;
}
