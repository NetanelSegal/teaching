# Module 13: Advanced Topics

## Hook: The Recursive Hierarchy
Imagine you are building a database for a company with a complex hierarchy:
- A manager has 5 employees.
- Each employee has 3 subordinates.
- Each subordinate has 2 interns.

If you want to find **everyone** who reports to the CEO, how many JOINS would you need? 3? 10? 100?
Instead of a mess of Joins, you can use a **Recursive CTE** to "climb the tree" automatically.

## Theory

### 1. Common Table Expressions (CTE)
A CTE is a temporary result set that you can reference within another SQL statement. It makes complex queries much more readable.
- **Syntax**: `WITH cte_name AS (SELECT ...) SELECT * FROM cte_name;`

```sql
WITH regional_sales AS (
    SELECT region, SUM(amount) AS total
    FROM sales
    GROUP BY region
)
SELECT region FROM regional_sales WHERE total > 10000;
```

### 2. Window Functions
Window functions perform calculations across a set of table rows that are somehow related to the current row. Unlike aggregate functions, they do **not** group rows into a single output row.
- `ROW_NUMBER()`: Assigns a unique number to each row.
- `RANK()` / `DENSE_RANK()`: Assigns a rank based on a value.
- `LEAD()` / `LAG()`: Look at the next or previous row.

```sql
-- Rank products by price within their category
SELECT name, price, category,
       RANK() OVER (PARTITION BY category ORDER BY price DESC) AS price_rank
FROM products;
```

### 3. Recursive Queries
A CTE that references itself. Used for hierarchical data (Org charts, file systems).

## Hebrew Summary (סיכום)
הגענו לשלב המתקדם ביותר ב-SQL, המאפשר פתרון של בעיות מורכבות בצורה אלגנטית:
- **CTE (Common Table Expressions)**: יצירת טבלה זמנית לשימוש בתוך השאילתה. זה הופך שאילתות ארוכות ומסורבלות לקריאות ומסודרות הרבה יותר.
- **Window Functions**: ביצוע חישובים על "חלון" של שורות (למשל: דירוג עובדים לפי שכר בתוך כל מחלקה, או חישוב ממוצע נע). בניגוד ל-`GROUP BY`, כאן אנחנו לא מאבדים את השורות הבודדות.
- **שאילתות רקורסיביות**: שימוש ב-CTE כדי לעבור על מבנים היררכיים (כמו עץ ארגוני או תיקיות במחשב).
הבנת נושאים אלו מבדילה בין כותב שאילתות בסיסי לבין מהנדס נתונים מקצועי.
