const processor = require("./src/processor");
const parser = require("./src/parser");

// Parse file
const parseFile = parser(process.argv[2]);
const dataParsed = parseFile();

// Process customers
const testCount = dataParsed.length;

// For each test process the orders
for (let i = 0; i < testCount; i++) {
    const caseNum = i + 1;
    const test = dataParsed[i];
    const solution = processor(test);

    if (solution) {
        // print the valid solution array parsing to string and separate elemnts with empty space
        console.log("CASE #%s:", caseNum, solution.join(" "));
    } else {
        console.log("CASE #%s: IMPOSSIBLE", caseNum);
    }
}
