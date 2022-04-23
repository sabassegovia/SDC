db = require('../db/db.js')

//queries

const getProducts = (params) => {
  //setting the starting position to count by
  let offset = (params.page - 1) * params.count;
  console.log(offset);
  console.log(params)
  let qString = 'SELECT product_id, name, slogan, description, category, default_price FROM products ORDER BY product_id ASC LIMIT $1 OFFSET $2;';
  let values = [params.count, offset];
  return db.query(qString, values);
}

const getRelatedProducts = (params) => {
  let qString = 'SELECT related_product_id FROM related WHERE product_id = $1;'
  let values = [params.product_id];
  return db.query(qString, values);
}

const getProductStyles = (params) => {
  let qString = `SELECT * FROM styles WHERE product_id = $1;`;
  let values = [params.product_id];
  return db.query(qString, values);
}

const getProductInformation = (params) => {
  let qString = `SELECT * FROM products WHERE product_id = $1;`;
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