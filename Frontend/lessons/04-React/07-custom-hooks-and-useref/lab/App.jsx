import { useState, useEffect, useRef } from 'react';

/**
 * Lab: Custom Hooks and useRef
 * 
 * במעבדה זו תתנסו בגישה ישירה ל-DOM בעזרת useRef,
 * ותכתבו Custom Hook שעוקב אחר מיקום העכבר על המסך.
 */

// משימה 1: פוקוס אוטומטי בעזרת useRef
// 1. הגדירו Ref בקומפוננטה AutoFocusInput וקשרו אותו ל-input.
// 2. השתמשו ב-useEffect עם מערך תלויות ריק כדי לתת פוקוס אוטומטי ל-input ברגע שהקומפוננטה עולה.
// 3. הוסיפו כפתור "תן פוקוס" שיאפשר לתת פוקוס ידני בלחיצה.
function AutoFocusInput() {
  // TODO: הגדירו את ה-Ref
  
  // TODO: הגדירו את ה-useEffect

  return (
    <div className="box">
      <h2>משימה 1: גישה ל-DOM באמצעות useRef</h2>
      {/* TODO: קשרו את ה-Ref ל-input */}
      <input type="text" placeholder="אני אמור לקבל פוקוס..." />
      <br />
      {/* TODO: הוסיפו אירוע onClick שמפעיל פוקוס */}
      <button>תן פוקוס 🎯</button>
    </div>
  );
}

// משימה 2: יצירת Custom Hook למיקום העכבר
// 1. השלימו את הפונקציה useMousePosition.
// 2. הגדירו בה State עבור המיקום ({ x: 0, y: 0 }).
// 3. השתמשו ב-useEffect כדי לרשום מאזין לאירוע 'mousemove' של ה-window.
// 4. החזירו פונקציית ניקוי שמסירה את מאזין האירועים (Unmount).
// 5. החזירו את ה-State מתוך ה-Hook.
function useMousePosition() {
  // TODO: ממשו את המצב והאזנה לאירועים כאן

  return { x: 0, y: 0 }; // החזרת ערך זמני
}

function MouseTracker() {
  const { x, y } = useMousePosition();

  return (
    <div className="box">
      <h2>משימה 2: מעקב מיקום עכבר (Custom Hook)</h2>
      <p style={{ fontSize: '18px' }}>
        מיקום העכבר הנוכחי: <strong>X: {x}, Y: {y}</strong>
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>מעבדה 7: Custom Hooks ו-useRef</h1>
      
      <AutoFocusInput />
      
      <MouseTracker />
    </div>
  );
}

export default App;
