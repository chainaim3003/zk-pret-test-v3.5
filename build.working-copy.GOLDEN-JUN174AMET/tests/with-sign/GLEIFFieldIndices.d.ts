/**
 * GLEIF Field Indices for Merkle Tree Structure
 * This defines the standardized field positions for GLEIF data in merkle trees
 */
export declare const GLEIF_FIELD_INDICES: {
    readonly legalName: 0;
    readonly lei: 1;
    readonly entityStatus: 2;
    readonly entity_status: 2;
    readonly legalForm: 3;
    readonly jurisdiction: 4;
    readonly legalAddress: 5;
    readonly legalCity: 6;
    readonly legalCountry: 7;
    readonly registrationAuthority: 8;
    readonly entityCategory: 9;
    readonly businessRegisterEntityId: 10;
    readonly leiStatus: 11;
    readonly initialRegistrationDate: 12;
    readonly lastUpdateDate: 13;
    readonly nextRenewalDate: 14;
    readonly registration_status: 15;
    readonly conformity_flag: 16;
    readonly conformityFlag: 16;
    readonly bic_codes: 17;
    readonly mic_codes: 18;
    readonly managingLou: 19;
    readonly headquartersAddress: 20;
    readonly headquartersCity: 21;
    readonly headquartersCountry: 22;
    readonly otherNames: 23;
    readonly subCategory: 24;
    readonly corroborationLevel: 25;
    readonly validationSources: 26;
    readonly reserved_27: 27;
    readonly reserved_28: 28;
    readonly reserved_29: 29;
};
export type GLEIFFieldIndex = typeof GLEIF_FIELD_INDICES[keyof typeof GLEIF_FIELD_INDICES];
export declare function isValidGLEIFFieldIndex(index: number): boolean;
export declare function getGLEIFFieldName(index: number): string | undefined;
export default GLEIF_FIELD_INDICES;
