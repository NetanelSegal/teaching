-- Module 08: Subqueries Theory
-- Analyzing "Product Sales" and "Staff"

-- 1. Scalar Subquery (Single value)
-- Find the most expensive product
SELECT product_name, price 
FROM products 
WHERE price = (SELECT MAX(price) FROM products);

-- 2. Subquery in the SELECT clause
-- Show product name, price, and how much it differs from the average price
SELECT product_name, 
       price,
       (SELECT AVG(price) FROM products) AS global_avg,
       price - (SELECT AVG(price) FROM products) AS difference
FROM products;

-- 3. Column Subquery (List of values)
-- Find customers who have made an order in the 'Electronics' category
-- (Assuming we have a 'categories' link in orders/products)
SELECT name 
FROM customers 
WHERE customer_id IN (
    SELECT customer_id 
    FROM orders 
    WHERE product_id IN (SELECT product_id FROM products WHERE category = 'Electronics')
);

-- 4. Correlated Subquery
-- Find employees who earn more than the average in THEIR department
SELECT name, salary, department
FROM employees e1
WHERE salary > (
    SELECT AVG(salary) 
    FROM employees e2 
    WHERE e1.department = e2.department
);

-- 5. Subquery in FROM (Derived Tables)
-- Get the total sales per customer, then find the average of those totals
SELECT AVG(total_spent)
FROM (
    SELECT customer_id, SUM(amount) AS total_spent
    FROM orders
    GROUP BY customer_id
) AS customer_summaries;
