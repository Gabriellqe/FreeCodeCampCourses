const UserModel = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const { UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const user = await UserModel.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ name: user.name, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid email or password");
  }
  const isPasswordValid = await user.matchPassword(password);
  if (!isPasswordValid) {
    throw new UnauthenticatedError("Invalid email or password");
  }
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ name: user.name, token });
};

module.exports = {
  login,
  register,
};

/* if (!username || !email || !password) {
    throw new BadRequestError("Please provide username, email and password");
  } */
