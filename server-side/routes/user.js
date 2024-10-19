const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

router.post("/register", userController.signup);

router.post("/login", (req, res, next) => {
  console.log(req.body);
  res.json({ title: "Hello" });
});

module.exports = router;
