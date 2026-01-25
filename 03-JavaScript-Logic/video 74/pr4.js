// Function that simulates fetching data
function simulateFetch() {
  // Instead of a real network request, we just log a message
  console.log("Simulating fetch: Getting new website content...");
  // In a real scenario, the fetch() code would go here.
}

// 1. Call the function once immediately
simulateFetch();

// 2. Use setInterval to call the function every 5000 milliseconds (5 seconds)
let intervalId = setInterval(simulateFetch, 5000);

// You can use the intervalId later if you want to stop the fetching, like:
// clearInterval(intervalId);