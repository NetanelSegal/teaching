# Module 09: Built-in Functions

## Hook: The Messy Input
Imagine you are importing data from a messy web form.
- A user typed their name as `"  joHN dOE  "`.
- A price was entered as `10.9928374`.
- A date was stored as `2024-05-13 14:30:00`, but you only need the year.

If you don't clean this data, your reports will look unprofessional. **Built-in Functions** are the "Swiss Army Knife" of SQL, allowing you to clean, format, and transform data on the fly.

## Theory

### 1. String Functions
Manipulate text data:
- `UPPER()` / `LOWER()`: Change case.
- `TRIM()`: Remove leading/trailing spaces.
- `LENGTH()`: Return the number of characters.
- `SUBSTR()` / `SUBSTRING()`: Extract part of a string.
- `REPLACE()`: Swap one piece of text for another.

### 2. Numeric Functions
Perform math on numbers:
- `ROUND()`: Round to a specific number of decimal places.
- `ABS()`: Absolute value.
- `FLOOR()` / `CEIL()`: Round down or up to the nearest integer.

### 3. Date & Time Functions
Extract information from dates (Note: Syntax varies by RDBMS):
- `STRFTIME()` (SQLite) / `DATE_PART()` (Postgres): Get the year, month, or day.
- `DATE()`: Extract just the date part of a timestamp.

### 4. Conditional Logic (`CASE`)
The "IF-THEN" of SQL.
```sql
SELECT name,
       CASE 
           WHEN salary > 10000 THEN 'High'
           WHEN salary > 5000 THEN 'Medium'
           ELSE 'Low'
       END AS salary_category
FROM employees;
```

## Hebrew Summary (סיכום)
פונקציות מובנות ב-SQL מאפשרות לנו לעבד ולעצב את הנתונים ישירות בשאילתה:
- **פונקציות טקסט**: שינוי אותיות גדולות/קטנות (`UPPER`/`LOWER`), חיתוך רווחים (`TRIM`), ומציאת אורך טקסט (`LENGTH`).
- **פונקציות מספרים**: עיגול מספרים (`ROUND`) וערך מוחלט (`ABS`).
- **פונקציות תאריך**: חילוץ שנה, חודש או יום מתוך תאריך מלא.
- **CASE**: הוספת לוגיקה מותנית (בדומה ל-`IF`) כדי לסווג נתונים לפי תנאים מסוימים.
שימוש מושכל בפונקציות אלו חוסך המון עבודה של עיבוד נתונים בשפות תכנות אחרות.
