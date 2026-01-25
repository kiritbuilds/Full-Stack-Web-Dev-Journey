// Helper function
function simpleTask(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Task poora hua ${ms}ms mein`);
    }, ms);
  });
}

// Part 1: Promise.all()
async function runWithPromiseAll() {
  console.log("Promise.all() shuru...");
  console.time("PromiseAll_Time");
  
  let task1 = simpleTask(1000); // 1s
  let task2 = simpleTask(2000); // 2s
  let task3 = simpleTask(1500); // 1.5s
  
  let results = await Promise.all([task1, task2, task3]);
  
  console.log("All tasks done:", results);
  console.timeEnd("PromiseAll_Time");
}

// Part 2: One-by-One
async function runOneByOne() {
  console.log("\nOne-by-one shuru...");
  console.time("OneByOne_Time");
  
  let result1 = await simpleTask(1000);
  console.log(result1);
  let result2 = await simpleTask(2000);
  console.log(result2);
  let result3 = await simpleTask(1500);
  console.log(result3);
  
  console.log("All tasks done.");
  console.timeEnd("OneByOne_Time");
}

// Dono ko call karein
runWithPromiseAll();
runOneByOne();