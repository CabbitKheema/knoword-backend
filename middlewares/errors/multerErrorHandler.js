// middleware/multerErrorHandler.js
const multerErrorHandler = (err, req, res, next) => {
  if (err) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        statusCode: 400,
        message: [
          "Limit exceeded!",
          "Audio file size exceeds the " +
            process.env.AUDIO_FILE_SIZE_LIMIT_IN_MB +
            "MB limit",
        ],
      });
    }

    // Handle other multer-specific errors
    return res.status(400).json({
      statusCode: 400,
      message: ["File upload error!", "An error occurred during file upload"],
      error: err.message,
    });
  }
  next(); // No error, proceed to the next middleware
};

module.exports = multerErrorHandler;
