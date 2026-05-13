-- Lab 07: Joins Solutions

-- 1. The Catalog
SELECT b.title, a.name
FROM books b
INNER JOIN authors a ON b.author_id = a.author_id;

-- 2. The Comprehensive List
SELECT a.name, b.title
FROM authors a
LEFT JOIN books b ON a.author_id = b.author_id;

-- 3. Local Talent
SELECT b.title, a.name
FROM books b
INNER JOIN authors a ON b.author_id = a.author_id
WHERE a.country = 'USA';

-- 4. Author Stats
SELECT a.name, COUNT(b.book_id) AS book_count
FROM authors a
LEFT JOIN books b ON a.author_id = b.author_id
GROUP BY a.name;
