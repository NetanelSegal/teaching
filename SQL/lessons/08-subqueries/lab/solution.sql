-- Lab 08: Subqueries Solutions

-- 1. The High Earners
SELECT name FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

-- 2. Departmental Comparison
SELECT name FROM employees 
WHERE dept_id = (SELECT id FROM departments WHERE dept_name = 'Research');

-- 3. The Elite
SELECT dept_name FROM departments 
WHERE id IN (SELECT dept_id FROM employees WHERE salary > 10000);

-- 4. Above Average (Correlated)
SELECT name FROM employees e1
WHERE salary > (
    SELECT AVG(salary) 
    FROM employees e2 
    WHERE e1.dept_id = e2.dept_id
);
