# Lab 06: Designing for Integrity

## Goal
Practice creating tables with proper constraints and relationships.

## Tasks

### 1. The Department Table
Create a table named `departments` with:
- `dept_id` (Integer, Primary Key)
- `dept_name` (Text, must be NOT NULL and UNIQUE)
- `budget` (Numeric, must be greater than 0)

### 2. The Employee Table
Create a table named `employees` with:
- `emp_id` (Integer, Primary Key)
- `full_name` (Text, must be NOT NULL)
- `email` (Text, UNIQUE)
- `hire_date` (Date, DEFAULT to today/current date)
- `dept_id` (Integer, must be a Foreign Key referring to the `departments` table)

### 3. Data Integrity Test
Write a query to insert a department named 'IT' with a budget of 50,000. 
Then, write a query to insert an employee into that department. 

Finally, try to write a query that would **fail** a constraint (e.g., an employee with a non-existent department ID) and explain why it fails.

---

## Instructions
Write your SQL commands and verify them against the `solution.sql`.
