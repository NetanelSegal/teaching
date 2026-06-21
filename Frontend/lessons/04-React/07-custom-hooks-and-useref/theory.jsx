/**
 * Theory: Custom Hooks and useRef
 * 
 * קובץ זה מדגים שימוש ב-useRef לעבודה עם ה-DOM ושמירת משתנים יציבים,
 * וכן יצירת Custom Hook להאזנה לגודל מסך.
 */

import React, { useRef, useEffect, useState } from 'react';

// 1. שימוש ב-useRef לצורך פוקוס ב-DOM
export function FocusInputComponent() {
  const inputRef = useRef(null); // יצירת ה-Ref כשהערך ההתחלתי הוא null

  const handleFocus = () => {
    // inputRef.current מצביע ישירות על אלמנט ה-input האמיתי ב-DOM
    inputRef.current.focus();
    inputRef.current.style.borderColor = '#3b82f6';
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <h3>פוקוס מונחה Ref</h3>
      {/* קישור ה-Ref לאלמנט ב-JSX */}
      <input ref={inputRef} type="text" placeholder="לחץ על הכפתור כדי לתת לי פוקוס..." style={{ padding: '8px', border: '1px solid #ccc' }} />
      <button onClick={handleFocus} style={{ marginRight: '8px' }}>תן פוקוס</button>
    </div>
  );
}

// 2. שימוש ב-useRef לשמירת ערך משתנה ללא רינדור מחדש (Timer ID)
export function TimerWithRef() {
  const [seconds, setSeconds] = useState(0);
  const timerIdRef = useRef(null); // נשתמש ב-Ref כדי לשמור את מזהה הטיימר

  const startTimer = () => {
    if (timerIdRef.current !== null) return; // מניעת הפעלה כפולה

    timerIdRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerIdRef.current === null) return;

    clearInterval(timerIdRef.current);
    timerIdRef.current = null; // איפוס ה-Ref
  };

  useEffect(() => {
    // ניקוי ב-Unmount
    return () => {
      if (timerIdRef.current) clearInterval(timerIdRef.current);
    };
  }, []);

  return (
    <div style={{ border: '1px solid #10b981', padding: '16px', marginTop: '12px', borderRadius: '8px' }}>
      <h3>שעון עצר נשלט (useRef)</h3>
      <p>שניות שחלפו: {seconds}</p>
      <button onClick={startTimer}>הפעל טיימר</button>
      <button onClick={stopTimer} style={{ backgroundColor: '#ef4444', marginRight: '8px' }}>עצור טיימר</button>
    </div>
  );
}

// 3. יצירת Custom Hook: useWindowSize
// מחלץ את הלוגיקה של האזנה לרוחב הדפדפן לטובת שימוש חוזר בקומפוננטות שונות.
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    // ניקוי מאזין האירועים
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// קומפוננטה שמשתמשת ב-Custom Hook שנוצר
export function DisplaySize() {
  const { width, height } = useWindowSize();

  return (
    <div style={{ border: '1px solid #3b82f6', padding: '16px', marginTop: '12px', borderRadius: '8px' }}>
      <h3>מעקב גודל מסך (Custom Hook)</h3>
      <p>רוחב: {width}px | גובה: {height}px</p>
      <p style={{ color: width < 600 ? 'red' : 'green' }}>
        {width < 600 ? 'תצוגת מובייל 📱' : 'תצוגת דסקטופ 💻'}
      </p>
    </div>
  );
}
