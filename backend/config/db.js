require("dotenv").config();

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log(" MongoDB connection Success");
  } catch (error) {
    console.error(" MongoDB connection Failed");
    process.exit(1);
  }
};

module.exports = connectDB();
