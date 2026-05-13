# Module 04: DML (Filtering & Sorting)

## Hook: The Search for the Needle
Imagine you are a detective looking through a database of 1 million suspicious cars. 
- You know the car is "Red".
- You know the year is "between 2015 and 2018".
- You want to see the most expensive ones first.

If you just `SELECT * FROM cars;`, you'll be reading for days. You need to **Filter** and **Sort** the results to find exactly what you need in milliseconds.

## Theory

### 1. Filtering with `WHERE`
The `WHERE` clause allows you to filter records based on specific conditions.
```sql
SELECT * FROM cars WHERE color = 'Red';
```

### 2. Logical Operators
Combine conditions to narrow down your search:
- `AND`: Both conditions must be true.
- `OR`: At least one condition must be true.
- `NOT`: Reverses the condition.
- `BETWEEN`: Selects values within a range.
- `IN`: Specifies multiple possible values for a column.

### 3. Sorting with `ORDER BY`
Sort your results in ascending (`ASC`) or descending (`DESC`) order.
```sql
SELECT * FROM cars ORDER BY price DESC;
```

### 4. Limiting Results (`LIMIT`)
Useful for pagination or just seeing the "top X" results.
```sql
SELECT * FROM cars ORDER BY price DESC LIMIT 5;
```

## Hebrew Summary (סיכום)
סינון ומיון נתונים הם הכלים החזקים ביותר ב-SQL לשליפת מידע רלוונטי:
- `WHERE`: סינון שורות לפי תנאי מסוים.
- אופרטורים לוגיים: `AND`, `OR`, `NOT`, `BETWEEN`, `IN`.
- `ORDER BY`: מיון התוצאות (ברירת המחדל היא `ASC` - עולה, `DESC` - יורד).
- `LIMIT`: הגבלת מספר השורות שיוחזרו בתוצאה (שימושי מאוד לדפי תוצאות או שליפת ה-"TOP" של טבלה).
