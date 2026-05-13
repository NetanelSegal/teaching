# Lab 10: Virtual Windows and Speed Boosts

## Goal
Practice creating views to simplify reporting and indexes to optimize performance.

## Preparation
Imagine a "Library" database with:
- `books` (`id`, `title`, `author_id`, `published_year`, `genre`)
- `authors` (`id`, `name`)

## Tasks

### 1. The Simplified Catalog
Create a VIEW named `v_book_catalog` that displays the book title and the author's name (requires a JOIN). 

### 2. Modern Classics
Create a VIEW named `v_modern_books` that only shows books published after the year 2000.

### 3. Optimization
You notice that searching for books by `genre` is very slow. Create an INDEX named `idx_book_genre` on the `genre` column of the `books` table.

### 4. Cleanup
Delete the `v_modern_books` view.

---

## Instructions
Write your SQL commands and verify them against the `solution.sql`.
