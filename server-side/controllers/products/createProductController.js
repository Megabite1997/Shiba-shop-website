const Product = require("../../models/Product"); // Import model

const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = new Product({ name, price });
    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error("error createProduct function: ", error);
    res.status(500).json({ error: "Failed to create product" });
  }
};

module.exports = createProduct;
