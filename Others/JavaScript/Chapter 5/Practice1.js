// 1. Package ko import karein
const prompt = require("prompt-sync")();

// 2. Ek initial array banayein
let numbers = [10, 25, 42];
console.log("Original array:", numbers);

// 3. User se input lein (yeh ab terminal mein kaam karega)
let userInput = prompt("Enter a number to add to the array: ");

// 4. Input ko number mein convert karein
let newNumber = parseInt(userInput);

// 5. Array mein naya number add karein
// if (!isNaN(newNumber)) {
  numbers.push(newNumber);
  console.log("Successfully added! New array:", numbers);
// } else {
  // console.log("Invalid input. Please enter a valid number.");
// }