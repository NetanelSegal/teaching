/**
 * Theory: DOM Basics
 */

// 1. The Global Entry Point
console.log(window); // The whole browser tab
console.log(document); // The HTML tree of the current page

// 2. Selecting Elements
// ---------------------------------------------------------
// ID selection (fastest)
const header = document.getElementById('main-header');

// Selector selection (most flexible - uses CSS syntax)
const firstBtn = document.querySelector('.btn-primary'); // First match
const navLinks = document.querySelectorAll('nav a'); // ALL matches (NodeList)

// Legacy methods (still common in older codebases)
const btns = document.getElementsByClassName('btn'); // Returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName('p');

// 3. Modifying Content & Attributes
// ---------------------------------------------------------
if (header) {
    header.textContent = "New Title"; // Best practice for text
    header.innerHTML = "<span>Updated</span> Title"; // Use when you need HTML tags
}

// Changing attributes
const logo = document.querySelector('img');
if (logo) {
    logo.src = 'new-logo.png';
    logo.alt = 'Company Logo';
}

// 4. Styles and Classes
// ---------------------------------------------------------
const box = document.querySelector('.box');

// A. Inline styles (Avoid if possible, use classes instead)
box.style.backgroundColor = 'blue';
box.style.marginTop = '20px'; // Note the camelCase for CSS properties

// B. ClassList (The Professional Way)
box.classList.add('active');
box.classList.remove('hidden');
box.classList.toggle('highlight'); // Adds if missing, removes if present
console.log(box.classList.contains('active')); // true/false

// 5. Basic Event Listeners
// ---------------------------------------------------------
const clickMeBtn = document.querySelector('#click-me');

clickMeBtn.addEventListener('click', (event) => {
    // 'event' is the object containing info about what happened
    console.log("Button clicked!");
    box.classList.toggle('visible');
});
