/**
 * Theory: Context API and Global State
 * 
 * קובץ זה מדגים יצירת Context, מימוש Provider מותאם אישית (Custom Provider),
 * וצריכת המידע בקומפוננטות קצה.
 */

import React, { createContext, useState, useContext } from 'react';

// 1. יצירת ה-Context
// יוצרים אותו מחוץ לקומפוננטות ומייצאים אותו לשימוש בקבצים אחרים.
export const AuthContext = createContext(null);

// 2. יצירת Custom Provider
// הדרך המקצועית: עטיפת ה-Provider בקומפוננטה שמנהלת את ה-State המקומי שלו בעצמה.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ name: username, role: "Admin" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    // מעבירים אובייקט שמכיל גם את הנתונים (user) וגם את פונקציות השינוי (login, logout)
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. יצירת Custom Hook ייעודי לצריכת ה-Context (אופציונלי אך מומלץ מאוד!)
// חוסך מהמפתח לייבא גם את useContext וגם את AuthContext בכל קומפוננטה.
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// 4. שימוש ב-Context בקומפוננטת קצה
export function UserStatus() {
  // במקום useContext(AuthContext), אנו משתמשים ב-Hook הנוח שיצרנו
  const { user, login, logout } = useAuth();

  if (user) {
    return (
      <div style={{ border: '1px solid green', padding: '12px', borderRadius: '6px' }}>
        <p>שלום, {user.name} ({user.role})</p>
        <button onClick={logout}>התנתק</button>
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid red', padding: '12px', borderRadius: '6px' }}>
      <p>אינך מחובר למערכת.</p>
      <button onClick={() => login("ישראל")}>התחבר כאורח</button>
    </div>
  );
}
