const express = require("express");
const router = express.Router();
const { getProducts, createProduct } = require("../mongo");
const mongooseMiddleware = require('../mongoose')

router.get("/", getProducts);

router.get('/with-mongoose', mongooseMiddleware.createProduct)

router.post("/", createProduct);



module.exports = router;
