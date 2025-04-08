require("dotenv").config();

module.exports = {
  agora: {
    appId: process.env.APP_ID,
    appCertificate: process.env.APP_CERTIFICATE,
    channelName: process.env.CHANNEL_NAME,
    uid: process.env.UID,
  },
};
