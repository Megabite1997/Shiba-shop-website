const express = require("express");
const router = express.Router();
const loginController = require("../controllers/auth/loginController");
const registerController = require("../controllers/auth/registerController");
const resetPasswordController = require("../controllers/auth/passwordController");

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/forgot-password", sendResetPasswordEmail); // Request reset email
router.post("/reset-password/:token", resetPasswordController); // Reset password

module.exports = router;
