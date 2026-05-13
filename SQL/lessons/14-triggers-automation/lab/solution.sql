-- Lab 14 Solutions

-- 1. The Safety Net
CREATE TABLE deleted_customers_archive (
    id INTEGER,
    name TEXT,
    email TEXT,
    deletion_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER archive_deleted_customer
BEFORE DELETE ON customers
BEGIN
    INSERT INTO deleted_customers_archive (id, name, email)
    VALUES (OLD.id, OLD.name, OLD.email);
END;

-- 2. Last Updated Tracker
ALTER TABLE products ADD COLUMN last_updated DATETIME;

CREATE TRIGGER update_timestamp
AFTER UPDATE ON products
BEGIN
    UPDATE products 
    SET last_updated = CURRENT_TIMESTAMP 
    WHERE id = NEW.id;
END;

-- 3. Price Protection
CREATE TRIGGER prevent_huge_price_hike
BEFORE UPDATE OF price ON products
WHEN NEW.price > OLD.price * 1.5
BEGIN
    SELECT RAISE(FAIL, 'Price increase too large! Max 50% allowed.');
END;
