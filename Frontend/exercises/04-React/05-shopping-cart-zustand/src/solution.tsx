import React from 'react';
import './index.css';
import { Product } from './types';
import { useCartStore } from './store/cartStore';

const PRODUCTS: Product[] = [
  { id: 1, name: "Orthopedic Ergonomic Chair", price: 299.99, image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&q=80&w=200", description: "All-day comfort with active lumbar support and premium mesh weave." },
  { id: 2, name: "Mechanical Gaming Keyboard", price: 129.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=200", description: "Hot-swappable tactile switches with dynamic per-key rgb illumination." },
  { id: 3, name: "UltraWide Curved Monitor 34\"", price: 449.99, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=200", description: "Panoramic wrap-around display panel for immersive work and entertainment." }
];

export default function App() {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCartStore();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <header>
        <h1>Developer Gear Store</h1>
        <p>Type-Safe Global Cart Management with Zustand and TypeScript</p>
      </header>

      <div className="layout">
        <main className="catalog">
          <h2>Product Catalog</h2>
          <div className="grid">
            {PRODUCTS.map((prod) => (
              <div key={prod.id} className="prod-card">
                <img src={prod.image} alt={prod.name} />
                <div className="info">
                  <h3>{prod.name}</h3>
                  <p className="desc">{prod.description}</p>
                  <div className="footer">
                    <span className="price">${prod.price}</span>
                    <button 
                      onClick={() => addToCart(prod)}
                      className="btn-add"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className="cart-drawer">
          <h2>Shopping Cart ({cart.length})</h2>
          
          <div className="cart-items">
            {cart.length === 0 ? (
              <p className="empty-cart-msg">Your cart is empty. Add some awesome gear!</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-header">
                    <h4>{item.name}</h4>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="cart-item-actions">
                    <div className="qty-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span className="qty">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="btn-remove">Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="cart-totals">
            <div className="total-row">
              <span>Total Price:</span>
              <span className="total-price">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="btn-checkout" disabled={cart.length === 0}>Checkout</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
