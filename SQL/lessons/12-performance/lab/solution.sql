-- Lab 12: Performance Optimization Solutions

-- 1. The Resource Hog
SELECT id, user_id, occurred_at 
FROM logs 
ORDER BY occurred_at DESC 
LIMIT 100;
-- Reasoning: Avoids fetching the heavy 'event_details' column, saving disk I/O and memory.

-- 2. The Index Killer
SELECT * FROM logs 
WHERE occurred_at >= '2024-03-01' AND occurred_at < '2024-04-01';
-- Reasoning: This is SARGable. It compares the column directly to a constant range, allowing the index to be used.

-- 3. The Pattern Search
SELECT * FROM users 
WHERE name LIKE 'Alex%';
-- Reasoning: Putting the wildcard at the end allows the database to jump to the 'Alex' section of the index.

-- 4. Analysis
EXPLAIN QUERY PLAN 
SELECT * FROM logs WHERE occurred_at >= '2024-03-01';
-- Reasoning: The output should show "SEARCH TABLE logs USING INDEX idx_occurred_at".
