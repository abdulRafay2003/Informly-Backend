const express = require("express");
const {
  sendSms,
  getCoordinates,
  getAgoraToken,
} = require("../controller/smsController");
// const validateInput = require('../middleware/validateInput');

const router = express.Router();
router.get("/test", (req, res) => {
  res.send({ message: "Success" });
});
router.post("/send", sendSms);

router.get("/coordinates", getCoordinates);

router.get("/agora-token", getAgoraToken);

module.exports = router;
