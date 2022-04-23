COPY products(product_id, name, slogan, description, category, default_price)
FROM '/Users/sabassegovia/Desktop/atilier_data/product.csv'
DELIMITER ','
CSV HEADER;


COPY features(feature_id, product_id, feature, value)
FROM '/Users/sabassegovia/Desktop/atilier_data/features.csv'
DELIMITER ','
CSV HEADER;


COPY styles(style_id, product_id, name, sale_price, original_price, default_style)
FROM '/Users/sabassegovia/Desktop/atilier_data/styles.csv'
DELIMITER ','
CSV HEADER;


COPY photos(photo_id, style_id, url, thumbnail_url)
FROM '/Users/sabassegovia/Desktop/atilier_data/photos.csv'
DELIMITER ','
CSV HEADER;


COPY sku(sku_id, style_id, size, quantity)
FROM '/Users/sabassegovia/Desktop/atilier_data/skus.csv'
DELIMITER ','
CSV HEADER;


COPY related(related_id, product_id, related_product_id)
FROM '/Users/sabassegovia/Desktop/atilier_data/related.csv'
DELIMITER ','
CSV HEADER;
