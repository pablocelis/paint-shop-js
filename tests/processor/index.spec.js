const expect = require("chai").expect;
const processor = require("../../src/processor");

describe("Processor tests", () => {
    it("should catch Error and return null if cannot be solved for 2 customers ordering same color and different type", () => {
        const colorCount = 1;
        const customers = [
            [{ color: 1, type: 1 }],
            [{ color: 1, type: 0 }]
        ];
        const result = processor({ customerArray: customers, paintCount: colorCount });
        expect(result).to.be.a("null");
    });

    it("should catch Error and return null if cannot be solved for 4 customers and 3 colors", () => {
        const colorCount = 3;
        const customers = [
            [{ color: 1, type: 1 }, { color: 2, type: 0 }, { color: 3, type: 0 }],
            [{ color: 2, type: 1 }],
            [{ color: 2, type: 0 }],
            [{ color: 3, type: 1 }]
        ];
        const result = processor({ customerArray: customers, paintCount: colorCount });
        expect(result).to.be.a("null");
    });

    it("should return solution for 5 colors and 3 customers", () => {
        const colorCount = 5;
        const customers = [
            [{ color: 1, type: 1 }],
            [{ color: 1, type: 0 }, { color: 2, type: 0 }],
            [{ color: 5, type: 0 }]
        ];
        const result = processor({ customerArray: customers, paintCount: colorCount });
        expect(result).to.deep.equal([1, 0, 0, 0, 0]);
    });
});
