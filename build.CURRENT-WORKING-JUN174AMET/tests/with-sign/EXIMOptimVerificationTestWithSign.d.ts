import { UInt64 } from 'o1js';
/**
 * Enhanced EXIM API Response interface
 */
export interface EXIMAPIResponse {
    iec?: string;
    entityName?: string;
    iecIssueDate?: string;
    pan?: string;
    iecStatus?: number;
    iecModificationDate?: string;
    dataAsOn?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    pin?: number;
    contactNo?: number;
    email?: string;
    exporterType?: number;
    activeComplianceStatusCode?: number;
    starStatus?: number;
    natureOfConcern?: number;
    branches?: Array<{
        branchCode?: number;
        badd1?: string;
        badd2?: string;
        city?: string;
        state?: string;
        pin?: number;
    }>;
    directors?: Array<{
        name?: string;
    }>;
}
export declare function getEXIMOptimVerification(companyName: string): Promise<import("o1js/dist/node/lib/proof-system/zkprogram.js").Proof<UInt64, import("../../zk-programs/with-sign/EXIMOptimZKProgram.js").EXIMOptimPublicOutput>>;
