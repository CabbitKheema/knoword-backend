const {
  findWordMeaningAndContext,
} = require("../services/findWordMeaningAndContext");

exports.getWordMeaningAndContext = (req, res) => {
  findWordMeaningAndContext(req.body.inputText)
    .then((response) => {
      res.status(response.statusCode || 200).json(response);
    })
    .catch((error) => {
      res.status(error.statusCode || 500).json(error);
    });
};
