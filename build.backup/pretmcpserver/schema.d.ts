import { z } from 'zod';
declare const contractData: {
    contracts: {
        contractType: string;
        contractID: string;
        contractRole: string;
        contractDealDate: string;
        initialExchangeDate: string;
        statusDate: string;
        notionalPrincipal: string;
        cycleAnchorDateOfPrincipalRedemption: string;
        nextPrincipalRedemptionPayment: string;
        dayCountConvention: string;
        nominalInterestRate: string;
        currency: string;
        cycleOfPrincipalRedemption: string;
        maturityDate: string;
        rateMultiplier: string;
        rateSpread: string;
        fixingDays: string;
        cycleAnchorDateOfInterestPayment: string;
        cycleOfInterestPayment: string;
    }[];
    riskFactors: never[];
};
/**
 * Creates a Zod schema compatible object from contract data
 */
declare function createZodSchemaObject(_contractData: typeof contractData): {
    type: "object";
    properties: {
        contracts?: undefined;
        riskFactor?: undefined;
    };
} | {
    type: "object";
    properties: {
        contracts: {
            [x: string]: {
                type: string;
            };
        }[];
        riskFactor: {
            type: string;
        };
    };
};
declare const transformedSchema: {
    type: "object";
    properties: {
        contracts?: undefined;
        riskFactor?: undefined;
    };
} | {
    type: "object";
    properties: {
        contracts: {
            [x: string]: {
                type: string;
            };
        }[];
        riskFactor: {
            type: string;
        };
    };
};
declare function buildZodSchemaFromTransformed(transformed: typeof transformedSchema): z.ZodObject<Record<string, z.ZodTypeAny>, "strip", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
declare const contractSchema: z.ZodObject<Record<string, z.ZodTypeAny>, "strip", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
export { transformedSchema, createZodSchemaObject, buildZodSchemaFromTransformed, contractSchema };
