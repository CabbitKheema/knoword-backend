const express = require("express");
const router = express.Router();

const { getAPITestsReport } = require("../controllers/apiReportController");

router.get("/test-report", getAPITestsReport);

module.exports = router;
