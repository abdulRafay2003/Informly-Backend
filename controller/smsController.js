const SmsMessage = require("../model/smsMessage");
const { sendSmsTwilio } = require("../services/smsService");

const getCoordinates = async (req, res) => {
  try {
    const data = await SmsMessage.find({});

    if (data.length === 0) {
      return res.status(404).send({ success: false, message: "No data found" });
    }

    // Return the fetched data
    res.status(200).send({ success: true, data });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

const sendSms = async (req, res) => {
  let data;
  const emergencyNumbers = ["+923212163426"];
  const message = " Accident Alert!";

  data = { message, ...req.body };
  // if (!message) {
  //   return res
  //     .status(400)
  //     .send({ success: false, error: "Message is required" });
  // }

  try {
    // Send SMS to each of the emergency numbers
    let responses = [];
    for (let i = 0; i < emergencyNumbers.length; i++) {
      const response = await sendSmsTwilio(emergencyNumbers[i], data);
      responses.push(response);

      await SmsMessage.create(req.body);
    }

    // Return response after sending SMS to all numbers
    res.status(200).send({ success: true, data: responses });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

module.exports = { sendSms, getCoordinates };
