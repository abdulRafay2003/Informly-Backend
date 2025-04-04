const axios = require("axios");
const twilio = require("twilio");
const smsConfig = require("../config/smsConfig");

const sendSmsTwilio = async (to, data) => {
  console.log(to, data);
  const client = twilio(
    smsConfig.twilio.accountSid,
    smsConfig.twilio.authToken
  );
  try {
    const response = await client.messages.create({
      body: data.message,
      from: smsConfig.twilio.fromPhone,
      to,
    });
    return response;
  } catch (error) {
    throw new Error(`Twilio Error: ${error.message}`);
  }
};

module.exports = { sendSmsTwilio };
