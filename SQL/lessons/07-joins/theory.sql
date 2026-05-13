-- Module 07: Joins Theory
-- Managing a "Customer & Orders" system

-- 1. Setup Tables
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    city TEXT
);

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    order_date DATE,
    amount DECIMAL(10, 2),
    customer_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- 2. Insert Data
INSERT INTO customers (name, city) VALUES 
('Alice', 'New York'),
('Bob', 'London'),
('Charlie', 'Paris'),
('David', 'Tokyo'); -- David hasn't ordered anything yet

INSERT INTO orders (order_date, amount, customer_id) VALUES
('2024-01-01', 100.00, 1), -- Alice
('2024-01-02', 150.00, 1), -- Alice
('2024-01-03', 200.00, 2), -- Bob
('2024-01-04', 50.00, 3),  -- Charlie
('2024-01-05', 300.00, NULL); -- Anonymous order

-- 3. INNER JOIN
-- Show orders with customer names (Only where a match exists)
SELECT customers.name, orders.order_date, orders.amount
FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id;

-- 4. LEFT JOIN
-- Show ALL customers, even those with no orders (David will appear with NULL)
SELECT customers.name, orders.order_date, orders.amount
FROM customers
LEFT JOIN orders ON customers.customer_id = orders.customer_id;

-- 5. Using Aliases for cleaner code
SELECT c.name, o.amount
FROM customers AS c
INNER JOIN orders AS o ON c.customer_id = o.customer_id
WHERE o.amount > 120;

-- 6. Combining Aggregates with Joins
-- How much has each customer spent in total?
SELECT c.name, SUM(o.amount) AS total_spent
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.name;
