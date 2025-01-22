const checkAudioClipValidity = (req, res, next) => {
  const maxAudioDuration = parseFloat(
    process.env.MAX_AUDIO_DURATION_IN_SECONDS
  );
  const allowedAudioFileExtensions = [
    "flac",
    "mp3",
    "mp4",
    "mpeg",
    "mpga",
    "m4a",
    "ogg",
    "opus",
    "wav",
    "webm",
  ];

  if (!req.file) {
    return res.status(400).json({
      statusCode: 400,
      message: ["Bad Request!", "No voice note found in your request"],
      error: "Bad Request",
    });
  }

  const [fileType, fileExtension] = req.file.mimetype.split("/");
  if (
    fileType !== "audio" ||
    !allowedAudioFileExtensions.includes(fileExtension)
  ) {
    return res.status(400).json({
      statusCode: 400,
      message: [
        "Bad Request!",
        "Audio file must be one of the following types: [flac mp3 mp4 mpeg mpga m4a ogg opus wav webm]",
      ],
      error: "Bad Request",
    });
  }

  if (
    !req.body.audioDuration ||
    isNaN(req.body.audioDuration) ||
    req.body.audioDuration.trim().length == 0
  ) {
    // This should validate audio duration
    return res.status(400).json({
      statusCode: 400,
      message: ["Bad Request!", "Invalid or missing audio duration"],
      error: "Bad Request",
    });
  }

  if (req.body.audioDuration <= 0) {
    return res.status(400).json({
      statusCode: 400,
      message: [
        "Bad Request!",
        "Audio duration must be greater than 0 seconds",
      ],
      error: "Bad Request",
    });
  }

  if (req.body.audioDuration > maxAudioDuration) {
    return res.status(400).json({
      statusCode: 400,
      message: [
        "Bad Request!",
        `Audio duration exceeds the allowed limit of ${maxAudioDuration} seconds`,
      ],
      error: "Bad Request",
    });
  }

  next(); // No error, proceed to the next middleware
};

module.exports = checkAudioClipValidity;
