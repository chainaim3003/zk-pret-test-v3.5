import { UInt8, SmartContract, State } from 'o1js';
declare const Bytes50_base: typeof import("o1js/dist/node/lib/provable/bytes").Bytes;
declare class Bytes50 extends Bytes50_base {
}
export declare class bpmnCircuit extends SmartContract {
    accepted: State<import("o1js/dist/node/lib/provable/bool").Bool>;
    init(): void;
    verifyTraceSCF(trace: Bytes50): Promise<void>;
    verifyTraceSTABLECOIN(trace: Bytes50): Promise<void>;
    verifyTraceDVP(trace: Bytes50): Promise<void>;
}
export declare function verifyProcessSCF(input: UInt8[]): import("o1js/dist/node/lib/provable/bool").Bool;
export declare function verifyProcessSTABLECOIN(input: UInt8[]): import("o1js/dist/node/lib/provable/bool").Bool;
export declare function verifyProcessDVP(input: UInt8[]): import("o1js/dist/node/lib/provable/bool").Bool;
export {};
