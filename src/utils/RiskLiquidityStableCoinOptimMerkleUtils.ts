/**
 * ====================================================================
 * Risk Liquidity StableCoin OptimMerkle Utilities
 * ====================================================================
 * Data preparation utilities for StableCoin Risk scenario
 * Handles reserve backing, concentration risk, and redemption capacity
 * ====================================================================
 */

import { Field, CircuitString, Poseidon, MerkleTree } from 'o1js';
import { 
    callACTUSAPI, 
    loadContractPortfolio, 
    getStableCoinContractPortfolio,
    ACTUSOptimMerkleAPIResponse,
    ACTUSContract 
} from './ACTUSOptimMerkleAPI.js';
import { buildMerkleTreeZK, hashDataZK, MerkleWitness8, safeFieldFrom } from './CoreZKUtilities.js';
import { calculatePercentageZK, calculateConcentrationRiskZK } from './ComplianceZKUtilities.js';

// =================================== StableCoin Risk Data Structures ===================================

export interface RiskLiquidityStableCoinOptimMerkleData {
    // Scenario identifiers
    companyID: string;
    companyName: string;
    mcaID: string;
    businessPANID: string;
    
    // Basic cash flow data
    riskEvaluated: number;
    cashInflow: number[];
    cashOutflow: number[];
    periodsCount: number;
    
    // StableCoin-specific reserve components
    cashReserves: number[];           // Cash and cash equivalents
    treasuryReserves: number[];       // Government securities (treasury bills, bonds)
    corporateReserves: number[];      // Corporate bonds and commercial paper
    otherReserves: number[];          // Other permissible reserve assets
    
    // Outstanding token information
    outstandingTokens: number[];      // Number of tokens in circulation
    tokenValue: number;               // Par value per token (usually 1.0)
    
    // Reserve quality metrics
    liquidityScores: number[];        // Liquidity scores for each asset category
    creditRatings: number[];          // Credit ratings for each asset category
    maturityProfiles: number[];       // Average maturity in days for each category
    
    // StableCoin compliance parameters
    backingRatioThreshold: number;    // Minimum backing ratio (usually 100%+)
    liquidityRatioThreshold: number;  // Minimum liquid reserve ratio
    concentrationLimit: number;       // Maximum single asset concentration
    qualityThreshold: number;         // Minimum asset quality score
    
    // Additional parameters
    liquidityThreshold: number;
    newInvoiceAmount: number;
    newInvoiceEvaluationMonth: number;
    
    // API response metadata
    metadata: {
        timeHorizon: string;
        currency: string;
        processingDate: string;
    };
}

export interface RiskLiquidityStableCoinOptimMerkleProcessedData {
    complianceData: RiskLiquidityStableCoinOptimMerkleData;
    merkleTree: MerkleTree;
    merkleRoot: Field;
    witnesses: {
        companyInfo: MerkleWitness8;
        reserves: MerkleWitness8;
        tokens: MerkleWitness8;
        qualityMetrics: MerkleWitness8;
        thresholds: MerkleWitness8;
    };
}

// =================================== Data Processing Functions ===================================

/**
 * Fetch and process ACTUS data for StableCoin Risk scenario
 */
export async function fetchRiskLiquidityStableCoinOptimMerkleData(
    actusUrl: string,
    contractPortfolio?: string | ACTUSContract[]
): Promise<ACTUSOptimMerkleAPIResponse> {
    try {
        console.log('Loading StableCoin-specific contract portfolio...');
        const contracts = await loadContractPortfolio(contractPortfolio || getStableCoinContractPortfolio());
        
        console.log('Calling ACTUS API for StableCoin reserve calculations...');
        const actusResponse = await callACTUSAPI(actusUrl, contracts);
        
        console.log(`StableCoin ACTUS data fetched: ${actusResponse.periodsCount} periods`);
        return actusResponse;
        
    } catch (error) {
        console.error('Error fetching StableCoin ACTUS data:', error);
        throw new Error(`StableCoin data fetch failed: ${error}`);
    }
}

