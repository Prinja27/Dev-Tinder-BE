const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    // Read the token from request cookies
    const { token } = req.cookies;
    if (!token) {
      res.status(404).send("invalid token");
    }
    // Validate the token
    const decodedObj = await jwt.verify(token, "DEV@Tinder$790");
    const { _id } = decodedObj;

    // Find the user

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(404).send(`Error: ${error.message}`);
  }
};

module.exports = userAuth;
