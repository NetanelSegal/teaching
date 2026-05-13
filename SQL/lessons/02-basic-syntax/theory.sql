-- Module 02: Basic Syntax Theory
-- Using a "Bookstore" database as an example.

-- 1. Create a table (Initial setup)
CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    price DECIMAL(10, 2),
    stock_count INTEGER
);

-- 2. Insert sample data (Create)
INSERT INTO books (id, title, author, price, stock_count) VALUES
(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 10.99, 5),
(2, '1984', 'George Orwell', 8.50, 12),
(3, 'To Kill a Mockingbird', 'Harper Lee', 12.00, 8),
(4, 'The Hobbit', 'J.R.R. Tolkien', 15.00, 20);

-- 3. Read Data (SELECT)
-- Retrieve titles
SELECT title FROM books;

-- 4. Multiple Columns
SELECT title, price FROM books;

-- 5. Wildcard (All columns)
SELECT * FROM books;

-- 6. Aliases (AS)
SELECT title, stock_count AS inventory FROM books;

-- 7. Update (Quick look)
UPDATE books SET price = 9.99 WHERE id = 2;

-- 8. Delete (Quick look)
DELETE FROM books WHERE id = 1;
