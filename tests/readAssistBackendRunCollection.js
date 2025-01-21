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
  const reportPath = "./tests/reports/report.html";

  // Ensure the directory exists
  ensureDirectoryExistence(reportPath);

  newman
    .run({
      collection: require("./Read Assist Backend Tests.postman_collection.json"),
      environment: {
        id: "2e0a413d-55d7-40e1-b80d-c2abb6538ef6",
        name: "read-assist-backend-local",
        values: [
          {
            key: "SERVER_URL",
            value: process.env.SERVER_DOMAIN,
            type: "default",
            enabled: true,
          },
        ],
        _postman_variable_scope: "environment",
        _postman_exported_at: "2025-01-20T18:58:14.884Z",
        _postman_exported_using: "Postman/11.28.4",
      },
      globals: require("./workspace.postman_globals.json"),
      reporters: ["htmlextra"],
      workingDir: "./tests/resources",
      reporter: {
        htmlextra: {
          export: reportPath,
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
