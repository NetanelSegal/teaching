-- Module 09: Built-in Functions Theory
-- Demonstrating String, Numeric, and Date manipulations

-- 1. String Functions
SELECT '  Hello World  ' AS original,
       TRIM('  Hello World  ') AS trimmed,
       UPPER('hello') AS shouting,
       LOWER('WORLD') AS whispering,
       LENGTH('SQL') AS char_count,
       REPLACE('I love Java', 'Java', 'SQL') AS truth;

-- 2. Numeric Functions
SELECT 10.5567 AS original,
       ROUND(10.5567, 2) AS rounded,
       ABS(-50) AS positive,
       FLOOR(10.9) AS rounded_down,
       CEIL(10.1) AS rounded_up;

-- 3. Date Functions (SQLite syntax)
-- Current date and time: 2024-05-13 15:00:00
SELECT DATE('now') AS today,
       STRFTIME('%Y', 'now') AS current_year,
       STRFTIME('%m', 'now') AS current_month;

-- 4. CASE (Conditional Logic)
-- Assume an 'inventory' table with 'quantity'
-- SELECT item_name,
--        CASE
--            WHEN quantity = 0 THEN 'Out of Stock'
--            WHEN quantity < 10 THEN 'Low Stock'
--            ELSE 'In Stock'
--        END AS availability
-- FROM inventory;

-- 5. Combining Functions
-- Clean up messy names and format prices
-- SELECT UPPER(TRIM(first_name)) || ' ' || UPPER(TRIM(last_name)) AS full_name,
--        '$' || ROUND(price, 2) AS formatted_price
-- FROM products;
