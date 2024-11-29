const express = require("express");
const router = express.Router();
const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");
const verifyToken = require("../middleware/verifyToken");
const checkPermission = require("../middleware/checkPermission");

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
