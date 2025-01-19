const checkInputTextValidity = (req, res, next) => {
  if (!req.body.inputText) {
    return res.status(400).json({
      statusCode: 400,
      message: ["Bad request!", "No word found in your request"],
      error: "Bad Request",
    });
  }

  if (req.body.inputText.trim().length == 0) {
    return res.status(400).json({
      statusCode: 400,
      message: ["Bad request!", "Word must contain at least 1 character"],
      error: "Bad Request",
    });
  }

  if (req.body.inputText.length > 100) {
    return res.status(400).json({
      statusCode: 400,
      message: ["Bad request!", "Word must contain at most 100 characters"],
      error: "Bad Request",
    });
  }
  next();
};

module.exports = checkInputTextValidity;
