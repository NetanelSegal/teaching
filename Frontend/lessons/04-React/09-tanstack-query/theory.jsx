/**
 * Theory: Server State Management with TanStack Query (React Query)
 * 
 * קובץ זה מדגים שימוש ב-useQuery לקריאת נתונים וב-useMutation לשינוי נתונים ועדכון הקאש.
 */

import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// פונקציות עזר לקריאות שרת (API Helpers)
const fetchProducts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

const addProductApi = async (newProduct) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProduct),
  });
  if (!res.ok) throw new Error('Failed to create product');
  return res.json();
};

// 1. שימוש ב-useQuery להבאת נתונים (GET)
export function ProductsListQuery() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['products'], // מפתח הקאש הייחודי
    queryFn: fetchProducts,  // פונקציית ה-fetch האסינכרונית
    staleTime: 10000,        // הנתונים ייחשבו מעודכנים (Fresh) למשך 10 שניות, ללא קריאות נוספות
  });

  if (isLoading) return <p>טוען מוצרים באמצעות React Query...</p>;
  if (isError) return <p style={{ color: 'red' }}>שגיאה: {error.message}</p>;

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <h3>רשימת מוצרים (useQuery)</h3>
      <button onClick={() => refetch()}>רענן ידנית 🔄</button>
      <ul>
        {data?.map(prod => (
          <li key={prod.id}>{prod.title}</li>
        ))}
      </ul>
    </div>
  );
}

// 2. שימוש ב-useMutation לשינוי נתונים (POST) וסנכרון הקאש
export function AddProductMutation() {
  const queryClient = useQueryClient(); // קבלת המופע הגלובלי של הלקוח

  const mutation = useMutation({
    mutationFn: addProductApi,
    onSuccess: (data) => {
      alert(`המוצר נוצר בהצלחה בשרת! מזהה: ${data.id}`);
      
      // ביטול תוקף הקאש של שאילתת 'products'
      // זה יגרום ל-React Query לרענן אוטומטית את הרשימה ברקע!
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (error) => {
      alert(`שגיאה ביצירת מוצר: ${error.message}`);
    }
  });

  const handleAddProduct = () => {
    mutation.mutate({ title: "מוצר מדהים חדש", body: "תיאור מוצר מדהים" });
  };

  return (
    <div style={{ border: '1px solid #10b981', padding: '16px', marginTop: '12px', borderRadius: '8px' }}>
      <h3>הוספת מוצר (useMutation)</h3>
      <button 
        onClick={handleAddProduct} 
        disabled={mutation.isPending}
        style={{ backgroundColor: '#10b981', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
      >
        {mutation.isPending ? "יוצר מוצר..." : "צור מוצר חדש"}
      </button>
    </div>
  );
}
