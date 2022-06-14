CREATE SCHEMA productSchema;
CREATE DATABASE productsdb;


CREATE TABLE IF NOT EXISTS products (
 product_id INT UNIQUE NOT NULL,
 slogan VARCHAR(500) NOT NULL,
 name VARCHAR(100) NOT NULL,
 description VARCHAR(500) NOT NULL,
 category VARCHAR(100) NOT NULL,
 default_price VARCHAR(50) NOT NULL
);


ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);

CREATE TABLE IF NOT EXISTS features (
 feature_id INT UNIQUE NOT NULL,
 product_id INT NOT NULL,
 feature VARCHAR(100) NOT NULL,
 value VARCHAR(100) NOT NULL
);


ALTER TABLE features ADD CONSTRAINT features_pkey PRIMARY KEY (feature_id);

CREATE TABLE IF NOT EXISTS styles (
 style_id INT UNIQUE NOT NULL,
 product_id INT NOT NULL,
 name VARCHAR(100) NOT NULL,
 sale_price VARCHAR(10000) NOT NULL,
 original_price VARCHAR(100) NOT NULL,
 default_style BOOLEAN NOT NULL
);


ALTER TABLE styles ADD CONSTRAINT styles_pkey PRIMARY KEY (style_id);

CREATE TABLE IF NOT EXISTS related (
 related_id INT UNIQUE NOT NULL,
 product_id INT NOT NULL,
 related_product_id INT NOT NULL
);


ALTER TABLE related ADD CONSTRAINT related_pkey PRIMARY KEY (related_id);

CREATE TABLE IF NOT EXISTS photos (
 photo_id INT UNIQUE NOT NULL,
 style_id INT NOT NULL,
 url TEXT NOT NULL,
 thumbnail_url TEXT NOT NULL
);


ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (photo_id);

CREATE TABLE IF NOT EXISTS sku (
 sku_id INT UNIQUE NOT NULL,
 style_id INT NOT NULL,
 size VARCHAR(10) NOT NULL,
 quantity INT NOT NULL
);


ALTER TABLE sku ADD CONSTRAINT sku_pkey PRIMARY KEY (sku_id);

ALTER TABLE features ADD CONSTRAINT features_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE styles ADD CONSTRAINT styles_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE related ADD CONSTRAINT related_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE photos ADD CONSTRAINT photos_style_id_fkey FOREIGN KEY (style_id) REFERENCES styles(style_id);
ALTER TABLE sku ADD CONSTRAINT sku_style_id_fkey FOREIGN KEY (style_id) REFERENCES styles(style_id);

--WHERE INDEXING
CREATE INDEX related_product_id_index ON related(product_id);
CREATE INDEX features_id_index ON features(product_id);
CREATE INDEX products_product_id ON products(product_id);
CREATE INDEX photo_style_id_index ON photos(style_id);
CREATE INDEX styles_style_id_index ON styles(style_id);
CREATE INDEX styles_product_id_index ON styles(product_id);
CREATE INDEX sku_style_id_index ON styles(style_id);
CREATE INDEX features_product_id_index ON features(product_id);
