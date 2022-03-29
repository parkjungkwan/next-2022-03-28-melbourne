require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env;

app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

app.listen(port, () => {
  console.log({"현재 시간 : ":new Date().toLocaleString()})
})