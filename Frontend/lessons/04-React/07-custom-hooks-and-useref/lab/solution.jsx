/**
 * Lab: Custom Hooks and useRef - Instructor Solution
 */

import React, { useState, useEffect, useRef } from 'react';

// משימה 1: פוקוס אוטומטי
function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // פוקוס אוטומטי בטעינה
    inputRef.current.focus();
  }, []);

  const handleFocusClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: '#f9fafb' }}>
      <h2>משימה 1: גישה ל-DOM באמצעות useRef</h2>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="אני אמור לקבל פוקוס..." 
        style={{ padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px', width: '250px' }}
      />
      <br />
      <button onClick={handleFocusClick}>תן פוקוס 🎯</button>
    </div>
  );
}

// משימה 2: Custom Hook
function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // פונקציית ניקוי
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
}

function MouseTracker() {
  const { x, y } = useMousePosition();

  return (
    <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: '#f9fafb' }}>
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
      <h1 style={{ textAlign: 'center', color: '#111827' }}>פתרון מעבדה 7: Custom Hooks ו-useRef</h1>
      
      <AutoFocusInput />
      
      <MouseTracker />
    </div>
  );
}

export default App;
