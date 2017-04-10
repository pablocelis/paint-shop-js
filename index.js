const path = require("path");
const processor = require("./src/processor");
const parser = require("./src/parser");

if (process.argv.length !== 3) {
    console.log("You must set a second argument containing the file to parse");
    process.exit(1);
}
const rootDirectory = "./";
const file = process.argv[2];

// Security: Avoid that user input get outside the project root
const filename = path.join(rootDirectory, file);
if (filename.indexOf("\0") !== -1) {
    console.log("That is evil HACKERMAN!!!");
    process.exit(1);
}

// Parse file
const parseFile = parser(file);
const dataParsed = parseFile();

if (!dataParsed) {
    console.log("The input file could't be parsed");
    process.exit(1);
}

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
