# Module 12: Performance Optimization

## Hook: The 10-Second Wait
Imagine you are building a dashboard for a CEO. 
- You write a query that joins 10 tables and filters through 50 million rows.
- Every time the CEO clicks "Refresh," they have to wait **10 seconds** for the data to appear.
- The CEO is frustrated. They want it to be instantaneous.

In the world of software engineering, **Query is King, but Speed is Queen.** If your queries are slow, your application feels broken. **Performance Optimization** is the art of making your database work smarter, not harder.

## Theory

### 1. Selective Projection
The most common mistake: `SELECT *`.
- When you use `*`, the database must fetch every single column from the disk. If your table has 50 columns and you only need 2, you are wasting 96% of your resources.
- **Rule**: Always specify the exact columns you need.

### 2. SARGable Queries
"SARGable" stands for **Search ARGument Able**. It means writing your `WHERE` clauses in a way that the database can actually use an index.
- **Bad**: `WHERE YEAR(order_date) = 2024` (The database must calculate the year for every single row).
- **Good**: `WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01'` (The database can jump straight to the correct range in the index).

### 3. Avoiding Wildcard Starts
- `LIKE '%apple'` cannot use an index because the database doesn't know where the word starts.
- `LIKE 'apple%'` **can** use an index.

### 4. Query Analysis (`EXPLAIN`)
Most databases have an `EXPLAIN` or `EXPLAIN QUERY PLAN` command. It tells you exactly how the database plans to find your data.
- If you see "Full Table Scan," it means your query is likely slow.
- If you see "Search table using index," you are on the right track.

## Hebrew Summary (סיכום)
אופטימיזציה של שאילתות היא קריטית לחוויית המשתמש וליעילות המערכת:
- **בחירת עמודות ספציפיות**: הימנעו מ-`SELECT *`. שלפו רק את הנתונים שאתם באמת צריכים.
- **שאילתות SARGable**: כתבו תנאי `WHERE` בצורה שמאפשרת לבסיס הנתונים להשתמש באינדקסים קיימים (למשל: שימוש בטווח תאריכים במקום פונקציה על עמודת התאריך).
- **שימוש נכון ב-Wildcards**: חיפוש שמתחיל ב-`%` מונע שימוש באינדקס.
- **EXPLAIN**: השתמשו בפקודה זו כדי להבין איך בסיס הנתונים מתכנן להריץ את השאילתה שלכם ולזהות צווארי בקבוק.
זכרו: בסיס נתונים מהיר הוא בסיס נתונים שמבצע כמה שפחות קריאות מהדיסק.
