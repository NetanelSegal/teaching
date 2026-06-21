import { create } from 'zustand';

/**
 * Lab: Global State Management with Zustand
 * 
 * במעבדה זו תקימו Store גלובלי של עגלת קניות באמצעות Zustand,
 * ותשתפו את המצב בין כותרת האתר (Header) לבין רשימת המוצרים ופרטי העגלה.
 */

// משימה 1: הקימו את ה-Store הגלובלי useCartStore
// 1. הגדירו במצב (State) מערך בשם cart (אתחלו אותו כמערך ריק).
// 2. הגדירו פעולה (Action) בשם addToCart שמקבלת אובייקט מוצר ומעוסיפה אותו למערך cart.
// 3. הגדירו פעולה (Action) בשם removeFromCart שמקבלת מזהה מוצר (id) ומסירה אותו מהעגלה.
// TODO: צרו את ה-Store כאן

function Header() {
  // משימה 2: שלפו מתוך ה-Store את כמות המוצרים בעגלה באמצעות Selector
  // TODO: שלפו את המשתמש והעגלה
  const cartCount = 0;

  return (
    <header>
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

  // משימה 3: שלפו מתוך ה-Store את הפעולה addToCart
  // TODO: שלפו את addToCart
  const addToCart = (product) => {};

  return (
    <div className="box">
      <h3>מוצרים זמינים לרכישה:</h3>
      <div>
        {sampleProducts.map(prod => (
          <div key={prod.id} className="product-item">
            <span>{prod.name} - ₪{prod.price}</span>
            <button onClick={() => addToCart(prod)}>הוסף לעגלה ➕</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartDetails() {
  // משימה 4: שלפו מתוך ה-Store את מערך ה-cart ואת הפעולה removeFromCart
  // TODO: שלפו את cart ו-removeFromCart
  const cart = [];
  const removeFromCart = (id) => {};

  return (
    <div className="box">
      <h3>עגלת הקניות שלך:</h3>
      {cart.length === 0 ? <p>העגלה ריקה...</p> : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="product-item">
              <span>{item.name} - ₪{item.price}</span>
              <button onClick={() => removeFromCart(item.id)} className="delete-btn" style={{ backgroundColor: '#ef4444' }}>הסר ❌</button>
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
      <h1 style={{ textAlign: 'center', color: '#111827' }}>מעבדה 10: ניהול מצב גלובלי עם Zustand</h1>
      <Header />
      <ProductList />
      <CartDetails />
    </div>
  );
}

export default App;
