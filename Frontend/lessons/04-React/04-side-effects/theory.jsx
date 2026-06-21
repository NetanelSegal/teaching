/**
 * Theory: Side Effects (useEffect)
 * 
 * קובץ זה מדגים קריאות ל-API, שימוש במערך תלויות ופונקציות ניקוי (Cleanup).
 */

import React, { useState, useEffect } from 'react';

// 1. קריאת API פשוטה בטעינה (Mount)
export function SimpleFetchComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // מריצים פעם אחת בגלל מערך התלויות הריק []
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []); 

  if (loading) return <p>טוען נתונים...</p>;

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <h3>משימה ראשונה מהשרת:</h3>
      <p><strong>כותרת:</strong> {data?.title}</p>
      <p><strong>סטטוס:</strong> {data?.completed ? 'בוצע ✅' : 'לא בוצע ❌'}</p>
    </div>
  );
}

// 2. סנכרון בעקבות שינוי במערך התלויות
export function CounterTitleSynchronizer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ה-Effect ירוץ בכל פעם ש-count משתנה
    document.title = `לחיצות: ${count}`;
    console.log(`כותרת הדף עודכנה ל-${count}`);
  }, [count]); // תלות ב-count

  return (
    <div style={{ border: '1px solid #3b82f6', padding: '16px', marginTop: '12px', borderRadius: '8px' }}>
      <h3>עדכון כותרת הדפדפן</h3>
      <button onClick={() => setCount(count + 1)}>לחץ להגדלת המונה ולשינוי הכותרת</button>
    </div>
  );
}

// 3. שימוש בפונקציית ניקוי (Cleanup Function) - שעון עצר
export function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // יצירת טיימר שמריץ פונקציה בכל שנייה
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // פונקציית ניקוי: תרוץ כאשר הקומפוננטה מוסרת מהמסך (Unmount)
    // מונע נזילת זיכרון (Memory Leak) וריצה של טיימרים ברקע סתם!
    return () => {
      clearInterval(intervalId);
      console.log("הטיימר נוקה בהצלחה!");
    };
  }, []); // רץ פעם אחת בטעינה

  return (
    <div style={{ border: '1px solid #ef4444', padding: '16px', marginTop: '12px', borderRadius: '8px' }}>
      <h3>שעון עצר פעיל:</h3>
      <p>זמן שחלף: {seconds} שניות</p>
    </div>
  );
}
