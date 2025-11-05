const express = require("express");
const { adminAuth, userAuth } = require("../middlewares/auth");

const app = express();

// app.use("/user", (req, res, next) => {
//   console.log("handling the route user 1");
//   res.send("2nd route handler");
//   next();
// });

// app.use("/user", (req, res, next) => {
//   console.log("handling the route user 1");
//   next();
// });

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("All users fetched");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});

app.listen(7777, () => {
  console.log("express sever created 7777...");
});
