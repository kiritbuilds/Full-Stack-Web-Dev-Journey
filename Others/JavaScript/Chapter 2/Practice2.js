// Chapter 2, Practice Set - Question 2

let day = 3; // Change this value from 0 to 6 to test

switch (day) {
  case 0: // Checks if day is 0
    console.log("It's Sunday, a weekend day!");
    break; // Stops the execution

  case 1:
    console.log("It's Monday, the start of the week.");
    break;

  case 2:
    console.log("It's Tuesday.");
    break;

  case 3:
    console.log("It's Wednesday.");
    break;

  case 4:
    console.log("It's Thursday.");
    break;
    
  case 5:
    console.log("It's Friday, almost the weekend!");
    break;

  case 6: // Checks if day is 6
    console.log("It's Saturday, a weekend day!");
    break;
    
  default: // Runs if no other case matches
    console.log("Invalid day. Please enter a number between 0 and 6.");
    break;
}