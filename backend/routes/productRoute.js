const express = require("express");

const router = express.Router();

const { getAllProducts, getProductByID } = require("../controller/productController");

//@desc   GET all product from db
//@route  GET /api/products
//@access Public
router.get("/", getAllProducts);

//@desc   GET a product by id
//@route  GET /api/products/:id
//@access Public
router.get("/:id", getProductByID);

module.exports = router;
