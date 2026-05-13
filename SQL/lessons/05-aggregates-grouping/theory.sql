-- Module 05: Aggregates & Grouping Theory
-- Analyzing a "Store Sales" database

-- 1. Setup
CREATE TABLE sales (
    id INTEGER PRIMARY KEY,
    product_name TEXT,
    category TEXT,
    price DECIMAL(10, 2),
    quantity_sold INTEGER,
    sale_date DATE
);

INSERT INTO sales (product_name, category, price, quantity_sold, sale_date) VALUES
('Laptop', 'Electronics', 1200.00, 2, '2024-01-10'),
('Smartphone', 'Electronics', 800.00, 5, '2024-01-11'),
('Coffee Maker', 'Home', 150.00, 10, '2024-01-10'),
('Blender', 'Home', 80.00, 4, '2024-01-12'),
('T-shirt', 'Clothing', 25.00, 20, '2024-01-11'),
('Jeans', 'Clothing', 60.00, 15, '2024-01-13'),
('Monitor', 'Electronics', 300.00, 3, '2024-01-14');

-- 2. Basic Aggregates
SELECT COUNT(*) AS total_sales_records FROM sales;
SELECT SUM(quantity_sold) AS total_items_sold FROM sales;
SELECT AVG(price) AS average_product_price FROM sales;
SELECT MAX(price) AS most_expensive_item FROM sales;

-- 3. Grouping by Category
-- How many items were sold in each category?
SELECT category, SUM(quantity_sold) AS total_sold
FROM sales
GROUP BY category;

-- 4. Grouping with Multiple Aggregates
SELECT category, 
       COUNT(*) AS number_of_products,
       AVG(price) AS avg_price,
       SUM(price * quantity_sold) AS total_revenue
FROM sales
GROUP BY category;

-- 5. Filtering Groups (HAVING)
-- Show categories where the total revenue is greater than 1000
SELECT category, SUM(price * quantity_sold) AS total_revenue
FROM sales
GROUP BY category
HAVING total_revenue > 1000;

-- 6. Combining WHERE, GROUP BY, and ORDER BY
-- Total revenue per category for electronics only, sorted by revenue
SELECT category, SUM(price * quantity_sold) AS total_revenue
FROM sales
WHERE category = 'Electronics'
GROUP BY category
ORDER BY total_revenue DESC;
