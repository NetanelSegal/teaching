-- Module 10: Views & Indexes Theory
-- Managing "Staff" and "Performance"

-- 1. Setup
CREATE TABLE staff (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    department TEXT,
    salary INTEGER
);

INSERT INTO staff (name, department, salary) VALUES
('Alice', 'Sales', 5000),
('Bob', 'Engineering', 8000),
('Charlie', 'Sales', 5500),
('David', 'Marketing', 4500);

-- 2. Creating a View
-- A simplified view that hides salaries
CREATE VIEW public_staff_list AS
SELECT id, name, department 
FROM staff;

-- Query the view
SELECT * FROM public_staff_list;

-- 3. Updating a View (Dropping and Recreating)
DROP VIEW public_staff_list;
CREATE VIEW public_staff_list AS
SELECT name, department FROM staff ORDER BY name;

-- 4. Indexes for Performance
-- Imagine the 'staff' table has 1 million rows.
-- Searching by department would be slow:
-- SELECT * FROM staff WHERE department = 'Engineering';

-- Create an index to speed it up
CREATE INDEX idx_staff_department ON staff(department);

-- Now the same query will be much faster.

-- 5. Unique Indexes
-- Prevents duplicate names (similar to the UNIQUE constraint)
CREATE UNIQUE INDEX idx_staff_name ON staff(name);

-- 6. Removing an Index
DROP INDEX idx_staff_department;
