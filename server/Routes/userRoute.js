const express = require("express");
const {
  registerUser,
  loginUser,
  findUserById,
  getListUser,
} = require("../Controllers/userController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", findUserById);
router.get("/", getListUser);

module.exports = router;
