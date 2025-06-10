declare function runCorporateRegistrationExample(): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/int.js").UInt64, import("./zk-programs/with-sign/CorporateRegistrationOptimZKProgram.js").CorporateRegistrationOptimPublicOutput>>;
declare function runEnhancedResponseExample(): Promise<{
    response: import("./tests/with-sign/CorporateRegistrationEnhancedUtils.js").CorporateRegistrationAPIResponse;
    analysis: {
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
}>;
declare function quickComplianceCheck(cin: string): Promise<boolean>;
declare function runAllExamples(): Promise<void>;
export { runCorporateRegistrationExample, runEnhancedResponseExample, quickComplianceCheck, runAllExamples };
