const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const fixtures = require('./data/fixtures');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/cake", (req, res, next) => {
  res.send(JSON.stringify(fixtures.cake));
});

app.listen(port, () => {
  console.log('listening here ', port);
});
