0x06. Unittests in JS
Install Mocha using npm:

Set up a scripts in your package.json to quickly run Mocha using npm test
You have to use assert
Create a new file named 0-calcul.js:

Create a function named calculateNumber. It should accepts two arguments (number) a and b
The function should round a and b and return the sum of it
Test cases

Create a file 0-calcul.test.js that contains test cases of this function
You can assume a and b are always number
Tests should be around the “rounded” part
Tips:

For the sake of the example, this test suite is slightly extreme and probably not needed
However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases
Requirements:

You have to use assert
You should be able to run the test suite using npm test 0-calcul.test.js
Every test should pass without any warning
Create a new file named 1-calcul.js:

Upgrade the function you created in the previous task (0-calcul.js)
Add a new argument named type at first argument of the function. type can be SUM, SUBTRACT, or DIVIDE (string)
When type is SUM, round the two numbers, and add a and b
When type is SUBTRACT, round the two numbers, and subtract b from a
When type is DIVIDE, round the two numbers, and divide a with b - if the rounded value of b is equal to 0, return the string Error
Test cases

Create a file 1-calcul.test.js that contains test cases of this function
You can assume a and b are always number
Usage of describe will help you to organize your test cases
Tips:

For the sake of the example, this test suite is slightly extreme and probably not needed
However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases
Requirements:

You have to use assert
You should be able to run the test suite using npm test 1-calcul.test.js
Every test should pass without any warning
While using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type being easier to read and therefore to maintain.

Let’s install Chai with npm:

Copy the file 1-calcul.js in a new file 2-calcul_chai.js (same content, same behavior)
Copy the file 1-calcul.test.js in a new file 2-calcul_chai.test.js
Rewrite the test suite, using expect from Chai
Tips:

Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you
The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code
Requirements:

You should be able to run the test suite using npm test 2-calcul_chai.test.js
Every test should pass without any warning
