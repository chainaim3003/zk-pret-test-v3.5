/**
 * ====================================================================
 * Risk Liquidity Advanced OptimMerkle Verification Test
 * ====================================================================
 * End-to-end verification test for Advanced Risk scenario
 * Follows modular pattern: API → data prep → signature → witnesses → ZK → contract
 * ====================================================================
 */
export declare function executeRiskLiquidityAdvancedOptimMerkleVerification(liquidityThreshold: number, actusUrl?: string, contractPortfolio?: string | any[], executionMode?: string): Promise<{
    success: boolean;
    proof: any;
    contractStatus: {
        beforeVerification: number;
        afterVerification: number;
    };
    riskMetrics: any;
    summary: string;
}>;
