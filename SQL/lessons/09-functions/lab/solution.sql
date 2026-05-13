-- Lab 09: Built-in Functions Solutions

-- 1. Professional Names
SELECT UPPER(TRIM(customer_name)) AS cleaned_name 
FROM web_orders;

-- 2. Price Formatting
SELECT ROUND(raw_price, 2) AS final_price 
FROM web_orders;

-- 3. Yearly Report (SQLite syntax)
SELECT STRFTIME('%Y', order_timestamp) AS order_year 
FROM web_orders;

-- 4. Shipping Status
SELECT customer_name,
       CASE 
           WHEN raw_price > 100 THEN 'Free Shipping'
           ELSE 'Standard Shipping'
       END AS shipping_status
FROM web_orders;
