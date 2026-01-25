console.log('This is Promises');

// Promise 1: 3 second ka wait karega
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        }, 3000); // 3 second
    }
})

// Promise 2: 1 second ka wait karega
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 1000); // 1 second
    }
})

// Promise.race: Dono ke beech race lagata hai
let p3 = Promise.race([prom1, prom2])

p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})

