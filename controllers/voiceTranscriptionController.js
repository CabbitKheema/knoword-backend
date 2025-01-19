const {
  findVoiceTranscription,
} = require("../services/findVoiceTranscription");

exports.getVoiceTranscription = (req, res) => {
  const requestFile = req.file;
  const audioDuration = req.body.audioDuration;
  const maxAudioDuration = parseFloat(
    process.env.MAX_AUDIO_DURATION_IN_SECONDS
  );
  // console.log("audioDuration:", audioDuration);
  // console.log("audioDuration > 15 sec:", audioDuration > maxAudioDuration);
  if (!requestFile) {
    return res.status(400).json({
      statusCode: 400,
      message: ["Bad request!", "No voice note found in your request"],
      error: "Bad request",
    });
  }

  // This should validate audio duration
  if (!audioDuration || isNaN(audioDuration)) {
    return res.status(400).json({
      statusCode: 400,
      message: ["Bad Request!", "Invalid or missing audio duration"],
      error: "Bad Request",
    });
  } else if (audioDuration > maxAudioDuration) {
    return res.status(400).json({
      statusCode: 400,
      message: [
        "Bad Request!",
        `Audio duration exceeds the allowed limit of ${maxAudioDuration} seconds`,
      ],
      error: "Bad Request",
    });
  }

  findVoiceTranscription(requestFile)
    .then((response) => {
      res.status(response.statusCode || 200).json(response);
    })
    .catch((error) => {
      res.status(error.statusCode || 500).json(error);
    });
};
