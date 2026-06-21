/**
 * Lab: Global State Management with Zustand - Instructor Solution
 */

import React from 'react';
import { create } from 'zustand';

// משימה 1: יצירת ה-Store
const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  }))
}));

function Header() {
  // משימה 2: שליפת כמות הפריטים באמצעות Selector
  const cartCount = useCartStore((state) => state.cart.length);

  return (
    <header style={{ backgroundColor: '#4f46e5', color: 'white', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h3>החנות המקוונת שלי 🛒</h3>
      <div>
        <span>פריטים בעגלה: <strong>{cartCount}</strong></span>
      </div>
    </header>
  );
}

function ProductList() {
  const sampleProducts = [
    { id: 1, name: "אוזניות גיימינג", price: 299 },
    { id: 2, name: "עכבר ארגונומי", price: 149 },
    { id: 3, name: "מקלדת מכנית RGB", price: 449 }
  ];

  // משימה 3: שליפת addToCart מה-Store
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <h3>מוצרים זמינים לרכישה:</h3>
      <div>
        {sampleProducts.map(prod => (
          <div key={prod.id} className="product-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
            <span>{prod.name} - ₪{prod.price}</span>
            <button onClick={() => addToCart(prod)}>הוסף לעגלה ➕</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartDetails() {
  // משימה 4: שליפת cart ו-removeFromCart מה-Store
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <h3>עגלת הקניות שלך:</h3>
      {cart.length === 0 ? <p>העגלה ריקה...</p> : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="product-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
              <span>{item.name} - ₪{item.price}</span>
              <button onClick={() => removeFromCart(item.id)} className="delete-btn" style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>הסר ❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>פתרון מעבדה 10: ניהול מצב גלובלי עם Zustand</h1>
      <Header />
      <ProductList />
      <CartDetails />
    </div>
  );
}

export default App;
