/**
 * Theory: Intro to React and JSX
 * 
 * קובץ זה מדגים את המושגים הבסיסיים של קומפוננטות ו-JSX.
 * ניתן לקרוא קובץ זה כקוד מקור או לייבא את הקומפוננטות לפרויקט פעיל.
 */

import React from 'react';

// 1. קומפוננטה פונקציונלית פשוטה (Functional Component)
// - שם הקומפוננטה חייב להתחיל באות גדולה (PascalCase).
// - הקומפוננטה מחזירה אלמנט JSX יחיד.
export function SimpleComponent() {
  return <h1>שלום מ-React!</h1>;
}

// 2. שימוש ב-JSX והטמעת ביטויים (Embedding Expressions)
// - בתוך סוגריים מסולסלים {} נוכל לכתוב כל ביטוי JavaScript תקין (משתנים, קריאות לפונקציות, ביטויים מתמטיים).
export function DynamicJSX() {
  const userName = "אלעד";
  const birthYear = 1995;
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p>ברוך הבא, {userName}!</p>
      <p>הגיל שלך הוא: {currentYear - birthYear}</p>
    </div>
  );
}

// 3. עיצוב ב-React (Styles and Classes)
// - עיצוב inline נעשה באמצעות אובייקט JS (לכן משתמשים בסוגריים כפולות {{}}).
// - שמות תכונות ה-CSS נכתבים ב-camelCase (למשל: backgroundColor במקום background-color).
// - הוספת קלאס CSS נעשית באמצעות המאפיין className (ולא class, השמור ב-JS).
export function StyledComponent() {
  const boxStyle = {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center'
  };

  return (
    <div style={boxStyle} className="card-container">
      <h3>כרטיס מעוצב</h3>
      <p style={{ fontSize: '14px', marginTop: '8px' }}>
        מעוצב בעזרת Inline Style וקלאס CSS.
      </p>
    </div>
  );
}

// 4. שימוש ב-Fragments
// - JSX מחייב החזרת אלמנט שורש יחיד. 
// - במקום לעטוף ב-div מיותר שעלול להרוס את ה-Layout, משתמשים ב-Fragment (<>...</>).
export function FragmentExample() {
  return (
    <>
      <h2>כותרת ראשונה</h2>
      <h2>כותרת שנייה</h2>
      <p>שני האלמנטים למעלה עטופים ב-Fragment ולא ב-div.</p>
    </>
  );
}
