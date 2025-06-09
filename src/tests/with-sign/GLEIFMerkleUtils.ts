import { MerkleTree, MerkleWitness, CircuitString, Field, Poseidon, Struct } from 'o1js';
import { fetchGLEIFCompanyData } from './GLEIFUtils.js';

// Merkle witness for tree height 7 (supports 128 fields)
class MerkleWitness7 extends MerkleWitness(7) {}

// Enhanced GLEIF data structure using Merkle Tree
export class GLEIFMerkleTree {
  values: {key: number, value: Field[], fieldName: string}[];
  tree: MerkleTree;

  constructor(parsedData: any) {
    this.values = this.parseGLEIFToTreeData(parsedData);
    this.tree = new MerkleTree(7); // Support 128 fields
    
    // Populate tree with hashed field values
    for(const {key, value} of this.values) {
      this.tree.setLeaf(BigInt(key), Poseidon.hash(value));
    }
  }

  private parseGLEIFToTreeData(parsedData: any): {key: number, value: Field[], fieldName: string}[] {
    const record = parsedData.data[0];
    const attributes = record.attributes;
    const entity = attributes.entity;
    const legalAddress = entity.legalAddress || {};
    const headquartersAddress = entity.headquartersAddress || {};
    const registration = attributes.registration || {};

    return [
      // Core fields (indices 0-4) - matching existing GLEIFComplianceDataO1
      {
        key: 0, 
        value: CircuitString.fromString(record.type || '').values.map(c => c.toField()),
        fieldName: 'type'
      },
      {
        key: 1, 
        value: CircuitString.fromString(record.id || '').values.map(c => c.toField()),
        fieldName: 'id'
      },
      {
        key: 2, 
        value: CircuitString.fromString(attributes.lei || '').values.map(c => c.toField()),
        fieldName: 'lei'
      },
      {
        key: 3, 
        value: CircuitString.fromString(entity.legalName?.name || '').values.map(c => c.toField()),
        fieldName: 'name'
      },
      {
        key: 4, 
        value: CircuitString.fromString(entity.status || '').values.map(c => c.toField()),
        fieldName: 'registration_status'
      },
      
      // Extended fields (indices 5-30+) - Now possible with Merkle Tree!
      {
        key: 5, 
        value: CircuitString.fromString(entity.legalName?.language || '').values.map(c => c.toField()),
        fieldName: 'legalName_language'
      },
      {
        key: 6, 
        value: CircuitString.fromString(entity.otherNames?.[0]?.name || '').values.map(c => c.toField()),
        fieldName: 'otherNames'
      },
      {
        key: 7, 
        value: CircuitString.fromString(legalAddress.language || '').values.map(c => c.toField()),
        fieldName: 'legalAddress_language'
      },
      {
        key: 8, 
        value: CircuitString.fromString(legalAddress.addressLines?.[0] || '').values.map(c => c.toField()),
        fieldName: 'legalAddress_addressLines'
      },
      {
        key: 9, 
        value: CircuitString.fromString(legalAddress.city || '').values.map(c => c.toField()),
        fieldName: 'legalAddress_city'
      },
      {
        key: 10, 
        value: CircuitString.fromString(legalAddress.region || '').values.map(c => c.toField()),
        fieldName: 'legalAddress_region'
      },
      {
        key: 11, 
        value: CircuitString.fromString(legalAddress.country || '').values.map(c => c.toField()),
        fieldName: 'legalAddress_country'
      },
      {
        key: 12, 
        value: CircuitString.fromString(legalAddress.postalCode || '').values.map(c => c.toField()),
        fieldName: 'legalAddress_postalCode'
      },
      {
        key: 13, 
        value: CircuitString.fromString(headquartersAddress.language || '').values.map(c => c.toField()),
        fieldName: 'headquartersAddress_language'
      },
      {
        key: 14, 
        value: CircuitString.fromString(headquartersAddress.addressLines?.[0] || '').values.map(c => c.toField()),
        fieldName: 'headquartersAddress_addressLines'
      },
      {
        key: 15, 
        value: CircuitString.fromString(headquartersAddress.city || '').values.map(c => c.toField()),
        fieldName: 'headquartersAddress_city'
      },
      {
        key: 16, 
        value: CircuitString.fromString(headquartersAddress.region || '').values.map(c => c.toField()),
        fieldName: 'headquartersAddress_region'
      },
      {
        key: 17, 
        value: CircuitString.fromString(headquartersAddress.country || '').values.map(c => c.toField()),
        fieldName: 'headquartersAddress_country'
      },
      {
        key: 18, 
        value: CircuitString.fromString(headquartersAddress.postalCode || '').values.map(c => c.toField()),
        fieldName: 'headquartersAddress_postalCode'
      },
      {
        key: 19, 
        value: CircuitString.fromString(entity.registeredAt?.id || '').values.map(c => c.toField()),
        fieldName: 'registeredAt_id'
      },
      {
        key: 20, 
        value: CircuitString.fromString(entity.registeredAs || '').values.map(c => c.toField()),
        fieldName: 'registeredAs'
      },
      {
        key: 21, 
        value: CircuitString.fromString(entity.jurisdiction || '').values.map(c => c.toField()),
        fieldName: 'jurisdiction'
      },
      {
        key: 22, 
        value: CircuitString.fromString(entity.legalForm?.id || '').values.map(c => c.toField()),
        fieldName: 'legalForm_id'
      },
      {
        key: 23, 
        value: CircuitString.fromString(entity.expiration?.date || '').values.map(c => c.toField()),
        fieldName: 'expiration'
      },
      {
        key: 24, 
        value: CircuitString.fromString(entity.creationDate || '').values.map(c => c.toField()),
        fieldName: 'creationDate'
      },
      {
        key: 25, 
        value: CircuitString.fromString(entity.subCategory || '').values.map(c => c.toField()),
        fieldName: 'subCategory'
      },
      {
        key: 26, 
        value: CircuitString.fromString(registration.initialRegistrationDate || '').values.map(c => c.toField()),
        fieldName: 'initialRegistrationDate'
      },
      {
        key: 27, 
        value: CircuitString.fromString(registration.lastUpdateDate || '').values.map(c => c.toField()),
        fieldName: 'lastUpdateDate'
      },
      {
        key: 28, 
        value: CircuitString.fromString(registration.nextRenewalDate || '').values.map(c => c.toField()),
        fieldName: 'nextRenewalDate'
      },
      {
        key: 29, 
        value: CircuitString.fromString(registration.managingLou || '').values.map(c => c.toField()),
        fieldName: 'managingLou'
      },
      {
        key: 30, 
        value: CircuitString.fromString(registration.corroborationLevel || '').values.map(c => c.toField()),
        fieldName: 'corroborationLevel'
      }
    ];
  }

