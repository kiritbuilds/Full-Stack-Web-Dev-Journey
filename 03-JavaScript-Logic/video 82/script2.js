// problem 1
function hello() {
    let a = setTimeout(() => {
        console.log("Hello ");
        console.log("World");
    }, 2000);
    console.log(a);
}
hello();

function avg(a, b, c) {
    return (a + b + c) / 3;
}
const nums = [10, 20, 30];
console.log(avg(...nums));

// problem 3
function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Wait poora hua ${n} seconds mein`);
        }, n * 1000);
    });
}

(async () => {
    console.log("Program Suru");
    console.log("First Wait");
    let result1 = await wait(1);
    console.log(result1);

    console.log("Doosra wait (3 seconds) shuru...");
    // 'await' code ko yahan 3 second ke liye pause kar dega
    let result2 = await wait(3);
    console.log(result2); // 3 second baad print hoga

    console.log("Program khatam hua.");
}) ();

// problem 4
function calculateSI(P,R,T){
    return (P * R * T )/ 100;
}
console.log(calculateSI(50, 30, 20));