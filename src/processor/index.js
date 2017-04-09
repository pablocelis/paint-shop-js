const solver = require("../solver");

const processor = (test) => {
    const { paintCount, customerArray } = test;

    customerArray.sort();   // Sort customers by number of paints ordered, 1 paint first
    const solve = solver(customerArray, paintCount);

    try {
        return solve();
    } catch (err) {
        return null;
    }
};

module.exports = processor;
