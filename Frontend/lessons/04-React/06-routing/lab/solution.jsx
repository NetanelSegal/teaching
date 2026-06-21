/**
 * Lab: Navigation and Routing - Instructor Solution
 */

import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Link, useParams, useNavigate } from 'react-router-dom';

// 1. קומפוננטת הפריסה הראשית (Layout)
function Layout() {
  return (
    <div>
      <header>
        <nav>
          {/* משימה 3: שימוש ב-Link למניעת רענון */}
          <Link to="/">בית</Link>
          <Link to="/about">אודות</Link>
          <Link to="/contact">צור קשר</Link>
          <Link to="/product/123">מוצר לדוגמה (123)</Link>
        </nav>
      </header>
      
      <main className="box">
        {/* משימה 1: מיקום ה-Outlet */}
        <Outlet />
      </main>
    </div>
  );
}

// 2. דפי האפליקציה (Pages)
function Home() {
  return <h2>דף הבית של האפליקציה 🏠</h2>;
}

function About() {
  // משימה 5: ניווט תכנותי בעזרת useNavigate
  const navigate = useNavigate();

  return (
    <div>
      <h2>אודות האתר 📖</h2>
      <p>כאן תוכלו לקרוא מידע עלינו.</p>
      <button onClick={() => navigate('/')}>חזור לדף הבית</button>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>צור קשר 📞</h2>
      <p>שלחו לנו הודעה ונחזור אליכם בהקדם!</p>
    </div>
  );
}

function ProductDetail() {
  // משימה 2: שליפת פרמטר דינמי באמצעות useParams
  const { id } = useParams();

  return (
    <div>
      <h2>פרטי מוצר מספר: {id} 🛍️</h2>
      <p>דף זה מציג נתונים לפי הפרמטר הדינמי שהתקבל בכתובת.</p>
    </div>
  );
}

// משימה 4: דף 404
function NotFound() {
  return (
    <div>
      <h2>דף לא נמצא - 404 🚫</h2>
      <p>הכתובת שחיפשתם אינה קיימת באתר.</p>
      <Link to="/">חזרה לדף הבית</Link>
    </div>
  );
}

// משימה 1: הגדרת הנתב (Router Config)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product/:id", // משימה 2: נתיב דינמי
        element: <ProductDetail />,
      },
      {
        path: "*", // משימה 4: wildcard ל-404
        element: <NotFound />,
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>פתרון מעבדה 6: ניווט וניתוב</h1>
      {/* משימה 1: הרצת הנתב בעזרת RouterProvider */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
