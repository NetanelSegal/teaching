-- Module 12: Performance Optimization Theory
-- Comparing "Slow" vs "Fast" patterns

-- 1. Setup (Mental exercise - assumes large data)
-- CREATE TABLE big_data (id INTEGER PRIMARY KEY, name TEXT, bio TEXT, created_at TIMESTAMP);
-- CREATE INDEX idx_created_at ON big_data(created_at);

-- 2. Selective Projection
-- BAD: Fetches the huge 'bio' column for every row
-- SELECT * FROM big_data;

-- GOOD: Only fetches what is needed
-- SELECT name FROM big_data;

-- 3. SARGable Queries
-- BAD: Prevents index usage on 'created_at'
-- SELECT * FROM big_data WHERE STRFTIME('%Y', created_at) = '2024';

-- GOOD: Allows index usage
-- SELECT * FROM big_data WHERE created_at >= '2024-01-01' AND created_at < '2025-01-01';

-- 4. Wildcards
-- BAD: Full table scan
-- SELECT * FROM big_data WHERE name LIKE '%Smith';

-- GOOD: Uses index on 'name'
-- SELECT * FROM big_data WHERE name LIKE 'Smith%';

-- 5. Query Analysis (SQLite syntax)
EXPLAIN QUERY PLAN 
SELECT * FROM staff WHERE department = 'Engineering';
-- Look for "SCAN" (Slow) vs "SEARCH" (Fast)

-- 6. Identifying unnecessary Joins
-- If you only need the department_id, don't join the department table!
-- BAD:
-- SELECT e.name, d.dept_name FROM employees e JOIN departments d ON e.dept_id = d.id;
-- GOOD (if you just need the ID):
-- SELECT name, dept_id FROM employees;
