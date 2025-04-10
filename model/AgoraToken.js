const mongoose = require("mongoose");

const AgoraTokenSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true, // one active token per user
  },
  token: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("AgoraToken", AgoraTokenSchema);
