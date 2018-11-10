const express = require("express");
const router = express.Router();
const dayController = require("../controllers/DayController");

router.get("/days", dayController.getDays);

module.exports = router;
