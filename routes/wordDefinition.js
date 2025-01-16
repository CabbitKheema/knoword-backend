const express = require("express");
const router = express.Router();
const {
  getWordMeaningAndContext,
} = require("../controllers/wordDefinitionController");

router.post("/find-word-definition", getWordMeaningAndContext);

module.exports = router;
