const express = require("express");

const app = express();

app.get("/user/:userid/:name/:password", (req, res) => {
  console.log(req.params);

  res.send({ firstname: "Akshay", lastName: "Prinja" });
});

app.listen(7777, () => {
  console.log("express sever created 7777...");
});
