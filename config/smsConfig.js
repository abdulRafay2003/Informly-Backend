require("dotenv").config();

module.exports = {
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    fromPhone: process.env.TWILIO_PHONE,
  },
  textbelt: {
    apiKey: process.env.TEXTBELT_API_KEY,
  },
};
