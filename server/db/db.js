const { Pool } = require('pg');

const pool = new Pool({
  // host: '13.57.47.161',
  host: '13.57.193.100',
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