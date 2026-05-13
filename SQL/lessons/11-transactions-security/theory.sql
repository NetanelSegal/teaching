-- Module 11: Transactions & Security Theory
-- Simulating a "Bank Transfer"

-- 1. Setup
CREATE TABLE accounts (
    account_id INTEGER PRIMARY KEY,
    owner_name TEXT NOT NULL,
    balance DECIMAL(10, 2) CHECK (balance >= 0)
);

INSERT INTO accounts (owner_name, balance) VALUES 
('Alice', 1000.00),
('Bob', 500.00);

-- 2. A Successful Transaction
BEGIN TRANSACTION;

-- Subtract from Alice
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;

-- Add to Bob
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

-- Everything looks good, save it!
COMMIT;

-- 3. A Failed Transaction (Rollback)
BEGIN TRANSACTION;

-- Subtract from Bob
UPDATE accounts SET balance = balance - 200 WHERE account_id = 2;

-- OOPS! We realize something is wrong (e.g., wrong amount)
-- Cancel everything!
ROLLBACK;

-- 4. ACID: Consistency Check
-- This will fail because of the CHECK constraint (balance >= 0)
-- The transaction would naturally fail and should be rolled back.
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 2000 WHERE account_id = 1; 
-- (Constraint Violation occurs here)
ROLLBACK;

-- 5. Security (Conceptual - SQLite doesn't support GRANT/REVOKE)
-- In MySQL or PostgreSQL:
-- CREATE USER 'readonly_user' IDENTIFIED BY 'password123';
-- GRANT SELECT ON accounts TO 'readonly_user';
-- REVOKE UPDATE ON accounts FROM 'readonly_user';
