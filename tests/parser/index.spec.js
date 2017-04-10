const fs = require("fs");
const expect = require("chai").expect;
const parser = require("../../src/parser");

const createFileHelper = ({ testCount, paintCount, customerCount, customers }) => {
    let content = "" + testCount
                    + "\n" + paintCount
                    + "\n" + customerCount;

    customers.forEach((customer) => {
        content += "\n" + customer;
    });

    return fs.writeFile("test.txt", content, "utf8", (err) => {
        if (err) {
            return Promise.reject(err);
        }
        return Promise.resolve();
    });
};

describe("Parser tests", () => {
    before(() => {
        const input = {
             testCount: 1,
             paintCount: 2,
             customerCount: 3,
             customers: ["1 1 1", "2 1 0 2 0", "1 2 0"]
        };
        createFileHelper(input);
    });

    it("should parse the test file and return the data objects", async () => {
        const parse = parser("test.txt");
        const tests = parse();

        const testCount = tests.length;
        const { paintCount, customerCount, customerArray } = tests[0];

        expect(testCount).to.equal(1);
        expect(paintCount).to.equal(2);
        expect(customerCount).to.equal(3);
        expect(customerArray.length).to.equal(3);

        const [firstCustomer, secondCustomer, thirdCustomer] = customerArray;
        expect(firstCustomer).to.deep.equal([{ color: 1, type: 1 }]);
        expect(secondCustomer).to.deep.equal([{ color: 1, type: 0 }, { color: 2, type: 0 }]);
        expect(thirdCustomer).to.deep.equal([{ color: 2, type: 0 }]);
    });
});
