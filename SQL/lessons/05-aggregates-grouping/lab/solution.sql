-- Lab 05: Aggregates & Grouping Solutions

-- 1. Basic Stats
SELECT SUM(quantity_in_stock) FROM inventory;

-- 2. Departmental Value
SELECT SUM(price * quantity_in_stock) 
FROM inventory 
WHERE department = 'Books';

-- 3. Inventory Summary
SELECT department,
       COUNT(*) AS item_count,
       AVG(price) AS avg_price,
       SUM(quantity_in_stock) AS total_stock
FROM inventory
GROUP BY department;

-- 4. Low Stock Alert
SELECT department, SUM(quantity_in_stock) AS total_stock
FROM inventory
GROUP BY department
HAVING total_stock < 50;
