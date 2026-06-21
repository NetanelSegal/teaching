/**
 * Lab: State and Interactivity - Instructor Solution
 */

import React, { useState } from 'react';

// משימה 1: מונה אינטראקטיבי
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: '#f9fafb' }}>
      <h2>משימה 1: מונה</h2>
      <p style={{ fontSize: '18px' }}>הערך: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>פלוס</button>
      <button onClick={() => setCount(count - 1)} style={{ backgroundColor: '#ef4444' }}>מינוס</button>
    </div>
  );
}

// משימה 2: טופס הוספת סטודנט
function AddStudent({ onAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name.trim());
      setName(''); // ניקוי שדה הקלט
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="שם הסטודנט..."
        style={{ padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px', width: '200px' }}
      />
      <button type="submit">הוסף סטודנט</button>
    </form>
  );
}

function App() {
  const [students, setStudents] = useState(["יוסי", "דנה"]);

  const addStudent = (name) => {
    // משימה 3: עדכון תקין של ה-State ללא מוטציה (שימוש ב-Spread operator)
    setStudents([...students, name]);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>פתרון מעבדה 3: State ואינטראקטיביות</h1>
      
      <Counter />

      <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: '#f9fafb' }}>
        <h2>משימות 2 ו-3: ניהול כיתה</h2>
        <AddStudent onAdd={addStudent} />
        
        <h3 style={{ marginTop: '20px' }}>רשימת הסטודנטים הנוכחית:</h3>
        <ul>
          {students.map((student, index) => (
            <li key={index} style={{ padding: '4px 0', fontSize: '16px' }}>{student}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
