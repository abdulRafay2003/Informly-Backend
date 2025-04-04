const mongoose = require("mongoose");

const SmsMessageSchema = new mongoose.Schema({
  message: {
    type: String,
  },

  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
});

const SmsMessage = mongoose.model("SmsMessage", SmsMessageSchema);

module.exports = SmsMessage;