/**
 * Process ACTUS response with StableCoin-specific reserve categorization
 */
export function processStableCoinRiskData(
    actusResponse: ACTUSOptimMerkleAPIResponse,
    backingRatioThreshold: number = 100,
    liquidityRatioThreshold: number = 20,
    concentrationLimit: number = 25,
    qualityThreshold: number = 80,
    outstandingTokensAmount: number = 1000000,
    tokenValue: number = 1.0,
    liquidityThreshold: number = 10,
    newInvoiceAmount: number = 5000,
    newInvoiceEvaluationMonth: number = 11
): RiskLiquidityStableCoinOptimMerkleData {
    
    // Aggregate basic cash flows
    const aggregatedInflows = actusResponse.inflow.map((period: number[]) =>
    period.reduce((sum: number, value: number) => sum + value, 0)
    );
    
    const aggregatedOutflows = actusResponse.outflow.map((period: number[]) =>
    period.reduce((sum: number, value: number) => sum + value, 0)
    );
    
    // Categorize reserves based on contract details
    const reserveCategories = categorizeReserveAssets(actusResponse.contractDetails, actusResponse.inflow);
    
    // Calculate outstanding tokens for each period (could vary with redemptions/issuances)
    const outstandingTokens = new Array(actusResponse.periodsCount).fill(outstandingTokensAmount);
    
    return {
        // Scenario identifiers
        companyID: 'STABLECOIN_10001',
        companyName: 'StableCoin Proof of Reserves Assessment',
        mcaID: 'STABLE_MCA_201',
        businessPANID: 'STABLE_PAN_1001',
        
        // Basic cash flow data
        riskEvaluated: 1,
        cashInflow: aggregatedInflows,
        cashOutflow: aggregatedOutflows,
        periodsCount: actusResponse.periodsCount,
        
        // StableCoin reserve components
        cashReserves: reserveCategories.cash,
        treasuryReserves: reserveCategories.treasury,
        corporateReserves: reserveCategories.corporate,
        otherReserves: reserveCategories.other,
        
        // Token information
        outstandingTokens,
        tokenValue,
        
        // Quality metrics
        liquidityScores: reserveCategories.liquidityScores,
        creditRatings: reserveCategories.creditRatings,
        maturityProfiles: reserveCategories.maturityProfiles,
        
        // Compliance thresholds
        backingRatioThreshold: Math.round(backingRatioThreshold),
        liquidityRatioThreshold: Math.round(liquidityRatioThreshold),
        concentrationLimit: Math.round(concentrationLimit),
        qualityThreshold: Math.round(qualityThreshold),
        
        // Additional parameters
        liquidityThreshold: Math.round(liquidityThreshold),
        newInvoiceAmount,
        newInvoiceEvaluationMonth,
        
        // Metadata
        metadata: actusResponse.metadata
    };
}

/**
 * Categorize reserve assets for StableCoin compliance
 */
