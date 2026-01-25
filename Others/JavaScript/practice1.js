// const navBar = document.querySelectorAll('nav');
// // const firstNavItem = navBar.firstElementChild.firstElementChild;
// navBar.style.backgroundColor = "red";
// script.js

// 1. Select all elements with the tag name 'li'
const allListItems = document.getElementsByTagName('li');

// allListItems is now a collection of all 4 <li> elements.

// 2. Loop through this collection to access each item
for (let i = 0; i < allListItems.length; i++) {
  // 3. Change the background color of each list item to cyan
  allListItems[i].style.backgroundColor = 'cyan';
}