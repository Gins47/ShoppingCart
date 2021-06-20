require("dotenv").config();
const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoute");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
