var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SmartContract, State, method, state, Field } from 'o1js';
import { SecretHashProof } from './SecretHash.js';
export class HashVerifier extends SmartContract {
    constructor() {
        super(...arguments);
        this.storedHash = State();
    }
    async verifyProof(proof) {
        proof.verify();
        this.storedHash.requireEquals(this.storedHash.get());
        const currentHash = this.storedHash.get();
        currentHash.assertEquals(proof.publicInput);
    }
}
__decorate([
    state(Field),
    __metadata("design:type", Object)
], HashVerifier.prototype, "storedHash", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SecretHashProof]),
    __metadata("design:returntype", Promise)
], HashVerifier.prototype, "verifyProof", null);
//# sourceMappingURL=HashVerifier.js.map