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
    const db = client.db("products_test"); // Get access to the database.
    await db.collection("products").insertOne(newProduct); // Access a collection in that database.
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }

  client.close();
  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);

  let products;

  try {
    await client.connect();
    const db = client.db("products_test");
    products = await db.collection("products").find().toArray();

  } catch (error) {
    console.error(error)
    return res.json({ message: "Could not retrieve products." });
  }

  client.close();
  res.json(products); 
 
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
