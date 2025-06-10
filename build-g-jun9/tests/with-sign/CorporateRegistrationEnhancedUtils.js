import * as dotenv from 'dotenv';
dotenv.config();
// =================================== Enhanced Response Printing Functions ===================================
/**
 * Print comprehensive Corporate Registration API response
 * Similar to GLEIFUtils comprehensive logging
 */
export function printCorporateRegistrationResponse(response, companyIdentifier, typeOfNet) {
    console.log(`\n🏢 ===== CORPORATE REGISTRATION API RESPONSE =====`);
    console.log(`🔍 Query: ${companyIdentifier}`);
    console.log(`🌐 Network: ${typeOfNet}`);
    console.log(`📅 Timestamp: ${new Date().toISOString()}`);
    console.log(`🔄 API Response Structure Analysis:`);
    if (typeOfNet === 'LOCAL') {
        // Handle LOCAL mock data structure
        console.log(`📋 LOCAL Mock Data Response:`);
        console.log(`  Response Type: Mock/Test Data`);
        console.log(`  Available Fields: ${Object.keys(response).length}`);
        // Print key fields if available
        if (response['CIN']) {
            console.log(`  🆔 CIN: ${response['CIN']}`);
        }
        if (response['Company Name']) {
            console.log(`  🏢 Company Name: ${response['Company Name']}`);
        }
        if (response['Active Compliance']) {
            console.log(`  ✅ Active Compliance: ${response['Active Compliance']}`);
        }
        // Print all available fields
        console.log(`\n📊 All Available Fields in Mock Response:`);
        Object.keys(response).forEach((key, index) => {
            const value = response[key];
            const truncatedValue = typeof value === 'string' && value.length > 50
                ? value.substring(0, 50) + '...'
                : value;
            console.log(`  ${index + 1}. ${key}: ${truncatedValue}`);
        });
    }
    else {
        // Handle SANDBOX/PROD API structure
        console.log(`📋 Production API Response:`);
        console.log(`  Success: ${response.success || 'unknown'}`);
        console.log(`  Has Data: ${!!response.data}`);
        console.log(`  Has Company Master Data: ${!!response.data?.company_master_data}`);
        if (response.error) {
            console.log(`  ❌ Error: ${response.error}`);
        }
        if (response.message) {
            console.log(`  💬 Message: ${response.message}`);
        }
        const masterData = response.data?.company_master_data;
        if (masterData) {
            console.log(`\n🏢 Company Master Data Analysis:`);
            console.log(`  Total Fields Available: ${Object.keys(masterData).length}`);
            // Core identification fields
            console.log(`\n🆔 Core Identification:`);
            console.log(`  CIN: ${masterData.cin || 'N/A'}`);
            console.log(`  Company Name: ${masterData.company_name || 'N/A'}`);
            console.log(`  Registration Number: ${masterData.registration_number || 'N/A'}`);
            console.log(`  Company Status: ${masterData.company_status || masterData['company_status(for_efiling)'] || 'N/A'}`);
            console.log(`  Date of Incorporation: ${masterData.date_of_incorporation || 'N/A'}`);
            // Business classification
            console.log(`\n📊 Business Classification:`);
            console.log(`  Company Type: ${masterData.company_type || 'N/A'}`);
            console.log(`  Company Category: ${masterData.company_category || 'N/A'}`);
            console.log(`  Company Subcategory: ${masterData.company_subcategory || 'N/A'}`);
            console.log(`  Class of Company: ${masterData.class_of_company || 'N/A'}`);
            console.log(`  Number of Partners: ${masterData.number_of_partners || 'N/A'}`);
            // Market and regulatory status
            console.log(`\n📈 Market & Regulatory Status:`);
            console.log(`  Listing Status: ${masterData.listing_status || 'N/A'}`);
            console.log(`  Suspended at Stock Exchange: ${masterData.suspended_at_stock_exchange || 'N/A'}`);
            console.log(`  Compliance Status: ${masterData.compliance_status || 'N/A'}`);
            console.log(`  Filing Status: ${masterData.filing_status || 'N/A'}`);
            // Financial information
            console.log(`\n💰 Financial Information:`);
            console.log(`  Authorized Capital: ${masterData.authorized_capital || 'N/A'}`);
            console.log(`  Paid Up Capital: ${masterData.paid_up_capital || 'N/A'}`);
            console.log(`  Number of Members: ${masterData.number_of_members || 'N/A'}`);
            console.log(`  Number of Directors: ${masterData.number_of_directors || 'N/A'}`);
            // Address information
            console.log(`\n🏠 Address Information:`);
            console.log(`  Registered Address: ${[
                masterData.registered_address_line1,
                masterData.registered_address_line2,
                masterData.registered_city,
                masterData.registered_state,
                masterData.registered_pincode
            ].filter(Boolean).join(', ') || 'N/A'}`);
            console.log(`  Corporate Address: ${[
                masterData.corporate_address_line1,
                masterData.corporate_address_line2,
                masterData.corporate_city,
                masterData.corporate_state,
                masterData.corporate_pincode
            ].filter(Boolean).join(', ') || 'N/A'}`);
            // Contact information
            console.log(`\n📞 Contact Information:`);
            console.log(`  Email: ${masterData.email || 'N/A'}`);
            console.log(`  Phone: ${masterData.phone || 'N/A'}`);
            console.log(`  Website: ${masterData.website || 'N/A'}`);
            // Regulatory details
            console.log(`\n⚖️ Regulatory Details:`);
            console.log(`  ROC Code: ${masterData.roc_code || 'N/A'}`);
            console.log(`  Registrar of Companies: ${masterData.registrar_of_companies || 'N/A'}`);
            console.log(`  MCA ID: ${masterData.mca_id || 'N/A'}`);
            console.log(`  Jurisdiction: ${masterData.jurisdiction || 'N/A'}`);
            console.log(`  Legal Form: ${masterData.legal_form || 'N/A'}`);
            // Activity and business details
            console.log(`\n🏭 Business Activity:`);
            console.log(`  Activity Description: ${masterData.activity_description || 'N/A'}`);
            console.log(`  Company Activity Code: ${masterData.company_activity_code || 'N/A'}`);
            console.log(`  Industrial Class: ${masterData.industrial_class || 'N/A'}`);
            // Dates and temporal information
            console.log(`\n📅 Important Dates:`);
            console.log(`  Date of Incorporation: ${masterData.date_of_incorporation || 'N/A'}`);
            console.log(`  Last AGM Date: ${masterData.last_agm_date || 'N/A'}`);
            console.log(`  Last BS Date: ${masterData.last_bs_date || 'N/A'}`);
            console.log(`  Last Annual Return Date: ${masterData.last_annual_return_date || 'N/A'}`);
            // Complete field inventory
            console.log(`\n📋 Complete Field Inventory (All ${Object.keys(masterData).length} fields):`);
            Object.keys(masterData).sort().forEach((key, index) => {
                const value = masterData[key];
                const truncatedValue = typeof value === 'string' && value.length > 80
                    ? value.substring(0, 80) + '...'
                    : value;
                console.log(`  ${index + 1}. ${key}: ${truncatedValue || 'null'}`);
            });
        }
    }
    console.log(`\n✅ Corporate Registration Response Analysis Complete`);
    console.log(`==========================================\n`);
}
/**
 * Enhanced fetch function with comprehensive response printing
 * Compatible with existing fetchCorporateRegistrationData function
 */
