// const express = require('express');
// const app = express();
// const { Pool } = require('pg');
// const pool = new Pool({
//   host: 'localhost',
//   user: 'sabassegovia',
//   port: 5432,
//   password: 'cowspot!',
//   database: 'productsdb'
// })


// pool.connect((err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('connected');
//   }
// });

// const queryTest = () => {
//   pool
//     .query(`select * from products where product_id = 36531`,
//   )
//     .then(res => {
//       console.log('============',res.rows,'============');
//     })
//     .catch(err => {
//       console.log('in catch queryTest');
//     })
//     pool.end;
// };

// module.exports.queryTest = queryTest;