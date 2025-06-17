import { PrivateKey } from "o1js";
let privateKey = PrivateKey.random();
console.log({
    privateKey: privateKey.toBase58(),
    publicKey: privateKey.toPublicKey().toBase58()
});
//# sourceMappingURL=create-keypair.js.map