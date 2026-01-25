// Step 1: Humara purana 'loadScript' function, yeh waisa hi rahega
function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve("Script loaded successfully!");
    };

    script.onerror = () => {
      reject(new Error("Failed to load script: " + src));
    };

    document.head.append(script);
  });
}

// Step 2: 'async/await' syntax ka istemal karna
// Hum ek naya async function banate hain
async function loadMyScript() {
  let scriptURL = "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js";

  try {
    // 1. 'await' code ko yahan rok dega jab tak script load nahi ho jaati
    await loadScript(scriptURL);
    
    // 2. Jab upar waali line poori ho jaayegi, tabhi yeh line chalegi
    alert("Load is complete!");

  } catch (error) {
    // 3. Agar 'loadScript' reject hota hai, to code yahan aayega
    console.error(error);
    alert("Script load nahi ho saki.");
  }
}

// Step 3: Naye async function ko call karein
loadMyScript();