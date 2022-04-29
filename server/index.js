const express = require('express');
const app = express();
const port = 3005;
const models = require('./models/models.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  // console.log(req.query);
  let page = req.query.page || 1;
  let count = req.query.count || 5;
  models.getProducts({
    page: page,
    count: count
  })
  .then((result) => {
    // console.log('back in the server then\n==================\n', result.rows);
    res.status(200).send(result.rows);
  })
    .catch((err) => {
      console.log(err);
    console.log('back in the server catch');
    res.status(404).send();
  })
})


app.get('/products/:product_id', (req, res) => {
  // console.log(req.params.product_id);
  let product_id = req.params.product_id;
  models.getProductInformation({
    product_id: product_id
  })
    .then((response) => {
      //for the javascript way
      // console.log(response[0].rows);
      // console.log(response[1].rows);
      // let tempInfoObj = response[0].rows[0];
      // let tempFeaturesObj = response[1].rows;
      // tempInfoObj["features"] = response[1].rows;
      // console.log(tempInfoObj);
      //for the javascript way

      // console.log(response.rows[0]);
      res.status(200).send(response.rows[0]);
    })
    .catch((err) => {
      console.log('error in get info catch:', err);
      res.status(404).send('bad');
    })
})


app.get('/products/:product_id/styles', (req, res) => {
  // console.log(req.params.product_id);
  let product_id = req.params.product_id;
  models.getProductStyles({
    product_id: product_id
  })
    .then((response) => {

      // console.log(response.rows);
      //getting data, manually manipulating using JS
      // console.log(response[0]);
      // console.log(response[1]);
      // console.log(response[2]);
      // let tempStylesObj = {
      //   product_id: Number(product_id),
      //   result: response[0].rows
      // }
      // tempStylesObj.result['photos'] = response[1].rows;
      // tempStylesObj.result['skus'] = response[2].rows;
      // console.log(tempStylesObj.result);
      //getting data, manually manipulating using JS

      res.status(200).send(response.rows);
    })
    .catch((err) => {
      console.log(err);
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
    // console.log(result.rows);
    let temp_related_id = [];
    (result.rows).forEach(row => {
      temp_related_id.push(row.related_product_id);
    });
      // console.log(temp_related_id);

    res.status(200).send(temp_related_id);
  })
    .catch((err) => {
      console.log(err);
    console.log('error in product related catch');
    res.status(404).send('bad');
  })
})


app.listen(port, () => {
  // models.queryTest()
  //   .then((res) => {
  //     console.log(res.rows[0]);
  //     console.log('if line above ===  Cammo Onesie\nserver is running, good job!');
  //   })
  //   .catch((err) => {
  //     console.log('in listen catch:', err);
  // })
  console.log('listening on port:',port )
})