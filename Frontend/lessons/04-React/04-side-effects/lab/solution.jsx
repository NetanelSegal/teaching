/**
 * Lab: Side Effects and API Calls - Instructor Solution
 */

import React, { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => {
        if (!response.ok) {
          throw new Error('שגיאה בהבאת הנתונים מהשרת');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [trigger]); // ירוץ שוב בכל פעם ש-trigger משתנה

  if (isLoading) return <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>טוען פוסטים...</p>;
  if (error) return <p style={{ color: '#ef4444', fontWeight: 'bold' }}>שגיאה: {error}</p>;

  return (
    <div>
      <button onClick={() => setTrigger(prev => prev + 1)}>
        רענן פוסטים 🔄
      </button>
      
      <div style={{ marginTop: '20px' }}>
        {posts.map(post => (
          <div key={post.id} className="post-item" style={{ borderBottom: '1px solid #e5e7eb', padding: '12px 0' }}>
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
      <h1 style={{ textAlign: 'center', color: '#111827' }}>פתרון מעבדה 4: Side Effects וקריאות API</h1>
      
      <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: '#f9fafb' }}>
        <h2>רשימת פוסטים מהשרת</h2>
        <PostList />
      </div>
    </div>
  );
}

export default App;
