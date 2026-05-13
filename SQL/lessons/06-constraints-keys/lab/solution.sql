-- Lab 06: Constraints & Keys Solutions

-- 1. Department Table
CREATE TABLE departments (
    dept_id INTEGER PRIMARY KEY,
    dept_name TEXT NOT NULL UNIQUE,
    budget DECIMAL(10, 2) CHECK (budget > 0)
);

-- 2. Employee Table
CREATE TABLE employees (
    emp_id INTEGER PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT UNIQUE,
    hire_date DATE DEFAULT CURRENT_DATE,
    dept_id INTEGER,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

-- 3. Data Integrity Test
INSERT INTO departments (dept_id, dept_name, budget) VALUES (1, 'IT', 50000);
INSERT INTO employees (full_name, email, dept_id) VALUES ('Alice Smith', 'alice@company.com', 1);

-- Fails because dept_id 99 does not exist in the departments table (FK Violation)
-- INSERT INTO employees (full_name, email, dept_id) VALUES ('Bob Jones', 'bob@company.com', 99);
