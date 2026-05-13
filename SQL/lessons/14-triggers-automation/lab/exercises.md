# Lab 14: The Automated Database

## Goal
Learn how to create triggers to automate data logging and maintain integrity.

## Tasks

### 1. The Safety Net
Create a table called `deleted_customers_archive`. Then, create a trigger that **before** a customer is deleted from the `customers` table, it copies their information into the archive.

### 2. Last Updated Tracker
Add a column `last_updated` (DATETIME) to the `products` table. Create a trigger that automatically updates this column to the current timestamp whenever any column in that row is changed.

### 3. Price Protection (Bonus)
Create a trigger that prevents anyone from increasing a product's price by more than 50% in a single update. If they try, the update should fail with an error message.

---

## Instructions
1. Use the knowledge from `theory.sql`.
2. Remember to use `NEW` and `OLD` keywords correctly.
3. Verify your triggers by running `UPDATE` and `DELETE` commands.
