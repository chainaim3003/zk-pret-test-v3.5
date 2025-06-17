interface BSDIResponse {
    iec: string;
    entityName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pin: number;
    contactNo: number;
    email: string;
    iecIssueDate: string;
    exporterType: number;
    pan: string;
    iecStatus: number;
    starStatus: number;
    iecModificationDate: string;
    dataAsOn: string;
    natureOfConcern: number;
    branches: Array<{
        branchCode: number;
        badd1: string;
        badd2: string;
        city: string;
        state: string;
        pin: number;
    }>;
    directors: Array<{
        name: string;
    }>;
}
export declare function fetchBSDIData(companyName: string): Promise<BSDIResponse>;
export declare function readBLJsonFile(filePath: string): Promise<any>;
export {};
