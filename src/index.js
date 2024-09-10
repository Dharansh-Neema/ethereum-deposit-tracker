// src/index.js
const connectDB = require("./db");
const trackDeposits = require("./tracker");
require("dotenv").config();
// Start the application
(async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    await trackDeposits();
  } catch (err) {
    console.error("Error starting the application:", err);
  }
})();
