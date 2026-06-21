/**
 * Lab: Props and Data Flow
 * 
 * במעבדה זו תלמדו להעביר נתונים בין קומפוננטות באמצעות Props ולרנדר רשימות בצורה דינמית.
 */

// משימה 1: עדכנו את קומפוננטת ProfileCard כך שתקבל Props: name, role, bio
// השתמשו ב-Destructuring כדי לחלץ את המשתנים.
function ProfileCard() {
  return (
    <div className="card">
      {/* TODO: הציגו את ה-Props שקיבלתם */}
      <h3>שם סטודנט (זמני)</h3>
      <p>תפקיד: זמני</p>
      <p>תיאור: זמני</p>
    </div>
  );
}

function App() {
  // רשימת הסטודנטים
  const students = [
    { id: 1, name: "דני", role: "Frontend Dev", bio: "אוהב לעצב ב-CSS ומעריץ של React" },
    { id: 2, name: "שרה", role: "Backend Dev", bio: "בונה שרתים מהירים ב-Node.js ו-Express" },
    { id: 3, name: "איתי", role: "Fullstack Developer", bio: "אוהב לפתור בעיות מורכבות מקצה לקצה" }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>מעבדה 2: רשימת סטודנטים דינמית</h1>
      <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '30px' }}>
        רנדרו את רשימת הסטודנטים באמצעות map והעבירו אליהם Props.
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '20px 0' }} />

      <div className="container">
        {/* משימה 2: השתמשו ב-students.map כדי לרנדר קומפוננטת ProfileCard לכל סטודנט במערך. */}
        {/* זכרו להעביר את ה-Props המתאימים וכן את ה-key הייחודי! */}
        {/* TODO: הקוד שלכם כאן */}
        
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;
