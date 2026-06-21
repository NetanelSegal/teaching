import { useState } from 'react';

/**
 * Lab: React with TypeScript
 * 
 * במעבדה זו תמירו קומפוננטת React רגילה לעבודה עם TypeScript.
 * תגדירו ממשקים (Interfaces) ל-Props, תגדירו טיפוסים ל-State ולטפסים.
 */

// משימה 1: הגדירו interface בשם UserCardProps עבור קומפוננטת UserCard
// ה-Props הנדרשים: name (מחרוזת), email (מחרוזת), isAdmin (בוליאני אופציונלי).
// TODO: הגדירו את הממשק כאן

// משימה 1: קשרו את ה-interface ל-Props של הקומפוננטה
function UserCard({ name, email, isAdmin = false }) {
  return (
    <div className="user-card">
      <h4>{name} {isAdmin && <span style={{ color: 'green', fontSize: '12px' }}>(מנהל/ת)</span>}</h4>
      <p>אימייל: {email}</p>
    </div>
  );
}

// משימה 2: הגדירו interface בשם User המייצג משתמש במערכת
// שדות: id (מחרוזת), name (מחרוזת), email (מחרוזת), isAdmin (בוליאני).
// TODO: הגדירו את הממשק כאן

function App() {
  // משימה 3: הגדירו טיפוס מפורש (Generic) למערך המשתמשים ב-useState (מערך של User)
  // TODO: הגדירו טיפוס כאן
  const [users, setUsers] = useState([]);
  
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [isAdminInput, setIsAdminInput] = useState(false);

  // משימה 4: הגדירו טיפוס לאירוע e בפונקציה handleSubmit (אירוע שליחת טופס ב-React)
  // TODO: הגדירו טיפוס כאן
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameInput || !emailInput) return;

    // משימה 2: ודאו שהמשתמש החדש מוגדר לפי הטיפוס User
    const newUser = {
      id: Math.random().toString(),
      name: nameInput,
      email: emailInput,
      isAdmin: isAdminInput
    };

    setUsers([...users, newUser]);
    
    // איפוס שדות
    setNameInput('');
    setEmailInput('');
    setIsAdminInput(false);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>מעבדה 11: שילוב TypeScript ב-React</h1>

      <div className="box">
        <h2>הוספת משתמש חדש</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
          <input 
            type="text" 
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="שם מלא..."
            required
          />
          <input 
            type="email" 
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="כתובת אימייל..."
            required
            style={{ marginTop: '8px' }}
          />
          <div style={{ marginTop: '8px' }}>
            <label>
              <input 
                type="checkbox" 
                checked={isAdminInput}
                onChange={(e) => setIsAdminInput(e.target.checked)}
                style={{ width: 'auto', marginLeft: '6px' }}
              />
              הרשאות מנהל (Admin)
            </label>
          </div>
          <button type="submit">הוסף משתמש</button>
        </form>
      </div>

      <div className="box">
        <h2>משתמשים רשומים במערכת:</h2>
        {users.length === 0 ? <p>אין משתמשים רשומים.</p> : (
          <div>
            {users.map(u => (
              <UserCard 
                key={u.id}
                name={u.name}
                email={u.email}
                isAdmin={u.isAdmin}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
