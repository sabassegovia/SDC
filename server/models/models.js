db = require('../db/db.js')

//queries

const getProducts = (params) => {
  let offset = (params.page - 1) * params.count;
  console.log(offset);
  console.log(params)
  let qString = 'SELECT product_id, name, slogan, description, category, default_price FROM products ORDER BY product_id ASC LIMIT $1 OFFSET $2;';
  let values = [params.count, offset];
  return db.query(qString, values);
}

const getProductInformation = (params) => {
  const qString = `SELECT products.product_id, products.slogan, products.name, products.description, products.category, products.default_price,
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

  // console.log(params.product_id)
  // var qString = `SELECT products.product_id, products.name, products.slogan, products.category, products.default_price FROM products WHERE products.product_id = $1;`;
  // var values = [params.product_id];

  // var queries = [];
  // queries.push(db.query(qString, values));

  // qString = `SELECT features.feature, features.value FROM features WHERE features.product_id = $1;`;
  // values = [params.product_id];
  // queries.push(db.query(qString, values));
  // return Promise.all(queries);
}

const getProductStyles = (params) => {
  let qString = `SELECT
    styles.style_id,
    styles.name,
    styles.original_price,
    styles.sale_price,
    default_style AS "default?",
      (SELECT
        json_agg(
          json_build_object(
            'thumbnail_url', photos.thumbnail_url,
            'url', photos.url
          )
        )
        FROM photos
        WHERE photos.style_id = styles.style_id
      ) photos,
      (SELECT
        json_object_agg(
          sku.sku_id,
            json_build_object(
              'quantity', sku.quantity,
              'size', sku.size
            )
        )
        FROM sku
        WHERE sku.style_id = styles.style_id
      ) skus
      FROM styles
      WHERE styles.style_id IN (
        SELECT styles.style_id
        FROM styles
        WHERE styles.product_id = $1
      )
      ORDER BY styles.style_id;`;
  let values = [params.product_id];
  return db.query(qString, values);
  // var queries = [];
  // var values = [params.product_id];

  // //get styles attribute
  // var qString = `SELECT styles.style_id, styles.name, styles.sale_price, styles.default_style FROM styles WHERE styles.product_id = $1;`;
  // queries.push(db.query(qString, values));

  // //get the photo information
  // qString = `SELECT photos.thumbnail_url, photos.url FROM photos WHERE photos.style_id IN (SELECT styles.style_id FROM styles WHERE styles.product_id = $1);`;
  // queries.push(db.query(qString, values));

  // //get the skus information
  // qString = `SELECT sku.sku_id, sku.size, sku.quantity FROM sku WHERE sku.style_id IN (SELECT styles.style_id FROM styles WHERE styles.product_id = $1);`;
  // queries.push(db.query(qString, values));

  // return Promise.all(queries);

}

const getRelatedProducts = (params) => {
  let qString = 'SELECT related.related_product_id FROM related WHERE product_id = $1;'
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