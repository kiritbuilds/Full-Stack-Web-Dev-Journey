// Ek sample array banayein
const numbers = [10, 20, 30, 40, 50];

console.log("Printing each number from the array:");

// for...of loop ka istemal karke array ki har value ko access karein
for (let value of numbers) {
  // 'value' variable mein સીધે array ka item aayega (e.g., 10, 20, 30)
  console.log(value);
}

// Chaliye, ise ek string par bhi try karte hain
const greeting = "Hello";

console.log("\nPrinting each character from a string:");

for (let character of greeting) {
  console.log(character);
}