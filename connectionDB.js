require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.DB_URL;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

module.exports = connectDB;
