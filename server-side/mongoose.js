// const mongoose = require('mongoose')

const Product = require("./models/product");

// mongoose.connect('mongodb+srv://shiba-website:XcAOCEU47u23fWYm@cluster0.7cy61.mongodb.net/products_test?retryWrites=true&w=majority').then(() =>{
//     console.log('Connected to database!')
// }).catch(() =>{
//     console.log('Connection failed!')
// })
// connection between our backend and MongoDB database.
// don't have to open, or close each time we create a new product.
// All managed by Mongoose.

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  console.log("createdProduct: ", createdProduct);
  // MongoDB auto generate objectID before sending to save on database
  // look on the console.

  console.log("createdProduct.id", createdProduct.id);
  // Mongoose has a helper, "virtual getter", ".id" property, will get ObjectId as a string.

  console.log("createdProduct._id", createdProduct._id);
  // "._id" will get as an object.

  const result = await createdProduct.save(); // 'save()', mongoose method, return promise.

  console.log("result");

  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  // return an array by default of Mongoose.
  // doesn't return real promise, if you want real return promise, use "exec()".

  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
