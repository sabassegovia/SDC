--Geberal product searches
SELECT * FROM products ORDER BY product_id ASC LIMIT 50 3.451ms

SELECT * FROM products ORDER BY product_id ASC LIMIT 50 OFFSET 1000: 5.136ms

SELECT * FROM products ORDER BY product_id ASC LIMIT 50 OFFSET 250000: 153:580ms

SELECT * FROM products ORDER BY product_id ASC LIMIT 50 OFFSET 500000: 649.507ms

SELECT * FROM products ORDER BY product_id ASC LIMIT 50 OFFSET 750000: 143.061ms

SELECT * FROM products ORDER BY product_id ASC LIMIT 50 OFFSET 999900: 215.507ms