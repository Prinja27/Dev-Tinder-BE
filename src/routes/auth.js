const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());

//api to insert data in user schema
authRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, emailId, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);

  //creating a user and saving it in database
  const user = new User({
    firstName,
    lastName,
    emailId,
    password: passwordHash,
  });
  try {
    await user.save();
    res.send("User created successfully");
  } catch (error) {
    res.status(400).send("Error:" + error.message);
  }
});

// login api
authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });

    if (!user) {
      res.send("invalid credential");
    }
    const isPasswordValid = await user.getPassword(password);
    console.log(isPasswordValid);

    if (isPasswordValid) {
      const token = await user.getJWT();
      res.cookie("token", token);
      res.send("User Login Successful");
    } else {
      res.status(400).send("invalid credential");
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

module.exports = authRouter;
