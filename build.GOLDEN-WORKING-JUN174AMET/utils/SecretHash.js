import { ZkProgram, Field, Poseidon } from 'o1js';
export const SecretHash = ZkProgram({
    name: 'SecretHash',
    publicInput: Field,
    publicOutput: Field,
    methods: {
        generate: {
            privateInputs: [Field],
            async method(publicHash, secret) {
                const computedHash = Poseidon.hash([secret]);
                publicHash.assertEquals(computedHash);
                return publicHash;
            },
        },
    },
});
export class SecretHashProof extends ZkProgram.Proof(SecretHash) {
}
//# sourceMappingURL=SecretHash.js.map