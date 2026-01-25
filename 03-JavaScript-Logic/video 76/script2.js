// Step 1: Ek function banaya jo 3 second baad reject hone wala promise return karta hai
function createRejectingPromise() {
  return new Promise((resolve, reject) => {
    
    console.log("Promise shuru hua, 3 second ka timer... ⏰");
setTimeout(() => {
      // 3 second baad, hum promise ko 'reject' kar rahe hain
      reject(new Error("Error: Yeh promise 3 second baad reject ho gaya!"));
    }, 3000);
  });
}
// Step 2: Ek async function banaya jo is promise ko handle karega
async function handleRejection() {
  
  try {
    // Step 3: 'try' block mein risky code ko await karein
    // JavaScript yahan 3 second ke liye pause hoga...
    let result = await createRejectingPromise();
    
    // Yeh line kabhi nahi chalegi, kyunki promise reject ho gaya
    console.log("Success (kabhi print nahi hoga):", result);
    
  } catch (error) {
    // Step 4: 'catch' block ne error ko pakad liya
    console.log("---------------------------------");
    console.log("Error successfully caught! ✅");
    console.error(error.message); // Error ka message print karein
  }
}

// Step 5: Async function ko call karein
handleRejection();