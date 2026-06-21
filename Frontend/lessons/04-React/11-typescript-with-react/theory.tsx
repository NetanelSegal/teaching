/**
 * Theory: React with TypeScript
 * 
 * קובץ זה מדגים שימוש בטיפוסים וממשקים (Interfaces) עבור Props, State,
 * אירועים (Events) ורפרנסים (useRef).
 */

import React, { useState, useRef, useEffect } from 'react';

// 1. הגדרת ממשק (Interface) עבור ה-Props של הקומפוננטה
interface UserProfileProps {
  username: string;
  email: string;
  age?: number; // Prop אופציונלי (מצוין באמצעות סימן שאלה)
}

// שימוש בממשק שנוצר
export function UserProfile({ username, email, age }: UserProfileProps) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <h3>פרופיל משתמש: {username}</h3>
      <p>אימייל: {email}</p>
      {age && <p>גיל: {age}</p>}
    </div>
  );
}

// 2. הגדרת ממשק עבור State מורכב ושימוש ב-Generics
interface TodoItem {
  id: string;
  taskName: string;
  isCompleted: boolean;
}

export function TypedTodoList() {
  // הגדרת State המכיל מערך של אובייקטים מסוג TodoItem
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');

  // 3. הגדרת טיפוס לאירוע שינוי קלט (input change event)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  // 4. הגדרת טיפוס לאירוע שליחת טופס (form submit event)
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!taskInput.trim()) return;

    const newTodo: TodoItem = {
      id: Math.random().toString(),
      taskName: taskInput.trim(),
      isCompleted: false
    };

    setTodos([...todos, newTodo]);
    setTaskInput('');
  };

  return (
    <div style={{ border: '1px solid #3b82f6', padding: '16px', marginTop: '12px', borderRadius: '8px' }}>
      <h3>רשימת משימות טיפוסית (Typed)</h3>
      
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          value={taskInput} 
          onChange={handleInputChange} 
          placeholder="רשום משימה..."
        />
        <button type="submit">הוסף</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.taskName}</li>
        ))}
      </ul>
    </div>
  );
}

// 5. הגדרת טיפוס עבור useRef המצביע על אלמנט DOM
export function TypedRefComponent() {
  // הגדרת Ref שמצביע על HTMLInputElement
  const inputElRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // TypeScript מזהה ש-inputElRef.current עשוי להיות null, ולכן מחייב שימוש בסימן שאלה ?.
    inputElRef.current?.focus();
  }, []);

  return (
    <div style={{ border: '1px solid #10b981', padding: '16px', marginTop: '12px', borderRadius: '8px' }}>
      <input ref={inputElRef} type="text" placeholder="קיבלתי פוקוס אוטומטי!" />
    </div>
  );
}