export async function fetchCorporateRegistrationDataWithFullLogging(cin, typeOfNet) {
    console.log(`\n🚀 Starting Corporate Registration Data Fetch`);
    console.log(`🔍 CIN: ${cin}`);
    console.log(`🌐 Network Type: ${typeOfNet}`);
    console.log(`📡 All environments now use LIVE API`);
    try {
        // Import the existing utility function to avoid breaking existing code
        const { fetchCorporateRegistrationData } = await import('./CorporateRegistrationUtils.js');
        // Use the existing function to get the data
        const response = await fetchCorporateRegistrationData(cin, typeOfNet);
        // Print comprehensive response analysis
        printCorporateRegistrationResponse(response, cin, typeOfNet);
        return response;
    }
    catch (error) {
        console.error(`❌ Error in Corporate Registration Data Fetch:`, error.message);
        // Print error details
        console.log(`\n🚨 Error Details:`);
        console.log(`  Error Type: ${error.name || 'Unknown'}`);
        console.log(`  Error Message: ${error.message}`);
        if (error.response?.data) {
            console.log(`  API Error Response:`, JSON.stringify(error.response.data, null, 2));
        }
        if (error.response?.status) {
            console.log(`  HTTP Status: ${error.response.status}`);
        }
        throw error;
    }
}
/**
 * Extract company summary for logging
 */
