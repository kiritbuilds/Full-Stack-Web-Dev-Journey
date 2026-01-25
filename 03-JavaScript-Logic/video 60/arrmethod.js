const fruits1 = ["banana", "apple", "grapes"] // Array
const a8 = [7, "Harry", "false"] // different type data
//  Accesing Values
let numbers = [1, 2, 7, 9]
numbers[0] 
numbers[1] 

// Finding The Length
let numbers1 = [1,2,7,21]
numbers1[0] 
numbers1[1] 

console.log(numbers)
console.log(numbers[0])// access the value of inside array
console.log(numbers[1])
console.log(numbers1)
console.log(numbers1.length ) // finding the length of array

numbers[2] = 8 // Change the value of array.
// array are mutable array can be change.
console.log(numbers)

const n = [1,2,4]
console.log(typeof(n)) // array is one type of object

//array methods
// converts an array to a string of comma separated values
let n1 = [1, 7, 9]
console.log(n1.toString())

console.log(n1.join("-")) // join all array elements in separate

// pop() removes last element of array
let n2 = [1, 2, 4]
console.log(n2.pop())
console.log(n2)

// push() Add a new element at the end of the array
let n3 = [1, 2, 4]
console.log(n3.push(5)) // print original array
console.log(n3)

// remove first element in array and return that element shift()
let fruits = ["banana", "apple", "papaya"]
let shiftedFruits = fruits.shift()
console.log(fruits)
console.log(shiftedFruits)

//add one or more elements to the start of array and return the new length of the array.
// Unshift() The Method changes original array
let fruits2 = ["banana", "apple", "papaya"]
let unshiftedFruits2 = fruits2.unshift("Mango", "Orange")
console.log(fruits2)
console.log(unshiftedFruits2)
 // array elements can be deleted using the delete operator
 let d = [1, 2, 6, 5, 4]
 console.log(delete d[1])
 
 // concat() used to join array to the given array
 let a1 = [1, 2, 3, 4, 5]
 let a2 = [6, 7, 8, 9]
 let a3 = [10, 11, 12, 13]
 console.log(a1.concat(a2,a3))

 // sort() method is used to sort array alphavertically
 let a = [7, 9, 8]
 console.log(a.sort())

 // splice() can be add a new item to an array
 const numbers6 = [1, 2, 4, 5, 6]
 console.log(numbers6.splice(  2,      1,        43, 21))
 //                          "position  "no of    "Elements to be added 43 and 21"
 //                           to add    elements
 //                            item"    to remove"
 console.log(numbers6) // 4 remove and another print

 // for loop
 let fruits9 = ["apple", "banana", "Mango"]
 for (let fruit of fruits9) {
    console.log(fruit)
 }
 // for each loop
  let fruits7 = ["apple", "banana", "Mango"]
  fruits7.forEach(fruit => console.log(fruit))

  // map() create a new array by performig some operation on each element
  let number3 = [1, 2, 3, 4, 5, 6, 7]
  let doubleNumbers = number3.map(num => num * 2)
  console.log(doubleNumbers)

  // filter () pass the test implemented by the provided function.
  let numbers21 = [1, 2, 3, 4, 5]
  let evenNumbers = numbers21.filter(num => num % 2 ===0)
  console.log(evenNumbers)

  // reduce () aplies function againts an accumulator and each element in the array (from left to right ) to reduce it to a single value.
  let numbes = [1, 2, 3, 4, 5]
  let sum = numbes.reduce((acc,num)=> acc + num, 0)
  console.log(sum)

// used to create an array from any other object
let string = 'hello'
let charArray = Array.from(string)
console.log(charArray); // ['h', 'e', 'l', 'l', 'o']
let set = new Set([1, 2, 3])
let array = Array.from(set)
console.log(array) // [1, 2, 3]
