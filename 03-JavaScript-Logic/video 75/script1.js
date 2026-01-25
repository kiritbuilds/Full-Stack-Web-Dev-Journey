console.log("Vivek is a Hacker");
console.log("Brijesh is a Hecker");

setTimeout(() => {
    console.log("I am Inside setTimeout");
}, 0);  // 4. Yeh "The End" ke baad print hoga

setTimeout(() => {
    console.log("I am Inside setTimeout 2");
}, 0); // 5. Yeh bhi "The End" ke baad print hoga

console.log("The End") // 3. Yeh teesra print hoga (Sync)

// Event Loop: Bhale hi setTimeout ka time 0 hai, woh hamesha ek Asynchronous task hota hai.Isliye JavaScript pehle saara Synchronous code(console.log) chalaata hai, aur jab woh poora ho jaata hai, tab setTimeout waale tasks ko chalata hai.

// // YEH LINE SAHI HAI:
// sc.onload = () => {
//   callback("Harry", fn)
// };

const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => {
    callback("Harry", fn);
}
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )

