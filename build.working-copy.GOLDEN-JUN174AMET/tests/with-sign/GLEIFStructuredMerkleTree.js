import { Field, Poseidon, CircuitString, MerkleTree, MerkleWitness, Struct, Bool, } from 'o1js';
// =================================== Merkle Tree Configuration ===================================
export const MERKLE_TREE_HEIGHT = 7; // 2^7 = 128 possible entries
export class MerkleWitness7 extends MerkleWitness(MERKLE_TREE_HEIGHT) {
}
// =================================== GLEIF Data Bundle Structures ===================================
/**
 * Structured data bundles for selective disclosure in Merkle trees
 */
export class GLEIFLegalAddressBundle extends Struct({
    country: CircuitString,
    city: CircuitString,
    addressLines: CircuitString,
    postalCode: CircuitString,
    region: CircuitString,
}) {
    hash() {
        return Poseidon.hash([
            this.country.hash(),
            this.city.hash(),
            this.addressLines.hash(),
            this.postalCode.hash(),
            this.region.hash(),
        ]);
    }
}
export class GLEIFHeadquartersAddressBundle extends Struct({
    country: CircuitString,
    city: CircuitString,
    addressLines: CircuitString,
    postalCode: CircuitString,
    region: CircuitString,
}) {
    hash() {
        return Poseidon.hash([
            this.country.hash(),
            this.city.hash(),
            this.addressLines.hash(),
            this.postalCode.hash(),
            this.region.hash(),
        ]);
    }
}
export class GLEIFBusinessMetadataBundle extends Struct({
    legalForm: CircuitString,
    jurisdiction: CircuitString,
    category: CircuitString,
    status: CircuitString,
    expiration: CircuitString,
}) {
    hash() {
        return Poseidon.hash([
            this.legalForm.hash(),
            this.jurisdiction.hash(),
            this.category.hash(),
            this.status.hash(),
            this.expiration.hash(),
        ]);
    }
}
export class GLEIFRegistrationInfoBundle extends Struct({
    initialRegistrationDate: CircuitString,
    lastUpdateDate: CircuitString,
    nextRenewalDate: CircuitString,
    managingLou: CircuitString,
    corroborationLevel: CircuitString,
}) {
    hash() {
        return Poseidon.hash([
            this.initialRegistrationDate.hash(),
            this.lastUpdateDate.hash(),
            this.nextRenewalDate.hash(),
            this.managingLou.hash(),
            this.corroborationLevel.hash(),
        ]);
    }
}
// =================================== Field Indices for Merkle Tree ===================================
export var GLEIFMerkleFieldIndex;
(function (GLEIFMerkleFieldIndex) {
    GLEIFMerkleFieldIndex[GLEIFMerkleFieldIndex["LEGAL_ADDRESS_BUNDLE"] = 0] = "LEGAL_ADDRESS_BUNDLE";
    GLEIFMerkleFieldIndex[GLEIFMerkleFieldIndex["HEADQUARTERS_ADDRESS_BUNDLE"] = 1] = "HEADQUARTERS_ADDRESS_BUNDLE";
    GLEIFMerkleFieldIndex[GLEIFMerkleFieldIndex["BUSINESS_METADATA_BUNDLE"] = 2] = "BUSINESS_METADATA_BUNDLE";
    GLEIFMerkleFieldIndex[GLEIFMerkleFieldIndex["REGISTRATION_INFO_BUNDLE"] = 3] = "REGISTRATION_INFO_BUNDLE";
    GLEIFMerkleFieldIndex[GLEIFMerkleFieldIndex["LEGAL_NAME"] = 4] = "LEGAL_NAME";
    GLEIFMerkleFieldIndex[GLEIFMerkleFieldIndex["LEI"] = 5] = "LEI";
    GLEIFMerkleFieldIndex[GLEIFMerkleFieldIndex["OTHER_NAMES"] = 6] = "OTHER_NAMES";
    GLEIFMerkleFieldIndex[GLEIFMerkleFieldIndex["PARENT_LEI"] = 7] = "PARENT_LEI";
    GLEIFMerkleFieldIndex[GLEIFMerkleFieldIndex["SUBSIDIARIES_INFO"] = 8] = "SUBSIDIARIES_INFO";
    GLEIFMerkleFieldIndex[GLEIFMerkleFieldIndex["BIC_CODES"] = 9] = "BIC_CODES";
    GLEIFMerkleFieldIndex[GLEIFMerkleFieldIndex["MIC_CODES"] = 10] = "MIC_CODES";
    GLEIFMerkleFieldIndex[GLEIFMerkleFieldIndex["COMPLIANCE_INDICATORS"] = 11] = "COMPLIANCE_INDICATORS";
    // Reserve up to index 127 for future fields
})(GLEIFMerkleFieldIndex || (GLEIFMerkleFieldIndex = {}));
// =================================== Group Analysis Structures ===================================
export class GLEIFGroupAnalysis extends Struct({
    groupId: Field,
    totalEntities: Field,
    parentLEI: CircuitString,
    hierarchyLevel: Field,
    averageComplianceScore: Field,
    groupRiskLevel: Field,
    hasSubsidiaries: Bool,
    isSubsidiary: Bool, // Whether entity is a subsidiary
}) {
    hash() {
        return Poseidon.hash([
            this.groupId,
            this.totalEntities,
            this.parentLEI.hash(),
            this.hierarchyLevel,
            this.averageComplianceScore,
        ]);
    }
}
// =================================== Structured Merkle Tree Implementation ===================================
export class GLEIFStructuredMerkleTree {
    constructor(gleifData) {
        this.tree = new MerkleTree(MERKLE_TREE_HEIGHT);
        this.fieldMapping = new Map();
        this.dataStore = new Map();
        this.fieldCategories = new Map();
        this.optimizationData = null;
        this.values = [];
        // Initialize field mappings
        this.initializeFieldMappings();
        // If GLEIF data is provided, populate the tree
        if (gleifData) {
            this.populateFromGLEIFData(gleifData);
        }
    }
    initializeFieldMappings() {
        this.fieldMapping.set('legal_address_bundle', GLEIFMerkleFieldIndex.LEGAL_ADDRESS_BUNDLE);
        this.fieldMapping.set('headquarters_address_bundle', GLEIFMerkleFieldIndex.HEADQUARTERS_ADDRESS_BUNDLE);
        this.fieldMapping.set('business_metadata_bundle', GLEIFMerkleFieldIndex.BUSINESS_METADATA_BUNDLE);
        this.fieldMapping.set('registration_info_bundle', GLEIFMerkleFieldIndex.REGISTRATION_INFO_BUNDLE);
        this.fieldMapping.set('legal_name', GLEIFMerkleFieldIndex.LEGAL_NAME);
        this.fieldMapping.set('lei', GLEIFMerkleFieldIndex.LEI);
        this.fieldMapping.set('other_names', GLEIFMerkleFieldIndex.OTHER_NAMES);
        this.fieldMapping.set('parent_lei', GLEIFMerkleFieldIndex.PARENT_LEI);
        this.fieldMapping.set('subsidiaries_info', GLEIFMerkleFieldIndex.SUBSIDIARIES_INFO);
        this.fieldMapping.set('bic_codes', GLEIFMerkleFieldIndex.BIC_CODES);
        this.fieldMapping.set('mic_codes', GLEIFMerkleFieldIndex.MIC_CODES);
        this.fieldMapping.set('compliance_indicators', GLEIFMerkleFieldIndex.COMPLIANCE_INDICATORS);
        // Initialize field categories
        this.fieldCategories.set('core_identity', [
            'legal_name', 'lei', 'other_names'
        ]);
        this.fieldCategories.set('address_info', [
            'legal_address_bundle', 'headquarters_address_bundle'
        ]);
        this.fieldCategories.set('business_metadata', [
            'business_metadata_bundle', 'compliance_indicators'
        ]);
        this.fieldCategories.set('registration_info', [
            'registration_info_bundle', 'parent_lei', 'subsidiaries_info'
        ]);
        this.fieldCategories.set('financial_codes', [
            'bic_codes', 'mic_codes'
        ]);
    }
    /**
     * Get the current Merkle root
     */
    get root() {
        return this.tree.getRoot();
    }
    /**
     * Set a field value in the Merkle tree
     */
    setField(fieldName, value) {
        const index = this.fieldMapping.get(fieldName);
        if (index === undefined) {
            throw new Error(`Unknown field: ${fieldName}`);
        }
        this.tree.setLeaf(BigInt(index), value);
        this.dataStore.set(index, value);
        // Update values array for compatibility
        const existingIndex = this.values.findIndex(v => v.fieldName === fieldName);
        const grouping = this.getFieldCategory(fieldName) || 'unknown';
        if (existingIndex >= 0) {
            this.values[existingIndex] = { fieldName, grouping, value };
        }
        else {
            this.values.push({ fieldName, grouping, value });
        }
    }
    /**
     * Helper method to get the category of a field
     */
    getFieldCategory(fieldName) {
        for (const [category, fields] of this.fieldCategories.entries()) {
            if (fields.includes(fieldName)) {
                return category;
            }
        }
        return undefined;
    }
    /**
     * Get a field value from the data store
     */
    getField(fieldName) {
        const index = this.fieldMapping.get(fieldName);
        if (index === undefined) {
            throw new Error(`Unknown field: ${fieldName}`);
        }
        const value = this.dataStore.get(index);
        if (value === undefined) {
            return Field(0); // Default empty value
        }
        return value;
    }
    /**
     * Get a field value as CircuitString
     */
    getFieldAsCircuitString(fieldName) {
        const fieldValue = this.getField(fieldName);
        // Note: This is a simplified conversion - in practice you'd store original strings
        return CircuitString.fromString(fieldValue.toString());
    }
    /**
     * Generate a Merkle witness for a specific field
     */
    witness(fieldName) {
        const index = this.fieldMapping.get(fieldName);
        if (index === undefined) {
            throw new Error(`Unknown field: ${fieldName}`);
        }
        return new MerkleWitness7(this.tree.getWitness(BigInt(index)));
    }
    /**
     * Populate the tree from GLEIF API response
     */
    populateFromGLEIFData(apiResponse) {
        const entity = apiResponse.data[0].attributes.entity;
        const registration = apiResponse.data[0].attributes.registration;
        // Create structured bundles
        const legalAddressBundle = new GLEIFLegalAddressBundle({
            country: CircuitString.fromString(entity.legalAddress?.country || ''),
            city: CircuitString.fromString(entity.legalAddress?.city || ''),
            addressLines: CircuitString.fromString(entity.legalAddress?.addressLines?.join(', ') || ''),
            postalCode: CircuitString.fromString(entity.legalAddress?.postalCode || ''),
            region: CircuitString.fromString(entity.legalAddress?.region || ''),
        });
        const headquartersAddressBundle = new GLEIFHeadquartersAddressBundle({
            country: CircuitString.fromString(entity.headquartersAddress?.country || ''),
            city: CircuitString.fromString(entity.headquartersAddress?.city || ''),
            addressLines: CircuitString.fromString(entity.headquartersAddress?.addressLines?.join(', ') || ''),
            postalCode: CircuitString.fromString(entity.headquartersAddress?.postalCode || ''),
            region: CircuitString.fromString(entity.headquartersAddress?.region || ''),
        });
        const businessMetadataBundle = new GLEIFBusinessMetadataBundle({
            legalForm: CircuitString.fromString(entity.legalForm?.id || ''),
            jurisdiction: CircuitString.fromString(entity.jurisdiction || ''),
            category: CircuitString.fromString(entity.category || ''),
            status: CircuitString.fromString(entity.status || ''),
            expiration: CircuitString.fromString(entity.expiration?.date || ''),
        });
        const registrationInfoBundle = new GLEIFRegistrationInfoBundle({
            initialRegistrationDate: CircuitString.fromString(registration.initialRegistrationDate || ''),
            lastUpdateDate: CircuitString.fromString(registration.lastUpdateDate || ''),
            nextRenewalDate: CircuitString.fromString(registration.nextRenewalDate || ''),
            managingLou: CircuitString.fromString(registration.managingLou || ''),
            corroborationLevel: CircuitString.fromString(registration.corroborationLevel || ''),
        });
        // Set bundled fields
        this.setField('legal_address_bundle', legalAddressBundle.hash());
        this.setField('headquarters_address_bundle', headquartersAddressBundle.hash());
        this.setField('business_metadata_bundle', businessMetadataBundle.hash());
        this.setField('registration_info_bundle', registrationInfoBundle.hash());
        // Set individual critical fields
        this.setField('legal_name', CircuitString.fromString(entity.legalName?.name || '').hash());
        this.setField('lei', CircuitString.fromString(apiResponse.data[0].attributes.lei || '').hash());
        // Set optional fields if available
        if (entity.otherNames && entity.otherNames.length > 0) {
            const otherNamesHash = Poseidon.hash(entity.otherNames.map((name) => CircuitString.fromString(name.name || '').hash()));
            this.setField('other_names', otherNamesHash);
        }
        // BIC and MIC codes
        if (apiResponse.data[0].attributes.bic && apiResponse.data[0].attributes.bic.length > 0) {
            const bicHash = Poseidon.hash(apiResponse.data[0].attributes.bic.map((bic) => CircuitString.fromString(bic).hash()));
            this.setField('bic_codes', bicHash);
        }
        if (apiResponse.data[0].attributes.mic && apiResponse.data[0].attributes.mic.length > 0) {
            const micHash = Poseidon.hash(apiResponse.data[0].attributes.mic.map((mic) => CircuitString.fromString(mic).hash()));
            this.setField('mic_codes', micHash);
        }
        // Compliance indicators
        const complianceHash = Poseidon.hash([
            CircuitString.fromString(entity.status || '').hash(),
            CircuitString.fromString(registration.status || '').hash(),
            CircuitString.fromString(apiResponse.data[0].attributes.conformityFlag || '').hash(),
        ]);
        this.setField('compliance_indicators', complianceHash);
    }
    /**
     * Get summary of the tree structure
     */
    getSummary() {
        const populatedFields = [];
        for (const [fieldName, index] of this.fieldMapping.entries()) {
            if (this.dataStore.has(index)) {
                populatedFields.push(fieldName);
            }
        }
        return {
            root: this.root.toString(),
            populatedFields,
            totalFields: this.fieldMapping.size,
        };
    }
    /**
     * Get optimization analysis for the merkle tree
     */
    getOptimizationAnalysis() {
        const totalFields = this.fieldMapping.size;
        const populatedFields = this.dataStore.size;
        const emptyFields = totalFields - populatedFields;
        const storageEfficiency = totalFields > 0 ? (populatedFields / totalFields) * 100 : 0;
        // Calculate field groupings
        const categories = Array.from(this.fieldCategories.keys());
        const totalGroups = categories.length;
        const individualFields = populatedFields;
        const bundledFields = Math.max(0, populatedFields - categories.length);
        const estimatedFieldsInBundles = populatedFields * 2; // Rough estimate
        // Constraint cost estimates (simplified for compatibility)
        const baseConstraintPerField = 1500; // Average constraint cost per field
        const constraintCostAll = populatedFields * baseConstraintPerField;
        const constraintCostCore = Math.min(constraintCostAll, totalGroups * baseConstraintPerField);
        const constraintCostWithAddress = constraintCostCore * 1.3;
        const recommendedOptimizations = [];
        if (storageEfficiency < 50) {
            recommendedOptimizations.push('Consider using smaller tree depth');
        }
        if (emptyFields > 10) {
            recommendedOptimizations.push('Remove unused field mappings');
        }
        if (populatedFields > 100) {
            recommendedOptimizations.push('Consider field bundling for efficiency');
        }
        this.optimizationData = {
            totalFields,
            populatedFields,
            emptyFields,
            storageEfficiency,
            recommendedOptimizations,
            totalGroups,
            individualFields,
            bundledFields,
            estimatedFieldsInBundles,
            constraintCostAll,
            constraintCostCore,
            constraintCostWithAddress
        };
        return this.optimizationData;
    }
    /**
     * Get all available field names
     */
    getAvailableFields() {
        return Array.from(this.fieldMapping.keys());
    }
    /**
     * Get fields by category
     */
    getFieldsByCategory(category) {
        return this.fieldCategories.get(category) || [];
    }
    /**
     * Get all field categories
     */
    getFieldCategories() {
        return Array.from(this.fieldCategories.keys());
    }
}
// =================================== Group Analysis Functions ===================================
export class GLEIFGroupAnalyzer {
    /**
     * Analyze group structure from multiple GLEIF entities
     */
    static analyzeGroup(entities) {
        if (entities.length === 0) {
            throw new Error('No entities provided for group analysis');
        }
        // Find ultimate parent (entity with no parent)
        const ultimateParent = entities.find(entity => !entity.relationships?.directParent?.links?.reporting &&
            !entity.relationships?.ultimateParent?.links?.reporting) || entities[0];
        // Calculate group metrics
        const totalEntities = entities.length;
        const parentLEI = ultimateParent.attributes.lei;
        // Calculate average compliance score (simplified)
        const averageComplianceScore = Math.round(entities.reduce((sum, entity) => {
            const isActive = entity.attributes.entity.status === 'ACTIVE';
            const isIssued = entity.attributes.registration.status === 'ISSUED';
            return sum + (isActive && isIssued ? 85 : 45);
        }, 0) / totalEntities);
        // Determine group risk level
        const inactiveEntities = entities.filter(entity => entity.attributes.entity.status !== 'ACTIVE').length;
        const groupRiskLevel = Math.min(Math.max(1, Math.ceil(inactiveEntities / totalEntities * 5)), 5);
        // Analyze hierarchy
        const hasSubsidiaries = entities.some(entity => entity.relationships?.directChildren?.links?.reporting);
        const isSubsidiary = entities.some(entity => entity.relationships?.directParent?.links?.reporting ||
            entity.relationships?.ultimateParent?.links?.reporting);
        return new GLEIFGroupAnalysis({
            groupId: Field(Math.abs(parentLEI.hashCode ? parentLEI.hashCode() : parentLEI.length)),
            totalEntities: Field(totalEntities),
            parentLEI: CircuitString.fromString(parentLEI),
            hierarchyLevel: Field(0),
            averageComplianceScore: Field(averageComplianceScore),
            groupRiskLevel: Field(groupRiskLevel),
            hasSubsidiaries: Bool(hasSubsidiaries),
            isSubsidiary: Bool(isSubsidiary),
        });
    }
    /**
     * Create group Merkle tree with multiple entities
     */
    static createGroupMerkleTree(entities) {
        const groupTree = new GLEIFStructuredMerkleTree();
        const entityTrees = [];
        // Create individual entity trees
        entities.forEach((entity, index) => {
            const entityTree = new GLEIFStructuredMerkleTree();
            entityTree.populateFromGLEIFData({ data: [entity] });
            entityTrees.push(entityTree);
            // Add entity root to group tree
            const entityFieldName = `entity_${index}`;
            if (index < 50) { // Limit to available indices
                groupTree.setField(entityFieldName, entityTree.root);
            }
        });
        // Analyze group structure
        const groupAnalysis = this.analyzeGroup(entities);
        // Add group analysis to tree
        groupTree.setField('compliance_indicators', groupAnalysis.hash());
        return {
            tree: groupTree,
            groupAnalysis,
            entityTrees,
        };
    }
    /**
     * Identify related entities by jurisdiction, managing LOU, or other indicators
     */
    static identifyRelatedEntities(primaryEntity, allEntities) {
        const related = [primaryEntity];
        const primaryAttributes = primaryEntity.attributes;
        for (const entity of allEntities) {
            if (entity.id === primaryEntity.id)
                continue;
            const entityAttributes = entity.attributes;
            // Check for same managing LOU
            if (entityAttributes.registration.managingLou === primaryAttributes.registration.managingLou &&
                primaryAttributes.registration.managingLou !== '') {
                related.push(entity);
                continue;
            }
            // Check for same jurisdiction and similar names
            if (entityAttributes.entity.jurisdiction === primaryAttributes.entity.jurisdiction &&
                this.areNamesRelated(entityAttributes.entity.legalName.name, primaryAttributes.entity.legalName.name)) {
                related.push(entity);
                continue;
            }
            // Check for parent-child relationships
            if (this.hasRelationship(primaryEntity, entity)) {
                related.push(entity);
            }
        }
        return related;
    }
    static areNamesRelated(name1, name2) {
        const cleanName1 = name1.toLowerCase().replace(/[^a-z0-9]/g, '');
        const cleanName2 = name2.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Check for substantial overlap in name
        const words1 = cleanName1.split(' ').filter(w => w.length > 3);
        const words2 = cleanName2.split(' ').filter(w => w.length > 3);
        const commonWords = words1.filter(word => words2.includes(word));
        return commonWords.length > 0 && commonWords.length / Math.max(words1.length, words2.length) > 0.5;
    }
    static hasRelationship(entity1, entity2) {
        const rel1 = entity1.relationships;
        const rel2 = entity2.relationships;
        if (!rel1 || !rel2)
            return false;
        // Check if one is parent of the other
        return !!(rel1.directParent?.links?.reporting === entity2.id ||
            rel1.ultimateParent?.links?.reporting === entity2.id ||
            rel2.directParent?.links?.reporting === entity1.id ||
            rel2.ultimateParent?.links?.reporting === entity1.id);
    }
}
// =================================== Utility Functions ===================================
export class GLEIFMerkleUtils {
    /**
     * Create a complete Merkle tree from GLEIF API response
     */
    static createFromGLEIFResponse(apiResponse) {
        const tree = new GLEIFStructuredMerkleTree();
        tree.populateFromGLEIFData(apiResponse);
        return tree;
    }
    /**
     * Verify Merkle proof for a specific field
     */
    static verifyFieldProof(tree, fieldName, expectedValue) {
        try {
            const witness = tree.witness(fieldName);
            const root = witness.calculateRoot(expectedValue);
            return root.equals(tree.root).toBoolean();
        }
        catch {
            return false;
        }
    }
    /**
     * Generate proof bundle for selective disclosure
     */
    static generateProofBundle(tree, fieldsToProve) {
        const proofs = fieldsToProve.map(fieldName => ({
            field: fieldName,
            witness: tree.witness(fieldName),
            value: tree.getField(fieldName),
        }));
        return {
            proofs,
            root: tree.root,
        };
    }
}
//# sourceMappingURL=GLEIFStructuredMerkleTree.js.map