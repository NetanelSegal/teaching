# Lab 03: Building the Schema

## Goal
Practice creating, modifying, and deleting tables.

## Tasks

### 1. Create the Products Table
Create a table named `products` with the following columns:
- `product_id` (Integer, Primary Key)
- `name` (Text)
- `price` (Decimal/Numeric)
- `stock_quantity` (Integer)

### 2. Modify the Table
You realized you forgot to track the supplier. Add a column named `supplier_name` (Text) to the `products` table.

### 3. Cleanup
Create a temporary table named `temp_log` with an `id` and `log_msg`. Then, delete the table entirely using the `DROP` command.

---

## Instructions
Write your SQL commands and verify them against the `solution.sql`.
