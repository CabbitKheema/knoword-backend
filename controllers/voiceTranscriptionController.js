const {
  findVoiceTranscription,
} = require("../services/findVoiceTranscription");

exports.getVoiceTranscription = (req, res) => {
  findVoiceTranscription(req.file)
    .then((response) => {
      res.status(response.statusCode || 200).json(response);
    })
    .catch((error) => {
      res.status(error.statusCode || 500).json(error);
    });
};
