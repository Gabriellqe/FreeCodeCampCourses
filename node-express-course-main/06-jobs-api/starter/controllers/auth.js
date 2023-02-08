const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");


const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ name: user.name , token });
};

const login = (req, res) => {
  res.send("register");
};

module.exports = {
  login,
  register,
};

/* if (!username || !email || !password) {
    throw new BadRequestError("Please provide username, email and password");
  } */
