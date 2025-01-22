const Groq = require("groq-sdk");

exports.findVoiceTranscription = (requestFile) => {
  return new Promise((resolve, reject) => {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    Groq.toFile(requestFile.buffer, requestFile.originalname, {
      type: requestFile.mimetype,
    })
      .then((file) => {
        groq.audio.transcriptions
          .create({
            file: file,
            model: process.env.GROQ_AUDIO_MODEL,
          })
          .then((transcription) => {
            const response = {
              statusCode: 200,
              message: [
                "Transcription Successful!",
                "Voice transcription is completed",
              ],
              data: transcription.text,
            };
            resolve(response);
          })
          .catch((error) => {
            const response = {
              statusCode: 500,
              message: [
                "Transcription failed!",
                "Failed during voice transcription",
              ],
              error: error.message || error,
            };
            reject(response);
          });
      })
      .catch((error) => {
        const response = {
          statusCode: error.statusCode || 500, // Fallback to 500 if no statusCode
          message: [
            error.type || "File Processing Error",
            error.message ||
              "An unknown error occurred during file processing.",
          ],
          error: error.type || "UnknownError", // Fallback to "UnknownError" if no type
        };
        reject(response);
      });
  });
};
