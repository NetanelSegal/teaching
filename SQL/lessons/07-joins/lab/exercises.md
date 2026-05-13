# Lab 07: Connecting the Dots

## Goal
Practice combining data from multiple tables using different types of joins.

## Preparation
Imagine a "Library" database with two tables:
- `authors` (`author_id`, `name`, `country`)
- `books` (`book_id`, `title`, `author_id`, `published_year`)

## Tasks

### 1. The Catalog
List all books along with their author's name.

### 2. The Comprehensive List
List **all** authors and the titles of their books. If an author has no books in the system, their name should still appear (with a NULL for the book title).

### 3. Local Talent
Find all books written by authors from the 'USA'. Display the book title and the author's name.

### 4. Author Stats
For each author, find the total number of books they have written. Display the author's name and the count. (Hint: Use `LEFT JOIN` and `GROUP BY`).

---

## Instructions
Write your SQL queries and verify them against the `solution.sql`.
