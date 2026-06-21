import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

/**
 * Lab: Server State Management with TanStack Query
 * 
 * במעבדה זו תחליפו את קריאות ה-fetch וה-useEffect המסורתיות ב-React Query.
 * תמשכו רשימת משימות ותבצעו מוטציה להוספת משימה חדשה.
 */

// פונקציות ה-API שלנו
const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  if (!res.ok) throw new Error('שגיאה במשיכת משימות');
  return res.json();
};

const addTodoApi = async (title) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed: false, userId: 1 })
  });
  if (!res.ok) throw new Error('שגיאה בשמירת משימה בשרת');
  return res.json();
};

function App() {
  const [newTitle, setNewTitle] = useState('');
  const queryClient = useQueryClient();

  // משימה 3: הגדירו את useQuery לקריאת רשימת המשימות
  // השתמשו ב-queryKey: ['todos'] וב-queryFn: fetchTodos.
  // TODO: השתמשו ב-useQuery
  const todos = [];
  const isLoading = false;
  const isError = false;
  const error = null;

  // משימה 4: הגדירו את useMutation ליצירת משימה חדשה
  // השתמשו ב-mutationFn: addTodoApi.
  // בתוך ה-onSuccess, בצעו invalidateQueries עבור ה-key ['todos'].
  // TODO: השתמשו ב-useMutation
  const mutation = {
    mutate: () => {},
    isPending: false
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle.trim()) {
      // TODO: הפעילו את המוטציה עם newTitle.trim()
      setNewTitle('');
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>מעבדה 9: ניהול שרת עם TanStack Query</h1>

      <div className="box">
        <h2>הוספת משימה חדשה</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input 
            type="text" 
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="רשום משימה..."
            disabled={mutation.isPending}
            required
          />
          <button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'יוצר...' : 'הוסף משימה'}
          </button>
        </form>
      </div>

      <div className="box">
        <h2>רשימת משימות</h2>
        {isLoading && <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>טוען משימות מהשרת...</p>}
        {isError && <p style={{ color: '#ef4444', fontWeight: 'bold' }}>שגיאה: {error?.message}</p>}
        
        <div style={{ marginTop: '12px' }}>
          {todos?.map(todo => (
            <div key={todo.id} className="todo-item">
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
              </span>
              <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '4px', backgroundColor: todo.completed ? '#def7ec' : '#fde8e8', color: todo.completed ? '#03543f' : '#9b1c1c' }}>
                {todo.completed ? 'בוצע' : 'פתוח'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
