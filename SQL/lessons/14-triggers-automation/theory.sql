-- Module 14: Triggers & Automation Theory
-- Automating inventory and audit logs

-- 1. Setup Tables
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    stock INTEGER
);

CREATE TABLE audit_log (
    id INTEGER PRIMARY KEY,
    action TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, stock) VALUES ('Laptop', 10), ('Mouse', 50);

-- 2. Create an "Inventory" Trigger
-- Automatically decrease stock when a sale (conceptual) happens via a dummy update
CREATE TRIGGER update_stock_after_sale
AFTER UPDATE OF stock ON products
WHEN NEW.stock < OLD.stock
BEGIN
    INSERT INTO audit_log (action) 
    VALUES ('Product ' || NEW.name || ' stock decreased to ' || NEW.stock);
END;

-- 3. Test the Trigger
UPDATE products SET stock = 9 WHERE name = 'Laptop';

-- 4. Check the results
SELECT * FROM audit_log;

-- 5. Data Integrity Trigger (Prevent negative stock)
CREATE TRIGGER prevent_negative_stock
BEFORE UPDATE ON products
FOR EACH ROW
WHEN NEW.stock < 0
BEGIN
    SELECT RAISE(FAIL, 'Stock cannot be negative!');
END;

-- 6. Test the failure
-- UPDATE products SET stock = -5 WHERE name = 'Mouse'; -- This will throw an error
