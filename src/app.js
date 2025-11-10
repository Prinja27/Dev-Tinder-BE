const express = require("express");
const connectDB = require("./config/database");
const { adminAuth, userAuth } = require("./middlewares/auth");
const User = require("./models/user");

const app = express();

app.use(express.json());

//api to insert data in user schema
app.post("/signup", async (req, res) => {
  //creating a user and saving it in database
  const user = new User(req.body);
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
