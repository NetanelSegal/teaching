# סיכום React

React היא ספריית JavaScript לבניית ממשקי משתמש מודרניים.

## 1. קומפוננטות (Components)
קומפוננטה היא פונקציה שמחזירה JSX (קוד דמוי HTML בתוך JS):
<div dir="ltr">

```jsx
function MyButton() {
  return <button>לחץ כאן</button>;
}
```

</div>

## 2. Props
Props הם דרך להעביר נתונים מקומפוננטה אחת לאחרת (מהורה לילד):
<div dir="ltr">

```jsx
<Welcome name="Yossi" />
```

</div>

## 3. State (useState)
State משמש לשמירה ועדכון נתונים בתוך קומפוננטה, הגורמים לרינדור מחדש:
<div dir="ltr">

```jsx
const [count, setCount] = useState(0);
```

</div>

## 4. Hooks וביצועים (Performance)
- **useEffect**: פעולות צדדיות.
- **useMemo / useCallback**: אופטימיזציה של ביצועים ע"י מניעת חישובים חוזרים או יצירת פונקציות מחדש.
- **useContext**: שיתוף נתונים גלובלי (Context API) ללא "Prop Drilling".
- **React.memo**: מניעת רינדור מיותר של קומפוננטות אם ה-props לא השתנו.
- **useRef**: גישה ישירה ל-DOM ושמירת ערכים ללא רינדור.

## 5. ניווט (React Router)
שימוש ב-`BrowserRouter`, `Routes` ו-`Route` לבניית אפליקציות עם מספר דפים.
