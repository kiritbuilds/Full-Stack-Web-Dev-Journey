// 1. Select the bulb and the button
const bulb = document.getElementById('bulb');
const toggleButton = document.getElementById('toggleButton');

// 2. Add a click event listener to the button
toggleButton.addEventListener('click', () => {
  // 3. Use classList.toggle() to add/remove the 'glow' class
  bulb.classList.toggle('glow');
});