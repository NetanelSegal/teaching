# Lab 13: The SQL Grandmaster

## Goal
Practice using Common Table Expressions and Window Functions to solve complex data challenges.

## Preparation
Imagine a "Company Sales" database:
- `sales` (`id`, `salesperson_id`, `amount`, `sale_date`)
- `salespeople` (`id`, `name`, `team_name`)

## Tasks

### 1. The Clean Break (CTE)
Use a CTE to first calculate the total sales for each `salesperson_id`. Then, in the main query, join this CTE with the `salespeople` table to display the salesperson's name and their total sales.

### 2. Team Rankings (Window Function)
For each team, rank the salespeople based on their total sales (highest sales = Rank 1). Display the salesperson's name, team name, total sales, and their rank within the team.

### 3. Progressive Sales (Bonus)
Use a Window Function to calculate a **Running Total** of sales for each salesperson, ordered by the `sale_date`.

---

## Instructions
Write your SQL queries and verify them against the `solution.sql`.
