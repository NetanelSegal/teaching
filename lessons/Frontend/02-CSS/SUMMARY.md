# סיכום CSS

CSS (Cascading Style Sheets) משמשת לעיצוב המראה של דפי HTML.

## 1. ה-Box Model
כל אלמנט ב-CSS הוא קופסה המורכבת מ:
- **Content**: התוכן עצמו.
- **Padding**: הריווח הפנימי סביב התוכן.
- **Border**: המסגרת סביב ה-padding.
- **Margin**: הריווח החיצוני בין הקופסאות.

## 2. פריסה (Layout)
- **Flexbox**: סידור אלמנטים על ציר אחד (שורה או עמודה).
- **Grid**: בניית פריסות דו-ממדיות מורכבות בעזרת רשת (עמודות ושורות).
- **Position**: מיקום מדויק של אלמנטים (relative, absolute, fixed, sticky).

## 3. רספונסיביות
שימוש ב-**Media Queries** כדי לשנות את העיצוב לפי רוחב המסך:
<div dir="ltr">

```css
@media (max-width: 768px) {
  .sidebar { display: none; }
}
```

</div>
### נושאים מתקדמים ברספונסיביות:
- **Fluid Typography**: שימוש ב-`clamp(min, preferred, max)` לעיצוב פונטים שגדלים בצורה חלקה.
- **Container Queries**: עיצוב אלמנטים לפי גודל ה-Parent שלהם ולא רק ה-Viewport.
- **Viewport Units**: שימוש ב-`vh`, `vw`, `vmin`, ו-`vmax`.

## 4. נושאים מתקדמים
- **CSS Variables**: שימוש במשתנים גלובליים בתוך `:root`. כדאי להשתמש בשיטת 3 השכבות (Global, Semantic, Component).
- **Animations**: יצירת תנועה בעזרת `@keyframes`.
  - **Performance**: מומלץ להנפיש רק `transform` ו-`opacity` לביצועים מקסימליים.
  - **Accessibility**: תמיד להשתמש ב-`prefers-reduced-motion` עבור משתמשים עם רגישות לתנועה.
- **Transitions**: שינוי חלק של תכונות CSS בזמן אינטראקציה (למשל hover).
