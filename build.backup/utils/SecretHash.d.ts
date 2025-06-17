export declare const SecretHash: {
    name: string;
    compile: (options?: {
        cache?: import("o1js/dist/node/lib/proof-system/cache").Cache | undefined;
        forceRecompile?: boolean | undefined;
    } | undefined) => Promise<{
        verificationKey: {
            data: string;
            hash: import("o1js/dist/node/lib/provable/field").Field;
        };
    }>;
    verify: (proof: import("o1js/dist/node/lib/proof-system/zkprogram").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>) => Promise<boolean>;
    digest: () => Promise<string>;
    analyzeMethods: () => Promise<{
        generate: {
            rows: number;
            digest: string;
            gates: import("o1js/dist/node/snarky").Gate[];
            publicInputSize: number;
            print(): void;
            summary(): Partial<Record<import("o1js/dist/node/snarky").GateType | "Total rows", number>>;
        };
    }>;
    publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    publicOutputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    privateInputTypes: {
        generate: [typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field)];
    };
    rawMethods: {
        generate: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js/dist/node/lib/provable/field").Field>;
    };
} & {
    generate: (publicInput: import("o1js/dist/node/lib/provable/field").Field, ...args: [import("o1js/dist/node/lib/provable/field").Field] & any[]) => Promise<import("o1js/dist/node/lib/proof-system/zkprogram").Proof<import("o1js/dist/node/lib/provable/field").Field, import("o1js/dist/node/lib/provable/field").Field>>;
};
declare const SecretHashProof_base: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: import("o1js/dist/node/lib/provable/field").Field;
        publicOutput: import("o1js/dist/node/lib/provable/field").Field;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool").Bool): void;
        publicInput: import("o1js/dist/node/lib/provable/field").Field;
        publicOutput: import("o1js/dist/node/lib/provable/field").Field;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram").JsonProof;
    };
    publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    publicOutputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    tag: () => {
        name: string;
        publicInputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
        publicOutputType: typeof import("o1js/dist/node/lib/provable/field").Field & ((x: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field | import("o1js/dist/node/lib/provable/core/fieldvar").FieldVar | import("o1js/dist/node/lib/provable/core/fieldvar").FieldConst) => import("o1js/dist/node/lib/provable/field").Field);
    };
    fromJSON<S extends (new (...args: any) => import("o1js/dist/node/lib/proof-system/zkprogram").Proof<unknown, unknown>) & {
        prototype: import("o1js/dist/node/lib/proof-system/zkprogram").Proof<any, any>;
        fromJSON: typeof import("o1js/dist/node/lib/proof-system/zkprogram").Proof.fromJSON;
        dummy: typeof import("o1js/dist/node/lib/proof-system/zkprogram").Proof.dummy;
        publicInputType: import("o1js/dist/node/lib/provable/types/struct").FlexibleProvablePure<any>;
        publicOutputType: import("o1js/dist/node/lib/provable/types/struct").FlexibleProvablePure<any>;
        tag: () => {
            name: string;
        };
    } & {
        prototype: import("o1js/dist/node/lib/proof-system/zkprogram").Proof<unknown, unknown>;
    }>(this: S, { maxProofsVerified, proof: proofString, publicInput: publicInputJson, publicOutput: publicOutputJson, }: import("o1js/dist/node/lib/proof-system/zkprogram").JsonProof): Promise<import("o1js/dist/node/lib/proof-system/zkprogram").Proof<import("o1js/dist/node/bindings/lib/provable-generic").InferProvable<S["publicInputType"], import("o1js/dist/node/lib/provable/field").Field>, import("o1js/dist/node/bindings/lib/provable-generic").InferProvable<S["publicOutputType"], import("o1js/dist/node/lib/provable/field").Field>>>;
    dummy<Input, OutPut>(publicInput: Input, publicOutput: OutPut, maxProofsVerified: 0 | 1 | 2, domainLog2?: number | undefined): Promise<import("o1js/dist/node/lib/proof-system/zkprogram").Proof<Input, OutPut>>;
};
export declare class SecretHashProof extends SecretHashProof_base {
}
export {};
