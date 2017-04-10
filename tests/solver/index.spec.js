const expect = require("chai").expect;
const solver = require("../../src/solver");

describe("Solver tests", () => {
    it("should throw an error if cannot be solved for 2 customers ordering same color and different type", () => {
        const colorCount = 1;
        const customers = [
            [{ color: 1, type: 1 }],
            [{ color: 1, type: 0 }]
        ];
        const solve = solver(customers, colorCount);
        expect(solve).to.throw(Error);
    });

    it("should throw an error if cannot be solved for 4 customers and 3 colors", () => {
        const colorCount = 3;
        const customers = [
            [{ color: 1, type: 1 }, { color: 2, type: 0 }, { color: 3, type: 0 }],
            [{ color: 2, type: 1 }],
            [{ color: 2, type: 0 }],
            [{ color: 3, type: 1 }]
        ];
        const solve = solver(customers, colorCount);
        expect(solve).to.throw(Error);
    });

    it("should return solution for 5 colors and 3 customers", () => {
        const colorCount = 5;
        const customers = [
            [{ color: 1, type: 1 }],
            [{ color: 1, type: 0 }, { color: 2, type: 0 }],
            [{ color: 5, type: 0 }]
        ];
        const solve = solver(customers, colorCount);
        const result = solve();
        expect(result).to.deep.equal([1, 0, 0, 0, 0]);
    });

    it("should return solution for 5 colors and 3 customers", () => {
        const colorCount = 5;
        const customers = [
            [{ color: 1, type: 1 }],
            [{ color: 1, type: 0 }, { color: 2, type: 0 }],
            [{ color: 5, type: 0 }]
        ];
        const solve = solver(customers, colorCount);
        const result = solve();
        expect(result).to.deep.equal([1, 0, 0, 0, 0]);
    });

    it("should return solution for 5 colors and 14 customers", () => {
        const colorCount = 5;
        const customers = [
            [{ color: 2, type: 1 }],
            [{ color: 5, type: 0 }],
            [{ color: 1, type: 0 }],
            [{ color: 1, type: 0 }, { color: 4, type: 1 }, { color: 5, type: 0 }],
            [{ color: 3, type: 0 }],
            [{ color: 5, type: 0 }],
            [{ color: 1, type: 0 }, { color: 3, type: 0 }, { color: 5, type: 0 }],
            [{ color: 3, type: 0 }],
            [{ color: 2, type: 1 }],
            [{ color: 1, type: 0 }, { color: 5, type: 0 }],
            [{ color: 2, type: 1 }],
            [{ color: 5, type: 0 }],
            [{ color: 4, type: 1 }],
            [{ color: 4, type: 1 }, { color: 5, type: 0 }]
        ];
        const solve = solver(customers, colorCount);
        const result = solve();
        expect(result).to.deep.equal([0, 1, 0, 1, 0]);
    });

    it("should return solution for 2 customers and 2 colors", () => {
        const colorCount = 2;
        const customers = [
            [{ color: 1, type: 0 }, { color: 2, type: 1 }],
            [{ color: 1, type: 1 }]
        ];
        const solve = solver(customers, colorCount);
        const result = solve();
        expect(result).to.deep.equal([1, 1]);
    });

    it("should return solution for 3 customers and 2 colors wanting different types", () => {
        const colorCount = 2;
        const customers = [
            [{ color: 1, type: 0 }, { color: 2, type: 1 }],
            [{ color: 1, type: 1 }],
            [{ color: 1, type: 1 }, { color: 2, type: 0 }]
        ];
        const solve = solver(customers, colorCount);
        const result = solve();
        expect(result).to.deep.equal([1, 1]);
    });

    it("should return solution for 2 customers that only like one type", () => {
        const colorCount = 3;
        const customers = [
            [{ color: 1, type: 1 }, { color: 2, type: 0 }, { color: 3, type: 0 }],
            [{ color: 1, type: 1 }, { color: 2, type: 1 }, { color: 3, type: 1 }]
        ];
        const solve = solver(customers, colorCount);
        const result = solve();
        expect(result).to.deep.equal([1, 0, 0]);
    });

    it("should return solution for 3 clients testing swapping in calculation", () => {
        const colorCount = 5;
        const customers = [
            [{ color: 1, type: 1 }, { color: 3, type: 0 }, { color: 5, type: 1 }],
            [{ color: 2, type: 0 }, { color: 3, type: 1 }, { color: 4, type: 0 }],
            [{ color: 3, type: 1 }, { color: 5, type: 1 }]
        ];
        const solve = solver(customers, colorCount);
        const result = solve();
        expect(result).to.deep.equal([1, 0, 1, 0, 0]);
    });
});
