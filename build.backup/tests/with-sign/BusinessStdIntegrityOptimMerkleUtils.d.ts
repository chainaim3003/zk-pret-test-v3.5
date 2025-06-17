import { MerkleTree, CircuitString, Field } from 'o1js';
declare const BusinessStdMerkleWitness8_base: typeof import("o1js/dist/node/lib/provable/merkle-tree.js").BaseMerkleWitness;
declare class BusinessStdMerkleWitness8 extends BusinessStdMerkleWitness8_base {
}
export declare class BusinessStdMerkleTree {
    values: {
        key: number;
        value: Field[];
        fieldName: string;
    }[];
    tree: MerkleTree;
    constructor(blData: any);
    private parseBLToTreeData;
    get root(): Field;
    witness(index: number): BusinessStdMerkleWitness8;
    getFieldValue(index: number): CircuitString;
    getFieldName(index: number): string;
    listFields(): {
        index: number;
        name: string;
        value: string;
    }[];
}
export declare class BusinessStdMerkleUtils {
    static readonly FIELD_INDICES: Record<string, number>;
    static createBusinessStdMerkleTree(blData: any): BusinessStdMerkleTree;
    static getFieldWitnesses(tree: BusinessStdMerkleTree, fieldNames: string[]): BusinessStdMerkleWitness8[];
    static getFieldValues(tree: BusinessStdMerkleTree, fieldNames: string[]): CircuitString[];
    static getCoreComplianceFields(tree: BusinessStdMerkleTree): {
        witnesses: BusinessStdMerkleWitness8[];
        values: CircuitString[];
        fieldNames: string[];
    };
    static getEnhancedComplianceFields(tree: BusinessStdMerkleTree): {
        witnesses: BusinessStdMerkleWitness8[];
        values: CircuitString[];
        fieldNames: string[];
    };
    static verifyFieldInTree(tree: BusinessStdMerkleTree, fieldName: string, expectedValue?: string): boolean;
    static printTreeSummary(tree: BusinessStdMerkleTree): void;
}
export { BusinessStdMerkleWitness8 };
