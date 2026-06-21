/**
 * Lesson 0: Getting Started - Theory Code Examples
 * 
 * This file illustrates the conceptual difference between Imperative UI (Vanilla JS)
 * and Declarative UI (React).
 */

// ==========================================
// 1. THE OLD WAY: IMPERATIVE (Vanilla JavaScript)
// ==========================================
// In Vanilla JS, you must manually select elements and describe the exact steps (how) 
// to update the DOM when data changes.

function updateCartImperative(productName, price) {
  // Step 1: Find the target container
  const cartList = document.getElementById('cart-list');
  if (!cartList) return;

  // Step 2: Create new DOM elements manually
  const cartItem = document.createElement('li');
  cartItem.className = 'cart-item flex justify-between p-2 border-b';

  const titleSpan = document.createElement('span');
  titleSpan.textContent = productName;

  const priceSpan = document.createElement('span');
  priceSpan.textContent = `$${price}`;

  // Step 3: Nest elements
  cartItem.appendChild(titleSpan);
  cartItem.appendChild(priceSpan);

  // Step 4: Append new item to list
  cartList.appendChild(cartItem);

  // Step 5: Manually select and update other dependent components
  const totalEl = document.getElementById('cart-total');
  const countEl = document.getElementById('cart-count');

  if (totalEl && countEl) {
    const currentCount = parseInt(countEl.textContent || '0', 10);
    countEl.textContent = String(currentCount + 1);

    const currentTotal = parseFloat(totalEl.textContent?.replace('$', '') || '0');
    totalEl.textContent = `$${(currentTotal + price).toFixed(2)}`;
  }
}


// ==========================================
// 2. THE MODERN WAY: DECLARATIVE (React Component)
// ==========================================
// In React, you define the State (the data) and the JSX template (what to render).
// React automatically syncs the UI whenever the state updates.

import React, { useState } from 'react';

export default function CartComponent() {
  // State: The single source of truth for your data
  const [items, setItems] = useState([
    { id: 1, name: 'Learn HTML Book', price: 19.99 },
    { id: 2, name: 'Modern CSS Guide', price: 29.99 }
  ]);

  const handleAddItem = () => {
    // Updating state automatically triggers a re-render
    const newItem = {
      id: Date.now(),
      name: 'React 19 Pocket Reference',
      price: 15.49
    };
    setItems([...items, newItem]);
  };

  // Calculate totals dynamically during render based on the current state
  const totalCount = items.length;
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  // Declarative UI: Describe the HTML output based on state
  return (
    <div className="p-6 max-w-md mx-auto bg-gray-800 text-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Shopping Cart ({totalCount} items)</h2>
      
      <ul className="space-y-2 mb-4">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between border-b border-gray-700 py-1">
            <span>{item.name}</span>
            <span className="font-semibold">${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-400">Total Price:</span>
        <span className="text-xl font-bold text-green-400">${totalPrice.toFixed(2)}</span>
      </div>

      <button 
        onClick={handleAddItem}
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold transition"
      >
        Add React Book
      </button>
    </div>
  );
}
