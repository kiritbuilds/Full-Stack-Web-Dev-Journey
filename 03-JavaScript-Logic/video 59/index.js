/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

const prompt = require('prompt-sync')(); // <-- ADD THIS LINE

/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times
*/

// 1. Get user input for numbers and operator
let num1 = parseFloat(prompt("Enter the first number: "));
let operator = prompt("Enter the operator (+, -, *, /): ");
let num2 = parseFloat(prompt("Enter the second number: "));

let result;

// 2. Generate a random number between 0 and 1
let randomChance = Math.random();

if (randomChance < 0.1) {
    // 3. FAULTY LOGIC (10% chance)
    console.log("Executing faulty calculation...");
    if (operator == '+') {
        result = num1 - num2; // + becomes -
    } else if (operator == '*') {
        result = num1 + num2; // * becomes +
    } else if (operator == '-') {
        result = num1 / num2; // - becomes /
    } else if (operator == '/') {
        result = num1 ** num2; // / becomes ** (exponentiation)
    } else {
        result = "Invalid operator";
    }

} else {
    // 4. CORRECT LOGIC (90% chance)
    console.log("Executing correct calculation...");
    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '*') {
        result = num1 * num2;
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == '/') {
        result = num1 / num2;
    } else {
        result = "Invalid operator";
    }
}

// 5. Display the final result
console.log(`Calculation: ${num1} ${operator} ${num2}`);
console.log(`The result is: ${result}`);