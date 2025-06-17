var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, SelfProof, Struct, MerkleMap, MerkleWitness, MerkleMapWitness, verify, SmartContract, state, State, method, Permissions, ZkProgram, } from 'o1js';
class MerkleWitness20 extends MerkleWitness(20) {
}
// ===============================================================
async function main() {
    console.log('compiling...');
    const { verificationKey } = await Rollup.compile();
    console.log('generating transition information');
    const transitions = [
        { key: Field(8), increment: Field(3) },
        { key: Field(43), increment: Field(2) },
        { key: Field(6), increment: Field(3999) },
        { key: Field(8), increment: Field(400) },
    ];
    let map = new MerkleMap();
    const rollupStepInfo = [];
    transitions.forEach(({ key, increment }) => {
        const witness = map.getWitness(key);
        const initialRoot = map.getRoot();
        const currentValue = map.get(key);
        const updatedValue = currentValue.add(increment);
        map.set(key, updatedValue);
        const latestRoot = map.getRoot();
        rollupStepInfo.push({
            initialRoot,
            latestRoot,
            key,
            currentValue,
            increment,
            witness,
        });
    });
    console.log('making first set of proofs');
    // These could all be done in parallel in a real rollup
    // If T is the time to make a proof this could take time T
    // const rollupProofs = rollupStepInfo.map(async ({ initialRoot, latestRoot, key, currentValue, increment, witness }) => {
    //   const rollup = RollupState.createOneStep(initialRoot, latestRoot, key, currentValue, increment, witness);
    //   const proof = await Rollup.oneStep(rollup, initialRoot, latestRoot, key, currentValue, increment, witness);
    //   return proof;
    // });
    const rollupProofs = [];
    for (let { initialRoot, latestRoot, key, currentValue, increment, witness, } of rollupStepInfo) {
        const rollup = RollupState.createOneStep(initialRoot, latestRoot, key, currentValue, increment, witness);
        const proof = await Rollup.oneStep(rollup, initialRoot, latestRoot, key, currentValue, increment, witness);
        rollupProofs.push(proof);
    }
    console.log('merging proofs');
    // These could also all be done in parallel in a real rollup
    // If T is the time to make a proof this could take time log(n)*T
    // const proof = await rollupProofs.reduce(async (a, b) => {
    //   const rollup = RollupState.createMerged((await a).publicInput, (await b).publicInput);
    //   return await Rollup.merge(rollup, (await a), (await b));
    // });
    var proof = rollupProofs[0];
    for (let i = 1; i < rollupProofs.length; i++) {
        const rollup = RollupState.createMerged(proof.publicInput, rollupProofs[i].publicInput);
        let mergedProof = await Rollup.merge(rollup, proof, rollupProofs[i]);
        proof = mergedProof;
    }
    console.log('verifying rollup');
    console.log(proof.publicInput.latestRoot.toString());
    const ok = await verify(proof.toJSON(), verificationKey);
    console.log('ok', ok);
}
// ===============================================================
class RollupState extends Struct({
    initialRoot: Field,
    latestRoot: Field,
}) {
    static createOneStep(initialRoot, latestRoot, key, currentValue, incrementAmount, merkleMapWitness) {
        const [witnessRootBefore, witnessKey] = merkleMapWitness.computeRootAndKey(currentValue);
        initialRoot.assertEquals(witnessRootBefore);
        witnessKey.assertEquals(key);
        const [witnessRootAfter] = merkleMapWitness.computeRootAndKey(currentValue.add(incrementAmount));
        latestRoot.assertEquals(witnessRootAfter);
        return new RollupState({
            initialRoot,
            latestRoot,
        });
    }
    static createMerged(state1, state2) {
        return new RollupState({
            initialRoot: state1.initialRoot,
            latestRoot: state2.latestRoot,
        });
    }
    static assertEquals(state1, state2) {
        state1.initialRoot.assertEquals(state2.initialRoot);
        state1.latestRoot.assertEquals(state2.latestRoot);
    }
}
// ===============================================================
const Rollup = ZkProgram({
    name: 'rollup',
    publicInput: RollupState,
    methods: {
        oneStep: {
            privateInputs: [Field, Field, Field, Field, Field, MerkleMapWitness],
            async method(state, initialRoot, latestRoot, key, currentValue, incrementAmount, merkleMapWitness) {
                const computedState = RollupState.createOneStep(initialRoot, latestRoot, key, currentValue, incrementAmount, merkleMapWitness);
                RollupState.assertEquals(computedState, state);
            },
        },
        merge: {
            privateInputs: [SelfProof, SelfProof],
            async method(newState, rollup1proof, rollup2proof) {
                rollup1proof.verify();
                rollup2proof.verify();
                rollup2proof.publicInput.initialRoot.assertEquals(rollup1proof.publicInput.latestRoot);
                rollup1proof.publicInput.initialRoot.assertEquals(newState.initialRoot);
                rollup2proof.publicInput.latestRoot.assertEquals(newState.latestRoot);
            },
        },
    },
});
export let RollupProof_ = ZkProgram.Proof(Rollup);
export class RollupProof extends RollupProof_ {
}
// ===============================================================
class RollupContract extends SmartContract {
    constructor() {
        super(...arguments);
        this.state = State();
    }
    async deploy(args) {
        await super.deploy(args);
        this.account.permissions.set({
            ...Permissions.default(),
            editState: Permissions.proofOrSignature(),
        });
    }
    async initStateRoot(stateRoot) {
        this.state.set(stateRoot);
    }
    async update(rollupStateProof) {
        const currentState = this.state.get();
        this.state.requireEquals(currentState);
        rollupStateProof.publicInput.initialRoot.assertEquals(currentState);
        rollupStateProof.verify();
        this.state.set(rollupStateProof.publicInput.latestRoot);
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], RollupContract.prototype, "state", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Field]),
    __metadata("design:returntype", Promise)
], RollupContract.prototype, "initStateRoot", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RollupProof]),
    __metadata("design:returntype", Promise)
], RollupContract.prototype, "update", null);
// ===============================================================
main();
//# sourceMappingURL=rollup.js.map