const express = require("express");
const router = express.Router();
const getProduct = require("../controllers/products/getProductController");
const createProduct = require("../controllers/products/createProductController");
const updateProduct = require("../controllers/products/updateProductController");
const deleteProduct = require("../controllers/products/deleteProductController");
const verifyToken = require("../middleware/authen/verifyToken");
const checkPermission = require("../middleware/author/checkPermissions");

router.get("/:id?", getProduct); // Public: Anyone can view products
router.post("/", verifyToken, checkPermission(["admin"]), createProduct); // Only admin can create
router.put(
  "/:id",
  verifyToken,
  checkPermission(["admin", "editor"]),
  updateProduct,
); // Admin or editor can update
router.delete("/:id", verifyToken, checkPermission(["admin"]), deleteProduct); // Only admin can delete

module.exports = router;
