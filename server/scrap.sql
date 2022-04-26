--Geberal product searches
SELECT * FROM products ORDER BY product_id ASC LIMIT 50 3.451ms

SELECT * FROM products ORDER BY product_id ASC LIMIT 50 OFFSET 1000: 5.136ms

SELECT * FROM products ORDER BY product_id ASC LIMIT 50 OFFSET 250000: 153:580ms

SELECT * FROM products ORDER BY product_id ASC LIMIT 50 OFFSET 500000: 649.507ms

SELECT * FROM products ORDER BY product_id ASC LIMIT 50 OFFSET 750000: 143.061ms

SELECT * FROM products ORDER BY product_id ASC LIMIT 50 OFFSET 999900: 215.507ms


--joinin photos to styles
--gets all of the data needed!
--not formatted
SELECT
styles.style_id,
styles.name,
styles.original_price,
styles.sale_price,
styles.default_style,
--nest {}
photos.url,
photos.thumbnail_url,
--nest {}
--nest {}
sku.sku_id,
sku.size,
sku.quantity
--nest {}
FROM styles
JOIN photos ON styles.style_id = photos.style_id
JOIN sku ON styles.style_id = sku.style_id;


--retrieves the data for Product info
SELECT
products.product_id,
products.name,
products.slogan,
products.description,
products.category,
products.default_price,
--nest {}
features.feature,
features.value
-- nest {}
FROM products
JOIN features ON products.product_id = features.product_id;


--related products
SELECT related.related_product_id FROM related WHERE product_id = (insert id here)



CREATE INDEX index_name ON table_name [USING method]
(
    column_name [ASC | DESC] [NULLS {FIRST | LAST }],
    ...
);