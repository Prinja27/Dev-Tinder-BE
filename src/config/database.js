const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://aayushprinja763_db_user:SCQoR72VCOT97rGW@cluster0.jzxsm8k.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
