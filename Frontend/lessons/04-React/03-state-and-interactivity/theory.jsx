/**
 * Theory: State and Interactivity
 * 
 * קובץ זה מציג שימוש ב-useState לניהול נתונים פשוטים ומורכבים,
 * וכן עבודה עם טפסים נשלטים (Controlled Components).
 */

import React, { useState } from 'react';

// 1. ניהול ערך פרימיטיבי (מספר/מחרוזת)
export function SimpleCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // עדכון המצב בעזרת פונקציית ה-setter
    setCount(count + 1);
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <h3>מונה פשוט</h3>
      <p>הערך הנוכחי: {count}</p>
      <button onClick={handleIncrement}>הוסף 1</button>
      {/* עדכון ישיר בעזרת פונקציית חץ inline */}
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '8px' }}>הפחת 1</button>
    </div>
  );
}

// 2. עדכון נכון של אובייקטים ומערכים (State Mutation - מה לא לעשות!)
// אסור לשנות את המצב המקורי ישירות (למשל: list.push(item)).
// יש ליצור עותק חדש של המערך/אובייקט באמצעות ה-Spread Operator (...).
export function TodoListManager() {
  const [todos, setTodos] = useState(["ללמוד React", "לתרגל JavaScript"]);

  const addTodo = () => {
    const newTodo = "משימה חדשה " + (todos.length + 1);
    
    // תקין: יצירת מערך חדש המכיל את כל האיברים הקודמים פלוס האיבר החדש
    setTodos([...todos, newTodo]);

    // שגוי (לא יגרום לרינדור מחדש כי ההצבעה למערך בזיכרון לא השתנתה):
    // todos.push(newTodo);
    // setTodos(todos);
  };

  return (
    <div style={{ border: '1px solid #10b981', padding: '16px', marginTop: '12px', borderRadius: '8px' }}>
      <h3>רשימת משימות (עדכון מערך)</h3>
      <button onClick={addTodo}>הוסף משימה</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

// 3. רכיבים נשלטים בטפסים (Controlled Components)
// קישור שדה הקלט ל-State ועדכונו באמצעות onChange.
export function SimpleForm() {
  const [username, setUsername] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // מניעת התנהגות ברירת המחדל של שליחת הטופס (רענון הדף)
    alert(`הטופס נשלח עם השם: ${username} והסכמה: ${isAgreed}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #3b82f6', padding: '16px', marginTop: '12px', borderRadius: '8px' }}>
      <h3>טופס הרשמה</h3>
      
      <div>
        <label>שם משתמש: </label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="הקלד שם..."
        />
      </div>

      <div style={{ marginTop: '8px' }}>
        <input 
          type="checkbox" 
          checked={isAgreed} 
          onChange={(e) => setIsAgreed(e.target.checked)} 
          id="agree-checkbox"
        />
        <label htmlFor="agree-checkbox"> אני מסכים לתנאי השימוש</label>
      </div>

      <button type="submit" style={{ marginTop: '12px' }}>שלח טופס</button>
    </form>
  );
}
