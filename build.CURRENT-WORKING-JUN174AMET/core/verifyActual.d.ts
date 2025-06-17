interface patternObject {
    type: string;
    pattern?: string;
    enum?: string[];
}
export declare function isPatternObject(obj: any): obj is patternObject;
export declare function verifyActual(): Promise<void>;
export declare function verifyActualFromFile(filename: string): Promise<any>;
export declare function verifyActualFromJSONString(jsonString: string): Promise<any>;
export {};
