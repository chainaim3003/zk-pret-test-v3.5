import { Signature, CircuitString } from 'o1js';
import { BusinessStdMerkleWitness8 } from '../../tests/with-sign/BusinessStdIntegrityOptimMerkleUtils.js';
declare const BusinessStdIntegrityOptimMerklePublicOutput_base: (new (value: {
    transportDocumentReference: CircuitString;
    shipperPartyName: CircuitString;
    issuingPartyName: CircuitString;
    carrierCode: CircuitString;
    isBLCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    fieldsValidated: import("o1js/dist/node/lib/provable/field.js").Field;
    patternValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    enumValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    booleanValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    arrayValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    stringValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    enhancedValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    transportDocumentReference: CircuitString;
    shipperPartyName: CircuitString;
    issuingPartyName: CircuitString;
    carrierCode: CircuitString;
    isBLCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    fieldsValidated: import("o1js/dist/node/lib/provable/field.js").Field;
    patternValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    enumValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    booleanValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    arrayValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    stringValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    enhancedValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    transportDocumentReference: CircuitString;
    shipperPartyName: CircuitString;
    issuingPartyName: CircuitString;
    carrierCode: CircuitString;
    isBLCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
    fieldsValidated: import("o1js/dist/node/lib/provable/field.js").Field;
    patternValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    enumValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    booleanValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    arrayValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    stringValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    enhancedValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    transportDocumentReference: string;
    shipperPartyName: string;
    issuingPartyName: string;
    carrierCode: string;
    isBLCompliant: boolean;
    datasetRoot: bigint;
    fieldsValidated: bigint;
    patternValidationsPassed: bigint;
    enumValidationsPassed: bigint;
    booleanValidationsPassed: bigint;
    arrayValidationsPassed: bigint;
    stringValidationsPassed: bigint;
    enhancedValidationsPassed: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        transportDocumentReference: CircuitString;
        shipperPartyName: CircuitString;
        issuingPartyName: CircuitString;
        carrierCode: CircuitString;
        isBLCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsValidated: import("o1js/dist/node/lib/provable/field.js").Field;
        patternValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        enumValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        booleanValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        arrayValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        stringValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        enhancedValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        transportDocumentReference: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        shipperPartyName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        issuingPartyName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        carrierCode: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        isBLCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        datasetRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsValidated: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        patternValidationsPassed: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        enumValidationsPassed: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        booleanValidationsPassed: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        arrayValidationsPassed: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        stringValidationsPassed: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        enhancedValidationsPassed: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        transportDocumentReference: CircuitString;
        shipperPartyName: CircuitString;
        issuingPartyName: CircuitString;
        carrierCode: CircuitString;
        isBLCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsValidated: import("o1js/dist/node/lib/provable/field.js").Field;
        patternValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        enumValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        booleanValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        arrayValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        stringValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        enhancedValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        transportDocumentReference: CircuitString;
        shipperPartyName: CircuitString;
        issuingPartyName: CircuitString;
        carrierCode: CircuitString;
        isBLCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsValidated: import("o1js/dist/node/lib/provable/field.js").Field;
        patternValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        enumValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        booleanValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        arrayValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        stringValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        enhancedValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        transportDocumentReference: CircuitString;
        shipperPartyName: CircuitString;
        issuingPartyName: CircuitString;
        carrierCode: CircuitString;
        isBLCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsValidated: import("o1js/dist/node/lib/provable/field.js").Field;
        patternValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        enumValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        booleanValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        arrayValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        stringValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        enhancedValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        transportDocumentReference: {
            values: {
                value: string;
            }[];
        };
        shipperPartyName: {
            values: {
                value: string;
            }[];
        };
        issuingPartyName: {
            values: {
                value: string;
            }[];
        };
        carrierCode: {
            values: {
                value: string;
            }[];
        };
        isBLCompliant: boolean;
        datasetRoot: string;
        fieldsValidated: string;
        patternValidationsPassed: string;
        enumValidationsPassed: string;
        booleanValidationsPassed: string;
        arrayValidationsPassed: string;
        stringValidationsPassed: string;
        enhancedValidationsPassed: string;
    };
    fromJSON: (x: {
        transportDocumentReference: {
            values: {
                value: string;
            }[];
        };
        shipperPartyName: {
            values: {
                value: string;
            }[];
        };
        issuingPartyName: {
            values: {
                value: string;
            }[];
        };
        carrierCode: {
            values: {
                value: string;
            }[];
        };
        isBLCompliant: boolean;
        datasetRoot: string;
        fieldsValidated: string;
        patternValidationsPassed: string;
        enumValidationsPassed: string;
        booleanValidationsPassed: string;
        arrayValidationsPassed: string;
        stringValidationsPassed: string;
        enhancedValidationsPassed: string;
    }) => {
        transportDocumentReference: CircuitString;
        shipperPartyName: CircuitString;
        issuingPartyName: CircuitString;
        carrierCode: CircuitString;
        isBLCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsValidated: import("o1js/dist/node/lib/provable/field.js").Field;
        patternValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        enumValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        booleanValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        arrayValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        stringValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        enhancedValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        transportDocumentReference: CircuitString;
        shipperPartyName: CircuitString;
        issuingPartyName: CircuitString;
        carrierCode: CircuitString;
        isBLCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        datasetRoot: import("o1js/dist/node/lib/provable/field.js").Field;
        fieldsValidated: import("o1js/dist/node/lib/provable/field.js").Field;
        patternValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        enumValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        booleanValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        arrayValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        stringValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
        enhancedValidationsPassed: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
export declare class BusinessStdIntegrityOptimMerklePublicOutput extends BusinessStdIntegrityOptimMerklePublicOutput_base {
}
export declare const BusinessStdIntegrityOptimMerkleVerifier: {
    name: string;
    compile: (options?: {
        cache?: import("o1js/dist/node/lib/proof-system/cache.js").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field.js").Field;
        };
    }>;
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, BusinessStdIntegrityOptimMerklePublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveCoreCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
        proveEnhancedCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof BusinessStdIntegrityOptimMerklePublicOutput;
    privateInputTypes: {
        proveCoreCompliance: [typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field), typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof Signature];
        proveEnhancedCompliance: [typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field), typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof BusinessStdMerkleWitness8, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof CircuitString, typeof Signature];
    };
    rawMethods: {
        proveCoreCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [import("o1js/dist/node/lib/provable/field.js").Field, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, Signature] & any[]) => Promise<BusinessStdIntegrityOptimMerklePublicOutput>;
        proveEnhancedCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [import("o1js/dist/node/lib/provable/field.js").Field, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, Signature] & any[]) => Promise<BusinessStdIntegrityOptimMerklePublicOutput>;
    };
} & {
    proveCoreCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [import("o1js/dist/node/lib/provable/field.js").Field, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, Signature] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, BusinessStdIntegrityOptimMerklePublicOutput>>;
    proveEnhancedCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [import("o1js/dist/node/lib/provable/field.js").Field, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, BusinessStdMerkleWitness8, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, CircuitString, Signature] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/lib/provable/field.js").Field, BusinessStdIntegrityOptimMerklePublicOutput>>;
};
declare const BusinessStdIntegrityOptimMerkleProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: BusinessStdIntegrityOptimMerklePublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: BusinessStdIntegrityOptimMerklePublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof BusinessStdIntegrityOptimMerklePublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof BusinessStdIntegrityOptimMerklePublicOutput;
    };
    fromJSON<S extends (new (...args: any) => import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<unknown, unknown>) & {
        prototype: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<any, any>;
        fromJSON: typeof import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof.fromJSON;
        dummy: typeof import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof.dummy;
        publicInputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        publicOutputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        tag: () => {
            name: string;
        };
    } & {
        prototype: import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<unknown, unknown>;
    }>(this: S, { maxProofsVerified, proof: proofString, publicInput: publicInputJson, publicOutput: publicOutputJson, }: import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicInputType"], import("o1js/dist/node/lib/provable/field.js").Field>, import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicOutputType"], import("o1js/dist/node/lib/provable/field.js").Field>>>;
    dummy<Input, OutPut>(publicInput: Input, publicOutput: OutPut, maxProofsVerified: 0 | 1 | 2, domainLog2?: number | undefined): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<Input, OutPut>>;
};
export declare class BusinessStdIntegrityOptimMerkleProof extends BusinessStdIntegrityOptimMerkleProof_base {
}
export {};
