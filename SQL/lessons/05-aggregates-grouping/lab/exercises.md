# Lab 05: The Sales Analyst

## Goal
Practice using aggregate functions and grouping to analyze data.

## Preparation
Imagine a table named `inventory` with:
- `id`
- `item_name`
- `department` (e.g., 'Books', 'Electronics', 'Toys')
- `price`
- `quantity_in_stock`

## Tasks

### 1. Basic Stats
Find the total number of items in stock across all departments.

### 2. Departmental Value
Find the total value (price * quantity) of all items in the 'Books' department.

### 3. Inventory Summary
For each department, find:
- The number of unique items (`COUNT`).
- The average price of items.
- The total quantity in stock.

### 4. Low Stock Alert
Find departments where the total quantity in stock is less than 50.

---

## Instructions
Write your SQL queries and verify them against the `solution.sql`.
