/**
 * Theory: The Future of React (React 19)
 * 
 * קובץ זה מציג את החידושים של React 19, כולל שימוש ב-useActionState,
 * מנגנון Actions לטפסים וה-use API החדש.
 */

"use client"; // ציון קומפוננטת לקוח (רלוונטי בסביבות שרת כמו Next.js)

import React, { useActionState, use } from 'react';

// סימולציה של פונקציית שרת אסינכרונית (למשל שמירת פרופיל)
async function updateProfileApi(currentState, formData) {
  const name = formData.get("username");
  
  // השהייה מדומה של שנייה וחצי
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  if (name.toLowerCase() === "admin") {
    return { success: false, error: "שם המשתמש admin שמור למערכת בלבד!" };
  }
  
  return { success: true, username: name, error: null };
}

// 1. שימוש ב-useActionState לניהול טופס אסינכרוני ב-React 19
// ה-Hook מנהל עבורנו את ה-state של התשובה, ה-action להפעלה, ומצב ה-Pending.
export function ModernProfileForm() {
  const [state, formAction, isPending] = useActionState(updateProfileApi, {
    success: false,
    username: "",
    error: null
  });

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <h3>עדכון פרופיל (React 19 Actions)</h3>
      
      <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
        <input 
          type="text" 
          name="username" 
          placeholder="הקלד שם משתמש חדש..." 
          required 
          disabled={isPending}
          style={{ padding: '8px' }}
        />
        
        {/* כפתור השליחה מתעדכן בהתאם ל-isPending המנוהל אוטומטית */}
        <button type="submit" disabled={isPending}>
          {isPending ? "שומר שינויים..." : "עדכן פרופיל"}
        </button>
      </form>

      {/* תצוגת פידבק מהשרת */}
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state.success && <p style={{ color: 'green' }}>הפרופיל עודכן בהצלחה! שם חדש: {state.username}</p>}
    </div>
  );
}

// 2. סימולציה של ה-use API לקריאת Promises
// ה-use API מאפשר לנו לקרוא הבטחות ישירות ברינדור ללא useEffect.
const resolvedDataPromise = Promise.resolve("נתונים שהגיעו ישירות מתוך Promise!");

export function UsePromiseComponent() {
  // קריאת ערך ה-Promise ישירות ברינדור!
  const message = use(resolvedDataPromise);

  return (
    <div style={{ border: '1px solid #3b82f6', padding: '16px', marginTop: '12px', borderRadius: '8px' }}>
      <h3>קריאת הבטחה באמצעות `use`</h3>
      <p>{message}</p>
    </div>
  );
}
