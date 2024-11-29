const express = require("express");
const router = express.Router();
const { getUsers, updateUser, deleteUser } = require("../controllers/users");
const verifyToken = require("../middleware/verifyToken");
const checkPermission = require("../middleware/checkPermission");

router.get("/", verifyToken, checkPermission(["admin"]), getUsers); // Only admin can list users
router.put("/:id", verifyToken, checkPermission(["admin", "user"]), updateUser); // Admin or the user themselves can update
router.delete("/:id", verifyToken, checkPermission(["admin"]), deleteUser); // Only admin can delete

module.exports = router;
