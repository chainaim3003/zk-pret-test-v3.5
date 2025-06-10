import { MerkleTree, CircuitString, Field } from 'o1js';
declare const MerkleWitness7_base: typeof import("o1js/dist/node/lib/provable/merkle-tree.js").BaseMerkleWitness;
declare class MerkleWitness7 extends MerkleWitness7_base {
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
    witness(index: number): MerkleWitness7;
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
    static createGLEIFMerkleTree(companyName: string, typeOfNet: string): Promise<GLEIFMerkleTree>;
    static createBatchMerkleTree(companyNames: string[], typeOfNet: string): Promise<GLEIFBatchMerkleTree>;
    static getFieldWitnesses(tree: GLEIFMerkleTree, fieldNames: string[]): MerkleWitness7[];
    static getFieldValues(tree: GLEIFMerkleTree, fieldNames: string[]): CircuitString[];
    static verifyFieldInTree(tree: GLEIFMerkleTree, fieldName: string, expectedValue?: string): boolean;
    static printTreeSummary(tree: GLEIFMerkleTree): void;
    static getCoreComplianceFields(tree: GLEIFMerkleTree): {
        witnesses: MerkleWitness7[];
        values: CircuitString[];
    };
    static getExtendedComplianceFields(tree: GLEIFMerkleTree): {
        witnesses: MerkleWitness7[];
        values: CircuitString[];
        fieldNames: string[];
    };
}
export { MerkleWitness7 };
