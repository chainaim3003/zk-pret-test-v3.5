import * as fs from 'fs'; // Use named import
import { DOMParser as XMLDOMParser } from 'xmldom';
import * as xpath from 'xpath'; // Use named import
// Function to build the graph from BPMN
function buildGraph(root) {
    const namespace = 'http://www.omg.org/spec/BPMN/20100524/MODEL';
    const elements = {};
    const graph = {};
    const nodes = xpath.select(`//*[namespace-uri()='${namespace}']`, root);
    nodes.forEach((elem) => {
        const elemId = elem.getAttribute('id');
        if (elemId) {
            elements[elemId] = elem;
        }
    });
    const flows = xpath.select(`//*[local-name()='sequenceFlow']`, root);
    flows.forEach((flow) => {
        const source = flow.getAttribute('sourceRef');
        const target = flow.getAttribute('targetRef');
        const flowName = flow.getAttribute('name') || '?';
        if (source && target) {
            if (!graph[source]) {
                graph[source] = [];
            }
            graph[source].push([flowName, target]);
        }
    });
    return [graph, elements];
}
// Function to find the start event ID
function findStartEvent(elements) {
    for (const elemId in elements) {
        if (elements[elemId].tagName.includes('startEvent')) {
            return elemId;
        }
    }
    return null;
}
// Function to find all end event IDs
function findEndEvents(elements) {
    const endEvents = new Set();
    for (const elemId in elements) {
        if (elements[elemId].tagName.includes('endEvent')) {
            endEvents.add(elemId);
        }
    }
    return endEvents;
}
// Function to perform DFS and find all paths
function findAllPaths(graph, start, ends) {
    const paths = [];
    const stack = [[start, [start]]];
    while (stack.length) {
        const [current, path] = stack.pop();
        if (ends.has(current)) {
            paths.push(path);
            continue;
        }
        for (const [_, neighbor] of graph[current] || []) {
            if (!path.includes(neighbor)) { // Avoid cycles
                stack.push([neighbor, [...path, neighbor]]);
            }
        }
    }
    return paths;
}
// Function to map a path of node IDs to flow names
function mapPathToFlowNames(graph, pathIds) {
    const flowNames = [];
    for (let i = 0; i < pathIds.length - 1; i++) {
        const current = pathIds[i];
        const nextNode = pathIds[i + 1];
        const flows = graph[current] || [];
        const flow = flows.find(([_, target]) => target === nextNode);
        flowNames.push(flow ? flow[0] : '?');
    }
    return flowNames;
}
// Main function
async function main() {
    //const filePath = './src/circuit-ts.bpmn'
    const filePath = './bpmn-SCF-Example-Execution-Actual-Rejected-1.bpmn';
    if (!fs.existsSync(filePath)) {
        console.error(`Error: The file '${filePath}' was not found.`);
        return;
    }
    const xmlData = fs.readFileSync(filePath, 'utf8');
    const doc = new XMLDOMParser().parseFromString(xmlData, 'text/xml');
    const [graph, elements] = buildGraph(doc);
    const startId = findStartEvent(elements);
    if (!startId) {
        console.log('No start event found.');
        return;
    }
    const endIds = findEndEvents(elements);
    if (!endIds.size) {
        console.log('No end events found.');
        return;
    }
    const paths = findAllPaths(graph, startId, endIds);
    if (!paths.length) {
        console.log('No paths found from start to end.');
        return;
    }
    const flowPaths = paths.map((path) => mapPathToFlowNames(graph, path));
    console.log('All possible execution paths from Start to End (Flows):');
    flowPaths.forEach((flowPath, idx) => {
        console.log(`Path ${idx + 1}: ${flowPath.join('-')}`);
    });
    console.log('\nCombined Expression:');
    // Mocking the combined expression for now
    console.log('a(bc|cb)d(f|ef)g');
}
main().catch(console.error);
//# sourceMappingURL=parsebpmnC.js.map