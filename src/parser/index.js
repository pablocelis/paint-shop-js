const fs = require("fs");
const path = require("path");

const parser = (file) => {
    const rootDirectory = "./";

    const importFile = () => {
        // Security: Avoid that user input get outside the project root
        const filename = path.join(rootDirectory, file);
        console.log("filename", filename);

        if (filename.indexOf("\0") !== -1) {
            throw new Error("That is evil HACKERMAN!!!");
        }
        try {
            return fs.readFileSync(filename, "utf8");
        } catch (err) {
            console.log("error", err.stack);
        }
        return null;
    };

    const parseTestInput = (index, array) => {
        let indexPointer = index;
        const paintCount = parseInt(array[indexPointer], 10);

        indexPointer++; // move the pointer to customer count position
        const customerCount = parseInt(array[indexPointer], 10);
        const customerArray = [];
        console.log("paintCount", paintCount);
        console.log("customerCount", customerCount);
        indexPointer++; // move the pointer to order position

        let i;

        for (i = 0; i < customerCount; i++) {
            console.log("Array index", indexPointer, i);
            const customerRawArray = array[i + indexPointer].split(" ");
            console.log("customerRaw", customerRawArray);
            const [orderCount, ...orders] = customerRawArray;
            const customer = [];

            // Each order take 2 positions in the array
            // Loop every 2 positions until orderCount * 2
            const orderLimit = parseInt(orderCount, 10) * 2;
            for (let j = 0; j < orderLimit; j += 2) {
                customer.push({
                    color: parseInt(orders[j], 10),
                    type: parseInt(orders[j + 1], 10)
                });
            }
            console.log("customerProcessed", customer);
            customerArray.push(customer);
        }
        return {
            test: { paintCount, customerCount, customerArray },
            indexPointer: indexPointer + i
        };
    };

    return () => {
        const dataImported = importFile();
        if (!dataImported) {
            return null;
        }

        const dataParsed = [];
        const linesArray = dataImported.toString().split("\n");
        console.log("linesArray", linesArray);

        const [testCount, ...restArray] = linesArray;
        let indexPointer = 0;   // This hold the pointer to the begining of each test in the array

        for (let i = 0; i < testCount; i++) {
            const { test, indexPointer: newPointer } = parseTestInput(indexPointer, restArray);
            indexPointer = newPointer;
            console.log("Test %s parsed", i, test, indexPointer);
            dataParsed.push(test);
        }
        return dataParsed;
    };
};

module.exports = parser;
