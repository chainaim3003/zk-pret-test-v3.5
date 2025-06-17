/// <reference types="node" />
import * as fs from 'fs';
interface NestedObject {
    properties?: {
        [key: string]: NestedObject;
    };
    required?: string[];
    type: string;
}
interface patternObject {
    type: string;
    pattern?: string;
    enum?: string[];
}
interface RequiredKeysObject {
    [key: string]: RequiredKeysObject | patternObject;
}
export declare function parseAndDereference(filePath: string): Promise<any>;
export declare function extractPattern(obj: patternObject): patternObject;
export declare function extractRequiredKeys(obj: NestedObject): RequiredKeysObject;
export declare function returnPattern(): {
    [key: string]: string;
};
export declare function generateCircuitsFromPatterns(patterns: {
    [s: string]: unknown;
} | ArrayLike<unknown>, filePath: fs.PathOrFileDescriptor): Promise<void>;
export declare function isPatternObject(obj: any): obj is patternObject;
export declare function parseSwagger(): Promise<void>;
export {};
