

const solver = (solutions, customers, colorCount) => {

    // It's a valid solution for the given user if it
    const isValidSolutionForCustomer = (solution, customer) => {
        console.log("customer", customer);
        const isValid = customer.some(({ color, type }) => {
            return solution[color - 1] === type;
        });

        console.log("solution valid for customer", solution, customer, isValid);
        return isValid;
    };

    const resolve = () => {
        let index = 0;
        let isSolution = false;

        do {
            isSolution = customers.every((customer) =>
                isValidSolisValidSolutionForCustomerution(solutions[index], customer));

        } while (!isSolution && index++ < solutions.length - 1);

        return solutions[index];
    };

    const solveCustomerOnePreference = (customer) => {
        const { color, type } = customer[0];
        const customerSolution = {};
        customerSolution[color] = type;
        return customerSolution;
    };

    const isColorTypeTakenAndDifferent = (value, type) => {
        return value !== undefined && value !== type;
    };


    // Users with One color preference only have one option to be satisfied
    // Combine these unique customer solutions to have a partial solution for all customers
    // If some of this solutions collide throw an error
    const createPartialSolutionOneColor = (customersOneColor) => {
        let partialSolution = {};

        customersOneColor.forEach((customer) => {
            const { color, type } = customer[0];

            if (isColorTypeTakenAndDifferent(partialSolution[color], type)) {
                throw new Error("Invalid solution, cannot satisfy both users");
            } else {
                partialSolution[color] = type;
            }
        });

        return partialSolution;
    };

    const isValidSolution = (customersCopy, solution) => {
        console.log("isValidSolution", customersCopy);
        return customersCopy.every((customer) =>
            isValidSolutionForCustomer(solution, customer));
    };

    // Return the solution array and fill rest of the colors with type 0
    const fillColors = (partialSolutionMap) => {
        const solution = [];

        // Start loop with color 1 till color n
        for (let i = 1; i <= colorCount; i++) {
            const value = partialSolutionMap[i] || 0;
            solution.push(value);
        }

        return solution;
    }

    const resolveBT = () => {
        const customersOneColor = customers.filter((customer) => customer.length === 1);
        const customersRemained = customers.filter((customer) => customer.length > 1);

        const partialSolutionMap = createPartialSolutionOneColor(customersOneColor);

        const lockedColorSet = new Set();
        Object.keys(partialSolutionMap).forEach((key) => lockedColorSet.add(+key));

        console.log("partialSolution", partialSolutionMap);
        console.log("customersRemained", customersRemained);

        const partialSolution = fillColors(partialSolutionMap);

        // if no customer remain fill with 0
        if (customersRemained.length === 0 || isValidSolution(customersRemained, partialSolution)) {
            return partialSolution;
        }

        return resolveRemainingCustomers(customersRemained, partialSolution, lockedColorSet);

    }

    const resolveRemainingCustomers = (customersRemained, partialSolution, lockedColorSet, colorPos = 0) => {
        console.log("lockedColorSet", lockedColorSet);

        for (let i = colorPos; i < colorCount; i++) {
            console.log("Color postition", i);
            const colorId = i+1;
            if (!lockedColorSet.has(colorId)) {
                console.log("Color is not locked", colorId);

                // If this color type is valid for remained customers continue with next
                if (isValidSolution(customersRemained, partialSolution)) {
                    console.log("Color is valid with type 0", colorId);
                    lockedColorSet.add(colorId);
                    return resolveRemainingCustomers(customersRemained, partialSolution, lockedColorSet, i + 1 );
                } else {
                    // Change color type and check again if is valid
                    partialSolution[i] = 1;
                    if (isValidSolution(customersRemained, partialSolution)) {
                        console.log("Color is valid with type 1", colorId);
                        lockedColorSet.add(colorId);
                        return resolveRemainingCustomers(customersRemained, partialSolution, lockedColorSet, i + 1 );
                    } else {
                        console.log("Color is NOT valid", colorId);
                        throw new Error("Invalid solution, cannot satisfy both users");
                    }

                }
            }

        }

        return partialSolution;
    };

    return { resolve, resolveBT };
};

module.exports = solver;
