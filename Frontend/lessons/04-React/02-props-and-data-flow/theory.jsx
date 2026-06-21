/**
 * Theory: Props and Data Flow
 * 
 * קובץ זה מדגים את נושא העברת הנתונים (Props), ה-children prop ורינדור רשימות.
 */

import React from 'react';

// 1. קומפוננטה המקבלת Props פשוטים עם Destructuring וערכי ברירת מחדל (Default Props)
// אם לא מועבר ה-role, ישמש הערך "אורח/ת".
export function UserBadge({ name, role = "אורח/ת" }) {
  return (
    <div style={{ border: '1px solid gray', padding: '8px', margin: '4px', borderRadius: '4px' }}>
      <strong>שם:</strong> {name} | <strong>תפקיד:</strong> {role}
    </div>
  );
}

// 2. העברת אובייקט שלם כ-Prop
// מונע את הצורך להעביר 10 Props שונים בנפרד.
export function ProductCard({ product }) {
  // פירוק האובייקט שהתקבל בתוך הקומפוננטה
  const { title, price, inStock } = product;

  return (
    <div style={{ border: '1px solid #10b981', padding: '12px', margin: '8px 0', borderRadius: '6px' }}>
      <h4>{title}</h4>
      <p>מחיר: ₪{price}</p>
      <p style={{ color: inStock ? 'green' : 'red' }}>
        {inStock ? 'במלאי' : 'אזל מהמלאי'}
      </p>
    </div>
  );
}

// 3. שימוש ב-children prop ליצירת קומפוננטת עטיפה (Wrapper/Card Component)
// קומפוננטה זו מספקת רק את ה"מסגרת" (Layout) והעיצוב המשותף, ומציגה בתוכה את מה שההורה שלח לה.
export function BoxWrapper({ children, title }) {
  return (
    <div style={{ border: '2px dashed #4f46e5', padding: '20px', borderRadius: '10px', backgroundColor: '#f5f3ff' }}>
      {title && <h3 style={{ marginTop: 0, color: '#4f46e5' }}>{title}</h3>}
      <div className="wrapper-content">
        {children}
      </div>
    </div>
  );
}

// 4. רינדור רשימות מתוך מערך נתונים באמצעות map
// שימוש תקין ב-key ייחודי.
export function ProductList() {
  const items = [
    { id: 101, title: "מקלדת מכנית", price: 350, inStock: true },
    { id: 102, title: "עכבר גיימינג אלחוטי", price: 280, inStock: false },
    { id: 103, title: "מסך מחשב 27 אינץ'", price: 1200, inStock: true }
  ];

  return (
    <BoxWrapper title="רשימת מוצרים מוצעים">
      {items.map((item) => (
        // ה-key חייב להיות ברמה העליונה ביותר של האלמנט שמוחזר מה-map
        <ProductCard key={item.id} product={item} />
      ))}
    </BoxWrapper>
  );
}
