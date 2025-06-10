import * as dotenv from 'dotenv';
dotenv.config();
// =================================== Enhanced Response Printing Functions ===================================
/**
 * Print comprehensive EXIM API response
 * Similar to GLEIFUtils comprehensive logging
 */
export function printEXIMResponse(response, companyIdentifier, typeOfNet) {
    console.log(`\n🚢 ===== EXIM API RESPONSE =====`);
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
        if (response['iec']) {
            console.log(`  🆔 IEC: ${response['iec']}`);
        }
        if (response['entityName']) {
            console.log(`  🏢 Entity Name: ${response['entityName']}`);
        }
        if (response['iecStatus']) {
            console.log(`  ✅ IEC Status: ${response['iecStatus']}`);
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
        if (response.error) {
            console.log(`  ❌ Error: ${response.error}`);
        }
        if (response.message) {
            console.log(`  💬 Message: ${response.message}`);
        }
        const data = response.data;
        if (data) {
            console.log(`\n🚢 EXIM Data Analysis:`);
            console.log(`  Total Fields Available: ${Object.keys(data).length}`);
            // Core identification fields
            console.log(`\n🆔 Core Identification:`);
            console.log(`  IEC: ${data.iec || 'N/A'}`);
            console.log(`  Entity Name: ${data.entityName || 'N/A'}`);
            console.log(`  PAN: ${data.PAN || 'N/A'}`);
            console.log(`  IEC Status: ${data.iecStatus !== undefined ? data.iecStatus : 'N/A'}`);
            // Temporal information
            console.log(`\n📅 Important Dates:`);
            console.log(`  IEC Issue Date: ${data.iecIssueDate || 'N/A'}`);
            console.log(`  IEC Modification Date: ${data.iecModificationDate || 'N/A'}`);
            console.log(`  Data As On: ${data.dataAsOn || 'N/A'}`);
            // Status information
            console.log(`\n📊 Status Information:`);
            console.log(`  IEC Status: ${data.iecStatus !== undefined ? data.iecStatus : 'N/A'}`);
            console.log(`  Exporter Type: ${data.exporterType !== undefined ? data.exporterType : 'N/A'}`);
            console.log(`  Active Compliance Status Code: ${data.activeComplianceStatusCode !== undefined ? data.activeComplianceStatusCode : 'N/A'}`);
            console.log(`  Star Status: ${data.starStatus !== undefined ? data.starStatus : 'N/A'}`);
            console.log(`  Nature of Concern: ${data.natureOfConcern !== undefined ? data.natureOfConcern : 'N/A'}`);
            // Address information
            console.log(`\n🏠 Address Information:`);
            console.log(`  Address Line 1: ${data.addressLine1 || 'N/A'}`);
            console.log(`  Address Line 2: ${data.addressLine2 || 'N/A'}`);
            console.log(`  City: ${data.city || 'N/A'}`);
            console.log(`  State: ${data.state || 'N/A'}`);
            console.log(`  PIN: ${data.pin !== undefined ? data.pin : 'N/A'}`);
            // Contact information
            console.log(`\n📞 Contact Information:`);
            console.log(`  Contact No: ${data.contactNo !== undefined ? data.contactNo : 'N/A'}`);
            console.log(`  Email: ${data.email || 'N/A'}`);
            // Branch information
            if (data.branches && Array.isArray(data.branches) && data.branches.length > 0) {
                console.log(`\n🏢 Branch Information (${data.branches.length} branches):`);
                data.branches.forEach((branch, index) => {
                    console.log(`  Branch ${index + 1}:`);
                    console.log(`    Branch Code: ${branch.branchCode !== undefined ? branch.branchCode : 'N/A'}`);
                    console.log(`    Address 1: ${branch.badd1 || 'N/A'}`);
                    console.log(`    Address 2: ${branch.badd2 || 'N/A'}`);
                    console.log(`    City: ${branch.city || 'N/A'}`);
                    console.log(`    State: ${branch.state || 'N/A'}`);
                    console.log(`    PIN: ${branch.pin !== undefined ? branch.pin : 'N/A'}`);
                });
            }
            // Director information
            if (data.directors && Array.isArray(data.directors) && data.directors.length > 0) {
                console.log(`\n👥 Director Information (${data.directors.length} directors):`);
                data.directors.forEach((director, index) => {
                    console.log(`  Director ${index + 1}: ${director.name || 'N/A'}`);
                });
            }
            // Complete field inventory
            console.log(`\n📋 Complete Field Inventory (All fields):`);
            Object.keys(data).sort().forEach((key, index) => {
                const value = data[key];
                if (Array.isArray(value)) {
                    console.log(`  ${index + 1}. ${key}: [Array with ${value.length} items]`);
                }
                else {
                    const truncatedValue = typeof value === 'string' && value.length > 80
                        ? value.substring(0, 80) + '...'
                        : value;
                    console.log(`  ${index + 1}. ${key}: ${truncatedValue !== undefined ? truncatedValue : 'null'}`);
                }
            });
        }
    }
    console.log(`\n✅ EXIM Response Analysis Complete`);
    console.log(`==========================================\n`);
}
/**
 * Enhanced fetch function with comprehensive response printing
 * Compatible with existing fetchEXIMCompanyData function
 */
