const express = require("express");
const router = express.Router();
const numberRoutes = require("./numbers");

// Number routes
router.use("/numbers", numberRoutes);

module.exports = router;
