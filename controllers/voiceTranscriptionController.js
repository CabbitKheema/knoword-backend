const {
  findVoiceTranscription,
} = require("../services/findVoiceTranscription");

exports.getVoiceTranscription = (req, res) => {
  const requestFile = req.file;
  if (!requestFile) {
    return res.status(400).json({
      statusCode: 400,
      message: ["Bad request!", "No voice note found in your request"],
      error: "No voice note found in your request",
    });
  }

  // This should validate audio duration

  //   else if (inputText.length > 100) {
  //     return res.status(400).json({
  //       statusCode: 400,
  //       message: ["Bad request!", "Word should contain at most 100 characters"],
  //       error: "Word exceeds 100 characters",
  //     });
  //   }

  findVoiceTranscription(requestFile)
    .then((response) => {
      res.status(response.statusCode || 200).json(response);
    })
    .catch((error) => {
      res.status(error.statusCode || 500).json(error);
    });
};
