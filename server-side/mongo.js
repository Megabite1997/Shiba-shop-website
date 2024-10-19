const { MongoClient } = require("mongodb");

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  const client = new MongoClient(process.env.MONGO_URI);

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
  const client = new MongoClient(process.env.MONGO_URI);

  let products;

  try {
    await client.connect();
    const db = client.db("products_test");
    products = await db.collection("products").find().toArray();
  } catch (error) {
    console.error(error);
    return res.json({ message: "Could not retrieve products." });
  }

  client.close();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
