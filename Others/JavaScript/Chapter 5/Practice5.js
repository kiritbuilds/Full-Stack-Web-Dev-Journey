// The number whose factorial we want to find
const n = 5;

// 1. Create an array of first 'n' natural numbers
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

// At this point, arr is [1, 2, 3, 4, 5]
console.log("Array to reduce:", arr);

// 2. Use the reduce method to calculate the factorial
const factorial = arr.reduce((accumulator, currentValue) => {
  // For each number in the array, multiply the running total (accumulator)
  // by the current number (currentValue)
  return accumulator * currentValue;
});

// 3. Final result ko print karein
console.log(`The factorial of ${n} is:`, factorial);