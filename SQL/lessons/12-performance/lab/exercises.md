# Lab 12: The Speed Surgeon

## Goal
Practice identifying and fixing slow query patterns.

## Preparation
Imagine a "Logs" table with 100 million rows:
- `id`
- `user_id`
- `event_type`
- `event_details` (A very long text field)
- `occurred_at` (Indexed)

## Tasks

### 1. The Resource Hog
You want to see the last 100 events that occurred. 
Write a query that retrieves only the `id`, `user_id`, and `occurred_at` columns. 
**Why is this better than `SELECT *`?**

### 2. The Index Killer
You want to find all events that happened in March 2024. 
Write a **SARGable** query that allows the database to use the index on `occurred_at`.

### 3. The Pattern Search
You are looking for a user whose name starts with "Alex". 
Write a query using `LIKE` that is optimized for index usage.

### 4. Analysis
Run the `EXPLAIN QUERY PLAN` command on one of your queries from the previous labs. 
What does the output tell you about how the database is finding the data?

---

## Instructions
Write your SQL commands and explain your reasoning. Compare with `solution.sql`.
