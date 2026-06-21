/**
 * Theory: Global State Management with Zustand
 * 
 * קובץ זה מדגים הגדרת Store גלובלי לניהול משתמש וסל קניות,
 * ושימוש בבוררים (Selectors) לצריכת המידע.
 */

import React from 'react';
import { create } from 'zustand';

// 1. הגדרת ה-Store הגלובלי
// ה-Store מחזיק את רשימת המוצרים בעגלה, משתמש מחובר, ופעולות לעדכון.
export const useCartStore = create((set) => ({
  // א. ה-State (הנתונים)
  user: { name: "אורח/ת", isLoggedIn: false },
  cart: [],

  // ב. ה-Actions (פונקציות העדכון)
  loginUser: (username) => set({ user: { name: username, isLoggedIn: true } }),
  logoutUser: () => set({ user: { name: "אורח/ת", isLoggedIn: false }, cart: [] }), // ניקוי העגלה בהתנתקות
  
  addToCart: (item) => set((state) => ({ 
    // הוספת פריט למערך (ה-set דואג למיזוג, אך עלינו ליצור מערך חדש ללא מוטציה)
    cart: [...state.cart, item] 
  })),

  removeFromCart: (itemId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== itemId)
  }))
}));

// 2. קומפוננטת כותרת (Navbar) הצורכת רק את כמות הפריטים בעגלה ואת שם המשתמש
export function HeaderNavbar() {
  // שימוש ב-Selectors לשליפת נתונים ממוקדת.
  // קומפוננטה זו תתרנדר מחדש רק כששם המשתמש או כמות הפריטים משתנים!
  const username = useCartStore((state) => state.user.name);
  const cartCount = useCartStore((state) => state.cart.length);
  const logout = useCartStore((state) => state.logoutUser);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#4f46e5', color: 'white', borderRadius: '6px' }}>
      <span>שלום, {username}</span>
      <div>
        <span style={{ marginRight: '16px' }}>סל קניות: <strong>{cartCount}</strong> פריטים</span>
        {username !== "אורח/ת" && <button onClick={logout} style={{ color: 'red', cursor: 'pointer' }}>התנתק</button>}
      </div>
    </header>
  );
}

// 3. קומפוננטת רשימת קניות הצורכת את ה-cart ואת addToCart/removeFromCart
export function ShoppingCartView() {
  const cart = useCartStore((state) => state.cart);
  const add = useCartStore((state) => state.addToCart);
  const remove = useCartStore((state) => state.removeFromCart);
  const user = useCartStore((state) => state.user);
  const login = useCartStore((state) => state.loginUser);

  const sampleProducts = [
    { id: 1, name: "אוזניות אלחוטיות", price: 250 },
    { id: 2, name: "מטען מהיר", price: 80 }
  ];

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', marginTop: '12px', borderRadius: '8px' }}>
      <h3>ניהול עגלת קניות גלובלית</h3>
      
      {!user.isLoggedIn ? (
        <button onClick={() => login("אבי ישראלי")}>התחבר לצורך רכישה</button>
      ) : (
        <div>
          <h4>מוצרים זמינים בחנות:</h4>
          {sampleProducts.map(prod => (
            <div key={prod.id} style={{ margin: '8px 0' }}>
              <span>{prod.name} (₪{prod.price}) </span>
              <button onClick={() => add(prod)}>הוסף לעגלה ➕</button>
            </div>
          ))}
          
          <h4 style={{ marginTop: '16px' }}>העגלה שלך:</h4>
          {cart.length === 0 ? <p>העגלה ריקה.</p> : (
            <ul>
              {cart.map((item, index) => (
                <li key={index} style={{ margin: '4px 0' }}>
                  {item.name} - ₪{item.price}
                  <button onClick={() => remove(item.id)} style={{ marginRight: '8px', color: 'red' }}>הסר ❌</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
