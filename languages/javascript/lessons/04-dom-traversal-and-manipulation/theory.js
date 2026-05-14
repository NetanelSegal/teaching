/**
 * Theory: DOM Traversal & Manipulation
 */

const container = document.querySelector('.container');

// 1. Updating Existing Elements
// Before we create new things, we often need to edit what's already there.
const title = document.querySelector('h1');
title.textContent = 'Updated Title'; // Changes text
title.style.color = 'blue';       // Changes style
title.classList.add('active');     // Adds a CSS class

// 2. Creation - Method A: createElement (Programmatic)
const newDiv = document.createElement('div');
newDiv.className = 'card';
newDiv.textContent = 'I am a new card!';
newDiv.style.border = '1px solid black';

// 3. Creation - Method B: innerHTML (Template Literals)
const htmlSnippet = `
    <article class="product" data-id="p1">
        <h3>Product Title</h3>
        <p>Description goes here.</p>
    </article>
`;
container.innerHTML += htmlSnippet; // Adds to the existing HTML

// 4. Injection Methods
container.append(newDiv); // Add at the end
container.prepend(document.createElement('header')); // Add at the start

// 5. Traversal
const product = document.querySelector('.product');

// Move UP the tree
const parent = product.parentNode;
const section = product.closest('section'); // Find nearest ancestor matching selector

// Move DOWN the tree
const children = product.children; // [h3, p]
const subtitle = product.querySelector('h3'); // Scoped search inside product

// Move SIDEWAYS (Siblings)
const next = product.nextElementSibling;

// 6. Data Attributes
console.log(product.dataset.id); // "p1"
product.dataset.category = "electronics"; // Updates to data-category="electronics"

// 7. Removing Elements
// next.remove(); // Removes the element from the DOM
