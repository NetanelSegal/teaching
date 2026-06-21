import { useActionState } from 'react';

/**
 * Lab: React 19 Actions and useActionState
 * 
 * במעבדה זו תשתמשו במנגנון ה-Actions החדש של React 19
 * כדי לנהל שליחת טופס אסינכרונית בקלות ללא ניהול ידני של מצב טעינה (Loading).
 */

// פונקציית סימולציה לשליחת נתונים לשרת
async function subscribeNewsletter(currentState, formData) {
  const email = formData.get("email");

  // סימולציית המתנה של שתי שניות
  await new Promise(resolve => setTimeout(resolve, 2000));

  if (!email.includes("@")) {
    return { success: false, message: "כתובת אימייל לא תקינה!", email };
  }

  return { success: true, message: `נרשמת בהצלחה עם הכתובת: ${email}`, email };
}

function App() {
  // משימה 1: הגדירו את useActionState עם הפונקציה subscribeNewsletter
  // וערך התחלתי מתאים ({ success: false, message: "", email: "" })
  // TODO: השתמשו ב-useActionState
  const state = { success: false, message: "" };
  const formAction = () => {};
  const isPending = false;

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>מעבדה 8: עתיד ה-React (גרסה 19)</h1>
      
      <div className="box">
        <h2>הרשמה לניוזלטר של הקורס</h2>
        <p>טופס זה משתמש ב-Form Action וב-useActionState לניהול מצבי שליחה אסינכרוניים.</p>
        
        {/* משימה 2: קשרו את ה-formAction למאפיין ה-action של הטופס */}
        {/* משימה 3: נטרלו את הקלט והכפתור בזמן שהפעולה מתבצעת (השתמשו ב-isPending) */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
          <input 
            type="email" 
            name="email" 
            placeholder="הזן כתובת אימייל..." 
            required
          />
          <button type="submit">
            הירשם לניוזלטר
          </button>
        </form>

        {/* משימה 4: הציגו את הודעת הפידבק (state.message) בצבע המתאים (ירוק להצלחה, אדום לשגיאה) */}
        {/* TODO: הציגו פידבק מהשרת */}
      </div>
    </div>
  );
}

export default App;
