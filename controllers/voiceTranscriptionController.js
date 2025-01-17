const path = require("path");
const fs = require("fs");
const {
  findVoiceTranscription,
} = require("../services/findVoiceTranscription");

exports.getVoiceTranscription = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      statusCode: 400,
      message: ["Bad request!", "No voice note found in your request"],
      error: "No voice note found in your request",
    });
  }

  console.log("Request body:", req.body);
  console.log("Request file:", req.file);
  console.log("File size:", req.file.size);

  const fileBuffer = req.file.buffer; // Access the buffer
  const savePath = path.join("uploads", req.file.originalname); // Define save location

  // Ensure the uploads directory exists
  if (!fs.existsSync(path.join("uploads"))) {
    fs.mkdirSync(path.join("uploads"));
  }

  // Save the file to the disk
  fs.writeFile(savePath, fileBuffer, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        statusCode: 400,
        message: ["Error!", "Error saving the file"],
        error: "Error saving the file",
      });
    }

    console.log("File uploaded and saved successfully.");
  });

  // This should validate audio duration

  //   else if (inputText.length > 100) {
  //     return res.status(400).json({
  //       statusCode: 400,
  //       message: ["Bad request!", "Word should contain at most 100 characters"],
  //       error: "Word exceeds 100 characters",
  //     });
  //   }

  findVoiceTranscription()
    .then((response) => {
      res.status(response.statusCode || 200).json(response);
    })
    .catch((error) => {
      res.status(error.statusCode || 500).json(error);
    });
};
