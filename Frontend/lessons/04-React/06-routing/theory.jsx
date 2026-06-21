/**
 * Theory: Navigation and Routing (React Router)
 * 
 * קובץ זה מדגים את הגדרת הנתב החדש (createBrowserRouter),
 * שימוש בפריסות (Layouts) באמצעות Outlet, ושימוש ב-Hooks של React Router.
 */

import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider, 
  Outlet, 
  Link, 
  useParams, 
  useNavigate 
} from 'react-router-dom';

// 1. קומפוננטת פריסה כללית (Root Layout)
// משלבת תפריט ניווט קבוע, ומציגה את תוכן הדף המשתנה בתוך <Outlet />.
function RootLayout() {
  return (
    <div>
      <header style={{ backgroundColor: '#1e3a8a', padding: '12px', color: 'white' }}>
        <nav style={{ display: 'flex', gap: '12px' }}>
          {/* שימוש ב-Link למניעת רענון דף */}
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>בית</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>אודות</Link>
          <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>מוצרים</Link>
        </nav>
      </header>
      
      <main style={{ padding: '20px' }}>
        {/* כאן ירונדרו דפי הבנים בהתאם לנתיב (URL) הנוכחי */}
        <Outlet />
      </main>
    </div>
  );
}

// 2. דפים פשוטים
function Home() {
  return <h2>דף הבית של האתר 🏠</h2>;
}

function About() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // ניווט תכנותי חזרה לדף הבית
    navigate('/');
  };

  return (
    <div>
      <h2>אודותינו 📖</h2>
      <p>אנחנו בונים אפליקציות מודרניות ב-React.</p>
      <button onClick={handleGoBack}>חזור לדף הבית</button>
    </div>
  );
}

// 3. דף דינמי (Product Details) עם useParams
function ProductDetail() {
  const { productId } = useParams(); // מחלץ את המזהה מהנתיב (/products/:productId)

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <h3>פרטי מוצר מספר: {productId}</h3>
      <p>כאן יוצג מידע ספציפי מה-API עבור מזהה מוצר זה.</p>
      <Link to="/products">חזרה לרשימת המוצרים</Link>
    </div>
  );
}

function ProductsList() {
  return (
    <div>
      <h2>רשימת מוצרים 🛍️</h2>
      <ul>
        <li><Link to="/products/101">מקלדת מכנית (101)</Link></li>
        <li><Link to="/products/102">עכבר אלחוטי (102)</Link></li>
        <li><Link to="/products/103">מסך גיימינג (103)</Link></li>
      </ul>
    </div>
  );
}

// 4. הגדרת הנתב (Router Config)
// הגדרת הנתיבים עם פריסת הורה ובנים (Children Routes)
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // פריסה משותפת לכל דפי האתר
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
        path: "products",
        element: <ProductsList />,
      },
      {
        path: "products/:productId", // נתיב דינמי
        element: <ProductDetail />,
      }
    ]
  }
]);

// 5. קומפוננטת האפליקציה הראשית
export function AppWithRouting() {
  return <RouterProvider router={router} />;
}
