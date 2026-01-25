// problem 3
function mirrorMirror(originalString) {
    // step 1 string ko reverse karo
    let reverseString = originalString
        .split('')  // "abc" -> ['a', 'b', 'c']
        .reverse()  // ['a', 'b', 'c'] -> ['c', 'b', 'a']
        .join('');  // ['c', 'b', 'a'] -> "cba"

    // Step 2: Original aur reversed ko jod do
    let mirrorString = originalString + reverseString;
    return mirrorString;
}
let myString = "Kirit";
console.log(mirrorMirror(myString));

let testString = "123";
console.log(mirrorMirror(testString));

// problem 4

// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
function passwordValidator(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const isLongEnough = password.length >= 8;

    if (isLongEnough && hasUppercase && hasLowercase && hasDigit) {
        console.log("Password Is Valid:");
        return true;
    } else {
        console.log("Invalid Password . Please Follow Criteria:");
        if (!isLongEnough)
            console.log("- Must be at least 8 characters long.");
        if (!hasUppercase)
            console.log("- Must contain an uppercase letter.");
        if (!hasLowercase)
            console.log("- Must contain a lowercase letter.");
        if (!hasDigit)
            console.log("- Must contain a digit.");
        return false;
    }

}
// / --- Test Cases --- /
passwordValidator("Kirit123");   // Output: Valid
passwordValidator("kirit123");   // Output: Invalid (Missing uppercase)
passwordValidator("KIRIT123");   // Output: Invalid (Missing lowercase)
passwordValidator("Kiritbhai"); // Output: Invalid (Missing digit)
passwordValidator("Krt123");

// Problem 5
function summation(num){
    let total = 0;
    for (let number of num) {
        if(number<0){
            break;
        }else{
            total = total + number;
        }
    }
    return total;
}
// test Cases
let testArray1 = [1,2,3,4,5];
let testArray2 = [2,5,8,-1,-5];

console.log(summation(testArray1));
console.log(summation(testArray2));

// problem 6
function vowelCounter(str){
    const vowel = "aeiouAEIOU";
    let count = 0;
    for(let character of str){
        if(vowel.includes(character)){
            count++;
        }
    }
    return count;
}

// 
console.log(vowelCounter("Kirit Kateshiya"));

// problem 7