  get root(): Field {
    return this.tree.getRoot();
  }

  public witness(index: number): MerkleWitness7 {
    return new MerkleWitness7(this.tree.getWitness(BigInt(index)));
  }

  // Get field value by index
  public getFieldValue(index: number): CircuitString {
    const field = this.values.find(v => v.key === index);
    if (!field) {
      throw new Error(`Field with index ${index} not found`);
    }
    // Convert Field array back to CircuitString
    const characters = field.value.map(f => {
      const charValue = Number(f.toBigInt()) % 256; // Convert Field to character code
      return String.fromCharCode(charValue);
    }).join('');
    return CircuitString.fromString(characters);
  }

  // Get field name by index
  public getFieldName(index: number): string {
    const field = this.values.find(v => v.key === index);
    if (!field) {
      throw new Error(`Field with index ${index} not found`);
    }
    return field.fieldName;
  }

  // List all available fields
  public listFields(): {index: number, name: string, value: string}[] {
    return this.values.map(field => ({
      index: field.key,
      name: field.fieldName,
      value: CircuitString.fromFields(field.value).toString()
    }));
  }
}

// Batch Merkle Tree for multiple companies
class MerkleWitness10 extends MerkleWitness(10) {}

export class GLEIFBatchMerkleTree {
  companyTrees: GLEIFMerkleTree[];
  batchTree: MerkleTree;

  constructor(companiesData: any[]) {
    this.companyTrees = companiesData.map(data => new GLEIFMerkleTree(data));
    this.batchTree = new MerkleTree(10); // Support up to 1024 companies
    
    // Populate batch tree with company roots
    this.companyTrees.forEach((companyTree, index) => {
      this.batchTree.setLeaf(BigInt(index), companyTree.root);
    });
  }

  get root(): Field {
    return this.batchTree.getRoot();
  }

  public companyWitness(companyIndex: number): MerkleWitness10 {
    return new MerkleWitness10(this.batchTree.getWitness(BigInt(companyIndex)));
  }

  public getCompanyTree(index: number): GLEIFMerkleTree {
    return this.companyTrees[index];
  }
}

// Utility class for GLEIF Merkle operations
export class GLEIFMerkleUtils {
  
  // Field index mappings for easy access
  static readonly FIELD_INDICES: Record<string, number> = {
    'type': 0,
    'id': 1,
    'lei': 2,
    'name': 3,
    'registration_status': 4,
    'legalName_language': 5,
    'otherNames': 6,
    'legalAddress_language': 7,
    'legalAddress_addressLines': 8,
    'legalAddress_city': 9,
    'legalAddress_region': 10,
    'legalAddress_country': 11,
    'legalAddress_postalCode': 12,
    'headquartersAddress_language': 13,
    'headquartersAddress_addressLines': 14,
    'headquartersAddress_city': 15,
    'headquartersAddress_region': 16,
    'headquartersAddress_country': 17,
    'headquartersAddress_postalCode': 18,
    'registeredAt_id': 19,
    'registeredAs': 20,
    'jurisdiction': 21,
    'legalForm_id': 22,
    'expiration': 23,
    'creationDate': 24,
    'subCategory': 25,
    'initialRegistrationDate': 26,
    'lastUpdateDate': 27,
    'nextRenewalDate': 28,
    'managingLou': 29,
    'corroborationLevel': 30
  };

