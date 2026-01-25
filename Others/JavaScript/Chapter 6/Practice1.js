// require("prompt-sync")() waali line HATA DEIN.
let runagain = true;
while (runagain) {

    // 1. User se input lene ke liye browser ka prompt istemal karein
    let ageInput = prompt("Enter your Age:");

    // 2. Input ko number mein convert karein
    let age = parseInt(ageInput);

    // 3. Condition check karein
    if (age < 0) {
        console.error("Error: Age cannot be negative. Please enter a valid age.");
        alert("Error: Age cannot be negative!");
    }
    else if (age >= 18) {
        // alert() browser mein kaam karta hai
        alert("You can drive.");
    } else {
        alert("You cannot drive.");
    }
    runagain = confirm("Do you want to run again:");
}
