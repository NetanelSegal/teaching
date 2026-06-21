/**
 * Lab: Props and Data Flow - Instructor Solution
 */

import React from 'react';

// משימה 1: קומפוננטת ProfileCard המקבלת Props
function ProfileCard({ name, role, bio }) {
  return (
    <div className="card" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px', margin: '12px 0', backgroundColor: '#f9fafb' }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#1e3a8a' }}>{name}</h3>
      <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#374151' }}>
        <strong>תפקיד:</strong> {role}
      </p>
      <p style={{ margin: 0, fontSize: '14px', color: '#6b7280', lineHeight: '1.4' }}>{bio}</p>
    </div>
  );
}

function App() {
  const students = [
    { id: 1, name: "דני", role: "Frontend Dev", bio: "אוהב לעצב ב-CSS ומעריץ של React" },
    { id: 2, name: "שרה", role: "Backend Dev", bio: "בונה שרתים מהירים ב-Node.js ו-Express" },
    { id: 3, name: "איתי", role: "Fullstack Developer", bio: "אוהב לפתור בעיות מורכבות מקצה לקצה" }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>פתרון מעבדה 2: רשימת סטודנטים דינמית</h1>
      <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '30px' }}>
        להלן פתרון המעבדה המלא.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '20px 0' }} />

      <div className="container">
        {/* משימה 2: רינדור רשימה באמצעות map עם key מתאים */}
        {students.map((student) => (
          <ProfileCard 
            key={student.id} 
            name={student.name} 
            role={student.role} 
            bio={student.bio} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
