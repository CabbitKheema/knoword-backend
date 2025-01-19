const express = require("express");
const multer = require("multer");
const multerErrorHandler = require("../middlewares/errors/multerErrorHandler");

// Set up storage with multer (in-memory storage to avoid saving files to disk)
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: process.env.AUDIO_FILE_SIZE_LIMIT_IN_MB * 1024 * 1024 }, // 10 MB limit (adjust as needed)
});

const router = express.Router();
const {
  getWordMeaningAndContext,
} = require("../controllers/wordDefinitionController");
const {
  getVoiceTranscription,
} = require("../controllers/voiceTranscriptionController");

router.post("/find-word-definition", express.json(), getWordMeaningAndContext);
router.post(
  "/transcribe-word",
  upload.single("audioFile"),
  multerErrorHandler,
  express.urlencoded({ extended: true }), // Parses text fields in form data
  getVoiceTranscription
);

module.exports = router;
