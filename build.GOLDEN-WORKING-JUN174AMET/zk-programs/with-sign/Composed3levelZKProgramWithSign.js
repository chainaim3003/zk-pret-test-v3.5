// Composed3levelZKProgram.js
import { Field, CircuitString, ZkProgram, Struct, SelfProof } from 'o1js';
//import { getPublicKeyFor } from './OracleRegistrySCF3Level.js';
import { CorporateRegistrationProof } from './CorporateRegistrationZKProgramWithSign.js';
import { EXIMProof } from './EXIMZKProgramWithSign.js';
import { GLEIFProof } from './GLEIFZKProgramWithSign.js';
export class CompliancePublicOutput extends Struct({
    companyName: CircuitString,
    companyID: CircuitString,
    //compositeHash: Field
}) {
}
export const ComposedCompliance = ZkProgram({
    name: 'ComposedCompliance',
    publicInput: Field,
    publicOutput: CompliancePublicOutput,
    methods: {
        level1: {
            privateInputs: [CorporateRegistrationProof],
            async method(publicInput, proof) {
                proof.verify();
                //const compositeHash = Poseidon.hash(proof.publicOutput.toFields());
                return new CompliancePublicOutput({
                    companyName: proof.publicOutput.companyName,
                    companyID: proof.publicOutput.companyID,
                    //compositeHash: compositeHash
                });
            }
        },
        level2: {
            privateInputs: [(SelfProof), EXIMProof],
            async method(publicInput, prevProof, newProof) {
                prevProof.verify();
                newProof.verify();
                //const compositeHash = Poseidon.hash([prevProof.publicOutput.toFields(), newProof.publicOutput.toFields()]);
                return new CompliancePublicOutput({
                    companyName: prevProof.publicOutput.companyName,
                    companyID: prevProof.publicOutput.companyID,
                    // compositeHash: compositeHash
                });
            }
        },
        level3: {
            privateInputs: [(SelfProof), GLEIFProof],
            async method(publicInput, prevProof, newProof) {
                prevProof.verify();
                newProof.verify();
                // const compositeHash = Poseidon.hash([...prevProof.publicOutput.toFields(), ...newProof.publicOutput.toFields()]);
                return new CompliancePublicOutput({
                    companyName: prevProof.publicOutput.companyName,
                    companyID: prevProof.publicOutput.companyID,
                    //  compositeHash: compositeHash
                });
            }
        }
    }
});
export class ComposedProof extends ZkProgram.Proof(ComposedCompliance) {
}
//# sourceMappingURL=Composed3levelZKProgramWithSign.js.map