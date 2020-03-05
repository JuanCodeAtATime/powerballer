const express = require("express");
const router = express.Router();

const numbersController = require("../../controller/numbersController");
// const keys = require("../../config/keys");
// const User = require("../../models/User");

// Matches with "/api/numbers"
router.route("/")
    .get(numbersController.findAll)
    .post(numbersController.create);

// Matches with "/api/numbers/:id"
router
    .route("/:id")
    .get(numbersController.findById)
    .put(numbersController.update)
    .delete(numbersController.remove);

module.exports = router;
