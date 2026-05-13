-- Lab 04: Filtering & Sorting Solutions

-- 1. The Expert Search
SELECT * FROM applicants 
WHERE position = 'Backend' AND experience_years > 5;

-- 2. The Budget Filter
SELECT * FROM applicants 
WHERE position = 'Frontend' AND expected_salary BETWEEN 10000 AND 15000;

-- 3. The Shortlist
SELECT * FROM applicants 
WHERE position IN ('DevOps', 'Backend') 
ORDER BY experience_years DESC 
LIMIT 3;
