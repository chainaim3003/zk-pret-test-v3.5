export interface ActusApiResponse {
    inflow: number[][];
    outflow: number[][];
    monthsCount: number;
}
export declare function fetchActusData(): Promise<ActusApiResponse>;
