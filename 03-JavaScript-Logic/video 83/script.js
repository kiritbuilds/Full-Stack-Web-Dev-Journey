// problem 1
let students =  ["kirit" , "vivek" , "kateshiya" , "Foreiner" , "Unicornia" , "Pompaydga" , "Jammboo" , "Bablu" , "Shivkumar", "Ddubhai" , "Bsjido" , "ChamaSing" , "Bankubhaiya"];
let houses = [];

for (const student of students) {
    if(student.length < 6){
        houses.push("Gryffindor");
    }else if(student.length < 8){
        houses.push("Hufflepuff");
    }else if(student.length < 12){
        houses.push("Ravenclaw");
    }else{
        houses.push("Slytherin")
    }
}
console.log(houses);

// problem 2

// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// ## Logic (Sochna Kaise Hai)
// Humein har element ke liye decide karna hai: "Kya main is element ko double karoon ya nahi?"

// Pehla Element (First Element): Iska koi pichhla element nahi hai. Toh yeh hamesha double hoga.

// Baaki Elements (Other Elements): Humein check karna hoga, "Kya yeh element apne pichhle element ke barabar hai?"

// Agar Nahi (woh alag hai): To ise double karo.

// Agar Haan (woh same hai): To ise waise hi chhod do (double mat karo).

// Is kaam ke liye .map() method best hai, kyunki .map() aapko element ke saath-saath uska index bhi deta hai.

function doubleTrouble(arr){
    const newArray = arr.map((element, index)=>{
        // Check 1: Kya yeh pehla element hai? (index === 0)
       // Check 2: Ya, kya yeh element apne pichhle element (arr[index - 1]) ke barabar NAHI hai?
       if (index === 0 || element !== arr[index - 1]) {
      // Agar haan, to yeh consecutive duplicate nahi hai, ise double karo
      return element * 2;
      } else {
      // Agar nahi, to yeh ek consecutive duplicate hai, ise waise hi chhod do
      return element;
      }
    });
    return newArray;
}
// test Cases
let test1 = [1, 2, 3, 4]; // Koi duplicate nahi
let test2 = [1, 2, 2, 3]; // Ek duplicate '2'
let test3 = [5, 5, 5, 1]; // Do consecutive duplicate '5'

console.log(doubleTrouble(test1)); // Output: [2, 4, 6, 8]
console.log(doubleTrouble(test2)); // Output: [2, 4, 2, 6]
console.log(doubleTrouble(test3)); // Output: [10, 5, 5, 2]
