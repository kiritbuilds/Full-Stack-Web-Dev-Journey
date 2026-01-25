const givenNumbers = [2, 3, 5, 7, 10];
console.log("Original Array:", givenNumbers);
const sqaureNumbers = givenNumbers.map(number =>{
    return number * number;

});
console.log("Array of Squares:", sqaureNumbers);