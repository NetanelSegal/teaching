/**
 * Lab 5: Dynamic Rendering - Solutions
 */

// --- MISSION 1: The Shopping List (createElement) ---
const groceries = ['Milk', 'Eggs', 'Bread', 'Coffee', 'Chocolate'];

function renderShoppingList(items) {
    const list = document.querySelector('#shopping-list');
    
    // 1. Clear using the modern standard
    list.replaceChildren(); 

    items.forEach(item => {
        const li = document.createElement('li');
        // SECURITY: textContent prevents HTML injection
        li.textContent = item; 
        list.append(li);
    });
}

renderShoppingList(groceries);


// --- MISSION 2: The Product Catalog (innerHTML) ---
const products = [
    { id: 'p1', name: 'Wireless Mouse', price: 25, category: 'Tech' },
    { id: 'p2', name: 'Mechanical Keyboard', price: 85, category: 'Tech' },
    { id: 'p3', name: 'Coffee Mug', price: 12, category: 'Home' },
    { id: 'p4', name: 'Desk Lamp', price: 45, category: 'Home' },
    { id: 'p5', name: 'USB-C Cable', price: 15, category: 'Tech' },
];

function renderProducts(data) {
    const grid = document.querySelector('#product-grid');
    
    const html = data.map(product => `
        <div class="card" data-id="${product.id}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p><strong>Price: $${product.price}</strong></p>
        </div>
    `).join('');

    grid.innerHTML = html;
}

renderProducts(products);


// --- MISSION 3: Filtering the UI ---
const showAllBtn = document.querySelector('#show-all-btn');
const filterCheapBtn = document.querySelector('#filter-cheap-btn');

showAllBtn.addEventListener('click', () => {
    renderProducts(products);
});

filterCheapBtn.addEventListener('click', () => {
    const filtered = products.filter(p => p.price < 50);
    renderProducts(filtered);
});
