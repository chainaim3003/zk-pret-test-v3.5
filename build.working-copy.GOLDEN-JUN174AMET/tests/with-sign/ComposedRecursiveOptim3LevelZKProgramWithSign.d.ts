import { Field, Proof, SelfProof, UInt64 } from 'o1js';
import { CorporateRegistrationOptimProof } from '../../zk-programs/with-sign/CorporateRegistrationOptimZKProgram.js';
import { EXIMOptimProof } from '../../zk-programs/with-sign/EXIMOptimZKProgram.js';
import { GLEIFOptimProof } from '../../zk-programs/with-sign/GLEIFOptimZKProgram.js';
declare const ComposedOptimCompliancePublicOutput_base: (new (value: {
    companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
    overallComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    isFullyCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    servicesIncluded: import("o1js/dist/node/lib/provable/field.js").Field;
    servicesCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    composedProofVersion: import("o1js/dist/node/lib/provable/field.js").Field;
    underlyingProofsHash: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
    overallComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    isFullyCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    servicesIncluded: import("o1js/dist/node/lib/provable/field.js").Field;
    servicesCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    composedProofVersion: import("o1js/dist/node/lib/provable/field.js").Field;
    underlyingProofsHash: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
    companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
    overallComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
    isFullyCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
    servicesIncluded: import("o1js/dist/node/lib/provable/field.js").Field;
    servicesCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
    verificationTimestamp: UInt64;
    composedProofVersion: import("o1js/dist/node/lib/provable/field.js").Field;
    underlyingProofsHash: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    companyNameHash: bigint;
    companyIdentifierHash: bigint;
    overallComplianceScore: bigint;
    isFullyCompliant: boolean;
    servicesIncluded: bigint;
    servicesCompliant: bigint;
    verificationTimestamp: bigint;
    composedProofVersion: bigint;
    underlyingProofsHash: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
        overallComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        isFullyCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        servicesIncluded: import("o1js/dist/node/lib/provable/field.js").Field;
        servicesCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        composedProofVersion: import("o1js/dist/node/lib/provable/field.js").Field;
        underlyingProofsHash: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        companyNameHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        companyIdentifierHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        overallComplianceScore: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        isFullyCompliant: boolean | import("o1js/dist/node/lib/provable/bool.js").Bool;
        servicesIncluded: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        servicesCompliant: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: bigint | UInt64;
        composedProofVersion: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        underlyingProofsHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
        overallComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        isFullyCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        servicesIncluded: import("o1js/dist/node/lib/provable/field.js").Field;
        servicesCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        composedProofVersion: import("o1js/dist/node/lib/provable/field.js").Field;
        underlyingProofsHash: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
        overallComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        isFullyCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        servicesIncluded: import("o1js/dist/node/lib/provable/field.js").Field;
        servicesCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        composedProofVersion: import("o1js/dist/node/lib/provable/field.js").Field;
        underlyingProofsHash: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
        overallComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        isFullyCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        servicesIncluded: import("o1js/dist/node/lib/provable/field.js").Field;
        servicesCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        composedProofVersion: import("o1js/dist/node/lib/provable/field.js").Field;
        underlyingProofsHash: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        companyNameHash: string;
        companyIdentifierHash: string;
        overallComplianceScore: string;
        isFullyCompliant: boolean;
        servicesIncluded: string;
        servicesCompliant: string;
        verificationTimestamp: string;
        composedProofVersion: string;
        underlyingProofsHash: string;
    };
    fromJSON: (x: {
        companyNameHash: string;
        companyIdentifierHash: string;
        overallComplianceScore: string;
        isFullyCompliant: boolean;
        servicesIncluded: string;
        servicesCompliant: string;
        verificationTimestamp: string;
        composedProofVersion: string;
        underlyingProofsHash: string;
    }) => {
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
        overallComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        isFullyCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        servicesIncluded: import("o1js/dist/node/lib/provable/field.js").Field;
        servicesCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        composedProofVersion: import("o1js/dist/node/lib/provable/field.js").Field;
        underlyingProofsHash: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        companyNameHash: import("o1js/dist/node/lib/provable/field.js").Field;
        companyIdentifierHash: import("o1js/dist/node/lib/provable/field.js").Field;
        overallComplianceScore: import("o1js/dist/node/lib/provable/field.js").Field;
        isFullyCompliant: import("o1js/dist/node/lib/provable/bool.js").Bool;
        servicesIncluded: import("o1js/dist/node/lib/provable/field.js").Field;
        servicesCompliant: import("o1js/dist/node/lib/provable/field.js").Field;
        verificationTimestamp: UInt64;
        composedProofVersion: import("o1js/dist/node/lib/provable/field.js").Field;
        underlyingProofsHash: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
/**
 * Public output for composed optimization compliance verification
 * Designed to be minimal to respect o1js constraints
 */
export declare class ComposedOptimCompliancePublicOutput extends ComposedOptimCompliancePublicOutput_base {
}
declare const UnderlyingProofMetadata_base: (new (value: {
    corpRegProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    eximProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    gleifProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    combinedHash: import("o1js/dist/node/lib/provable/field.js").Field;
}) => {
    corpRegProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    eximProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    gleifProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    combinedHash: import("o1js/dist/node/lib/provable/field.js").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    corpRegProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    eximProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    gleifProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
    combinedHash: import("o1js/dist/node/lib/provable/field.js").Field;
}, {
    corpRegProofHash: bigint;
    eximProofHash: bigint;
    gleifProofHash: bigint;
    combinedHash: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field.js").Field[]) => {
        corpRegProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        eximProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        gleifProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        combinedHash: import("o1js/dist/node/lib/provable/field.js").Field;
    };
} & {
    fromValue: (value: {
        corpRegProofHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        eximProofHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        gleifProofHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
        combinedHash: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        corpRegProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        eximProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        gleifProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        combinedHash: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    toInput: (x: {
        corpRegProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        eximProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        gleifProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        combinedHash: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field.js").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field.js").Field, number][] | undefined;
    };
    toJSON: (x: {
        corpRegProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        eximProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        gleifProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        combinedHash: import("o1js/dist/node/lib/provable/field.js").Field;
    }) => {
        corpRegProofHash: string;
        eximProofHash: string;
        gleifProofHash: string;
        combinedHash: string;
    };
    fromJSON: (x: {
        corpRegProofHash: string;
        eximProofHash: string;
        gleifProofHash: string;
        combinedHash: string;
    }) => {
        corpRegProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        eximProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        gleifProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        combinedHash: import("o1js/dist/node/lib/provable/field.js").Field;
    };
    empty: () => {
        corpRegProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        eximProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        gleifProofHash: import("o1js/dist/node/lib/provable/field.js").Field;
        combinedHash: import("o1js/dist/node/lib/provable/field.js").Field;
    };
};
/**
 * Minimal structure for tracking underlying proof metadata
 * Used internally for proof composition verification
 */
export declare class UnderlyingProofMetadata extends UnderlyingProofMetadata_base {
}
/**
 * ComposedOptimCompliance ZkProgram
 * 3-level recursive composition with optimized proof handling
 */
export declare const ComposedOptimCompliance: {
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
    verify: (proof: Proof<import("o1js/dist/node/lib/provable/field.js").Field, ComposedOptimCompliancePublicOutput>) => Promise<boolean>;
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
    publicOutputType: typeof ComposedOptimCompliancePublicOutput;
    privateInputTypes: {
        level1: [typeof CorporateRegistrationOptimProof];
        level2: [{
            new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
                proof: unknown;
                publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
                publicOutput: ComposedOptimCompliancePublicOutput;
                maxProofsVerified: 0 | 1 | 2;
            }): SelfProof<import("o1js/dist/node/lib/provable/field.js").Field, ComposedOptimCompliancePublicOutput>;
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
        }, typeof EXIMOptimProof];
        level3: [{
            new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
                proof: unknown;
                publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
                publicOutput: ComposedOptimCompliancePublicOutput;
                maxProofsVerified: 0 | 1 | 2;
            }): SelfProof<import("o1js/dist/node/lib/provable/field.js").Field, ComposedOptimCompliancePublicOutput>;
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
        }, typeof GLEIFOptimProof];
    };
    rawMethods: {
        level1: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [CorporateRegistrationOptimProof] & any[]) => Promise<ComposedOptimCompliancePublicOutput>;
        level2: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [SelfProof<import("o1js/dist/node/lib/provable/field.js").Field, ComposedOptimCompliancePublicOutput>, EXIMOptimProof] & any[]) => Promise<ComposedOptimCompliancePublicOutput>;
        level3: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [SelfProof<import("o1js/dist/node/lib/provable/field.js").Field, ComposedOptimCompliancePublicOutput>, GLEIFOptimProof] & any[]) => Promise<ComposedOptimCompliancePublicOutput>;
    };
} & {
    level1: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [CorporateRegistrationOptimProof] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, ComposedOptimCompliancePublicOutput>>;
    level2: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [SelfProof<import("o1js/dist/node/lib/provable/field.js").Field, ComposedOptimCompliancePublicOutput>, EXIMOptimProof] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, ComposedOptimCompliancePublicOutput>>;
    level3: (publicInput: import("o1js/dist/node/lib/provable/field.js").Field, ...args: [SelfProof<import("o1js/dist/node/lib/provable/field.js").Field, ComposedOptimCompliancePublicOutput>, GLEIFOptimProof] & any[]) => Promise<Proof<import("o1js/dist/node/lib/provable/field.js").Field, ComposedOptimCompliancePublicOutput>>;
};
declare const ComposedOptimProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: ComposedOptimCompliancePublicOutput;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool.js").Bool): void;
        publicInput: import("o1js/dist/node/lib/provable/field.js").Field;
        publicOutput: ComposedOptimCompliancePublicOutput;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool.js").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram.js").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
    publicOutputType: typeof ComposedOptimCompliancePublicOutput;
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field.js").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field.js").Field | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar.js").FieldConst) => import("o1js/dist/node/lib/provable/field.js").Field);
        publicOutputType: typeof ComposedOptimCompliancePublicOutput;
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
/**
 * Proof class for the composed compliance verification
 */
export declare class ComposedOptimProof extends ComposedOptimProof_base {
}
/**
 * Helper functions for working with composed proofs
 */
export declare class ComposedOptimProofUtils {
    /**
     * Extract service compliance status from bitmask
     */
    static getServiceCompliance(servicesCompliant: Field): {
        corpReg: boolean;
        exim: boolean;
        gleif: boolean;
    };
    /**
     * Extract which services are included from bitmask
     */
    static getServicesIncluded(servicesIncluded: Field): {
        corpReg: boolean;
        exim: boolean;
        gleif: boolean;
    };
    /**
     * Check if this is a complete 3-service composed proof
     */
    static isCompleteComposedProof(proof: ComposedOptimProof): boolean;
    /**
     * Get compliance summary for reporting
     */
    static getComplianceSummary(proof: ComposedOptimProof): {
        overallScore: number;
        isFullyCompliant: boolean;
        serviceCompliance: {
            corpReg: boolean;
            exim: boolean;
            gleif: boolean;
        };
        servicesIncluded: {
            corpReg: boolean;
            exim: boolean;
            gleif: boolean;
        };
        level: number;
    };
}
export {};
