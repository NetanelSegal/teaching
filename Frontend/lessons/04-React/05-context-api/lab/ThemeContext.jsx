import { createContext, useState } from 'react';

// משימה 1: צרו וייצאו את ThemeContext באמצעות createContext()
// TODO: צרו את ה-Context

// משימה 2: השלימו את קומפוננטת ThemeProvider
// 1. הגדירו State עבור ערכת הנושא (theme) - ערך התחלתי: 'light'.
// 2. צרו פונקציה toggleTheme שמחליפה בין 'light' ל- 'dark'.
// 3. החזירו את ה-Provider של ה-ThemeContext עם ה-value המתאים (theme ו-toggleTheme).
// 4. ודאו שהקומפוננטה מרנדרת את children בתוכה.
export function ThemeProvider({ children }) {
  // TODO: ממשו את ה-State והפונקציה כאן

  return (
    // TODO: החזירו את ה-Provider
    <>{children}</>
  );
}
