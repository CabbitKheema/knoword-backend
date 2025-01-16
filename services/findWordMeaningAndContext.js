const Groq = require("groq-sdk");

exports.findWordMeaningAndContext = (inputText) => {
  return new Promise((resolve, reject) => {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    groq.chat.completions
      .create({
        messages: [
          {
            role: "user",
            content:
              "Given word: " +
              inputText +
              "\nThe given word might be from a different language written in English with similar pronunciation that it has in its original language.\nFor the given word, you have to find the original language, find the original meaning of the given word (for English word use oxford definitions) and give me three example sentences using the original language letters where this word can be used along with an English description of what each example means.\nYour response should only be in the format:\nGiven word:<Given word>\nOriginal language:<original language of the given word>\n\nmeaning:<actual meaning of the word>\n\nex 1:<First example sentence>\nmeaning:<English description of ex 1>\n\nex 2:<Second example sentence>\nmeaning:<English description of ex 2>\n\nex 3:<Third example sentence>\nmeaning:<English description of ex 3>",
          },
        ],
        model: process.env.GROQ_TEXT_MODEL,
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        stream: false,
        stop: null,
      })
      .then((chatCompletion) => {
        const response = {
          statusCode: 200,
          message: ["Searching successful!", "Found the meaning of given word"],
          data: chatCompletion.choices[0].message.content,
        };
        resolve(response);
      })
      .catch((error) => {
        const response = {
          statusCode: 500,
          message: [
            "Searching failed!",
            "Error while fetching the meaning of the given word, please try again",
          ],
          error: error.message || error,
        };
        reject(response);
      });
  });
};
