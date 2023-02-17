const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {expiresIn: "30d",});
  res.status(200).json({ msg: "User Created", token });
};

const dashboard = async (req, res) => {
    console.log(req.user);
    const luckyNumber = Math.floor(Math.random() * 1000);
    res.status(200).json({
      msg: `Welcome ${req.user.username} to the Lucky Number API`,
      secret: `Here is your authorized DataTransfer, you luckyNumber is ${luckyNumber}`,
    });
};

module.exports = { login, dashboard };
