function classifyContract(contract) {
    if (contract.contractId === "pam02")
        return "L1"; // Cash = Level 1 (0% haircut)
    if (contract.contractId === "pam01")
        return "L2A"; // Long-term PAM = Level 2A (15% haircut)
    if (contract.contractId === "ann01" || contract.contractId === "stk01")
        return "L2B"; // Short-term ANN or STK = Level 2B (50% haircut)
    return "Non-HQLA"; // Other types are not HQLA
}
function mapJsonToRiskData(jsonData) {
    const allDates = jsonData.flatMap(contract => contract.events.map(event => new Date(event.time)));
    const minDate = new Date(Math.min(...allDates.map(date => date.getTime())));
    const maxDate = new Date(Math.max(...allDates.map(date => date.getTime())));
    const monthsCount = Math.max((maxDate.getFullYear() - minDate.getFullYear()) * 12 + (maxDate.getMonth() - minDate.getMonth()) + 1, 1);
    const inflow = Array.from({ length: monthsCount }, () => [0]);
    const outflow = Array.from({ length: monthsCount }, () => [0]);
    const classifiedContracts = jsonData.map(contract => ({
        ...contract,
        hqlaCategory: classifyContract(contract),
    }));
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
    const result = getHQLAbyMonth(classifiedContracts);
    console.log(result);
    return { inflow, outflow, monthsCount, results: result };
}
function getHQLAbyMonth(classifiedContracts) {
    let hqlamap = {};
    classifiedContracts.forEach(contract => {
        contract.events.forEach((event) => {
            let eventDate = new Date(event.time);
            let monthKey = `${eventDate.getFullYear()}-${(eventDate.getMonth() + 1).toString().padStart(2, '0')}`;
            if (!hqlamap[monthKey]) {
                hqlamap[monthKey] = { L1: 0, L2A: 0, L2B: 0, NonHQLA: 0 };
            }
            if (contract.hqlaCategory === "L1")
                hqlamap[monthKey].L1 += event.payoff;
            else if (contract.hqlaCategory === "L2A")
                hqlamap[monthKey].L2A += event.payoff;
            else if (contract.hqlaCategory === "L2B")
                hqlamap[monthKey].L2B += event.payoff;
            else
                hqlamap[monthKey].NonHQLA += event.payoff;
        });
    });
    return hqlamap;
}
function loadAndProcessJsonData(jsonData) {
    const parsedData = JSON.parse(jsonData);
    return mapJsonToRiskData(parsedData);
}
export { mapJsonToRiskData, loadAndProcessJsonData };
//# sourceMappingURL=map_basel3.js.map