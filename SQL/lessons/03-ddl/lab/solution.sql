-- Lab 03: DDL Solutions

-- 1. Create Products Table
CREATE TABLE products (
    product_id INTEGER PRIMARY KEY,
    name TEXT,
    price DECIMAL(10, 2),
    stock_quantity INTEGER
);

-- 2. Add Supplier Column
ALTER TABLE products ADD COLUMN supplier_name TEXT;

-- 3. Cleanup
CREATE TABLE temp_log (
    id INTEGER PRIMARY KEY,
    log_msg TEXT
);

DROP TABLE temp_log;
