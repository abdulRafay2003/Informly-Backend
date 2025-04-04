const express = require("express");
const smsRoutes = require("./routes/smsRoute");
const connectDB = require("./config/dbConfig");

connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/sms", smsRoutes);

module.exports = app;