function categorizeReserveAssets(
    contractDetails: any[],
    inflowData: number[][]
): {
    cash: number[];
    treasury: number[];
    corporate: number[];
    other: number[];
    liquidityScores: number[];
    creditRatings: number[];
    maturityProfiles: number[];
} {
    const periodsCount = inflowData.length;
    
    // Initialize reserve category arrays
    const cash = new Array(periodsCount).fill(0);
    const treasury = new Array(periodsCount).fill(0);
    const corporate = new Array(periodsCount).fill(0);
    const other = new Array(periodsCount).fill(0);
    
    // Categorize based on contract details
    contractDetails.forEach((contract, contractIndex) => {
        const reserveType = contract.reserveType || 'other';
        const liquidityScore = parseFloat(contract.liquidityScore) || 50;
        
        for (let period = 0; period < periodsCount; period++) {
            const periodValue = inflowData[period][contractIndex] || 0;
            
            switch (reserveType) {
                case 'cash':
                    cash[period] += periodValue;
                    break;
                case 'government':
                case 'treasury':
                    treasury[period] += periodValue;
                    break;
                case 'corporate':
                    corporate[period] += periodValue;
                    break;
                default:
                    other[period] += periodValue;
                    break;
            }
        }
    });
    
    // If no explicit categorization, use heuristic distribution
    if (cash.every(val => val === 0) && treasury.every(val => val === 0)) {
        for (let period = 0; period < periodsCount; period++) {
            const totalReserves = inflowData[period].reduce((sum, val) => sum + val, 0);
            
            // Conservative distribution for stablecoin reserves
            cash[period] = totalReserves * 0.3;      // 30% cash
            treasury[period] = totalReserves * 0.5;   // 50% treasury securities
            corporate[period] = totalReserves * 0.15; // 15% corporate bonds
            other[period] = totalReserves * 0.05;     // 5% other assets
        }
    }
    
    // Generate quality metrics arrays
    const liquidityScores = [100, 95, 70, 50]; // Cash, Treasury, Corporate, Other
    const creditRatings = [100, 98, 85, 70];    // AAA equivalent ratings
    const maturityProfiles = [0, 90, 180, 365]; // Days to maturity
    
    return {
        cash,
        treasury,
        corporate,
        other,
        liquidityScores,
        creditRatings,
        maturityProfiles
    };
}

/**
 * Build Merkle tree structure for StableCoin data
 */
export function buildStableCoinRiskMerkleStructure(
    complianceData: RiskLiquidityStableCoinOptimMerkleData
): RiskLiquidityStableCoinOptimMerkleProcessedData {
    
    // Prepare data for Merkle tree
    const merkleLeaves: Field[] = [
        // Company information hash
        hashDataZK([
            Field(complianceData.companyID.length),
            Field(complianceData.mcaID.length),
            Field(complianceData.riskEvaluated)
        ]),
        
        // Reserve assets hash
        hashDataZK([
            ...complianceData.cashReserves.map(amount => safeFieldFrom(amount)),
            ...complianceData.treasuryReserves.map(amount => safeFieldFrom(amount)),
            ...complianceData.corporateReserves.map(amount => safeFieldFrom(amount)),
            ...complianceData.otherReserves.map(amount => safeFieldFrom(amount))
        ]),
        
        // Token information hash
        hashDataZK([
            ...complianceData.outstandingTokens.map(amount => safeFieldFrom(amount)),
            safeFieldFrom(complianceData.tokenValue * 100) // Scale to avoid decimals
        ]),
        
        // Quality metrics hash
        hashDataZK([
            ...complianceData.liquidityScores.map(score => safeFieldFrom(score)),
            ...complianceData.creditRatings.map(rating => safeFieldFrom(rating)),
            ...complianceData.maturityProfiles.map(days => safeFieldFrom(days))
        ]),
        
        // Thresholds and parameters hash
        hashDataZK([
            Field(complianceData.backingRatioThreshold),
            Field(complianceData.liquidityRatioThreshold),
            Field(complianceData.concentrationLimit),
            Field(complianceData.qualityThreshold),
            Field(complianceData.liquidityThreshold),
            Field(complianceData.newInvoiceAmount),
            Field(complianceData.newInvoiceEvaluationMonth),
            Field(complianceData.periodsCount)
        ])
    ];
    
    // Build Merkle tree
    const merkleTree = buildMerkleTreeZK(merkleLeaves);
    const merkleRoot = merkleTree.getRoot();
    
    // Generate witnesses
    const witnesses = {
        companyInfo: new MerkleWitness8(merkleTree.getWitness(0n)),
        reserves: new MerkleWitness8(merkleTree.getWitness(1n)),
        tokens: new MerkleWitness8(merkleTree.getWitness(2n)),
        qualityMetrics: new MerkleWitness8(merkleTree.getWitness(3n)),
        thresholds: new MerkleWitness8(merkleTree.getWitness(4n))
    };
    
    return {
        complianceData,
        merkleTree,
        merkleRoot,
        witnesses
    };
}

