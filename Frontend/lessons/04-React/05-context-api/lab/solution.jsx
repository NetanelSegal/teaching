/**
 * Lab: Context API - Instructor Solution
 */

import React, { createContext, useState, useContext, useEffect } from 'react';

// משימה 1: יצירת ה-Context
export const ThemeContext = createContext();

// משימה 2: מימוש ה-ThemeProvider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// משימה 4: כפתור שינוי ערכת נושא
function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ backgroundColor: theme === 'light' ? '#1f2937' : '#3b82f6' }}>
      עבור למצב {theme === 'light' ? 'כהה 🌙' : 'בהיר ☀️'}
    </button>
  );
}

function MainContent() {
  const { theme } = useContext(ThemeContext);

  // משימה 5: סנכרון ערכת הנושא מול ה-DOM
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.className = 'dark-theme';
    } else {
      document.documentElement.className = '';
    }
  }, [theme]);

  return (
    <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: theme === 'light' ? '#ffffff' : '#374151', color: theme === 'light' ? '#1f2937' : '#f9fafb' }}>
      <h2>מצב תצוגה נוכחי: {theme === 'light' ? 'בהיר ☀️' : 'כהה 🌙'}</h2>
      <p>כאן מופיע תוכן האפליקציה המושפע מערכת הנושא הגלובלית.</p>
      <ThemeToggleButton />
    </div>
  );
}

function App() {
  return (
    // משימה 3: עטיפת הכל ב-ThemeProvider
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
