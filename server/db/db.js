const { Pool } = require('pg');

//54.183.12.42
//52.53.177.10
//13.57.47.161
//13.57.193.100
const pool = new Pool({
  host: '54.193.237.7',
  user: 'test_user',
  port: 5432,
  password: 'testpassword',
  database: 'test'
})
// const pool = new Pool({
//   host: '52.53.177.10',
//   user: 'test_user',
//   port: 5432,
//   password: 'password',
//   database: 'test'
// })

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected ');
  }
});

module.exports = pool;
// module.exports.queryTest = queryTest;