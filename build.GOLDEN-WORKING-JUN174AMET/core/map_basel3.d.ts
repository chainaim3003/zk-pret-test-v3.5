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
declare function mapJsonToRiskData(jsonData: Contract[]): {
    inflow: number[][];
    outflow: number[][];
    monthsCount: number;
    results: any;
};
declare function loadAndProcessJsonData(jsonData: string): {
    inflow: number[][];
    outflow: number[][];
    monthsCount: number;
    results: any;
};
export { mapJsonToRiskData, loadAndProcessJsonData };
