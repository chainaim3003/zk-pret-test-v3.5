interface Event {
    time: string;
    payoff: number;
}
interface Contract {
    id: string;
    contractId: string;
    type: string;
    events: Event[];
}
interface ClassifiedContract extends Contract {
    hqlaCategory: "L1" | "L2A" | "L2B" | "Non-HQLA";
}
declare function mapJsonToRiskData(jsonData: Contract[]): {
    inflow: number[][];
    outflow: number[][];
    monthsCount: number;
    classifiedContracts: ClassifiedContract[];
};
declare function loadAndProcessJsonData(jsonData: string): {
    inflow: number[][];
    outflow: number[][];
    monthsCount: number;
    classifiedContracts: ClassifiedContract[];
};
export { mapJsonToRiskData, loadAndProcessJsonData };
