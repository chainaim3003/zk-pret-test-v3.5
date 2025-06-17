import { Field, MerkleMapWitness, Proof } from 'o1js';
declare const RollupState_base: (new (value: {
    initialRoot: import("o1js/dist/node/lib/provable/field").Field;
    latestRoot: import("o1js/dist/node/lib/provable/field").Field;
}) => {
    initialRoot: import("o1js/dist/node/lib/provable/field").Field;
    latestRoot: import("o1js/dist/node/lib/provable/field").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    initialRoot: import("o1js/dist/node/lib/provable/field").Field;
    latestRoot: import("o1js/dist/node/lib/provable/field").Field;
}, {
    initialRoot: bigint;
    latestRoot: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        initialRoot: import("o1js/dist/node/lib/provable/field").Field;
        latestRoot: import("o1js/dist/node/lib/provable/field").Field;
    };
} & {
    fromValue: (value: {
        initialRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        latestRoot: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        initialRoot: import("o1js/dist/node/lib/provable/field").Field;
        latestRoot: import("o1js/dist/node/lib/provable/field").Field;
    };
    toInput: (x: {
        initialRoot: import("o1js/dist/node/lib/provable/field").Field;
        latestRoot: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        initialRoot: import("o1js/dist/node/lib/provable/field").Field;
        latestRoot: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        initialRoot: string;
        latestRoot: string;
    };
    fromJSON: (x: {
        initialRoot: string;
        latestRoot: string;
    }) => {
        initialRoot: import("o1js/dist/node/lib/provable/field").Field;
        latestRoot: import("o1js/dist/node/lib/provable/field").Field;
    };
    empty: () => {
        initialRoot: import("o1js/dist/node/lib/provable/field").Field;
        latestRoot: import("o1js/dist/node/lib/provable/field").Field;
    };
};
declare class RollupState extends RollupState_base {
    static createOneStep(initialRoot: Field, latestRoot: Field, key: Field, currentValue: Field, incrementAmount: Field, merkleMapWitness: MerkleMapWitness): RollupState;
    static createMerged(state1: RollupState, state2: RollupState): RollupState;
    static assertEquals(state1: RollupState, state2: RollupState): void;
}
export declare let RollupProof_: {
    new ({ proof, publicInput, publicOutput, maxProofsVerified, }: {
        proof: unknown;
        publicInput: RollupState;
        publicOutput: void;
        maxProofsVerified: 0 | 1 | 2;
    }): {
        verify(): void;
        verifyIf(condition: import("o1js/dist/node/lib/provable/bool").Bool): void;
        publicInput: RollupState;
        publicOutput: void;
        proof: unknown;
        maxProofsVerified: 0 | 1 | 2;
        shouldVerify: import("o1js/dist/node/lib/provable/bool").Bool;
        toJSON(): import("o1js/dist/node/lib/proof-system/zkprogram").JsonProof;
    };
    publicInputType: typeof RollupState;
    publicOutputType: import("o1js/dist/node/lib/provable/types/struct").ProvablePureExtended<void, void, null>;
    tag: () => {
        name: string;
        publicInputType: typeof RollupState;
        publicOutputType: import("o1js/dist/node/lib/provable/types/struct").ProvablePureExtended<void, void, null>;
    };
    fromJSON<S extends (new (...args: any) => Proof<unknown, unknown>) & {
        prototype: Proof<any, any>;
        fromJSON: typeof Proof.fromJSON;
        dummy: typeof Proof.dummy;
        publicInputType: import("o1js/dist/node/lib/provable/types/struct").FlexibleProvablePure<any>;
        publicOutputType: import("o1js/dist/node/lib/provable/types/struct").FlexibleProvablePure<any>;
        tag: () => {
            name: string;
        };
    } & {
        prototype: Proof<unknown, unknown>;
    }>(this: S, { maxProofsVerified, proof: proofString, publicInput: publicInputJson, publicOutput: publicOutputJson, }: import("o1js/dist/node/lib/proof-system/zkprogram").JsonProof): Promise<Proof<import("o1js/dist/node/bindings/lib/provable-generic").InferProvable<S["publicInputType"], import("o1js/dist/node/lib/provable/field").Field>, import("o1js/dist/node/bindings/lib/provable-generic").InferProvable<S["publicOutputType"], import("o1js/dist/node/lib/provable/field").Field>>>;
    dummy<Input, OutPut>(publicInput: Input, publicOutput: OutPut, maxProofsVerified: 0 | 1 | 2, domainLog2?: number | undefined): Promise<Proof<Input, OutPut>>;
};
export declare class RollupProof extends RollupProof_ {
}
export {};
