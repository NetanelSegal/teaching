-- Lab 13: Advanced Topics Solutions

-- 1. The Clean Break (CTE)
WITH total_per_person AS (
    SELECT salesperson_id, SUM(amount) AS total_sales
    FROM sales
    GROUP BY salesperson_id
)
SELECT sp.name, tpp.total_sales
FROM salespeople sp
JOIN total_per_person tpp ON sp.id = tpp.salesperson_id;

-- 2. Team Rankings
WITH salesperson_stats AS (
    SELECT sp.name, sp.team_name, SUM(s.amount) AS total_sales
    FROM salespeople sp
    JOIN sales s ON sp.id = s.salesperson_id
    GROUP BY sp.id
)
SELECT name, team_name, total_sales,
       RANK() OVER (PARTITION BY team_name ORDER BY total_sales DESC) AS team_rank
FROM salesperson_stats;

-- 3. Progressive Sales (Running Total)
SELECT salesperson_id, sale_date, amount,
       SUM(amount) OVER (PARTITION BY salesperson_id ORDER BY sale_date) AS running_total
FROM sales;
