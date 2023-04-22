const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
