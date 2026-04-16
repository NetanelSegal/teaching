/**
 * Theory: DOM Basics
 * 
 * The DOM (Document Object Model) allows JavaScript to interact with HTML.
 */

// 1. Selecting Elements
const title = document.getElementById('main-title'); // Select by ID
const buttons = document.getElementsByClassName('btn'); // Select by Class (Returns a collection)
const firstButton = document.querySelector('.btn'); // Selects the FIRST element matching the CSS selector
const allItems = document.querySelectorAll('li'); // Selects ALL elements (Returns a NodeList)

// 2. Modifying Content
title.textContent = "Hello DOM!"; // Change text only
title.innerHTML = "<em>Hello</em> DOM!"; // Change HTML content

// 3. Modifying Styles
title.style.color = "blue";
title.style.fontSize = "2rem";

// 4. Working with Classes
title.classList.add('highlight');
title.classList.remove('hidden');
title.classList.toggle('active');

// 5. Event Listeners
firstButton.addEventListener('click', (event) => {
    console.log("Button clicked!");
    title.style.backgroundColor = "yellow";
});
