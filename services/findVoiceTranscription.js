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
                "Successful transcription!",
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
          statusCode: 400,
          message: [
            "Invalid audio type!",
            "The audio file object (not file name) to transcribe must be in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm",
          ],
          error: error.message || error,
        };
        reject(response);
      });
  });
};
