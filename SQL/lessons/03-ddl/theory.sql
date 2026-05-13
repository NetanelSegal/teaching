-- Module 03: DDL Theory
-- Building a "Video Game Library"

-- 1. Creating a Table
CREATE TABLE games (
    id INTEGER PRIMARY KEY,
    title TEXT,
    genre TEXT,
    release_year INTEGER
);

-- 2. Adding a column (ALTER)
ALTER TABLE games ADD COLUMN developer TEXT;

-- 3. Renaming a column (RDBMS dependent, but standard-ish)
-- Note: SQLite syntax might differ from PostgreSQL/MySQL
-- ALTER TABLE games RENAME COLUMN genre TO category;

-- 4. Deleting data but keeping structure
TRUNCATE TABLE games;

-- 5. Deleting the table entirely
DROP TABLE games;
