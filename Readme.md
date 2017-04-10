## PaintShop


You own a paint factory. There are N different colors you can mix, and each color can be prepared "matte" or "glossy". So, you can make 2N different types of paint.
Each of your customers has a set of paint types they like, and they will be satisfied if you have at least one of those types prepared. At most one of the types a customer likes will be a "matte".
You want to make N batches of paint, so that:
There is exactly one batch for each color of paint, and it is either matte or glossy.
For each customer, you make at least one paint type that they like.
The minimum possible number of batches are matte (since matte is more expensive to make). Find whether it is possible to satisfy all your customers given these constraints, and if it is, what paint types you should make.
If it is possible to satisfy all your customers, there will be only one answer which minimizes the number of matte batches.

##### Input

One line containing an integer C, the number of test cases in the input file. For each test case, there will be:
One line containing the integer N, the number of paint colors.
One line containing the integer M, the number of customers.
M lines, one for each customer, each containing:
An integer T >= 1, the number of paint types the customer likes, followed by
T pairs of integers "X Y", one for each type the customer likes, where X is the paint color between 1 and N inclusive, and Y is either 0 to indicate glossy, or 1 to indicated matte. Note that:
No pair will occur more than once for a single customer.
Each customer will have at least one color that they like (T >= 1).
Each customer will like at most one matte color. (At most one pair for each customer has Y = 1). All of these numbers are separated by single spaces.

#### Output

C lines, one for each test case in the order they occur in the input file, each containing the string "Case #X: " where X is the number of the test case, starting from 1, followed by:
The string "IMPOSSIBLE", if the customers' preferences cannot be satisfied; OR
N space-separated integers, one for each color from 1 to N, which are 0 if the corresponding paint should be prepared glossy, and 1 if it should be matte.


### Solution

The problem has been solved in Javascript using node.js, there is a input file ready with 3 different input tests implementing the example given (first test passing and second not having solution), and a third one with an input of 10 customers and 20 paints.

The project is structured in a main file (index.js) and a library containing different modules to solve the problem (parser, solver and processor).

 * The main file check for safe input from user like not using the input argument to scan different folders, accepting only one argument or informing that the file couldn't be parsed. After parsing the input file it call the processor per each test parsed and print the output.
 * `parser` read the input file given as argument and return an array of tests containing `paintCount`, `customerCount` and `customerArray`
 * `solver` gets an array of customers and colorCount and calculate the most efficient solution to satisfy customers or throw and Error if there is not solution.
 * `processor` is called from the main file and try to find a solution for the test, if it catch an error return a null solution.

### Execution

* First you must have the newest version of node, you can install it using `nvm install node`
* Second install node modules of the project `npm install`
* Then you can run the project `npm run start input.txt` with the input file provided
* You can run lint to check for lint errors `npm run lint`
	* The project implement airBnb lint rules and I added some other custom rules for spacing.
* You can run tests using `npm run tests` where it will create a custom file for parsing test
	* There are many tests for the Solver proving different error and success cases
	* There are tests for the processor testing that return the correct solution or null if catch an error
	* The Parser create a new test file and test that it parse and build the correct objects out of the file
