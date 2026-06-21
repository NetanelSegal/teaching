/**
 * Lab: React with TypeScript - Instructor Solution
 */

import React, { useState } from 'react';

// משימה 1: הגדרת ממשק ה-Props
interface UserCardProps {
  name: string;
  email: string;
  isAdmin?: boolean;
}

// קשירת הממשק לקומפוננטה
function UserCard({ name, email, isAdmin = false }: UserCardProps) {
  return (
    <div className="user-card" style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '12px', margin: '8px 0', backgroundColor: '#f9fafb' }}>
      <h4>{name} {isAdmin && <span style={{ color: 'green', fontSize: '12px' }}>(מנהל/ת)</span>}</h4>
      <p>אימייל: {email}</p>
    </div>
  );
}

// משימה 2: הגדרת interface למבנה הנתונים User
interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

function App() {
  // משימה 3: שימוש ב-Generic useState
  const [users, setUsers] = useState<User[]>([]);
  
  const [nameInput, setNameInput] = useState<string>('');
  const [emailInput, setEmailInput] = useState<string>('');
  const [isAdminInput, setIsAdminInput] = useState<boolean>(false);

  // משימה 4: הגדרת טיפוס לאירוע Form Event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameInput || !emailInput) return;

    // הגדרת משתמש חדש לפי הטיפוס User
    const newUser: User = {
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
      <h1 style={{ textAlign: 'center', color: '#111827' }}>פתרון מעבדה 11: שילוב TypeScript ב-React</h1>

      <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: '#ffffff' }}>
        <h2>הוספת משתמש חדש</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
          <input 
            type="text" 
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="שם מלא..."
            required
            style={{ padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
          />
          <input 
            type="email" 
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="כתובת אימייל..."
            required
            style={{ marginTop: '8px', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
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

      <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: '#ffffff' }}>
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
