/**
 * ====================================================================
 * ORIGINAL CONTRACT DATA BACKUP
 * ====================================================================
 * These are the EXACT contracts used in the original verification tests
 * Saved as backup to ensure 100% business logic compatibility
 * ====================================================================
 */

// =================================== ORIGINAL CONTRACT PORTFOLIO ===================================
// Used by ALL original tests: Basel3, StableCoin, and Advanced Risk

export const ORIGINAL_CONTRACTS = [
    {
        "contractType": "PAM",
        "contractID": "pam01",
        "contractRole": "RPA",
        "contractDealDate": "2023-01-01T00:00:00",
        "initialExchangeDate": "2023-01-02T00:00:00",
        "statusDate": "2023-01-01T00:00:00",
        "notionalPrincipal": "10000",
        "maturityDate": "2024-01-01T00:00:00",
        "nominalInterestRate": "0.05",
        "currency": "USD",
        "dayCountConvention": "A365"
    },
    {
        "contractType": "ANN",
        "contractID": "ann01",
        "contractRole": "RPA",
        "contractDealDate": "2023-12-28T00:00:00",
        "initialExchangeDate": "2024-01-01T00:00:00",
        "statusDate": "2023-12-30T00:00:00",
        "notionalPrincipal": "5000",
        "cycleAnchorDateOfPrincipalRedemption": "2024-02-01T00:00:00",
        "nextPrincipalRedemptionPayment": "434.866594118346",
        "dayCountConvention": "A365",
        "nominalInterestRate": "0.08",
        "currency": "USD",
        "cycleOfPrincipalRedemption": "P1ML0",
        "maturityDate": "2025-01-01T00:00:00",
        "rateMultiplier": "1.0",
        "rateSpread": "0.0",
        "fixingDays": "P0D",
        "cycleAnchorDateOfInterestPayment": "2024-02-01T00:00:00",
        "cycleOfInterestPayment": "P1ML0"
    },
    {
        "contractType": "STK",
        "contractID": "stk01",
        "contractRole": "RPA",
        "contractDealDate": "2023-12-28T00:00:00",
        "statusDate": "2023-12-30T00:00:00",
        "notionalPrincipal": "1000",
        "currency": "USD",
        "purchaseDate": "2024-01-01T00:00:00",
        "priceAtPurchaseDate": "1100",
        "endOfMonthConvention": "EOM"
    },
    {
        "contractType": "PAM",
        "contractID": "pam02",
        "contractRole": "RPA",
        "contractDealDate": "2023-12-28T00:00:00",
        "initialExchangeDate": "2024-01-01T00:00:00",
        "statusDate": "2023-12-30T00:00:00",
        "notionalPrincipal": "3000",
        "maturityDate": "2025-01-01T00:00:00",
        "nominalInterestRate": "0.1",
        "currency": "USD",
        "dayCountConvention": "A360",
        "cycleAnchorDateOfInterestPayment": "2024-01-01T00:00:00",
        "cycleOfInterestPayment": "P2ML0",
        "endOfMonthConvention": "SD",
        "premiumDiscountAtIED": "-200",
        "rateMultiplier": "1.0"
    }
];

// =================================== ORIGINAL REQUEST STRUCTURE ===================================
export const ORIGINAL_REQUEST_STRUCTURE = {
    "contracts": ORIGINAL_CONTRACTS,
    "riskFactors": []
};

// =================================== CONTRACT ANALYSIS ===================================
// What these contracts represent in business terms:

/*
CONTRACT BREAKDOWN:
==================

1. PAM01 ($10,000 Principal at Maturity):
   - Type: Government Bond or Corporate Bond
   - Principal: $10,000 
   - Interest: 5% annually
   - Maturity: 1 year (2024-01-01)
   - Cash Flow: Interest payments + principal at maturity

2. ANN01 ($5,000 Annuity):
   - Type: Installment Loan or Mortgage 
   - Principal: $5,000
   - Interest: 8% annually  
   - Payment: $434.87 monthly principal + interest
   - Maturity: 2 years (2025-01-01)
   - Cash Flow: Monthly payments

3. STK01 ($1,000 Stock):
   - Type: Equity Investment
   - Principal: $1,000 nominal
   - Purchase Price: $1,100 (premium)
   - Cash Flow: Dividends, capital gains

4. PAM02 ($3,000 Principal at Maturity):
   - Type: Corporate Bond with premium discount
   - Principal: $3,000
   - Interest: 10% annually (high yield)
   - Discount: -$200 (bought below par)
   - Payment: Bi-monthly interest (P2ML0)
   - Maturity: 2 years (2025-01-01)

TOTAL PORTFOLIO VALUE: ~$19,000
RISK PROFILE: Mixed (government bonds, corporate bonds, equity, loans)
CURRENCY: USD
TIME HORIZON: 1-2 years
*/

// =================================== BUSINESS LOGIC NOTES ===================================
/*
BASEL3 CLASSIFICATION LOGIC:
============================
- PAM contracts (pam01, pam02) = Likely classified as HQLA Level 1 or 2A (bonds)
- ANN contract (ann01) = Likely classified as Non-HQLA (loan)  
- STK contract (stk01) = Likely classified as HQLA Level 2B or Non-HQLA (equity)

STABLECOIN RESERVE LOGIC:
========================
- PAM contracts = Treasury/Corporate reserves
- STK contract = Other reserves (equity backing)
- ANN contract = Cash flow generating asset

ADVANCED RISK LOGIC:
===================
- All contracts contribute to cash inflows
- Stress testing applied to outflows
- Liquidity ratios calculated monthly
- New invoice stress test applied
*/

export default ORIGINAL_CONTRACTS;
