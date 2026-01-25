// Ek variable banayenge jo loop ko control karega
let runAgain = true;

// Loop tab tak chalega jab tak runAgain ki value true hai
while (runAgain) {
  
  // ----- Yahan Question 1 ka code hai -----
  let ageStr = prompt("Please enter your age");
  let ageNum = parseInt(ageStr);

  // Check karna ki user ne number daala hai ya nahi
  // isNaN ka matlab hai "is Not a Number"
  if (isNaN(ageNum)) {
    alert("Invalid input. Please enter a number.");
  } else if (ageNum >= 18) {
    alert("You can drive.");
  } else {
    alert("You cannot drive.");
  }
  // ----- Question 1 ka code yahan khatam hua -----


  // Ab confirm box se user se puchenge
  // Agar user OK dabayega to 'true' aayega, Cancel par 'false'
  runAgain = confirm("Do you want to run this again?"); 
}

// Jab loop khatam hoga to console mein message print kar denge
console.log("You have exited the program.");