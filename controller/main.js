const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const session = require("express-session");
const Phone = require("../model/products");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/phones", require("../routes/phones.js"));
module.exports = app;