/**
 * Calculate StableCoin compliance metrics
 */
export function calculateStableCoinRiskMetrics(
    complianceData: RiskLiquidityStableCoinOptimMerkleData
): {
    backingRatios: number[];
    liquidityRatios: number[];
    concentrationRisks: number[];
    assetQualityScores: number[];
    averageBackingRatio: number;
    averageLiquidityRatio: number;
    maxConcentrationRisk: number;
    averageAssetQuality: number;
    backingCompliant: boolean;
    liquidityCompliant: boolean;
    concentrationCompliant: boolean;
    qualityCompliant: boolean;
    overallCompliant: boolean;
} {
    const { 
        cashReserves, 
        treasuryReserves, 
        corporateReserves, 
        otherReserves,
        outstandingTokens,
        tokenValue,
        liquidityScores,
        backingRatioThreshold,
        liquidityRatioThreshold,
        concentrationLimit,
        qualityThreshold
    } = complianceData;
    
    // Calculate metrics for each period
    const backingRatios: number[] = [];
    const liquidityRatios: number[] = [];
    const concentrationRisks: number[] = [];
    const assetQualityScores: number[] = [];
    
    for (let period = 0; period < complianceData.periodsCount; period++) {
        // Total reserve value
        const totalReserves = cashReserves[period] + treasuryReserves[period] + 
                             corporateReserves[period] + otherReserves[period];
        
        // Total outstanding token value
        const totalTokenValue = outstandingTokens[period] * tokenValue;
        
        // Backing ratio = Total Reserves / Outstanding Token Value
        const backingRatio = totalTokenValue > 0 ? (totalReserves / totalTokenValue) * 100 : 100;
        backingRatios.push(backingRatio);
        
        // Liquidity ratio = (Cash + Treasury) / Total Reserves
        const liquidReserves = cashReserves[period] + treasuryReserves[period];
        const liquidityRatio = totalReserves > 0 ? (liquidReserves / totalReserves) * 100 : 0;
        liquidityRatios.push(liquidityRatio);
        
        // Concentration risk = Max single asset category / Total Reserves
        const assetValues = [cashReserves[period], treasuryReserves[period], 
                           corporateReserves[period], otherReserves[period]];
        const maxAsset = Math.max(...assetValues);
        const concentrationRisk = totalReserves > 0 ? (maxAsset / totalReserves) * 100 : 0;
        concentrationRisks.push(concentrationRisk);
        
        // Asset quality score = Weighted average of quality scores
        const weights = assetValues.map(val => totalReserves > 0 ? val / totalReserves : 0);
        const qualityScore = weights.reduce((sum, weight, index) => 
            sum + weight * liquidityScores[index], 0);
        assetQualityScores.push(qualityScore);
    }
    
    // Calculate summary metrics
    const averageBackingRatio = backingRatios.reduce((sum, ratio) => sum + ratio, 0) / backingRatios.length;
    const averageLiquidityRatio = liquidityRatios.reduce((sum, ratio) => sum + ratio, 0) / liquidityRatios.length;
    const maxConcentrationRisk = Math.max(...concentrationRisks);
    const averageAssetQuality = assetQualityScores.reduce((sum, score) => sum + score, 0) / assetQualityScores.length;
    
    // Check compliance
    const backingCompliant = backingRatios.every(ratio => ratio >= backingRatioThreshold);
    const liquidityCompliant = liquidityRatios.every(ratio => ratio >= liquidityRatioThreshold);
    const concentrationCompliant = concentrationRisks.every(risk => risk <= concentrationLimit);
    const qualityCompliant = assetQualityScores.every(score => score >= qualityThreshold);
    const overallCompliant = backingCompliant && liquidityCompliant && concentrationCompliant && qualityCompliant;
    
    return {
        backingRatios,
        liquidityRatios,
        concentrationRisks,
        assetQualityScores,
        averageBackingRatio,
        averageLiquidityRatio,
        maxConcentrationRisk,
        averageAssetQuality,
        backingCompliant,
        liquidityCompliant,
        concentrationCompliant,
        qualityCompliant,
        overallCompliant
    };
}

