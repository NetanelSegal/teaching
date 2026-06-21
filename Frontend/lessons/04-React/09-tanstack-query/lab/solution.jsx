/**
 * Lab: Server State Management with TanStack Query - Instructor Solution
 */

import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

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

  // משימה 3: שימוש ב-useQuery
  const { data: todos, isLoading, isError, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 5000 // הנתונים טריים ל-5 שניות
  });

  // משימה 4: שימוש ב-useMutation עם invalidateQueries
  const mutation = useMutation({
    mutationFn: addTodoApi,
    onSuccess: (newTodo) => {
      // עדכון ה-UI על ידי ביטול תוקף הקאש וריענון
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      alert(`משימה נוצרה בהצלחה בשרת: "${newTodo.title}"`);
    },
    onError: (err) => {
      alert(`שגיאה: ${err.message}`);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle.trim()) {
      mutation.mutate(newTitle.trim());
      setNewTitle('');
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>פתרון מעבדה 9: ניהול שרת עם TanStack Query</h1>

      <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: '#f9fafb' }}>
        <h2>הוספת משימה חדשה</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input 
            type="text" 
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="רשום משימה..."
            disabled={mutation.isPending}
            required
            style={{ padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px', width: '250px' }}
          />
          <button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? 'יוצר...' : 'הוסף משימה'}
          </button>
        </form>
      </div>

      <div className="box" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', margin: '16px 0', backgroundColor: '#f9fafb' }}>
        <h2>רשימת משימות</h2>
        {isLoading && <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>טוען משימות מהשרת...</p>}
        {isError && <p style={{ color: '#ef4444', fontWeight: 'bold' }}>שגיאה: {error?.message}</p>}
        
        <div style={{ marginTop: '12px' }}>
          {todos?.map(todo => (
            <div key={todo.id} className="todo-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
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
