const express = require("express");
const landingController = require("../controllers/LandingController");
const router = express.Router();

router.get("/", landingController.getLanding);

module.exports = router;
