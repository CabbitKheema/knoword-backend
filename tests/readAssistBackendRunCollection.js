const fs = require("fs");
const path = require("path");
const newman = require("newman");

function ensureDirectoryExistence(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log("Directory:", dir, " created.");
  }
}

// call newman.run to pass `options` object and wait for callback
function readAssistBackendRunCollection() {
  // Ensure the directory exists
  ensureDirectoryExistence(process.env.POSTMAN_TEST_REPORT_FILE_PATH);

  newman
    .run({
      collection: require(process.env.POSTMAN_COLLECTION_FILE_PATH),
      environment: require(process.env.POSTMAN_ENVIRONMENT_FILE_PATH),
      globals: require(process.env.POSTMAN_GLOBALS_FILE_PATH),
      reporters: ["htmlextra"],
      workingDir: process.env.POSTMAN_WORKING_DIRECTORY,
      reporter: {
        htmlextra: {
          export: process.env.POSTMAN_TEST_REPORT_FILE_PATH,
          // template: './template.hbs'
          // logs: true,
          // showOnlyFails: true,
          // noSyntaxHighlighting: true,
          // testPaging: true,
          // browserTitle: "My Newman report",
          // title: "My Newman Report",
          // titleSize: 4,
          omitHeaders: true,
          // skipHeaders: "Authorization",
          // omitRequestBodies: true,
          // omitResponseBodies: true,
          // hideRequestBody: ["Login"],
          // hideResponseBody: ["Auth Request"],
          // showEnvironmentData: true,
          // skipEnvironmentVars: ["API_KEY"],
          // showGlobalData: true,
          // skipGlobalVars: ["API_TOKEN"],
          // skipSensitiveData: true,
          // showMarkdownLinks: true,
          // showFolderDescription: true,
          // timezone: "Australia/Sydney",
          // skipFolders: "folder name with space,folderWithoutSpace",
          // skipRequests: "request name with space,requestNameWithoutSpace",
          // displayProgressBar: true
        },
      },
    })
    .on("start", function (err, args) {
      // on start of run, log to console
      console.log("running a collection...");
    })
    .on("done", function (err, summary) {
      if (err || summary.error) {
        console.error("collection run encountered an error.");
      } else {
        console.log("collection run completed.");
      }
    });
}

module.exports = readAssistBackendRunCollection;
