# Lab 09: The Data Cleaner

## Goal
Practice using built-in functions to transform and format data.

## Preparation
Imagine a table named `web_orders`:
- `order_id`
- `customer_name` (e.g., `"  alice  "`)
- `raw_price` (e.g., `49.995`)
- `order_timestamp` (e.g., `'2024-03-15 10:30:00'`)

## Tasks

### 1. Professional Names
Retrieve all `customer_name` values, but:
- Remove leading/trailing spaces.
- Convert them to all UPPERCASE.

### 2. Price Formatting
Retrieve the `raw_price`, but round it to 2 decimal places and rename the column to `final_price`.

### 3. Yearly Report
Extract just the **year** from the `order_timestamp` column.

### 4. Shipping Status
Create a new column in your results using `CASE`:
- If `raw_price` is over 100, label it 'Free Shipping'.
- Otherwise, label it 'Standard Shipping'.

---

## Instructions
Write your SQL queries and verify them against the `solution.sql`.
