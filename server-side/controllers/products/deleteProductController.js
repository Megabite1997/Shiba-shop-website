const Product = require("../../models/Product"); // Import the Product model

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get the product ID from the URL

    // Find the product by ID and delete it
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to delete product", error: error.message });
  }
};

module.exports = deleteProduct;
