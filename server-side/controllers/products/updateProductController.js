const Product = require("../../models/Product"); // Import the Product model

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get the product ID from the URL
    const updates = req.body; // Get the updates from the request body

    // Find the product by ID and update it
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validations are run
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to update product", error: error.message });
  }
};

module.exports = updateProduct;
