// 1. User se input lein
let userInput = prompt("Enter a number:");

// 2. Input ko number mein convert karein
let number = parseInt(userInput);

// 3. Ab number ko check karein
if (number > 4) {
  // Redirect to Google
  location.href = "https://google.com";
} else {
  alert("The number was not greater than 4, so no redirection will happen.");
}