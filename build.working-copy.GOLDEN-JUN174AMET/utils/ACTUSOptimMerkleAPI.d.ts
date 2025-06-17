/**
 * ====================================================================
 * ACTUS API Interface for Risk Scenarios
 * ====================================================================
 * Centralized API interface for ACTUS engine calls
 * Used by all risk verification tests (Advanced, Basel3, StableCoin)
 * ====================================================================
 */
export interface ACTUSOptimMerkleAPIResponse {
    inflow: number[][];
    outflow: number[][];
    periodsCount: number;
    contractDetails: any[];
    riskMetrics: any;
    metadata: {
        timeHorizon: string;
        currency: string;
        processingDate: string;
    };
}
export interface ACTUSContract {
    contractType: string;
    contractID: string;
    contractRole: string;
    contractDealDate: string;
    initialExchangeDate?: string;
    statusDate: string;
    notionalPrincipal: string;
    currency: string;
    [key: string]: any;
}
export interface ACTUSRequestData {
    contracts: ACTUSContract[];
    riskFactors: any[];
}
/**
 * Generic ACTUS API call function
 * Can be used by all risk scenarios with custom contract portfolios
 */
export declare function callACTUSAPI(url: string, contracts: ACTUSContract[], riskFactors?: any[]): Promise<ACTUSOptimMerkleAPIResponse>;
/**
 * Load contract portfolio from file or return default
 * Enables flexible contract input (file upload or server-based)
 */
export declare function loadContractPortfolio(portfolioSource?: string | ACTUSContract[]): Promise<ACTUSContract[]>;
/**
 * Default contract portfolio for testing/demo purposes
 * USING EXACT ORIGINAL CONTRACTS from existing tests for 100% compatibility
 */
export declare function getDefaultContractPortfolio(): ACTUSContract[];
/**
 * Basel3-specific contract portfolio
 * Uses ORIGINAL contracts with Basel3 HQLA classifications added
 */
export declare function getBasel3ContractPortfolio(): ACTUSContract[];
/**
 * StableCoin-specific contract portfolio
 * Uses ORIGINAL contracts with StableCoin reserve classifications added
 */
export declare function getStableCoinContractPortfolio(): ACTUSContract[];
