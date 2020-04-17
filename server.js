const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
require('dotenv').config()

const port = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget-tracker-pwa-week18');

// routes here

app.listen(PORT, () => {
  console.log(`App running on port ${port}!`);
});
