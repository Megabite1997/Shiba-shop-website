const Product = require("../../models/Product"); // Import the Product model

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      category,
      minPrice,
      maxPrice,
      page = 1,
      limit = 10,
      sortBy = "name",
      sortOrder = "asc",
    } = req.query;

    if (id) {
      // Fetch a single product by ID
      const product = await Product.findById(id);
      if (!product)
        return res.status(404).json({ message: "Product not found" });
      return res.status(200).json(product);
    }

    // Build a dynamic filter object
    const filters = {};
    if (name) filters.name = { $regex: name, $options: "i" }; // Case-insensitive name search
    if (category) filters.category = category; // Exact match for category
    if (minPrice) filters.price = { ...filters.price, $gte: Number(minPrice) }; // Minimum price
    if (maxPrice) filters.price = { ...filters.price, $lte: Number(maxPrice) }; // Maximum price

    // Fetch filtered, paginated, and sorted products
    const products = await Product.find(filters)
      .sort({ [sortBy]: sortOrder === "asc" ? 1 : -1 }) // Sort by specified field
      .skip((page - 1) * limit) // Pagination: Skip records
      .limit(Number(limit)); // Pagination: Limit records per page

    const totalProducts = await Product.countDocuments(filters); // Count total filtered products

    res.status(200).json({
      total: totalProducts,
      page: Number(page),
      totalPages: Math.ceil(totalProducts / limit),
      products,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to fetch products", error: error.message });
  }
};

module.exports = getProduct;