export function extractCorporateRegistrationSummary(response, typeOfNet) {
    if (typeOfNet === 'LOCAL') {
        return {
            companyName: response['Company Name'] || 'UNKNOWN',
            cin: response['CIN'] || 'UNKNOWN',
            status: response['Active Compliance'] || 'UNKNOWN',
            registrationNumber: response['Registration Number'] || 'UNKNOWN',
            dateOfIncorporation: response['Date of Incorporation'] || 'UNKNOWN',
            category: response['Category'] || 'UNKNOWN',
            classOfCompany: response['Class of Company'] || 'UNKNOWN',
            numberOfPartners: response['Number of Partners'] || 'UNKNOWN',
            listed: response['Listed'] || 'UNKNOWN',
            suspended: response['Suspended'] || 'UNKNOWN'
        };
    }
    else {
        const masterData = response.data?.company_master_data || {};
        return {
            companyName: masterData.company_name || 'UNKNOWN',
            cin: masterData.cin || 'UNKNOWN',
            status: masterData.company_status || masterData['company_status(for_efiling)'] || 'UNKNOWN',
            registrationNumber: masterData.registration_number || 'UNKNOWN',
            dateOfIncorporation: masterData.date_of_incorporation || 'UNKNOWN',
            category: masterData.company_category || 'UNKNOWN',
            classOfCompany: masterData.class_of_company || 'UNKNOWN',
            numberOfPartners: masterData.number_of_partners || 'UNKNOWN',
            listed: masterData.listing_status || 'UNKNOWN',
            suspended: masterData.suspended_at_stock_exchange || 'UNKNOWN'
        };
    }
}
/**
 * Business rule analysis for Corporate Registration compliance
 */
export function analyzeCorporateRegistrationCompliance(response, typeOfNet) {
    const summary = extractCorporateRegistrationSummary(response, typeOfNet);
    const issues = [];
    // Business rule checks
    const businessRuleResults = {
        cinNotEmpty: summary.cin !== '' && summary.cin !== 'UNKNOWN' && summary.cin !== null && summary.cin !== undefined,
        registrationNumberNotEmpty: summary.registrationNumber !== '' && summary.registrationNumber !== 'UNKNOWN' && summary.registrationNumber !== null && summary.registrationNumber !== undefined,
        companyNameNotEmpty: summary.companyName !== '' && summary.companyName !== 'UNKNOWN' && summary.companyName !== null && summary.companyName !== undefined,
        dateOfIncorporationValid: summary.dateOfIncorporation !== '' && summary.dateOfIncorporation !== 'UNKNOWN' && summary.dateOfIncorporation !== null && summary.dateOfIncorporation !== undefined,
        companyStatusActive: summary.status.toLowerCase() === 'active'
    };
    // Collect issues
    if (!businessRuleResults.cinNotEmpty) {
        issues.push('CIN is empty or missing');
    }
    if (!businessRuleResults.registrationNumberNotEmpty) {
        issues.push('Registration number is empty or missing');
    }
    if (!businessRuleResults.companyNameNotEmpty) {
        issues.push('Company name is empty or missing');
    }
    if (!businessRuleResults.dateOfIncorporationValid) {
        issues.push('Date of incorporation is invalid or missing');
    }
    if (!businessRuleResults.companyStatusActive) {
        issues.push(`Company status is not "Active": ${summary.status}`);
    }
    // Calculate compliance score
    const scoreFactors = Object.values(businessRuleResults);
    const complianceScore = Math.round((scoreFactors.filter(Boolean).length / scoreFactors.length) * 100);
    const isCompliant = complianceScore === 100;
    return {
        isCompliant,
        complianceScore,
        issues,
        businessRuleResults
    };
}
/**
 * Check if a company is Corporate Registration compliant
 */
export function isCompanyCorporateRegistrationCompliant(companyDataOrCin, typeOfNet) {
    if (typeof companyDataOrCin === 'string') {
        // If string provided, fetch data first
        return fetchCorporateRegistrationDataWithFullLogging(companyDataOrCin, typeOfNet || 'TESTNET')
            .then(apiResponse => {
            const analysis = analyzeCorporateRegistrationCompliance(apiResponse, typeOfNet || 'TESTNET');
            return analysis.isCompliant;
        });
    }
    else {
        // If API response provided, analyze directly
        const analysis = analyzeCorporateRegistrationCompliance(companyDataOrCin, typeOfNet || 'TESTNET');
        return analysis.isCompliant;
    }
}
//# sourceMappingURL=CorporateRegistrationEnhancedUtils.js.map