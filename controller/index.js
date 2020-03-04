const router = require("express").Router();
const userRoutes = require("./members");

// Book routes
router.use("/members", userRoutes);

module.exports = router;
