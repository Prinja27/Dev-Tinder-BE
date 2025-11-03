const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstname: "Akshay", lastName: "Prinja" });
});

app.post("/user", (req, res) => {
  res.send("Data saved successfully to DB");
});

app.delete("/user", (req, res) => {
  res.send("deleted successfully");
});

app.use("/test", (req, res) => {
  res.send("Hello from express server");
});

app.listen(7777, () => {
  console.log("express sever created 7777...");
});
