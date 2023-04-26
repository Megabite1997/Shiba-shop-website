const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.json());

app.use("/admin", adminRoutes);
app.use("/products", shopRoutes);

mongoose
  .connect(
    "mongodb+srv://shiba-website:XcAOCEU47u23fWYm@cluster0.7cy61.mongodb.net/products_test?retryWrites=true&w=majority",
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3005);
  })
  .catch(() => {
    console.error("Connection failed!");
  });
