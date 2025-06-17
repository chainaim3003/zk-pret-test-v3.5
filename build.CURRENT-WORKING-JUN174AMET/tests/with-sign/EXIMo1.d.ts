import { CircuitString } from 'o1js';
declare const EXIMComplianceDataO1_base: (new (value: {
    iec: CircuitString;
    entityName: CircuitString;
    iecStatus: import("o1js/dist/node/lib/provable/field").Field;
}) => {
    iec: CircuitString;
    entityName: CircuitString;
    iecStatus: import("o1js/dist/node/lib/provable/field").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    iec: CircuitString;
    entityName: CircuitString;
    iecStatus: import("o1js/dist/node/lib/provable/field").Field;
}, {
    iec: string;
    entityName: string;
    iecStatus: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        iec: CircuitString;
        entityName: CircuitString;
        iecStatus: import("o1js/dist/node/lib/provable/field").Field;
    };
} & {
    fromValue: (value: {
        iec: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        entityName: string | CircuitString | {
            values: import("o1js/dist/node/lib/provable/string").Character[];
        };
        iecStatus: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        iec: CircuitString;
        entityName: CircuitString;
        iecStatus: import("o1js/dist/node/lib/provable/field").Field;
    };
    toInput: (x: {
        iec: CircuitString;
        entityName: CircuitString;
        iecStatus: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        iec: CircuitString;
        entityName: CircuitString;
        iecStatus: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        iec: {
            values: {
                value: string;
            }[];
        };
        entityName: {
            values: {
                value: string;
            }[];
        };
        iecStatus: string;
    };
    fromJSON: (x: {
        iec: {
            values: {
                value: string;
            }[];
        };
        entityName: {
            values: {
                value: string;
            }[];
        };
        iecStatus: string;
    }) => {
        iec: CircuitString;
        entityName: CircuitString;
        iecStatus: import("o1js/dist/node/lib/provable/field").Field;
    };
    empty: () => {
        iec: CircuitString;
        entityName: CircuitString;
        iecStatus: import("o1js/dist/node/lib/provable/field").Field;
    };
};
export declare class EXIMComplianceDataO1 extends EXIMComplianceDataO1_base {
}
export declare function getEXIMComplianceDataO1(parsedData: any): EXIMComplianceDataO1;
export {};