  // Create Merkle tree from GLEIF API data
  static async createGLEIFMerkleTree(companyName: string, typeOfNet: string): Promise<GLEIFMerkleTree> {
    console.log(`🌳 Creating Merkle tree for company: ${companyName}`);
    const parsedData = await fetchGLEIFCompanyData(companyName, typeOfNet);
    const tree = new GLEIFMerkleTree(parsedData);
    
    console.log(`✅ Merkle tree created with ${tree.values.length} fields`);
    console.log(`🔗 Root hash: ${tree.root.toString()}`);
    
    return tree;
  }

  // Create batch tree for multiple companies
  static async createBatchMerkleTree(companyNames: string[], typeOfNet: string): Promise<GLEIFBatchMerkleTree> {
    console.log(`🏢 Creating batch tree for ${companyNames.length} companies`);
    
    const companiesData = await Promise.all(
      companyNames.map(async (name, index) => {
        console.log(`  📡 Fetching data for company ${index + 1}/${companyNames.length}: ${name}`);
        return await fetchGLEIFCompanyData(name, typeOfNet);
      })
    );
    
    const batchTree = new GLEIFBatchMerkleTree(companiesData);
    console.log(`✅ Batch tree created with root: ${batchTree.root.toString()}`);
    
    return batchTree;
  }

  // Get witnesses for specific fields
  static getFieldWitnesses(tree: GLEIFMerkleTree, fieldNames: string[]): MerkleWitness7[] {
    return fieldNames.map(fieldName => {
      const index = this.FIELD_INDICES[fieldName as keyof typeof this.FIELD_INDICES];
      if (index === undefined) {
        throw new Error(`Unknown field name: ${fieldName}. Available fields: ${Object.keys(this.FIELD_INDICES).join(', ')}`);
      }
      return tree.witness(index);
    });
  }

  // Get field values for specific fields
  static getFieldValues(tree: GLEIFMerkleTree, fieldNames: string[]): CircuitString[] {
    return fieldNames.map(fieldName => {
      const index = this.FIELD_INDICES[fieldName as keyof typeof this.FIELD_INDICES];
      if (index === undefined) {
        throw new Error(`Unknown field name: ${fieldName}. Available fields: ${Object.keys(this.FIELD_INDICES).join(', ')}`);
      }
      return tree.getFieldValue(index);
    });
  }

  // Verify a field exists in the tree (useful for testing)
  static verifyFieldInTree(tree: GLEIFMerkleTree, fieldName: string, expectedValue?: string): boolean {
    try {
      const index = this.FIELD_INDICES[fieldName as keyof typeof this.FIELD_INDICES];
      if (index === undefined) return false;

      const witness = tree.witness(index);
      const fieldValue = tree.getFieldValue(index);
      const fieldHash = Poseidon.hash(fieldValue.values.map(c => c.toField()));
      const calculatedRoot = witness.calculateRoot(fieldHash);
      
      const rootMatches = calculatedRoot.equals(tree.root).toBoolean();
      
      if (expectedValue) {
        const valueMatches = fieldValue.toString() === expectedValue;
        console.log(`🔍 Field '${fieldName}': Root match=${rootMatches}, Value match=${valueMatches}`);
        return rootMatches && valueMatches;
      }
      
      console.log(`🔍 Field '${fieldName}': Root match=${rootMatches}`);
      return rootMatches;
    } catch (error) {
      console.error(`❌ Error verifying field '${fieldName}':`, error);
      return false;
    }
  }

  // Print tree summary
  static printTreeSummary(tree: GLEIFMerkleTree): void {
    console.log('\n📊 GLEIF Merkle Tree Summary:');
    console.log(`🔗 Root: ${tree.root.toString()}`);
    console.log(`📁 Total fields: ${tree.values.length}`);
    console.log('\n📋 Available fields:');
    
    const fields = tree.listFields();
    fields.forEach((field, index) => {
      const truncatedValue = field.value.length > 50 ? 
        field.value.substring(0, 47) + '...' : field.value;
      console.log(`  ${index.toString().padStart(2)}: ${field.name.padEnd(25)} = "${truncatedValue}"`);
    });
    console.log('');
  }

  // Get core compliance fields (matching original implementation)
  static getCoreComplianceFields(tree: GLEIFMerkleTree): {
    witnesses: MerkleWitness7[],
    values: CircuitString[]
  } {
    const coreFields = ['name', 'registration_status', 'lei'];
    return {
      witnesses: this.getFieldWitnesses(tree, coreFields),
      values: this.getFieldValues(tree, coreFields)
    };
  }

  // Get extended fields for comprehensive verification
  static getExtendedComplianceFields(tree: GLEIFMerkleTree): {
    witnesses: MerkleWitness7[],
    values: CircuitString[],
    fieldNames: string[]
  } {
    const extendedFields = [
      'name', 'registration_status', 'lei', 
      'legalAddress_country', 'legalAddress_city', 
      'jurisdiction', 'legalForm_id'
    ];
    return {
      witnesses: this.getFieldWitnesses(tree, extendedFields),
      values: this.getFieldValues(tree, extendedFields),
      fieldNames: extendedFields
    };
  }
}

export { MerkleWitness7 };
