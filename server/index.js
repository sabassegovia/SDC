const express = require('express');
const app = express();
const port = 3005;
const models = require('./models/models.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  let page = req.query.page || 1;
  let count = req.query.count || 5;
  models.getProducts({
    page: page,
    count: count
  })
  .then((result) => {
    res.status(200).send(result.rows);
  })
    .catch((err) => {
      res.status(404).send('bad');
  })
})


app.get('/products/:product_id', (req, res) => {
  let product_id = req.params.product_id;
  models.getProductInformation({
    product_id: product_id
  })
    .then((response) => {
      res.status(200).send(response.rows[0]);
    })
    .catch((err) => {
      res.status(404).send('bad');
    })
})


app.get('/products/:product_id/styles', (req, res) => {
  let product_id = req.params.product_id;
  models.getProductStyles({
    product_id: product_id
  })
    .then((response) => {
      res.status(200).send({product_id: product_id, results: response.rows});
    })
    .catch((err) => {
      res.status(404).send('bad');
  })
})


app.get(`/products/:product_id/related`, (req, res) => {
  let product_id = (req.params.product_id);
  let id = req.params.product_id;
  models.getRelatedProducts({
    product_id: id
  })
    .then((result) => {
    res.status(200).send(result.rows[0].related);
  })
    .catch((err) => {
      console.log(err);
    res.status(404).send('bad');
  })
})


app.listen(port, () => {
  console.log('listening on port:',port )
})