const solver = require("./src/solver");
const binaryGenerator = require("./src/binaryGenerator");

console.log("Hellos, %s", process.argv[2]);

// Process file

const testsCount = 1;   // C
const colorCount = 5;   // N
const customerCount = 3;    // M
const customerArray = [];


// Maps where key is color and value can be 0 "glossy" or 1 "matte"
const customer1 = [{
    color: 1,
    type: 1
}];

const customer2 = [{
    color: 1,
    type: 0
}, {
    color: 2,
    type: 1
}];

const customer3 = [{
    color: 5,
    type: 0
}];

const customer4 = [{
    color: 5,
    type: 1
}];

customerArray[0] = customer1;
customerArray[1] = customer2;
customerArray[2] = customer3;
//customerArray[3] = customer4;

const solutions = binaryGenerator(5);

const processor = solver(solutions, customerArray, colorCount);
const validSolution = processor.resolveBT();
console.log("valid solution", validSolution);

console.log("solutions array", solutions);
