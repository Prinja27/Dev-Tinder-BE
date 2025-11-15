const express = require("express");
const connectDB = require("./config/database");
const userAuth = require("./middlewares/auth");
const bcrypt = require("bcryptjs");
const User = require("./models/user");
const cookieParser = require("cookie-parser");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cookieParser());

//api to insert data in user schema
app.post("/signup", async (req, res) => {
  const { firstName, lastName, emailId, password } = req.body;
  //validation of the data
  // validations done on schema level
  // encrypt the password
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
app.post("/login", async (req, res) => {
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

// get profile using jwt authentication
app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send(`Error: ${err.message}`);
  }
});

app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  //Sending connection request
  res.send(user.firstName + " sent connection request");
});

connectDB()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(7777, () => {
      console.log("express sever created 7777...");
    });
  })
  .catch((err) => {
    console.error("DB cannot be connected");
  });
