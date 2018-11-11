const express = require("express");
const router = express.Router();
const dayController = require("../controllers/DayController");

router.get("/days", dayController.getDays);
router.post("/day/submit", dayController.postDay);
module.exports = router;
