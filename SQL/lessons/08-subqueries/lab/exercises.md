# Lab 08: Deep Dive with Subqueries

## Goal
Practice nesting queries to solve complex data problems.

## Preparation
Imagine an "HR & Payroll" database:
- `employees` (`id`, `name`, `salary`, `dept_id`)
- `departments` (`id`, `dept_name`)

## Tasks

### 1. The High Earners
Find the names of employees who earn more than the **overall** average salary of the entire company.

### 2. Departmental Comparison
Find the names of all employees who work in the 'Research' department using a subquery (instead of a JOIN).

### 3. The Elite
Find the department name(s) that have at least one employee earning more than 10,000.

### 4. Above Average (Bonus)
Find employees who earn more than the average salary of their **own** department. (Hint: This requires a correlated subquery).

---

## Instructions
Write your SQL queries and verify them against the `solution.sql`.
