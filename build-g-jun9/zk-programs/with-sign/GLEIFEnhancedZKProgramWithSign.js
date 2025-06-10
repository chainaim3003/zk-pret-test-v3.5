import { Field, Signature, Struct, ZkProgram, CircuitString, Provable, Poseidon, Bool, UInt64, PublicKey, } from 'o1js';
import { getPublicKeyFor } from '../../core/OracleRegistry.js';
// =================================== Enhanced GLEIF Compliance Data Definition ===================================
export class GLEIFEnhancedComplianceData extends Struct({
    // Core GLEIF identifiers
    type: CircuitString,
    id: CircuitString,
    lei: CircuitString,
    name: CircuitString,
    // Compliance status fields
    registration_status: CircuitString,
    entity_status: CircuitString,
    validation_status: CircuitString,
    // Legal and registration information
    jurisdiction: CircuitString,
    legalForm_id: CircuitString,
    registeredAt_id: CircuitString,
    // Temporal data
    initialRegistrationDate: CircuitString,
    lastUpdateDate: CircuitString,
    nextRenewalDate: CircuitString,
    // Address information (simplified)
    legalAddress_country: CircuitString,
    legalAddress_city: CircuitString,
    headquartersAddress_country: CircuitString,
    // Additional compliance indicators
    managingLou: CircuitString,
    corroborationLevel: CircuitString,
    conformityFlag: CircuitString,
    // Multi-company tracking fields
    companyGroup: Field,
    parentLEI: CircuitString,
    subsidiaryCount: Field,
    // Risk and compliance scoring
    complianceScore: Field,
    riskLevel: Field,
    lastVerificationTimestamp: UInt64, // Last verification timestamp
}) {
    // Hash function for the enhanced company data
    hash() {
        return Poseidon.hash([
            this.lei.hash(),
            this.name.hash(),
            this.registration_status.hash(),
            this.entity_status.hash(),
            this.jurisdiction.hash(),
            this.complianceScore,
            this.riskLevel,
            this.lastVerificationTimestamp.value,
        ]);
    }
    // Check if entity meets basic GLEIF compliance requirements (for params pattern)
    isBasicGLEIFCompliant(currentTimestamp) {
        // Basic GLEIF status checks only
        const hasValidRegistrationStatus = this.isValidRegistrationStatus();
        const hasValidEntityStatus = this.isValidEntityStatus();
        const hasValidConformityFlag = this.isValidConformityFlag();
        const isWithinValidPeriod = this.isWithinValidPeriod(currentTimestamp);
        // Only basic GLEIF compliance - no risk/scoring logic
        return hasValidRegistrationStatus
            .and(hasValidEntityStatus)
            .and(hasValidConformityFlag)
            .and(isWithinValidPeriod);
    }
    // Check if entity is currently compliant (comprehensive business rules for ZK program)
    isCompliant() {
        // Basic status checks
        const hasValidRegistrationStatus = this.isValidRegistrationStatus();
        const hasValidEntityStatus = this.isValidEntityStatus();
        const hasValidConformityFlag = this.isValidConformityFlag();
        // Advanced compliance checks with default thresholds
        const meetsComplianceThreshold = this.meetsComplianceThreshold(Field(70)); // 70% minimum
        const hasAcceptableRisk = this.isAcceptableRisk(Field(3)); // Risk level ≤ 3
        const hasValidLEI = this.isValidLEI();
        // Combine all business rules for ZK program
        return hasValidRegistrationStatus
            .and(hasValidEntityStatus)
            .and(hasValidConformityFlag)
            .and(meetsComplianceThreshold)
            .and(hasAcceptableRisk)
            .and(hasValidLEI);
    }
    // Check if entity is compliant with custom thresholds
    isCompliantWithThresholds(complianceThreshold, riskThreshold, currentTimestamp) {
        // Basic status checks
        const hasValidRegistrationStatus = this.isValidRegistrationStatus();
        const hasValidEntityStatus = this.isValidEntityStatus();
        const hasValidConformityFlag = this.isValidConformityFlag();
        // Advanced compliance checks with custom thresholds
        const meetsComplianceThreshold = this.meetsComplianceThreshold(complianceThreshold);
        const hasAcceptableRisk = this.isAcceptableRisk(riskThreshold);
        const hasValidLEI = this.isValidLEI();
        // Temporal validity check if timestamp provided
        let isTemporallyValid = Bool(true);
        if (currentTimestamp) {
            isTemporallyValid = this.isTemporallyValid(currentTimestamp);
        }
        // Combine all business rules
        return hasValidRegistrationStatus
            .and(hasValidEntityStatus)
            .and(hasValidConformityFlag)
            .and(meetsComplianceThreshold)
            .and(hasAcceptableRisk)
            .and(hasValidLEI)
            .and(isTemporallyValid);
    }
    // Helper method: Check if registration status is valid (ISSUED)
    isValidRegistrationStatus() {
        const issuedStatus = CircuitString.fromString('ISSUED');
        return this.registration_status.equals(issuedStatus);
    }
    // Helper method: Check if entity status is valid (ACTIVE)
    isValidEntityStatus() {
        const activeStatus = CircuitString.fromString('ACTIVE');
        return this.entity_status.equals(activeStatus);
    }
    // Helper method: Check if conformity flag is valid (not NON_CONFORMING)
    isValidConformityFlag() {
        const nonConformingFlag = CircuitString.fromString('NON_CONFORMING');
        const nullFlag = CircuitString.fromString('');
        // Valid if not NON_CONFORMING and not empty
        const isNotNonConforming = this.conformityFlag.equals(nonConformingFlag).not();
        const isNotEmpty = this.conformityFlag.equals(nullFlag).not();
        return isNotNonConforming.and(isNotEmpty);
    }
    // Helper method: Check if current date is within valid registration period
    isWithinValidPeriod(currentTimestamp) {
        // Simplified validation - check if dates are not empty
        // In production, this would parse date strings and compare timestamps
        const emptyDate = CircuitString.fromString('');
        const unknownDate = CircuitString.fromString('UNKNOWN');
        const hasLastUpdateDate = this.lastUpdateDate.equals(emptyDate).not()
            .and(this.lastUpdateDate.equals(unknownDate).not());
        const hasNextRenewalDate = this.nextRenewalDate.equals(emptyDate).not()
            .and(this.nextRenewalDate.equals(unknownDate).not());
        // For now, just check that both dates exist
        // TODO: Add actual date parsing and timestamp comparison
        return hasLastUpdateDate.and(hasNextRenewalDate);
    }
    // Check if compliance score meets threshold
    meetsComplianceThreshold(threshold) {
        return this.complianceScore.greaterThanOrEqual(threshold);
    }
    // Check if risk level is acceptable
    isAcceptableRisk(maxRiskLevel) {
        return this.riskLevel.lessThanOrEqual(maxRiskLevel);
    }
    // Verify LEI format (20 characters, basic validation)
    isValidLEI() {
        // Basic LEI validation - should be 20 characters
        return Bool(true); // Simplified for now
    }
    // Check if entity is part of a group structure
    isPartOfGroup() {
        return this.companyGroup.greaterThan(Field(0));
    }
    // Verify temporal validity (not expired)
    isTemporallyValid(currentTimestamp) {
        // Check if last verification is not too old (e.g., within 90 days)
        const ninetyDaysInMs = UInt64.from(90 * 24 * 60 * 60 * 1000);
        const validUntil = this.lastVerificationTimestamp.add(ninetyDaysInMs);
        return currentTimestamp.lessThanOrEqual(validUntil);
    }
}
// =================================== Enhanced Public Output Structure ===================================
export class GLEIFEnhancedPublicOutput extends Struct({
    // Basic identification
    name: CircuitString,
    id: CircuitString,
    // Compliance verification results
    isCompliant: Bool,
    complianceScore: Field,
    riskLevel: Field,
    // Verification metadata
    verificationTimestamp: UInt64,
    verifierPublicKey: PublicKey,
    // Multi-company context
    companyGroup: Field,
    isGroupCompliant: Bool,
    // Jurisdiction and regulatory context
    jurisdiction: CircuitString,
    regulatoryCompliance: Bool,
    // Historical compliance indicator
    hasHistoricalCompliance: Bool,
    complianceStreakDays: Field, // Days of continuous compliance
}) {
}
// =================================== Enhanced GLEIF ZK Program ===================================
export const GLEIFEnhancedZKProgram = ZkProgram({
    name: 'GLEIFEnhancedZKProgram',
    publicInput: Field,
    publicOutput: GLEIFEnhancedPublicOutput,
    methods: {
        // Standard compliance verification
        proveCompliance: {
            privateInputs: [
                GLEIFEnhancedComplianceData,
                Signature,
                UInt64,
                Field,
                Field, // Risk threshold
            ],
            async method(gleifToProve, gleifData, oracleSignature, currentTimestamp, complianceThreshold, riskThreshold) {
                // =================================== Oracle Signature Verification ===================================
                const complianceDataHash = Poseidon.hash(GLEIFEnhancedComplianceData.toFields(gleifData));
                const registryPublicKey = getPublicKeyFor('GLEIF');
                const isValidSignature = oracleSignature.verify(registryPublicKey, [complianceDataHash]);
                isValidSignature.assertTrue();
                // =================================== Enhanced Compliance Verification ===================================
                // Basic compliance checks
                const isBasicCompliant = gleifData.isCompliant();
                const hasValidLEI = gleifData.isValidLEI();
                const isTemporallyValid = gleifData.isTemporallyValid(currentTimestamp);
                // Advanced compliance checks
                const meetsScoreThreshold = gleifData.meetsComplianceThreshold(complianceThreshold);
                const hasAcceptableRisk = gleifData.isAcceptableRisk(riskThreshold);
                // Combined compliance status
                const overallCompliance = isBasicCompliant
                    .and(hasValidLEI)
                    .and(isTemporallyValid)
                    .and(meetsScoreThreshold)
                    .and(hasAcceptableRisk);
                // Group compliance assessment
                const isGroupEntity = gleifData.isPartOfGroup();
                const groupCompliance = Provable.if(isGroupEntity, gleifData.complianceScore.greaterThanOrEqual(Field(80)), // Higher threshold for groups
                Bool(true) // Single entities don't need group compliance
                );
                // Regulatory compliance (jurisdiction-specific)
                const regulatoryCompliance = gleifData.jurisdiction.equals(CircuitString.fromString('UNKNOWN')).not();
                // Historical compliance (simplified - based on compliance score)
                const hasHistoricalCompliance = gleifData.complianceScore.greaterThanOrEqual(Field(70));
                const complianceStreakDays = Provable.if(hasHistoricalCompliance, gleifData.complianceScore.mul(Field(10)), // Simplified calculation
                Field(0));
                return new GLEIFEnhancedPublicOutput({
                    name: gleifData.name,
                    id: gleifData.id,
                    isCompliant: overallCompliance,
                    complianceScore: gleifData.complianceScore,
                    riskLevel: gleifData.riskLevel,
                    verificationTimestamp: currentTimestamp,
                    verifierPublicKey: registryPublicKey,
                    companyGroup: gleifData.companyGroup,
                    isGroupCompliant: groupCompliance,
                    jurisdiction: gleifData.jurisdiction,
                    regulatoryCompliance: regulatoryCompliance,
                    hasHistoricalCompliance: hasHistoricalCompliance,
                    complianceStreakDays: complianceStreakDays,
                });
            },
        },
        // Multi-company verification
        proveMultiCompanyCompliance: {
            privateInputs: [
                GLEIFEnhancedComplianceData,
                GLEIFEnhancedComplianceData,
                Signature,
                UInt64,
                Field, // Group compliance threshold
            ],
            async method(gleifToProve, primaryGleifData, secondaryGleifData, oracleSignature, currentTimestamp, groupThreshold) {
                // Verify both companies belong to the same group
                primaryGleifData.companyGroup.assertEquals(secondaryGleifData.companyGroup);
                primaryGleifData.companyGroup.greaterThan(Field(0)).assertTrue();
                // =================================== Oracle Signature Verification ===================================
                const combinedDataHash = Poseidon.hash([
                    ...GLEIFEnhancedComplianceData.toFields(primaryGleifData),
                    ...GLEIFEnhancedComplianceData.toFields(secondaryGleifData)
                ]);
                const registryPublicKey = getPublicKeyFor('GLEIF');
                const isValidSignature = oracleSignature.verify(registryPublicKey, [combinedDataHash]);
                isValidSignature.assertTrue();
                // =================================== Multi-Company Compliance Verification ===================================
                // Individual company compliance
                const primary_compliant = primaryGleifData.isCompliant();
                const secondary_compliant = secondaryGleifData.isCompliant();
                // Group-level compliance requirements
                const averageComplianceScore = primaryGleifData.complianceScore
                    .add(secondaryGleifData.complianceScore)
                    .div(Field(2));
                const groupMeetsThreshold = averageComplianceScore.greaterThanOrEqual(groupThreshold);
                // Combined group compliance
                const groupCompliance = primary_compliant
                    .and(secondary_compliant)
                    .and(groupMeetsThreshold);
                return new GLEIFEnhancedPublicOutput({
                    name: primaryGleifData.name,
                    id: primaryGleifData.id,
                    isCompliant: groupCompliance,
                    complianceScore: averageComplianceScore,
                    riskLevel: primaryGleifData.riskLevel,
                    verificationTimestamp: currentTimestamp,
                    verifierPublicKey: registryPublicKey,
                    companyGroup: primaryGleifData.companyGroup,
                    isGroupCompliant: groupCompliance,
                    jurisdiction: primaryGleifData.jurisdiction,
                    regulatoryCompliance: Bool(true),
                    hasHistoricalCompliance: Bool(true),
                    complianceStreakDays: averageComplianceScore.mul(Field(5)),
                });
            },
        },
        // Historical compliance verification
        proveHistoricalCompliance: {
            privateInputs: [
                GLEIFEnhancedComplianceData,
                Signature,
                UInt64,
                UInt64,
                Field, // Historical compliance threshold
            ],
            async method(gleifToProve, gleifData, oracleSignature, historicalTimestamp, currentTimestamp, historicalThreshold) {
                // =================================== Oracle Signature Verification ===================================
                const complianceDataHash = Poseidon.hash([
                    ...GLEIFEnhancedComplianceData.toFields(gleifData),
                    historicalTimestamp.value
                ]);
                const registryPublicKey = getPublicKeyFor('GLEIF');
                const isValidSignature = oracleSignature.verify(registryPublicKey, [complianceDataHash]);
                isValidSignature.assertTrue();
                // =================================== Historical Compliance Verification ===================================
                // Verify historical timestamp is before current timestamp
                historicalTimestamp.lessThanOrEqual(currentTimestamp).assertTrue();
                // Calculate compliance duration
                const complianceDuration = currentTimestamp.sub(historicalTimestamp);
                const daysDuration = complianceDuration.div(UInt64.from(24 * 60 * 60 * 1000));
                // Historical compliance requirements
                const hasLongTermCompliance = gleifData.complianceScore.greaterThanOrEqual(historicalThreshold);
                const hasConsistentCompliance = daysDuration.greaterThanOrEqual(UInt64.from(365)); // At least 1 year
                const historicalCompliance = hasLongTermCompliance.and(hasConsistentCompliance);
                return new GLEIFEnhancedPublicOutput({
                    name: gleifData.name,
                    id: gleifData.id,
                    isCompliant: historicalCompliance,
                    complianceScore: gleifData.complianceScore,
                    riskLevel: gleifData.riskLevel,
                    verificationTimestamp: currentTimestamp,
                    verifierPublicKey: registryPublicKey,
                    companyGroup: gleifData.companyGroup,
                    isGroupCompliant: Bool(true),
                    jurisdiction: gleifData.jurisdiction,
                    regulatoryCompliance: Bool(true),
                    hasHistoricalCompliance: historicalCompliance,
                    complianceStreakDays: Field(daysDuration.value),
                });
            },
        },
    },
});
// Export proof class
export class GLEIFEnhancedProof extends ZkProgram.Proof(GLEIFEnhancedZKProgram) {
}
// =================================== Utility Functions ===================================
export class GLEIFEnhancedUtils {
    /**
     * Create enhanced compliance data from API response
     */
    static createEnhancedComplianceDataFromAPI(apiResponse, complianceScore = 85, riskLevel = 2) {
        const entity = apiResponse.data[0].attributes.entity;
        const registration = apiResponse.data[0].attributes.registration;
        return new GLEIFEnhancedComplianceData({
            type: CircuitString.fromString(apiResponse.data[0].type || 'lei-records'),
            id: CircuitString.fromString(apiResponse.data[0].id || ''),
            lei: CircuitString.fromString(apiResponse.data[0].attributes.lei || ''),
            name: CircuitString.fromString(entity.legalName?.name || ''),
            registration_status: CircuitString.fromString(entity.status || 'INACTIVE'),
            entity_status: CircuitString.fromString(entity.status || 'INACTIVE'),
            validation_status: CircuitString.fromString('VALIDATED'),
            jurisdiction: CircuitString.fromString(entity.jurisdiction || 'UNKNOWN'),
            legalForm_id: CircuitString.fromString(entity.legalForm?.id || 'UNKNOWN'),
            registeredAt_id: CircuitString.fromString('GLEIF'),
            initialRegistrationDate: CircuitString.fromString(registration.initialRegistrationDate || ''),
            lastUpdateDate: CircuitString.fromString(registration.lastUpdateDate || ''),
            nextRenewalDate: CircuitString.fromString(registration.nextRenewalDate || ''),
            legalAddress_country: CircuitString.fromString(entity.legalAddress?.country || 'UNKNOWN'),
            legalAddress_city: CircuitString.fromString(entity.legalAddress?.city || 'UNKNOWN'),
            headquartersAddress_country: CircuitString.fromString(entity.headquartersAddress?.country || 'UNKNOWN'),
            managingLou: CircuitString.fromString(registration.managingLou || 'UNKNOWN'),
            corroborationLevel: CircuitString.fromString(registration.corroborationLevel || 'UNKNOWN'),
            conformityFlag: CircuitString.fromString('Y'),
            companyGroup: Field(0),
            parentLEI: CircuitString.fromString(''),
            subsidiaryCount: Field(0),
            complianceScore: Field(complianceScore),
            riskLevel: Field(riskLevel),
            lastVerificationTimestamp: UInt64.from(Date.now()),
        });
    }
    /**
     * Validate enhanced LEI format
     */
    static isValidEnhancedLEIFormat(lei) {
        const leiRegex = /^[0-9A-Z]{18}[0-9]{2}$/;
        return leiRegex.test(lei) && lei.length === 20;
    }
    /**
     * Calculate compliance score based on multiple factors
     */
    static calculateComplianceScore(factors) {
        let score = 0;
        if (factors.statusActive)
            score += 40;
        if (factors.recentUpdate)
            score += 20;
        if (factors.validJurisdiction)
            score += 15;
        if (factors.hasParentLEI)
            score += 15;
        if (factors.managingLouKnown)
            score += 10;
        return Math.min(score, 100);
    }
}
//# sourceMappingURL=GLEIFEnhancedZKProgramWithSign.js.map