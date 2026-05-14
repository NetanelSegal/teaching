/**
 * Lab 5: Dynamic Rendering
 * Follow the missions to build a data-driven UI.
 */

// --- MISSION 1: The Shopping List (createElement) ---
// 1. You are given an array of items.
// 2. Write a function 'renderShoppingList(items)' that:
//    - Selects the #shopping-list <ul>.
//    - Clears its content.
//    - Uses document.createElement('li') for each item.
//    - Appends each <li> to the <ul>.
const groceries = ['Milk', 'Eggs', 'Bread', 'Coffee', 'Chocolate'];

function renderShoppingList(items) {
    // TODO: Your code here
}

// Call the function to see the result
renderShoppingList(groceries);


// --- MISSION 2: The Product Catalog (innerHTML) ---
// 1. You are given an array of product objects.
// 2. Write a function 'renderProducts(data)' that:
//    - Selects the #product-grid.
//    - Uses .map() and a Template Literal to create HTML strings for each product.
//    - Joins them and sets the .innerHTML of the grid.
const products = [
    { id: 'p1', name: 'Wireless Mouse', price: 25, category: 'Tech' },
    { id: 'p2', name: 'Mechanical Keyboard', price: 85, category: 'Tech' },
    { id: 'p3', name: 'Coffee Mug', price: 12, category: 'Home' },
    { id: 'p4', name: 'Desk Lamp', price: 45, category: 'Home' },
    { id: 'p5', name: 'USB-C Cable', price: 15, category: 'Tech' },
];

function renderProducts(data) {
    // TODO: Your code here
}

// Initial render
renderProducts(products);


// --- MISSION 3: Filtering the UI ---
// 1. Select the buttons #show-all-btn and #filter-cheap-btn.
// 2. Add click listeners:
//    - 'Show All': Calls renderProducts(products).
//    - 'Under $50': Filters the products array for items < 50, then calls renderProducts() with the filtered data.

// TODO: Your code here
