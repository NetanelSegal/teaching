import { createBrowserRouter, RouterProvider, Outlet, Link, useParams, useNavigate } from 'react-router-dom';

/**
 * Lab: Navigation and Routing (React Router)
 * 
 * במעבדה זו תגדירו מערכת ניתובי דפים מודרנית (createBrowserRouter)
 * ותבנו תפריט ניווט, דפים פשוטים, ודף פרטי מוצר דינמי.
 */

// 1. קומפוננטת הפריסה הראשית (Layout)
// משימה 3: החליפו את תגיות ה-a הרגילות בקומפוננטת <Link> של React Router.
function Layout() {
  return (
    <div>
      <header>
        <nav>
          <a href="/">בית</a>
          <a href="/about">אודות</a>
          <a href="/contact">צור קשר</a>
          <a href="/product/123">מוצר לדוגמה (123)</a>
        </nav>
      </header>
      
      <main className="box">
        {/* משימה 1: הציגו כאן את קומפוננטת Outlet של React Router */}
        {/* TODO: Outlet */}
        <p style={{ fontStyle: 'italic', color: '#9ca3af' }}>[התוכן הדינמי של הדף יוצג כאן]</p>
      </main>
    </div>
  );
}

// 2. דפי האפליקציה (Pages)
function Home() {
  return <h2>דף הבית של האפליקציה 🏠</h2>;
}

function About() {
  // משימה 5: השתמשו ב-useNavigate כדי לאפשר לחיצה על כפתור
  // שתנווט את המשתמש חזרה לדף הבית תכנותית.
  // TODO: useNavigate

  return (
    <div>
      <h2>אודות האתר 📖</h2>
      <p>כאן תוכלו לקרוא מידע עלינו.</p>
      <button>חזור לדף הבית</button>
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
  // משימה 2: השתמשו ב-useParams כדי לחלץ את ה-id של המוצר ולהציג אותו על המסך.
  // TODO: useParams
  const id = "זמני";

  return (
    <div>
      <h2>פרטי מוצר מספר: {id} 🛍️</h2>
      <p>דף זה מציג נתונים לפי הפרמטר הדינמי שהתקבל בכתובת.</p>
    </div>
  );
}

// משימה 4: צרו קומפוננטת NotFound (דף 404) והציגו אותה כאשר המשתמש מגיע לנתיב לא מוכר.
function NotFound() {
  return (
    <div>
      <h2>דף לא נמצא - 404 🚫</h2>
      <p>הכתובת שחיפשתם אינה קיימת באתר.</p>
      <Link to="/">חזרה לדף הבית</Link>
    </div>
  );
}

function App() {
  // משימה 1: הגדירו את הנתב (router) בעזרת createBrowserRouter
  // הגדירו את Layout כרכיב השורש, ואת שאר הדפים כבנים שלו (children).
  // אל תשכחו להוסיף את הנתיב הדינמי למוצר ואת נתיב ה-wildcard ל-404.
  // TODO: הגדירו את הנתב כאן

  return (
    // משימה 1: החליפו את ה-div הקיים בקומפוננטת RouterProvider והעבירו לה את הנתב.
    <div>
      <h1 style={{ textAlign: 'center', color: '#111827' }}>מעבדה 6: ניווט וניתוב</h1>
      <Layout />
    </div>
  );
}

export default App;
