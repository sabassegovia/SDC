CREATE SCHEMA productSchema;
CREATE DATABASE productsdb;

DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS related;
DROP TABLE IF EXISTS styles;
DROP TABLE IF EXISTS sku;
DROP TABLE IF EXISTS photos;


CREATE TABLE products (
 product_id INT UNIQUE NOT NULL,
 slogan VARCHAR(500) NOT NULL,
 name VARCHAR(100) NOT NULL,
 description VARCHAR(500) NOT NULL,
 category VARCHAR(100) NOT NULL,
 default_price BIGINT NOT NULL
);


ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);

CREATE TABLE features (
 feature_id INT UNIQUE NOT NULL,
 product_id INT NOT NULL,
 feature VARCHAR(100) NOT NULL,
 value VARCHAR(100) NOT NULL
);


ALTER TABLE features ADD CONSTRAINT features_pkey PRIMARY KEY (feature_id);

CREATE TABLE styles (
 style_id INT UNIQUE NOT NULL,
 product_id INT NOT NULL,
 name VARCHAR(100) NOT NULL,
 sale_price VARCHAR(10000) NOT NULL,
 original_price VARCHAR(100) NOT NULL,
 default_style BOOLEAN NOT NULL
);


ALTER TABLE styles ADD CONSTRAINT styles_pkey PRIMARY KEY (style_id);

CREATE TABLE related (
 related_id INT UNIQUE NOT NULL,
 product_id INT NOT NULL,
 related_product_id INT NOT NULL
);


ALTER TABLE related ADD CONSTRAINT related_pkey PRIMARY KEY (related_id);

CREATE TABLE photos (
 photo_id INT UNIQUE NOT NULL,
 style_id INT NOT NULL,
 url TEXT NOT NULL,
 thumbnail_url TEXT NOT NULL
);


ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (photo_id);

CREATE TABLE sku (
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