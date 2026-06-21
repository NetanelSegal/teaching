/**
 * Lesson 0 Lab: Setup & Run React - Instructor Solution
 */

import React from 'react';

// Task 2: Create a simple Greeting card component.
function GreetingCard() {
  return (
    <div style={{ padding: '15px', backgroundColor: '#dbeafe', borderRadius: '6px', border: '1px solid #bfdbfe' }}>
      <h3 style={{ margin: '0 0 5px 0', color: '#1e40af' }}>React is awesome!</h3>
      <p style={{ margin: 0, color: '#1e3a8a', fontSize: '14px' }}>
        It uses a declarative model and components to make web development modular, clean, and extremely fast.
      </p>
    </div>
  );
}

function App() {
  const handleClick = () => {
    // Task 3: Trigger an alert to the user when clicked.
    alert('Congratulations! You successfully configured and interactive React application!');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      {/* Task 1: Update the heading */}
      <h1 style={{ color: '#2563eb', textAlign: 'center' }}>
        Welcome to ORT Software Engineering React Course!
      </h1>
      
      <p style={{ textAlign: 'center', color: '#4b5563' }}>
        If you see this page, your React + Vite installation is running successfully!
      </p>

      <hr style={{ border: '0', borderTop: '1px solid #e5e7eb', margin: '20px 0' }} />

      {/* Render Task 2 components here */}
      <div style={{ margin: '20px 0' }}>
        <GreetingCard />
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button 
          onClick={handleClick}
          style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: '#ffffff', border: '0', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default App;
