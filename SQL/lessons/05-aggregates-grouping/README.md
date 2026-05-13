# Module 05: Aggregates & Grouping

## Hook: The Manager's Question
Imagine you are the manager of a large retail chain. Your database contains 1,000,000 individual sales transactions. 
- You don't want to see a list of 1,000,000 receipts.
- You want to know: **"What was our total revenue today?"**
- You want to know: **"Which store sold the most items?"**
- You want to know: **"What is the average price of a product in our 'Electronics' department?"**

To answer these questions, you need to **Aggregate** (summarize) individual rows into a single meaningful number.

## Theory

### 1. Aggregate Functions
These functions take multiple values and return a single result:
- `COUNT()`: Returns the number of rows.
- `SUM()`: Returns the total sum of a numeric column.
- `AVG()`: Returns the average value.
- `MIN()` / `MAX()`: Returns the smallest or largest value.

### 2. `GROUP BY`
The `GROUP BY` clause is used to group rows that have the same values into summary rows. It is almost always used with aggregate functions.
```sql
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department;
```

### 3. `HAVING`
The `HAVING` clause was added to SQL because the `WHERE` keyword could not be used with aggregate functions. Use `HAVING` to filter the *results* of a group.
```sql
SELECT department, AVG(salary) 
FROM employees 
GROUP BY department 
HAVING AVG(salary) > 5000;
```

## Hebrew Summary (סיכום)
פונקציות אגרגציה מאפשרות לנו לסכם מידע ולקבל תובנות מתוך כמות גדולה של נתונים:
- `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`: פונקציות לסיכום ערכים.
- `GROUP BY`: חלוקת התוצאות לקבוצות (למשל: סכום מכירות לפי קטגוריה).
- `HAVING`: סינון של הקבוצות שנוצרו (כמו `WHERE`, אבל עבור פונקציות אגרגציה).
חשוב לזכור: כאשר משתמשים ב-`GROUP BY`, כל עמודה שמופיעה ב-`SELECT` חייבת להיות או חלק מה-`GROUP BY` או בתוך פונקציית אגרגציה.
