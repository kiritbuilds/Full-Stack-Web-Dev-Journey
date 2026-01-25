// Syncronization
console.log("Start");
console.log("Middle");
console.log("End");

// Asyncronization Wait No Kare Biju Print Kari de Jyare Khali Thay Tyare Baki Nu Print Kare...
console.log("Start");

setTimeout(() =>{
    console.log("Middle");
},1000);

console.log("End");