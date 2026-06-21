import { useContext, useEffect } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';

/**
 * Lab: Context API
 * 
 * במעבדה זו תממשו ניהול מצב גלובלי עבור בחירת ערכת נושא (Dark/Light Mode)
 * בעזרת Context API.
 */

function ThemeToggleButton() {
  // משימה 4: השתמשו ב-useContext כדי לצרוך את ThemeContext
  // וחלצו את ה-theme ואת ה-toggleTheme.
  // TODO: השתמשו ב-useContext כאן

  return (
    // TODO: הוסיפו אירוע onClick שיפעיל את toggleTheme
    // TODO: שנו את הטקסט בכפתור בהתאם לערכת הנושא הנוכחית
    <button>עבור למצב כהה</button>
  );
}

function MainContent() {
  // משימה 5: השתמשו ב-useContext כדי לצרוך את ThemeContext.
  // השתמשו ב-useEffect כדי להוסיף או להסיר את הקלאס 'dark-theme' מ-document.documentElement
  // בכל פעם שערכת הנושא משתנה.
  // TODO: ממשו כאן
  
  return (
    <div className="box">
      <h2>מצב תצוגה נוכחי: בהיר</h2>
      <p>כאן מופיע תוכן האפליקציה המושפע מערכת הנושא הגלובלית.</p>
      <ThemeToggleButton />
    </div>
  );
}

function App() {
  return (
    // משימה 3: עטפו את קומפוננטת MainContent ב-ThemeProvider
    // TODO: עטפו את הקומפוננטה
    <MainContent />
  );
}

export default App;
