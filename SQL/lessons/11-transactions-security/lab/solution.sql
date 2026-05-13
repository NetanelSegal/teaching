-- Lab 11: Transactions & Security Solutions

-- 1. The Atomic Sale
BEGIN TRANSACTION;

UPDATE products 
SET stock_count = stock_count - 2 
WHERE id = 5;

INSERT INTO orders (product_id, quantity, order_date) 
VALUES (5, 2, CURRENT_DATE);

COMMIT;

-- 2. The Mistaken Order
BEGIN TRANSACTION;

UPDATE products SET price = price * 1.5;

-- Wait, I shouldn't have done that for ALL products!
ROLLBACK;

-- 3. Permission Control
-- To see only names:
-- GRANT SELECT (name) ON employees TO 'intern';

-- To prevent deletion:
-- REVOKE DELETE ON employees FROM 'intern';
