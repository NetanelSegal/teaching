-- Module 06: Constraints & Keys Theory
-- Creating a "Social Media" schema

-- 1. Create User table with Column Constraints
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY,        -- Automatically NOT NULL and UNIQUE
    username TEXT NOT NULL UNIQUE,      -- Cannot be empty, must be unique
    email TEXT NOT NULL UNIQUE,         -- Cannot be empty, must be unique
    age INTEGER CHECK (age >= 13),      -- Must be 13 or older
    status TEXT DEFAULT 'active'        -- Defaults to 'active' if not provided
);

-- 2. Create Posts table with a Foreign Key
CREATE TABLE posts (
    post_id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,           -- Who wrote the post?
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Defining the Relationship
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- 3. Testing Constraints (EXPECTED TO FAIL)

-- Fail: Username is NOT NULL
-- INSERT INTO users (email, age) VALUES ('test@email.com', 20);

-- Fail: Age must be >= 13
-- INSERT INTO users (username, email, age) VALUES ('kid', 'kid@email.com', 10);

-- Fail: Foreign Key Violation (User 999 does not exist)
-- INSERT INTO posts (user_id, content) VALUES (999, 'Hello World!');

-- 4. Successful Inserts
INSERT INTO users (username, email, age) VALUES ('jdoe', 'john@doe.com', 25);
INSERT INTO posts (user_id, content) VALUES (1, 'My first post!');
