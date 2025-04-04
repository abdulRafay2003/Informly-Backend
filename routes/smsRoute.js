const express = require("express");
const { sendSms, getCoordinates } = require("../controller/smsController");
// const validateInput = require('../middleware/validateInput');

const router = express.Router();

router.post("/send", sendSms);

router.get("/coordinates", getCoordinates);

module.exports = router;
