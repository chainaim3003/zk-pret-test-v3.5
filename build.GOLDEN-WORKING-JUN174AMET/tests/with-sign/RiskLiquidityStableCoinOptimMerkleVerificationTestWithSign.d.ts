/**
 * ====================================================================
 * Risk Liquidity StableCoin OptimMerkle Verification Test
 * ====================================================================
 * End-to-end verification test for StableCoin Proof of Reserves scenario
 * Follows modular pattern: API → data prep → signature → witnesses → ZK → contract
 * ====================================================================
 */
export declare function executeRiskLiquidityStableCoinOptimMerkleVerification(backingRatioThreshold?: number, liquidityRatioThreshold?: number, concentrationLimit?: number, qualityThreshold?: number, actusUrl?: string, contractPortfolio?: string | any[], regulatoryFramework?: string, jurisdictionOverride?: string): Promise<{
    success: boolean;
    proof: any;
    contractStatus: {
        beforeVerification: number;
        afterVerification: number;
    };
    riskMetrics: any;
    summary: string;
}>;
