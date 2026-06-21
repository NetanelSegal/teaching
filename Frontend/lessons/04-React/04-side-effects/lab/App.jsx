import { useState, useEffect } from 'react';

/**
 * Lab: Side Effects and API Calls
 * 
 * במעבדה זו תביאו רשימת פוסטים מ-API חיצוני (JSONPlaceholder)
 * ותנהלו את מצבי הטעינה, השגיאה והרענון שלהם.
 */

function PostList() {
  const [posts, setPosts] = useState([]);
  // TODO: הגדירו State עבור מצב טעינה (אותחל ב-true או false)
  // TODO: הגדירו State עבור מצב שגיאה (אותחל ב-null או string)
  // TODO: הגדירו State עבור רענון (למשל trigger) כדי לאפשר הרצה חוזרת של ה-Effect

  useEffect(() => {
    // משימה 1: בצעו fetch לכתובת הבאה: https://jsonplaceholder.typicode.com/posts?_limit=5
    // משימה 2: עדכנו את ה-State של הנתונים, הטעינה והשגיאה בהתאם לסטטוס הבקשה.
    // משימה 4: ודאו שה-Effect מאזין ל-trigger של הרענון במערך התלויות שלו.
    // TODO: כיתבו את קריאת ה-fetch כאן
  }, []); // TODO: הוסיפו תלויות למערך

  // TODO: הציגו הודעת טעינה במידה ו-isLoading הוא true
  // TODO: הציגו הודעת שגיאה במידה ויש שגיאה

  return (
    <div>
      {/* משימה 4: הוסיפו אירוע onClick שישנה את ה-trigger ויגרום להרצה מחדש של ה-Effect */}
      <button>רענן פוסטים 🔄</button>
      
      <div style={{ marginTop: '20px' }}>
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <h4 style={{ margin: '0 0 4px 0', color: '#1e3a8a' }}>{post.title}</h4>
            <p style={{ margin: 0, color: '#4b5563', fontSize: '14px' }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>מעבדה 4: Side Effects וקריאות API</h1>
      
      <div className="box">
        <h2>רשימת פוסטים מהשרת</h2>
        <PostList />
      </div>
    </div>
  );
}

export default App;
