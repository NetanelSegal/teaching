# Module 10: Views & Indexes

## Hook: The Lazy Librarian
Imagine you are a librarian.
- **The Index Problem**: Every time someone asks for a book, you have to walk through every single aisle until you find it. (This is a "Full Table Scan"). You decide to create an Alphabetical Index at the front of each aisle. Now you find books 100x faster.
- **The Report Problem**: Every day, the manager asks for a complex report that requires joining 5 different tables. You are tired of typing the same massive query every morning. You decide to create a "Virtual Window" that shows the result of that query automatically.

**Indexes** make your database fast. **Views** make your life easier.

## Theory

### 1. What is a View?
A View is a **virtual table** based on the result-set of an SQL statement. It contains rows and columns just like a real table, but it doesn't store data itself.
- **Why use them?**
    - Security: Hide sensitive columns from certain users.
    - Simplicity: Save complex Joins as a single "table."
    - Consistency: Ensure everyone uses the same logic for a specific report.

```sql
CREATE VIEW expensive_products AS
SELECT name, price FROM products WHERE price > 500;

-- Now you can query it like a table:
SELECT * FROM expensive_products;
```

### 2. What is an Index?
An Index is a physical structure that the RDBMS uses to find rows faster. Without an index, the database must read every row in the table (Scan).
- **Why use them?** Speed.
- **The Trade-off**: Indexes make `SELECT` faster, but they make `INSERT` and `UPDATE` slightly slower (because the index must be updated too).

```sql
CREATE INDEX idx_customer_name ON customers(name);
```

## Hebrew Summary (סיכום)
שימוש ב-Views ו-Indexes משפר את היעילות והנוחות בעבודה עם בסיסי נתונים:
- **View (תצוגה)**: "טבלה וירטואלית" שהיא למעשה שאילתה שמורה. היא מאפשרת לפשט שאילתות מורכבות ולשפר את אבטחת המידע על ידי חשיפת רק חלק מהעמודות למשתמשים מסוימים.
- **Index (אינדקס)**: מבנה נתונים המאפשר למצוא שורות במהירות (כמו אינדקס בסוף ספר). הוא משפר משמעותית את מהירות השליפה (`SELECT`) אך עלול להאט מעט פעולות כתיבה (`INSERT`/`UPDATE`) ותופס מקום נוסף בדיסק.
כלל אצבע: צרו אינדקסים על עמודות שמופיעות לעיתים קרובות ב-`WHERE` או ב-`JOIN`.
