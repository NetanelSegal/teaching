import { useState } from 'react';

/**
 * Lab: State and Interactivity
 * 
 * במעבדה זו תבנו מונה (Counter) ותוסיפו טופס להוספת סטודנטים לרשימה.
 */

// משימה 1: מונה אינטראקטיבי
// 1. הגדירו State עבור המונה (אתחלו אותו ב-0).
// 2. צרו כפתור "פלוס" שיגדיל את המונה ב-1.
// 3. צרו כפתור "מינוס" שיקטין את המונה ב-1.
function Counter() {
  // TODO: הגדירו את ה-State של המונה כאן

  return (
    <div className="box">
      <h2>משימה 1: מונה</h2>
      <p>הערך: 0</p>
      {/* TODO: הוסיפו אירועי onClick לכפתורים */}
      <button>פלוס</button>
      <button>מינוס</button>
    </div>
  );
}

// משימה 2: טופס הוספת סטודנט (קומפוננטה נשלטת)
// 1. הגדירו State עבור קלט הטקסט (מחרוזת ריקה).
// 2. קשרו את ה-input ל-State באמצעות value ו-onChange.
// 3. ב-onSubmit, מנעו את רענון הדף וקראו לפונקציה onAdd שהתקבלה כ-Prop עם השם שהוקלד.
// 4. דאגו לנקות את שדה הקלט לאחר השליחה.
function AddStudent({ onAdd }) {
  // TODO: הגדירו את ה-State כאן

  const handleSubmit = (e) => {
    // TODO: מנעו רענון והפעילו את onAdd
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      {/* TODO: קשרו את ה-input ל-State */}
      <input 
        type="text" 
        placeholder="שם הסטודנט..."
      />
      <button type="submit">הוסף סטודנט</button>
    </form>
  );
}

function App() {
  const [students, setStudents] = useState(["יוסי", "דנה"]);

  const addStudent = (name) => {
    // משימה 3: עדכנו את רשימת הסטודנטים בצורה תקינה (ללא מוטציה!)
    // TODO: עדכנו את ה-State של students
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>מעבדה 3: State ואינטראקטיביות</h1>
      
      <Counter />

      <div className="box">
        <h2>משימה 2 ו-3: ניהול כיתה</h2>
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
