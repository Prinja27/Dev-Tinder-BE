const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("Namaste Aayush");
});

app.use("/test", (req, res) => {
  res.send("Hello from express server");
});

app.use("/hello", (req, res) => {
  res.send("hello,hello,hello");
});

app.listen(7777, () => {
  console.log("express sever created 7777...");
});
