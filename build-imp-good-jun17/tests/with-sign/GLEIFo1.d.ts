import { CircuitString } from 'o1js';
declare const GLEIFComplianceDataO1_base: (new (value: {
    type: CircuitString;
    id: CircuitString;
    lei: CircuitString;
    name: CircuitString;
    registration_status: CircuitString;
}) => {
    type: CircuitString;
    id: CircuitString;
    lei: CircuitString;
    name: CircuitString;
    registration_status: CircuitString;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    type: CircuitString;
    id: CircuitString;
    lei: CircuitString;
    name: CircuitString;
    registration_status: CircuitString;
}, {
    type: string;
    id: string;
    lei: string;
    name: string;
    registration_status: string;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        type: CircuitString;
        id: CircuitString;
        lei: CircuitString;
        name: CircuitString;
        registration_status: CircuitString;
    };
} & {
    fromValue: (value: {
        type: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        id: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        lei: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        name: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        registration_status: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
    }) => {
        type: CircuitString;
        id: CircuitString;
        lei: CircuitString;
        name: CircuitString;
        registration_status: CircuitString;
    };
    toInput: (x: {
        type: CircuitString;
        id: CircuitString;
        lei: CircuitString;
        name: CircuitString;
        registration_status: CircuitString;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        type: CircuitString;
        id: CircuitString;
        lei: CircuitString;
        name: CircuitString;
        registration_status: CircuitString;
    }) => {
        type: {
            values: {
                value: string;
            }[];
        };
        id: {
            values: {
                value: string;
            }[];
        };
        lei: {
            values: {
                value: string;
            }[];
        };
        name: {
            values: {
                value: string;
            }[];
        };
        registration_status: {
            values: {
                value: string;
            }[];
        };
    };
    fromJSON: (x: {
        type: {
            values: {
                value: string;
            }[];
        };
        id: {
            values: {
                value: string;
            }[];
        };
        lei: {
            values: {
                value: string;
            }[];
        };
        name: {
            values: {
                value: string;
            }[];
        };
        registration_status: {
            values: {
                value: string;
            }[];
        };
    }) => {
        type: CircuitString;
        id: CircuitString;
        lei: CircuitString;
        name: CircuitString;
        registration_status: CircuitString;
    };
    empty: () => {
        type: CircuitString;
        id: CircuitString;
        lei: CircuitString;
        name: CircuitString;
        registration_status: CircuitString;
    };
};
/**
 * Extracts the first record from parsedData and creates a GLEIFComplianceData instance.
 * @param parsedData The data object returned from fetchGLEIFCompanyData
 * @returns GLEIFComplianceData
 */
export declare class GLEIFComplianceDataO1 extends GLEIFComplianceDataO1_base {
}
export declare function getGLEIFComplianceDataO1(parsedData: any): GLEIFComplianceDataO1;
export {};
