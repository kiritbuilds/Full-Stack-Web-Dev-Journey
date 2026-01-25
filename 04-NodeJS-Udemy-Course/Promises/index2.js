const waitfor2 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve("Hello")
    },2000);
})

console.log("Ready");

waitfor2.then((value)=>{
    console.log(value);
})

waitfor2.catch((error)=>{
    console.log("Error : " + error);
})

console.log("End");