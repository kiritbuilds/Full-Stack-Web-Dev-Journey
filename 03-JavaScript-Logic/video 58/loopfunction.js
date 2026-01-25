// // practice set 3 loop and function

// // Question 1

// let obj = { 
//   harry: 98, 
//   rohan: 70, 
//   aakash: 7 
// };

// for (let student in obj) {
//   console.log(student + "s marks" + obj[student])
// };

// // Question 3

// a = 2;
// while (true){
//     let b = 2;
//     if (a === b){
//         console.log("Correct")
//         break;
//     }else{
//         console.log("Try Again")
//     }
// }

// // Question 5
// // A Function to find mean of 5 numbers

// function calculateMean(a, b, c, d, e, f){
//     sum = a + b + c + d + e + f
//     return sum / 6 // sum / 6 means 6 is a length of mean
// }
// let mean = calculateMean(2, 4, 6, 7, 8, 9)
// console.log(mean)

//  Template Literals

// let myName = 'Harry'
// let a = `This is ${myName}`
// console.log(a)


// function nice(name) {
//     console.log("Hey " + name + " you are nice!")
//     console.log("Hey " + name + " you are good!")
//     console.log("Hey " + name + " your tshirt is nice!")
//     console.log("Hey " + name + " your course is good too!")
// }

// function sum(a, b, c = 3) {
//     // console.log(a + b)
//     console.log(a, b, c)
//     return a + b + c
// }


// result1 = sum(3, 2)
// result2 = sum(7, 5)
// result3 = sum(3, 13, 1)

// console.log("The sum of these numbers is: ", result1)
// console.log("The sum of these numbers is: ", result2)
// console.log("The sum of these numbers is: ", result3)


// const func1 = (x)=>{
//     console.log("I am an arrow function", x)
// }


// func1(34);
// func1(66);
// func1(84);

let a = "Harry";
// let b = "ShivamSh"

// console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))
console.log(a.toLowerCase())
console.log(a.replace("y","i"))

let myStr = "Hello , World!";
console.log(myStr.includes("World"))
console.log(myStr.includes(","))
console.log(myStr.includes("World", 7))
console.log(myStr.includes("Universal"))