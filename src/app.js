const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("handling the route user 1");
    next();
  },
  (req, res, next) => {
    //res.send("2nd response");
    console.log("handling the route user 2");
    next();
  },
  (req, res, next) => {
    //res.send("3rd response");
    console.log("handling the route user 3");
    next();
  },
  (req, res, next) => {
    //res.send("4th response");
    console.log("handling the route user 4");
  }
);

app.listen(7777, () => {
  console.log("express sever created 7777...");
});
