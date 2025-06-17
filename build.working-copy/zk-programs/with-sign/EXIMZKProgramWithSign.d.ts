import { Signature, Proof, CircuitString } from 'o1js';
import { EXIMComplianceDataO1 } from '../../tests/with-sign/EXIMo1.js';
declare const EXIMPublicOutput_base: (new (value: {
    entityName: CircuitString;
    iec: CircuitString;
}) => {
    entityName: CircuitString;
    iec: CircuitString;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    entityName: CircuitString;
    iec: CircuitString;
}, {
    entityName: string;
    iec: string;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        entityName: CircuitString;
        iec: CircuitString;
    };
} & {
    fromValue: (value: {
        entityName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        iec: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
    }) => {
        entityName: CircuitString;
        iec: CircuitString;
    };
    toInput: (x: {
        entityName: CircuitString;
        iec: CircuitString;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        entityName: CircuitString;
        iec: CircuitString;
    }) => {
        entityName: {
            values: {
                value: string;
            }[];
        };
        iec: {
            values: {
                value: string;
            }[];
        };
    };
    fromJSON: (x: {
        entityName: {
            values: {
                value: string;
            }[];
        };
        iec: {
            values: {
                value: string;
            }[];
        };
    }) => {
        entityName: CircuitString;
        iec: CircuitString;
    };
    empty: () => {
        entityName: CircuitString;
        iec: CircuitString;
    };
};
export declare class EXIMPublicOutput extends EXIMPublicOutput_base {
}
export declare const EXIM: {
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
    verify: (proof: Proof<import("o1js/dist/node/lib/provable/field.js").Field, EXIMPublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        proveCompliance: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof EXIMPublicOutput;
    privateInputTypes: {
        proveCompliance: [typeof EXIMComplianceDataO1, typeof Signature];
    };
    rawMethods: {
        proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [EXIMComplianceDataO1, Signature] & any[]) => Promise<EXIMPublicOutput>;
    };
} & {
    proveCompliance: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [EXIMComplianceDataO1, Signature] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, EXIMPublicOutput>>;
};
declare const EXIMProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: EXIMPublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: EXIMPublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof EXIMPublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof EXIMPublicOutput;
    };
    fromJSON<S extends (new (...args: any) => Proof<unknown, unknown>) & {
        prototype: Proof<any, any>;
        fromJSON: typeof Proof.fromJSON;
        dummy: typeof Proof.dummy;
        publicInputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        publicOutputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
        tag: () => {
            name: string;
        };
    } & {
        prototype: Proof<unknown, unknown>;
    }>(this: S, { maxProofsVerified, proof: proofString, publicInput: publicInputJson, publicOutput: publicOutputJson, }: import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof): Promise<Proof<import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicInputType"], import("o1js/dist/node/lib/provable/field.js").Field>, import("o1js/dist/node/bindings/lib/provable-generic.js").InferProvable<S["publicOutputType"], import("o1js/dist/node/lib/provable/field.js").Field>>>;
    dummy<Input, OutPut>(publicInput: Input, publicOutput: OutPut, maxProofsVerified: 0 | 1 | 2, domainLog2?: number | undefined): Promise<Proof<Input, OutPut>>;
};
export declare class EXIMProof extends EXIMProof_base {
}
export {};
