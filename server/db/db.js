const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'sabassegovia',
  port: 5432,
  // password: 'cowspot!',
  database: 'productsdb'
})

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected');
  }
});

module.exports = pool;
// module.exports.queryTest = queryTest;