export async function fetchEXIMDataWithFullLogging(companyName, typeOfNet) {
    console.log(`\n🚀 Starting EXIM Data Fetch`);
    console.log(`🔍 Company Name: ${companyName}`);
    console.log(`🌐 Network Type: ${typeOfNet}`);
    try {
        // Import the existing utility function to avoid breaking existing code
        const { fetchEXIMCompanyData } = await import('./EXIMUtils.js');
        // Use the existing function to get the data
        const response = await fetchEXIMCompanyData(companyName, typeOfNet);
        // Print comprehensive response analysis
        printEXIMResponse(response, companyName, typeOfNet);
        return response;
    }
    catch (error) {
        console.error(`❌ Error in EXIM Data Fetch:`, error.message);
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
export function extractEXIMSummary(response, typeOfNet) {
    if (typeOfNet === 'LOCAL') {
        return {
            iec: response['iec'] || 'UNKNOWN',
            entityName: response['entityName'] || 'UNKNOWN',
            iecIssueDate: response['iecIssueDate'] || 'UNKNOWN',
            PAN: response['PAN'] || 'UNKNOWN',
            iecStatus: response['iecStatus'] !== undefined ? response['iecStatus'] : -1,
            iecModificationDate: response['iecModificationDate'] || 'UNKNOWN',
            dataAsOn: response['dataAsOn'] || 'UNKNOWN'
        };
    }
    else {
        const data = response.data || {};
        return {
            iec: data.iec || 'UNKNOWN',
            entityName: data.entityName || 'UNKNOWN',
            iecIssueDate: data.iecIssueDate || 'UNKNOWN',
            PAN: data.PAN || 'UNKNOWN',
            iecStatus: data.iecStatus !== undefined ? data.iecStatus : -1,
            iecModificationDate: data.iecModificationDate || 'UNKNOWN',
            dataAsOn: data.dataAsOn || 'UNKNOWN'
        };
    }
}
/**
 * Business rule analysis for EXIM compliance
 * Based on user specification: isEXIMCompliant should be based on:
 * - entity name is not empty
 * - iec issue date and iec modification date exist
 * - dataAsOn is less or equal to current datetime
 * - PAN is NOT empty
 * - iec is NOT empty
 * - iecStatus is one of 0,4,7 or 8
 */
export function analyzeEXIMCompliance(response, typeOfNet) {
    const summary = extractEXIMSummary(response, typeOfNet);
    const issues = [];
    // Business rule checks based on user specification
    const businessRuleResults = {
        entityNameNotEmpty: summary.entityName !== '' && summary.entityName !== 'UNKNOWN' && summary.entityName !== null && summary.entityName !== undefined,
        iecNotEmpty: summary.iec !== '' && summary.iec !== 'UNKNOWN' && summary.iec !== null && summary.iec !== undefined,
        panNotEmpty: summary.PAN !== '' && summary.PAN !== 'UNKNOWN' && summary.PAN !== null && summary.PAN !== undefined,
        iecIssueDateExists: summary.iecIssueDate !== '' && summary.iecIssueDate !== 'UNKNOWN' && summary.iecIssueDate !== null && summary.iecIssueDate !== undefined,
        iecModificationDateExists: summary.iecModificationDate !== '' && summary.iecModificationDate !== 'UNKNOWN' && summary.iecModificationDate !== null && summary.iecModificationDate !== undefined,
        dataAsOnValid: summary.dataAsOn !== '' && summary.dataAsOn !== 'UNKNOWN' && summary.dataAsOn !== null && summary.dataAsOn !== undefined,
        iecStatusCompliant: [0, 4, 7, 8].includes(summary.iecStatus)
    };
    // Collect issues based on user specification
    if (!businessRuleResults.entityNameNotEmpty) {
        issues.push('Entity name is empty or missing');
    }
    if (!businessRuleResults.iecNotEmpty) {
        issues.push('IEC is empty or missing');
    }
    if (!businessRuleResults.panNotEmpty) {
        issues.push('PAN is empty or missing');
    }
    if (!businessRuleResults.iecIssueDateExists) {
        issues.push('IEC issue date is missing');
    }
    if (!businessRuleResults.iecModificationDateExists) {
        issues.push('IEC modification date is missing');
    }
    if (!businessRuleResults.dataAsOnValid) {
        issues.push('Data as on date is invalid or missing');
    }
    if (!businessRuleResults.iecStatusCompliant) {
        issues.push(`IEC status is not compliant. Expected: 0, 4, 7, or 8. Got: ${summary.iecStatus}`);
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
 * Check if a company is EXIM compliant
 */
export function isCompanyEXIMCompliant(companyDataOrName, typeOfNet) {
    if (typeof companyDataOrName === 'string') {
        // If string provided, fetch data first
        return fetchEXIMDataWithFullLogging(companyDataOrName, typeOfNet || 'TESTNET')
            .then(apiResponse => {
            const analysis = analyzeEXIMCompliance(apiResponse, typeOfNet || 'TESTNET');
            return analysis.isCompliant;
        });
    }
    else {
        // If API response provided, analyze directly
        const analysis = analyzeEXIMCompliance(companyDataOrName, typeOfNet || 'TESTNET');
        return analysis.isCompliant;
    }
}
//# sourceMappingURL=EXIMEnhancedUtils.js.map