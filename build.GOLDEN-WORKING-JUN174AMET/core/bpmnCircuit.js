var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Bool, SmartContract, state, State, method, Bytes } from 'o1js';
class Bytes50 extends Bytes(50) {
}
export class bpmnCircuit extends SmartContract {
    constructor() {
        super(...arguments);
        this.accepted = State();
    }
    init() {
        super.init();
        this.accepted.set(Bool(false));
    }
    async verifyTrace(trace) {
        // console.log("calling verifiyTrace for, ")
        let out = verifyProcess(trace.bytes);
        this.accepted.set(out);
    }
}
__decorate([
    state(Bool),
    __metadata("design:type", Object)
], bpmnCircuit.prototype, "accepted", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Bytes50]),
    __metadata("design:returntype", Promise)
], bpmnCircuit.prototype, "verifyTrace", null);
// Command used: 'a(cb|bc)d(ef|f)g' '--functionName' 'verifyProcess' '--filePath' './src/bpmnCircuit.ts'
export function verifyProcess(input) {
    // console.log("calling verifyProcess ")
    const num_bytes = input.length;
    let states = Array.from({ length: num_bytes + 1 }, () => []);
    let state_changed = Array.from({ length: num_bytes }, () => Bool(false));
    states[0][0] = Bool(true);
    //states[0][0] = Bool(false);
    for (let i = 1; i < 9; i++) {
        states[0][i] = Bool(false);
    }
    for (let i = 0; i < num_bytes; i++) {
        const eq0 = input[i].value.equals(97);
        const and0 = states[i][0].and(eq0);
        states[i + 1][1] = and0;
        state_changed[i] = state_changed[i].or(states[i + 1][1]);
        const eq1 = input[i].value.equals(98);
        const and1 = states[i][1].and(eq1);
        states[i + 1][2] = and1;
        state_changed[i] = state_changed[i].or(states[i + 1][2]);
        const eq2 = input[i].value.equals(99);
        const and2 = states[i][1].and(eq2);
        states[i + 1][3] = and2;
        state_changed[i] = state_changed[i].or(states[i + 1][3]);
        const and3 = states[i][2].and(eq2);
        const and4 = states[i][3].and(eq1);
        let multi_or0 = Bool(false);
        multi_or0 = multi_or0.or(and3);
        multi_or0 = multi_or0.or(and4);
        states[i + 1][4] = multi_or0;
        state_changed[i] = state_changed[i].or(states[i + 1][4]);
        const eq3 = input[i].value.equals(100);
        const and5 = states[i][4].and(eq3);
        states[i + 1][5] = and5;
        state_changed[i] = state_changed[i].or(states[i + 1][5]);
        const eq4 = input[i].value.equals(101);
        const and6 = states[i][5].and(eq4);
        states[i + 1][6] = and6;
        state_changed[i] = state_changed[i].or(states[i + 1][6]);
        const eq5 = input[i].value.equals(102);
        const and7 = states[i][5].and(eq5);
        const and8 = states[i][6].and(eq5);
        let multi_or1 = Bool(false);
        multi_or1 = multi_or1.or(and7);
        multi_or1 = multi_or1.or(and8);
        states[i + 1][7] = multi_or1;
        state_changed[i] = state_changed[i].or(states[i + 1][7]);
        const eq6 = input[i].value.equals(103);
        const and9 = states[i][7].and(eq6);
        states[i + 1][8] = and9;
        state_changed[i] = state_changed[i].or(states[i + 1][8]);
        states[i + 1][0] = state_changed[i].not();
    }
    let final_state_result = Bool(false);
    //let final_state_result = Bool(true);//we are changing the default value to true because at compile time it is breaking the code.
    for (let i = 0; i <= num_bytes; i++) {
        final_state_result = final_state_result.or(states[i][8]);
    }
    const out = final_state_result;
    return out;
}
//# sourceMappingURL=bpmnCircuit.js.map