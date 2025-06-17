interface CorporateRegistrationAPIResponse {
    success?: boolean;
    data?: {
        company_master_data?: {
            cin?: string;
            company_name?: string;
            company_status?: string;
            company_type?: string;
            company_category?: string;
            company_subcategory?: string;
            class_of_company?: string;
            date_of_incorporation?: string;
            registration_number?: string;
            roc_code?: string;
            registrar_of_companies?: string;
            email?: string;
            phone?: string;
            website?: string;
            activity_description?: string;
            company_activity_code?: string;
            industrial_class?: string;
            mca_id?: string;
            jurisdiction?: string;
            legal_form?: string;
            llpin_details?: string;
            foreign_company_details?: string;
            registered_address_line1?: string;
            registered_address_line2?: string;
            registered_city?: string;
            registered_state?: string;
            registered_country?: string;
            registered_pincode?: string;
            corporate_address_line1?: string;
            corporate_address_line2?: string;
            corporate_city?: string;
            corporate_state?: string;
            corporate_country?: string;
            corporate_pincode?: string;
            correspondence_address_line1?: string;
            correspondence_address_line2?: string;
            correspondence_city?: string;
            correspondence_state?: string;
            correspondence_country?: string;
            correspondence_pincode?: string;
            authorized_capital?: string;
            paid_up_capital?: string;
            number_of_members?: string;
            number_of_partners?: string;
            last_agm_date?: string;
            last_bs_date?: string;
            last_annual_return_date?: string;
            listing_status?: string;
            whether_listed_or_not?: string;
            suspended_at_stock_exchange?: string;
            market_cap?: string;
            share_capital_details?: string;
            number_of_directors?: string;
            director_details?: string;
            compliance_status?: string;
            filing_status?: string;
            board_composition?: string;
            key_personnel?: string;
            signatory_details?: string;
            strike_off_details?: string;
            dormant_status?: string;
            nbfc_registration?: string;
            prosecution_launched?: string;
            conversion_details?: string;
            amalgamation_details?: string;
            regulatory_approvals?: string;
            licenses?: string;
            created_at?: string;
            updated_at?: string;
            data_source?: string;
            api_version?: string;
            'company_status(for_efiling)'?: string;
        };
    };
    error?: string;
    message?: string;
    [key: string]: any;
}
/**
 * Print comprehensive Corporate Registration API response
 * Similar to GLEIFUtils comprehensive logging
 */
export declare function printCorporateRegistrationResponse(response: CorporateRegistrationAPIResponse, companyIdentifier: string): void;
/**
 * Enhanced fetch function with comprehensive response printing
 * Compatible with existing fetchCorporateRegistrationData function
 */
export declare function fetchCorporateRegistrationDataWithFullLogging(cin: string): Promise<CorporateRegistrationAPIResponse>;
/**
 * Extract company summary for logging
 */
export declare function extractCorporateRegistrationSummary(response: CorporateRegistrationAPIResponse): {
    companyName: string;
    cin: string;
    status: string;
    registrationNumber: string;
    dateOfIncorporation: string;
    category: string;
    classOfCompany: string;
    numberOfPartners: string;
    listed: string;
    suspended: string;
};
/**
 * Business rule analysis for Corporate Registration compliance
 */
export declare function analyzeCorporateRegistrationCompliance(response: CorporateRegistrationAPIResponse): {
    isCompliant: boolean;
    complianceScore: number;
    issues: string[];
    businessRuleResults: {
        cinNotEmpty: boolean;
        registrationNumberNotEmpty: boolean;
        companyNameNotEmpty: boolean;
        dateOfIncorporationValid: boolean;
        companyStatusActive: boolean;
    };
};
/**
 * Check if a company is Corporate Registration compliant
 */
export declare function isCompanyCorporateRegistrationCompliant(companyDataOrCin: CorporateRegistrationAPIResponse | string): boolean | Promise<boolean>;
export type { CorporateRegistrationAPIResponse };
