-- Module 01: Introduction to SQL
-- This is a "Sanity Check" to ensure your environment is set up correctly.

-- 1. Simple Select
-- This doesn't even need a table!
SELECT 'SQL is working!' AS status;

-- 2. Basic Math
-- Verify the database engine can perform calculations.
SELECT 10 + 5 AS addition, 
       100 / 4 AS division;

-- 3. Current Date
-- Verify built-in functions are accessible.
SELECT DATE('now') AS today;