/**
 * Validate StableCoin risk data integrity
 */
export function validateStableCoinRiskData(complianceData: RiskLiquidityStableCoinOptimMerkleData): boolean {
    // Check required fields
    if (!complianceData.companyID || complianceData.companyID.length === 0) {
        throw new Error('Company ID is required for StableCoin scenario');
    }
    
    // Check array lengths consistency
    const expectedLength = complianceData.periodsCount;
    const arrays = [
        complianceData.cashReserves,
        complianceData.treasuryReserves,
        complianceData.corporateReserves,
        complianceData.otherReserves,
        complianceData.outstandingTokens
    ];
    
    arrays.forEach((array, index) => {
        if (array.length !== expectedLength) {
            throw new Error(`Reserve array ${index} length (${array.length}) does not match periods count (${expectedLength})`);
        }
    });
    
    // Check thresholds
    if (complianceData.backingRatioThreshold <= 0) {
        throw new Error('Backing ratio threshold must be positive');
    }
    
    if (complianceData.tokenValue <= 0) {
        throw new Error('Token value must be positive');
    }
    
    // Check quality metrics arrays
    if (complianceData.liquidityScores.length !== 4 || 
        complianceData.creditRatings.length !== 4 || 
        complianceData.maturityProfiles.length !== 4) {
        throw new Error('Quality metrics arrays must have exactly 4 elements (cash, treasury, corporate, other)');
    }
    
    return true;
}

/**
 * Generate StableCoin compliance summary report
 */
export function generateStableCoinRiskSummary(
    complianceData: RiskLiquidityStableCoinOptimMerkleData,
    riskMetrics: ReturnType<typeof calculateStableCoinRiskMetrics>
): string {
    return `
=== StableCoin Proof of Reserves Assessment Summary ===
Company: ${complianceData.companyName} (${complianceData.companyID})
Assessment Period: ${complianceData.periodsCount} periods (${complianceData.metadata.timeHorizon})
Currency: ${complianceData.metadata.currency}
Token Value: ${complianceData.tokenValue}

StableCoin Parameters:
- Backing Ratio Threshold: ${complianceData.backingRatioThreshold}%
- Liquidity Ratio Threshold: ${complianceData.liquidityRatioThreshold}%
- Concentration Limit: ${complianceData.concentrationLimit}%
- Quality Threshold: ${complianceData.qualityThreshold}

Reserve Metrics:
- Average Backing Ratio: ${riskMetrics.averageBackingRatio.toFixed(2)}%
- Average Liquidity Ratio: ${riskMetrics.averageLiquidityRatio.toFixed(2)}%
- Maximum Concentration Risk: ${riskMetrics.maxConcentrationRisk.toFixed(2)}%
- Average Asset Quality Score: ${riskMetrics.averageAssetQuality.toFixed(2)}

Compliance Results:
- Backing Compliance: ${riskMetrics.backingCompliant ? 'PASSED' : 'FAILED'}
- Liquidity Compliance: ${riskMetrics.liquidityCompliant ? 'PASSED' : 'FAILED'}
- Concentration Compliance: ${riskMetrics.concentrationCompliant ? 'PASSED' : 'FAILED'}
- Quality Compliance: ${riskMetrics.qualityCompliant ? 'PASSED' : 'FAILED'}

Overall StableCoin Compliance: ${riskMetrics.overallCompliant ? 'COMPLIANT' : 'NON-COMPLIANT'}
Generated: ${complianceData.metadata.processingDate}
`;
}
