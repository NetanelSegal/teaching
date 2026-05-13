-- Lab 10: Views & Indexes Solutions

-- 1. The Simplified Catalog
CREATE VIEW v_book_catalog AS
SELECT b.title, a.name AS author_name
FROM books b
JOIN authors a ON b.author_id = a.id;

-- 2. Modern Classics
CREATE VIEW v_modern_books AS
SELECT * FROM books WHERE published_year > 2000;

-- 3. Optimization
CREATE INDEX idx_book_genre ON books(genre);

-- 4. Cleanup
DROP VIEW v_modern_books;
