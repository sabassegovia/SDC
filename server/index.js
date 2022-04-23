const express = require('express');
const app = express();
const port = 3005;
const models = require('./models/models.js');


app.get('/products', (req, res) => {
  console.log(req.query);
  let page = req.query.page || 1;
  let count = req.query.count || 5;
  models.getProducts({
    page: page,
    count: count
  })
  .then((result) => {
    console.log('back in the server then\n==================\n', result.rows);
    res.status(200).send(result.rows);
  })
  .catch((err) => {
    console.log('back in the server catch');
    res.status(404).send();
  })
})


app.get('/products/:product_id', (req, res) => {
  console.log(req.params.product_id);
  let product_id = req.params.product_id;

  models.getProductInformation({
    product_id: product_id
  })
    .then((result) => {
      console.log(result.rows);
      res.status(200).send('good');
    })
    .catch((err) => {
      console.log('error in get info catch');
      res.status(404).send('bad');
  })
})


app.get('/products/:product_id/styles', (req, res) => {
  // console.log(req.params.product_id);
  let product_id = req.params.product_id;
  models.getProductStyles({
    product_id: product_id
  })
    .then((result) => {
      console.log(result.rows);
      res.status(200).send('good');
    })
    .catch((err) => {
      console.log('error is get product styles catch');
      res.status(404).send('bad');
  })
})


app.get(`/products/:product_id/related`, (req, res) => {
  // console.log(req.params.product_id);
  let product_id = (req.params.product_id);
  let id = req.params.product_id;

  models.getRelatedProducts({
    product_id: id
  })
  .then((result) => {
    console.log(result.rows);
    res.status(200).send('good');
  })
    .catch((err) => {
      console.log(err);
    console.log('error in product related catch');
    res.status(404).send('bad');
  })
})


app.listen(port, () => {
  models.queryTest()
    .then((res) => {
      console.log(res.rows[0]);
      console.log('if line above ===  Cammo Onesie\nserver is running, good job!');
    })
    .catch((err) => {
      console.log('in catch listen');
  })
  console.log('listening on port:',port )
})