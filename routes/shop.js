const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const product = adminData.products;
  //res.sendFile(path.join(rootDir, "views", "shop.ejs"));
  res.render("shop", { title: "FSW 1 LUAR BIASA", products: products });
});

module.exports = router;
