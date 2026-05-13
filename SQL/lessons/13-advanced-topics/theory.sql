-- Module 13: Advanced Topics Theory
-- CTEs and Window Functions

-- 1. Common Table Expression (CTE)
-- Cleaner way to find "High Value" customers
WITH customer_totals AS (
    SELECT customer_id, SUM(amount) AS total_spent
    FROM orders
    GROUP BY customer_id
)
SELECT c.name, ct.total_spent
FROM customers c
JOIN customer_totals ct ON c.customer_id = ct.customer_id
WHERE ct.total_spent > 500;

-- 2. Window Functions: Ranking
-- Rank employees by salary within their department
SELECT name, department, salary,
       RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank
FROM staff;

-- 3. Window Functions: Row Number
-- Useful for finding the most recent record for each user
SELECT * FROM (
    SELECT user_id, content, created_at,
           ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS rn
    FROM posts
) WHERE rn = 1;

-- 4. Window Functions: Lead/Lag
-- Compare current sale amount to previous sale amount
-- SELECT sale_date, amount,
--        LAG(amount) OVER (ORDER BY sale_date) AS previous_sale,
--        amount - LAG(amount) OVER (ORDER BY sale_date) AS growth
-- FROM sales;

-- 5. Recursive CTE (Conceptual - SQLite supports this)
-- Finding all managers in a chain
-- WITH RECURSIVE subordinates AS (
--     SELECT id, name, manager_id FROM employees WHERE name = 'Alice'
--     UNION ALL
--     SELECT e.id, e.name, e.manager_id FROM employees e
--     INNER JOIN subordinates s ON e.manager_id = s.id
-- )
-- SELECT * FROM subordinates;

-- 6. Stored Procedures (Conceptual)
-- Note: SQLite does NOT support stored procedures like MySQL or PostgreSQL.
-- In other databases, you can save a block of code to be reused:
-- CREATE PROCEDURE GetUserOrders(IN userId INT)
-- BEGIN
--     SELECT * FROM orders WHERE customer_id = userId;
-- END;
