import { Mina } from 'o1js';
export declare function getBPIVerificationFileTestWithSign(businessProcessType: string, expectedBPMNFileName: string, actualBPMNFileName: string): Promise<Mina.Transaction<true, false> | undefined>;
