function mapJsonToRiskData(jsonData) {
    if (jsonData.length === 0)
        return { inflow: [], outflow: [], monthsCount: 0 };
    const allDates = jsonData.flatMap(contract => contract.events.map(event => new Date(event.time)));
    const minDate = new Date(Math.min(...allDates.map(date => date.getTime())));
    const maxDate = new Date(Math.max(...allDates.map(date => date.getTime())));
    const monthsCount = (maxDate.getFullYear() - minDate.getFullYear()) * 12 + (maxDate.getMonth() - minDate.getMonth()) + 1;
    const inflow = Array.from({ length: monthsCount }, () => [0]);
    const outflow = Array.from({ length: monthsCount }, () => [0]);
    jsonData.forEach((contract) => {
        contract.events.forEach((event) => {
            const date = new Date(event.time);
            const monthIndex = (date.getFullYear() - minDate.getFullYear()) * 12 + (date.getMonth() - minDate.getMonth());
            if (event.payoff > 0) {
                inflow[monthIndex].push(event.payoff);
            }
            else if (event.payoff < 0) {
                outflow[monthIndex].push(Math.abs(event.payoff));
            }
        });
    });
    return { inflow, outflow, monthsCount };
}
function loadAndProcessJsonData(jsonData) {
    // Parse raw JSON data into Contract[]
    const parsedData = JSON.parse(jsonData);
    // Call the existing function
    return mapJsonToRiskData(parsedData);
}
export { mapJsonToRiskData, loadAndProcessJsonData };
//# sourceMappingURL=map_with_zk_adv.js.map