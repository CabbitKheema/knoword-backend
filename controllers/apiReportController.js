const path = require("path");

exports.getAPITestsReport = (req, res) => {
  const filePath = path.join(__dirname, "../tests/reports/report.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).json({
        statusCode: 404,
        message: ["File not found!", "Error loading the HTML file"],
        error: "File not found",
      });
    }
  });
};
