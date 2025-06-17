import { MerkleTree, CircuitString, Field } from 'o1js';
declare const MerkleWitness9_base: typeof import("o1js/dist/node/lib/provable/merkle-tree.js").BaseMerkleWitness;
declare class MerkleWitness9 extends MerkleWitness9_base {
}
export declare class GLEIFMerkleTree {
    values: {
        key: number;
        value: Field[];
        fieldName: string;
    }[];
    tree: MerkleTree;
    constructor(parsedData: any);
    private parseGLEIFToTreeData;
    get root(): Field;
    witness(index: number): MerkleWitness9;
    getFieldValue(index: number): CircuitString;
    getFieldName(index: number): string;
    listFields(): {
        index: number;
        name: string;
        value: string;
    }[];
}
declare const MerkleWitness10_base: typeof import("o1js/dist/node/lib/provable/merkle-tree.js").BaseMerkleWitness;
declare class MerkleWitness10 extends MerkleWitness10_base {
}
export declare class GLEIFBatchMerkleTree {
    companyTrees: GLEIFMerkleTree[];
    batchTree: MerkleTree;
    constructor(companiesData: any[]);
    get root(): Field;
    companyWitness(companyIndex: number): MerkleWitness10;
    getCompanyTree(index: number): GLEIFMerkleTree;
}
export declare class GLEIFMerkleUtils {
    static readonly FIELD_INDICES: Record<string, number>;
    static createGLEIFMerkleTree(companyName: string): Promise<GLEIFMerkleTree>;
    static createBatchMerkleTree(companyNames: string[]): Promise<GLEIFBatchMerkleTree>;
    static getFieldWitnesses(tree: GLEIFMerkleTree, fieldNames: string[]): MerkleWitness9[];
    static getFieldValues(tree: GLEIFMerkleTree, fieldNames: string[]): CircuitString[];
    static verifyFieldInTree(tree: GLEIFMerkleTree, fieldName: string, expectedValue?: string): boolean;
    static printTreeSummary(tree: GLEIFMerkleTree): void;
    static getCoreComplianceFields(tree: GLEIFMerkleTree): {
        witnesses: MerkleWitness9[];
        values: CircuitString[];
    };
    static getExtendedComplianceFields(tree: GLEIFMerkleTree): {
        witnesses: MerkleWitness9[];
        values: CircuitString[];
        fieldNames: string[];
    };
    static getComprehensiveComplianceFields(tree: GLEIFMerkleTree): {
        witnesses: MerkleWitness9[];
        values: CircuitString[];
        fieldNames: string[];
    };
}
export { MerkleWitness9 };
export declare class GLEIFBusinessLogicUtils {
    static isEntityStatusActive(status: CircuitString): boolean;
    static isRegistrationStatusIssued(status: CircuitString): boolean;
    static isConformityCompliant(flag: CircuitString): boolean;
    static isDateValid(dateStr: CircuitString): boolean;
    static hasValidLEI(lei: CircuitString): boolean;
    static checkOverallCompliance(entityStatus: CircuitString, registrationStatus: CircuitString, conformityFlag: CircuitString, lastUpdate: CircuitString, nextRenewal: CircuitString, lei: CircuitString): boolean;
}
