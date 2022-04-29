const { Pool } = require('pg');

const pool = new Pool({
  host: '54.183.12.42',
  user: 'test_user',
  port: 5432,
  password: 'password',
  database: 'test'
})
pool.connect((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected ');
  }
});

module.exports = pool;
// module.exports.queryTest = queryTest;