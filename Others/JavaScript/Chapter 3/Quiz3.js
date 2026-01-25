let count = 1;

// The condition is checked first
while (count <= 5) {
  console.log("The count is: " + count);
  
  // Important: We must update the variable, otherwise it will be an infinite loop!
  count++; 
}

console.log("Loop finished!");