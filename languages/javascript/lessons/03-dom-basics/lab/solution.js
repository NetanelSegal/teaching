/**
 * Lab: DOM Basics - Solutions
 */

// MISSION 0: Instant Updates (No Events) 🚀
document.getElementById('message').textContent = "DOM is loaded!";
document.getElementById('status').textContent = "Ready";
document.getElementById('style-me').style.color = "blue";


// MISSION 1: The Dark Mode Toggle 🌓
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// MISSION 2: The Counter 🔢
const counterSpan = document.getElementById('counter-value');
const incBtn = document.getElementById('increment-btn');
const decBtn = document.getElementById('decrement-btn');

let count = 0;

incBtn.addEventListener('click', () => {
    count++;
    counterSpan.textContent = count;
});

decBtn.addEventListener('click', () => {
    count--;
    counterSpan.textContent = count;
});


// MISSION 3: Price Highlighting 🏷️
const highlightBtn = document.getElementById('highlight-btn');
const priceTags = document.querySelectorAll('.price-tag');

highlightBtn.addEventListener('click', () => {
    priceTags.forEach(tag => {
        const price = Number(tag.dataset.price);
        if (price > 100) {
            tag.style.color = 'red';
            tag.style.fontWeight = 'bold';
        }
    });
});
