const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://shiba-website:XcAOCEU47u23fWYm@cluster0.7cy61.mongodb.net/?retryWrites=true&w=majority";

const createProduct = async (req, res, next) => {
  console.log("req.body", req.body);
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  const client = new MongoClient(url);

  try {
    await client.connect(); // Establish the connection to MongoDB server.
    const db = await client.db("products_test"); // Get access to the database.
    const result = await db.collection("products").insertOne(newProduct); // Access a collection in that database.
    console.log("result: ", result);
  } catch (error) {
    console.error("eror: ", error);
    return res.json({ message: "Could not store data." });
  }

  client.close();

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
