import { CircuitString } from 'o1js';
declare const ComplianceData_base: (new (value: {
    companyID: CircuitString;
    companyName: CircuitString;
    activeCompliance: CircuitString;
}) => {
    companyID: CircuitString;
    companyName: CircuitString;
    activeCompliance: CircuitString;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    companyID: CircuitString;
    companyName: CircuitString;
    activeCompliance: CircuitString;
}, {
    companyID: string;
    companyName: string;
    activeCompliance: string;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        companyID: CircuitString;
        companyName: CircuitString;
        activeCompliance: CircuitString;
    };
} & {
    fromValue: (value: {
        companyID: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        companyName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        activeCompliance: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
    }) => {
        companyID: CircuitString;
        companyName: CircuitString;
        activeCompliance: CircuitString;
    };
    toInput: (x: {
        companyID: CircuitString;
        companyName: CircuitString;
        activeCompliance: CircuitString;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        companyID: CircuitString;
        companyName: CircuitString;
        activeCompliance: CircuitString;
    }) => {
        companyID: {
            values: {
                value: string;
            }[];
        };
        companyName: {
            values: {
                value: string;
            }[];
        };
        activeCompliance: {
            values: {
                value: string;
            }[];
        };
    };
    fromJSON: (x: {
        companyID: {
            values: {
                value: string;
            }[];
        };
        companyName: {
            values: {
                value: string;
            }[];
        };
        activeCompliance: {
            values: {
                value: string;
            }[];
        };
    }) => {
        companyID: CircuitString;
        companyName: CircuitString;
        activeCompliance: CircuitString;
    };
    empty: () => {
        companyID: CircuitString;
        companyName: CircuitString;
        activeCompliance: CircuitString;
    };
};
export declare class ComplianceData extends ComplianceData_base {
}
export declare function getCorpRegComplianceData(parsedData: any, typeofnet: string): ComplianceData;
export {};
