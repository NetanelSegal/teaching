# Lab 11: The Secure Vault

## Goal
Practice using transactions to ensure data integrity and understand the basics of database security.

## Preparation
Imagine an "Inventory Management" system:
- `products` (`id`, `name`, `price`, `stock_count`)
- `orders` (`id`, `product_id`, `quantity`, `order_date`)

## Tasks

### 1. The Atomic Sale
A customer wants to buy 2 "Laptops" (ID: 5). Write a transaction that:
1.  Reduces the `stock_count` in the `products` table by 2.
2.  Inserts a new record into the `orders` table.
3.  Commits the changes.

### 2. The Mistaken Order
Start a transaction to update the price of all items in the 'Electronics' category by 50%. Then, realize this was a mistake and use `ROLLBACK` to undo the change before it is saved.

### 3. Permission Control (Mental Exercise)
You have a new intern in the HR department. 
- Which SQL command would you use to allow them to *only* see the employee names but not their salaries?
- Which SQL command would you use to prevent them from deleting any records?

---

## Instructions
Write your SQL commands and verify them against the `solution.sql`.
