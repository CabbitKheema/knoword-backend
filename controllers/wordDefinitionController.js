const {
  findWordMeaningAndContext,
} = require("../services/findWordMeaningAndContext");

exports.getWordMeaningAndContext = (req, res) => {
  const { inputText } = req.body;

  if (!inputText) {
    return res.status(400).json({
      statusCode: 400,
      message: ["Bad request!", "No word found in your request"],
      error: "No word found in your request",
    });
  }

  findWordMeaningAndContext(inputText)
    .then((response) => {
      res.status(response.statusCode || 200).json(response);
    })
    .catch((error) => {
      res.status(error.statusCode || 500).json(error);
    });
};
