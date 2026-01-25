// Chapter 3, Practice Set - Question 3

let correctNumber = 25; // Humne yahan sahi number set kar diya hai
let userGuess;

do {
  // Yeh code block hamesha kam se kam ek baar chalega
  userGuess = 25;

  // Agar guess galat hai, to "Try again" ka alert dikhayein
  if (userGuess != correctNumber) {
    console.log("Wrong guess! Try again.");
  }

} while (userGuess != correctNumber); // Condition yahan aakhir mein check hoti hai

// alert("Congratulations! You guessed the correct number.");
console.log("Congratulations! You guessed the correct number.");