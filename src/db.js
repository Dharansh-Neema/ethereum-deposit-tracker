const mongoose = require("mongoose");
require("dotenv").config();
const connectWithDB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected with database"))
    .catch((error) => {
      console.log("Database connection issue");
      console.log(error);
      process.exit(1);
    });
};
module.exports = connectWithDB;
