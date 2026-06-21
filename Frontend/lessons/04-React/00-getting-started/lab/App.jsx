/**
 * Lesson 0 Lab: Setup & Run React
 * 
 * In this lab, you will run your first React application and make basic changes.
 * Follow the Tasks specified in the code.
 */

import React from 'react';

// Task 2: Create a simple Greeting card component.
// It should return a div containing an h3 with "React is awesome!" and a paragraph explaining why.
// TODO: Implement the GreetingCard component here

function App() {
  const handleClick = () => {
    // Task 3: Trigger an alert to the user when clicked.
    // TODO: Write an alert message inside this handler
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      {/* Task 1: Update the heading to say "Welcome to ORT Software Engineering React Course!" */}
      <h1 style={{ color: '#2563eb', textAlign: 'center' }}>Hello World!</h1>
      
      <p style={{ textAlign: 'center', color: '#4b5563' }}>
        If you see this page, your React + Vite installation is running successfully!
      </p>

      <hr style={{ border: '0', borderTop: '1px solid #e5e7eb', margin: '20px 0' }} />

      {/* Render Task 2 components here */}
      <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#eff6ff', borderRadius: '6px' }}>
        {/* TODO: Render your GreetingCard component here */}
        <p style={{ fontStyle: 'italic', color: '#9ca3af', textAlign: 'center' }}>
          [Greeting Card component will be rendered here]
        </p>
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
