import { CircuitString, Proof, SelfProof } from 'o1js';
import { CorporateRegistrationProof } from './CorporateRegistrationZKProgramWithSign.js';
import { EXIMProof } from './EXIMZKProgramWithSign.js';
import { GLEIFProof } from './GLEIFZKProgramWithSign.js';
declare const CompliancePublicOutput_base: (new (value: {
    companyName: CircuitString;
    companyID: CircuitString;
}) => {
    companyName: CircuitString;
    companyID: CircuitString;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    companyName: CircuitString;
    companyID: CircuitString;
}, {
    companyName: string;
    companyID: string;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        companyName: CircuitString;
        companyID: CircuitString;
    };
} & {
    fromValue: (value: {
        companyName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
        companyID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string.js").Character[];
        };
    }) => {
        companyName: CircuitString;
        companyID: CircuitString;
    };
    toInput: (x: {
        companyName: CircuitString;
        companyID: CircuitString;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        companyName: CircuitString;
        companyID: CircuitString;
    }) => {
        companyName: {
            values: {
                value: string;
            }[];
        };
        companyID: {
            values: {
                value: string;
            }[];
        };
    };
    fromJSON: (x: {
        companyName: {
            values: {
                value: string;
            }[];
        };
        companyID: {
            values: {
                value: string;
            }[];
        };
    }) => {
        companyName: CircuitString;
        companyID: CircuitString;
    };
    empty: () => {
        companyName: CircuitString;
        companyID: CircuitString;
    };
};
export declare class CompliancePublicOutput extends CompliancePublicOutput_base {
}
export declare const ComposedCompliance: {
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
    verify: (proof: Proof<import("o1js/dist/node/lib/provable/field.js").Field, CompliancePublicOutput>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        level1: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
        level2: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
        level3: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky.js").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky.js").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof CompliancePublicOutput;
    privateInputTypes: {
        level1: [typeof CorporateRegistrationProof];
        level2: [{
            new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
                proof: unknown;
                publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
                publicOutput: CompliancePublicOutput;
                maxProofsVerified: 0 | 1 | 2;
            }): SelfProof<import("o1js/dist/node/lib/provable/field.js").Field, CompliancePublicOutput>;
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
            publicInputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
            publicOutputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
            tag: () => {
                name: string;
            };
        }, typeof EXIMProof];
        level3: [{
            new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
                proof: unknown;
                publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
                publicOutput: CompliancePublicOutput;
                maxProofsVerified: 0 | 1 | 2;
            }): SelfProof<import("o1js/dist/node/lib/provable/field.js").Field, CompliancePublicOutput>;
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
            publicInputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
            publicOutputType: import("o1js/dist/node/lib/provable/types/struct.js").FlexibleProvablePure<any>;
            tag: () => {
                name: string;
            };
        }, typeof GLEIFProof];
    };
    rawMethods: {
        level1: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [CorporateRegistrationProof] & any[]) => Promise<CompliancePublicOutput>;
        level2: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [SelfProof<import("o1js/dist/node/lib/provable/field.js").Field, CompliancePublicOutput>, EXIMProof] & any[]) => Promise<CompliancePublicOutput>;
        level3: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [SelfProof<import("o1js/dist/node/lib/provable/field.js").Field, CompliancePublicOutput>, GLEIFProof] & any[]) => Promise<CompliancePublicOutput>;
    };
} & {
    level1: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [CorporateRegistrationProof] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, CompliancePublicOutput>>;
    level2: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [SelfProof<import("o1js/dist/node/lib/provable/field.js").Field, CompliancePublicOutput>, EXIMProof] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, CompliancePublicOutput>>;
    level3: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [SelfProof<import("o1js/dist/node/lib/provable/field.js").Field, CompliancePublicOutput>, GLEIFProof] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, CompliancePublicOutput>>;
};
declare const ComposedProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: CompliancePublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: CompliancePublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof CompliancePublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof CompliancePublicOutput;
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
export declare class ComposedProof extends ComposedProof_base {
}
export {};
