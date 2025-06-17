interface Event {
    time: string;
    payoff: number;
}
interface Contract {
    events: Event[];
}
declare function mapJsonToRiskData(jsonData: Contract[]): {
    inflow: number[][];
    outflow: number[][];
    monthsCount: number;
};
declare function loadAndProcessJsonData(jsonData: string): {
    inflow: number[][];
    outflow: number[][];
    monthsCount: number;
};
export { mapJsonToRiskData, loadAndProcessJsonData };
