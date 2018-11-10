const express = require("express");
const router = express.Router();
const landing = require("./landing");
const day = require("./day");

router.use("/", landing);
router.use("/api", day);

module.exports = router;
