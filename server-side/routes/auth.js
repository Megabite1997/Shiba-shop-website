const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const authMiddleware = require("../middleware/auth");

router.post("/register", userController.signup);

router.post("/login", userController.login);

router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
