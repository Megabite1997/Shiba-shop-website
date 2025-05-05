const express = require("express");
const router = express.Router();
const getUsers = require("../controllers/users/getUserController");
const updateUser = require("../controllers/users/updateUserController");
const deleteUser = require("../controllers/users/deleteUserController");
const verifyToken = require("../middleware/authen/verifyToken");
const checkPermission = require("../middleware/author/checkPermissions");

router.get("/", verifyToken, checkPermission(["admin"]), getUsers); // Only admin can list users
router.put("/:id", verifyToken, checkPermission(["admin", "user"]), updateUser); // Admin or the user themselves can update
router.delete("/:id", verifyToken, checkPermission(["admin"]), deleteUser); // Only admin can delete

module.exports = router;
