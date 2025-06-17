declare const CompliancePublicOutput_base: (new (value: {
    complianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    complianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) => {
    complianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    complianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}) & {
    _isStruct: true;
} & Omit<import("o1js/dist/node/lib/provable/types/provable-intf").Provable<{
    complianceToProve: import("o1js/dist/node/lib/provable/field").Field;
    complianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
}, {
    complianceToProve: bigint;
    complianceStatusCode: bigint;
}>, "fromFields"> & {
    fromFields: (fields: import("o1js/dist/node/lib/provable/field").Field[]) => {
        complianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        complianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
} & {
    fromValue: (value: {
        complianceToProve: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
        complianceStatusCode: string | number | bigint | import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        complianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        complianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    toInput: (x: {
        complianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        complianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        fields?: import("o1js/dist/node/lib/provable/field").Field[] | undefined;
        packed?: [import("o1js/dist/node/lib/provable/field").Field, number][] | undefined;
    };
    toJSON: (x: {
        complianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        complianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    }) => {
        complianceToProve: string;
        complianceStatusCode: string;
    };
    fromJSON: (x: {
        complianceToProve: string;
        complianceStatusCode: string;
    }) => {
        complianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        complianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
    empty: () => {
        complianceToProve: import("o1js/dist/node/lib/provable/field").Field;
        complianceStatusCode: import("o1js/dist/node/lib/provable/field").Field;
    };
};
export declare class CompliancePublicOutput extends CompliancePublicOutput_base {
}
export {};
