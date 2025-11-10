const express = require("express");
const connectDB = require("./config/database");
const { adminAuth, userAuth } = require("./middlewares/auth");
const User = require("./models/user");

const app = express();

//api to insert data in user schema
app.post("/signup", async (req, res) => {
  //creating instance of userModel
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "virat@kohli.com",
    password: "Virat@27",
    age: 38,
    gender: "Male",
  });
  try {
    await user.save();
    res.send("User created successfully");
  } catch (error) {
    res.status(400).send("Error saving the user:" + error.message);
  }
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
