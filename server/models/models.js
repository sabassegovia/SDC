db = require('../db/db.js')

//queries

const getProducts = (params) => {
  let offset = (params.page - 1) * params.count;
  // console.log(offset);
  // console.log(params)
  let qString = 'SELECT products.product_id AS "id", products.name, products.slogan, products.description, products.category, products.default_price FROM products ORDER BY products.product_id ASC LIMIT $1 OFFSET $2;';
  let values = [params.count, offset];
  return db.query(qString, values);
}

const getProductInformation = (params) => {
  const qString = `SELECT products.product_id AS "id", products.name, products.slogan, products.description, products.category, products.default_price,
  (SELECT json_agg(
    json_build_object(
      'feature', features.feature,
      'value', features.value)
    )
    FROM features
    WHERE features.product_id = products.product_id
    ) features
    FROM products
    WHERE products.product_id = $1;`;
  let values = [params.product_id];
  return db.query(qString, values);
}

const getProductStyles = (params) => {
  let qString = `SELECT styles.style_id AS style_id, styles.name, styles.original_price, styles.sale_price, styles.default_style as "default?",

  (SELECT json_agg(
  json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url)) AS photos
  FROM photos
  WHERE photos.style_id = styles.style_id),

  (SELECT json_object_agg(sku.sku_id, json_build_object('quantity', sku.quantity, 'size', sku.size)) AS skus
  FROM sku
  WHERE sku.style_id = styles.style_id)

FROM styles
WHERE styles.product_id = $1`;
  let values = [params.product_id];
  return db.query(qString, values);
  }

const getRelatedProducts = (params) => {
  let qString = `SELECT array_agg(related.related_product_id) AS related
  FROM related
    WHERE related.product_id = $1;`
  let values = [params.product_id];
  return db.query(qString, values);
}

const queryTest = () => {
  return db.query(`select name from products where product_id = 1`,
  )
};


module.exports.getProducts = getProducts;
module.exports.queryTest = queryTest;
module.exports.getRelatedProducts = getRelatedProducts;
module.exports.getProductStyles = getProductStyles;
module.exports.getProductInformation = getProductInformation;