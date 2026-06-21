/**
 * Lab: React Intro and JSX - Instructor Solution
 */

import React from 'react';

// קומפוננטת כרטיס פרופיל
function ProfileCard() {
  const name = "ישראל ישראלי";
  const bio = "מפתח Fullstack מתחיל שאוהב React וטכנולוגיות אינטרנט.";
  const skills = ["HTML5", "CSS3", "JavaScript", "React", "Node.js"];

  const cardStyle = {
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '24px',
    backgroundColor: '#f9fafb',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const skillBadgeStyle = {
    display: 'inline-block',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderRadius: '20px',
    padding: '6px 12px',
    margin: '4px',
    fontSize: '12px',
    fontWeight: '600',
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ color: '#1e3a8a', margin: '0 0 8px 0' }}>{name}</h2>
      <p style={{ color: '#4b5563', fontSize: '14px', margin: '0 0 16px 0', lineHeight: '1.5' }}>{bio}</p>
      
      <div style={{ marginTop: '12px' }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#374151' }}>כישורים:</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {skills.map((skill, index) => (
            <span key={index} style={skillBadgeStyle}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>פתרון מעבדה 1: כרטיס פרופיל אישי</h1>
      <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '30px' }}>
        להלן הפתרון המלא של כרטיס הפרופיל.
      </p>
      
      <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '20px 0' }} />

      <ProfileCard />
    </div>
  );
}

export default App;
