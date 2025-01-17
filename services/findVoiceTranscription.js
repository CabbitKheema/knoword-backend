const Groq = require("groq-sdk");
const path = require("path");
const fs = require("fs");

exports.findVoiceTranscription = () => {
  return new Promise((resolve, reject) => {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    // Use the File object directly with the Groq SDK
    groq.audio.transcriptions
      .create({
        file: fs.createReadStream(path.join("uploads", "audio.m4a")),
        model: process.env.GROQ_AUDIO_MODEL,
      })
      .then((transcription) => {
        const response = {
          statusCode: 200,
          message: [
            "Successful transcription!",
            "Voice transcription is completed",
          ],
          data: transcription.text,
        };
        resolve(response);
      })
      .catch((error) => {
        console.error(error);
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
  });
};
