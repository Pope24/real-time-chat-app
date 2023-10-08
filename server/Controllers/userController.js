const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const createToken = (_id) => {
  const jwtKey = process.env.JWT_TOKEN;
  return jwt.sign({ _id }, jwtKey, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    console.log(req.body);
    let user = await userModel.findOne({ email });
    if (user) return res.status(400).json("User used email already exist...");
    if (!name || !email || !password)
      return res.status(400).json("All fields must be required...");
    if (!validator.isEmail(email))
      return res.status(400).json("Email must be valid email...");
    if (!validator.isStrongPassword(password))
      return res.status(400).json("Password must be a strong password");

    user = new userModel({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    const token = createToken(user._id);
    return res.status(200).json({ id: user._id, name, email, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) return res.status(400).json("Invalid email or password...");
  const isValidPassword = bcrypt.compare(password, user.password);
  if (!isValidPassword)
    return res.status(400).json("Invalid email or password...");
  const token = createToken(user._id);
  return res.status(200).json({ _id: user._id, name: user.name, email, token });
};

const findUserById = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);
    if (!user) return res.status(400).json("Can not find user by id...");
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getListUser = async (req, res) => {
  try {
    const users = await userModel.find();
    if (users.length == 0) return res.status(204).json("Empty list user...");
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
module.exports = {
  registerUser,
  loginUser,
  findUserById,
  getListUser,
};
