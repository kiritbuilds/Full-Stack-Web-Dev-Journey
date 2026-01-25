// LIFE Concept
(function() {
  let a = "Hello";
  console.log(a + " from inside IIFE");
})(); 
// Output: Hello from inside IIFE
// console.log(a); // Yahan error aayega, kyunki 'a' IIFE ke andar private hai


// ### Array Destructuring
// Normal Tareeka:
let arr = [10, 20];
let a = arr[0];
let b = arr[1];

// Destructuring Tareeka:
let [x, y] = [7, 20];
console.log(x); // Output: 7
console.log(y); // Output: 20

// Rest Operator (...rest) ke Saath: Aap ... ka istemal karke baaki bache hue elements ko ek naye array mein daal sakte hain.
let [a1, b1, ...others] = [10, 80, 7, 11, 21, 88];
console.log(a1);     // Output: 10
console.log(b1);     // Output: 80
console.log(others); // Output: [7, 11, 21, 88]

// ### Object Destructuring
const person = {
  name: "Kirit",
  age: 21,
  city: "Rajkot"
};

// 'name' aur 'age' naam ke variable banaye
let {name, age , city} = person;
console.log(name); // Output: Kirit
console.log(age);  // Output: 21
console.log(city); // Rajkot

// ## 3. Spread Syntax (...)
// Yeh destructuring ka ulta hai. Yeh ek array ya object ke elements ko "phaila" (spread) deta hai.
// ### Function Arguments Mein
function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 7];

// Spread syntax array ko arguments mein badal deta hai: sum(1, 2, 7)
console.log(sum(...nums)); // Output: 10

// ### Arrays ko Jodne (Combine) Mein
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Dono arrays ke elements ko phaila kar naya array banaya
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// ### Objects ko Jodne Mein

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObject = {...obj1, ...obj2};
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }


// ## 4. Quick Quiz (Object Shorthand)

const a2 = "the";
const b2 = "no";
const c = {a2, b2};
console.log(c);

// ## 5. Scope (Block, Function, Global)
// Scope ka matlab hai woh "daayra" (area) jahan ek variable zinda (accessible) rehta hai. JavaScript mein 3 tarah ke scope hote hain:
// 1. Global Scope: Kisi bhi function ya block {} ke bahar banaya gaya variable. Yeh poore program mein kahin bhi available hota hai.

// 2. Function Scope: var keyword se banaya gaya variable. Yeh sirf uss function ke andar hi zinda rehta hai.

// 3. Block Scope: let aur const se banaya gaya variable. Yeh sirf apne curly braces { ... } (jaise if, for, ya normal block) ke andar hi zinda rehta hai.

var globalVar = "Main Global hoon"; // Global Scope

function myFunction() {
  var functionVar = "Main Function Scope mein hoon"; // Function Scope
  console.log(globalVar); // Chalega

  if (true) {
    let blockVar = "Main Block Scope mein hoon"; // Block Scope
    console.log(functionVar); // Chalega
  }
  // console.log(blockVar); // Error dega! 'blockVar' yahan mar chuka hai.
}

myFunction();
// console.log(functionVar); // Error dega! 'functionVar' yahan available nahi hai.

// ## 6. Hoisting
// Hoisting JavaScript ka ek "ajeeb" behaviour hai jismein woh declarations (jaise var a; ya function hello()) ko code chalane se pehle hi "upar" (top of the scope) move kar deta hai.
// Important: Hoisting sirf declarations ko move karta hai, initializations (value dene ko) nahi.

// ### var ki Hoisting
// var declarations hoist hote hain, lekin unki shuruati value undefined rehti hai.
console.log(a3); // Output: undefined (Error nahi aaya!)
var a3 = 10;
console.log(a3); // Output: 10

// Parde ke peeche yeh aisa dikhta hai:
var a4; // Declaration upar chala gaya
console.log(a4); // 'a' abhi undefined hai
a4 = 10; // Value baad mein assign hui
console.log(a4);

// ### let aur const ki Hoisting
// Yeh bhi hoist hote hain, lekin var ki tarah undefined nahi hote. Yeh ek "Temporal Dead Zone" mein rehte hain. Agar aap unhe declare karne se pehle access karne ki koshish karenge, to aapko Error milega.
// console.log(b3); // ReferenceError: Cannot access 'b' before initialization
let b3 = 20;

// ### Function Hoisting

// Poora ka poora function (function hello() { ... }) hoist ho jaata hai, isliye aap use declare karne se pehle call kar sakte hain.
hello(); // Output: "Hello World" (Yeh chalega)

function hello() {
  console.log("Hello World");
}