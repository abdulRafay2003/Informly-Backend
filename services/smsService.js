const axios = require("axios");
const twilio = require("twilio");
const smsConfig = require("../config/smsConfig");
const agoraConfig = require("../config/agoraConfig");
const { RtcTokenBuilder, RtcRole } = require("agora-access-token");

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

function generateAgoraToken() {
  // if (!CHANNEL_NAME || !UID) {
  //   throw new Error("channelName and uid are required");
  // }

  // Role: PUBLISHER for video calling (can publish and subscribe)
  const role = RtcRole.PUBLISHER;

  // Token expiration in seconds (e.g., 1 hour)
  const expireTimeInSeconds = 3600;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const privilegeExpiredTs = currentTimestamp + expireTimeInSeconds;

  // Build the token
  const token = RtcTokenBuilder.buildTokenWithUid(
    agoraConfig.agora.appId,
    agoraConfig.agora.appCertificate,
    agoraConfig.agora.channelName,
    agoraConfig.agora.uid,
    role,
    privilegeExpiredTs
  );

  return token;
}

module.exports = { sendSmsTwilio, generateAgoraToken };
