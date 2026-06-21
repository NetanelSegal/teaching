/**
 * Lab: React 19 Actions and useActionState - Instructor Solution
 */

import React, { useActionState } from 'react';

async function subscribeNewsletter(currentState, formData) {
  const email = formData.get("email");

  // סימולציית המתנה של שתי שניות
  await new Promise(resolve => setTimeout(resolve, 2000));

  if (!email.includes("@")) {
    return { success: false, message: "כתובת אימייל לא תקינה!", email };
  }

  return { success: true, message: `נרשמת בהצלחה עם הכתובת: ${email} 🎉`, email };
}

function App() {
  // משימה 1: שימוש ב-useActionState
  const [state, formAction, isPending] = useActionState(subscribeNewsletter, {
    success: false,
    message: "",
    email: ""
  });

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>פתרון מעבדה 8: עתיד ה-React (גרסה 19)</h1>
      
      <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: '#f9fafb' }}>
        <h2>הרשמה לניוזלטר של הקורס</h2>
        <p>טופס זה משתמש ב-Form Action וב-useActionState לניהול מצבי שליחה אסינכרוניים.</p>
        
        {/* משימה 2: קישור ה-formAction ל-action של הטופס */}
        <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
          <input 
            type="text" 
            name="email" 
            placeholder="הזן כתובת אימייל..." 
            defaultValue={state.email}
            required
            disabled={isPending} // משימה 3: נטרול קלט בזמן טעינה
            style={{ padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
          />
          <button type="submit" disabled={isPending} style={{ backgroundColor: isPending ? '#a7f3d0' : '#10b981' }}>
            {isPending ? "נרשם..." : "הירשם לניוזלטר"}
          </button>
        </form>

        {/* משימה 4: הצגת פידבק צבעוני */}
        {state.message && (
          <p style={{ marginTop: '12px', fontWeight: '600', color: state.success ? '#059669' : '#dc2626' }}>
            {state.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
