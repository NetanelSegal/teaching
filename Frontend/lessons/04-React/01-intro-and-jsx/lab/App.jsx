/**
 * Lab: React Intro and JSX Exercises
 * 
 * במעבדה זו תבנו כרטיס פרופיל אישי (Profile Card) באמצעות React ו-JSX.
 * עקבו אחר המשימות המופיעות בהמשך וממשו אותן.
 */

// משימה 1: צרו קומפוננטה בשם ProfileCard (באותו קובץ או בקובץ נפרד וייבאו אותה)
// הקומפוננטה צריכה להציג:
// 1. שם מלא (בתוך תגית h2)
// 2. תיאור קצר/ביוגרפיה (בתוך תגית p)
// 3. רשימת כישורים (Skills) כגון HTML, CSS, JavaScript, React.
// TODO: ממשו את הקומפוננטה כאן או בקובץ נפרד.

function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>מעבדה 1: כרטיס פרופיל אישי</h1>
      <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '30px' }}>
        ממשו את הקומפוננטה ProfileCard והציגו אותה מתחת לקו.
      </p>
      
      <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '20px 0' }} />

      {/* משימה 2: הציגו כאן את קומפוננטת ProfileCard לאחר שתממשו אותה */}
      {/* TODO: הציגו את הקומפוננטה */}
      <p style={{ textAlign: 'center', color: '#9ca3af', fontStyle: 'italic' }}>
        [כרטיס הפרופיל שלכם יוצג כאן]
      </p>
    </div>
  );
}

export default App;
