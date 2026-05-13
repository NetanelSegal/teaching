-- Module 04: Filtering & Sorting Theory
-- Using an "Employee" database

-- 1. Setup
CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name TEXT,
    department TEXT,
    salary INTEGER,
    hire_date DATE
);

INSERT INTO employees (id, name, department, salary, hire_date) VALUES
(1, 'Alice', 'HR', 5000, '2020-01-15'),
(2, 'Bob', 'Engineering', 8000, '2019-05-20'),
(3, 'Charlie', 'Engineering', 7500, '2021-03-10'),
(4, 'David', 'Marketing', 4500, '2018-11-01'),
(5, 'Eve', 'HR', 5200, '2022-07-25');

-- 2. Basic Filtering
SELECT * FROM employees WHERE department = 'Engineering';

-- 3. Logical Operators (AND, OR)
SELECT * FROM employees WHERE department = 'Engineering' AND salary > 7800;
SELECT * FROM employees WHERE department = 'HR' OR department = 'Marketing';

-- 4. Ranges (BETWEEN)
SELECT * FROM employees WHERE salary BETWEEN 5000 AND 6000;

-- 5. Lists (IN)
SELECT * FROM employees WHERE department IN ('HR', 'Marketing');

-- 6. Sorting (ORDER BY)
SELECT * FROM employees ORDER BY salary DESC;

-- 7. Limiting
SELECT * FROM employees ORDER BY hire_date ASC LIMIT 3;
