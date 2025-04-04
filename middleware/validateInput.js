const validateInput = (req, res, next) => {
  const { phoneNumber, message } = req.body;

  if (!message) {
    return res.status(400).send({ error: "Missing required fields." });
  }

  next();
};

module.exports = validateInput;
