require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

// Configure CORS
app.use(
  cors({
    origin: process.env.ORIGIN_URL, // Allow requests from your front-end origin
    methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
    credentials: true, // Allow cookies if needed
  })
);

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});

const wordRoutes = require("./routes/wordRoutes");
const reportRoutes = require("./routes/reportRoutes");
const knoWordBackendRunCollection = require("./tests/knoWordBackendRunCollection");

app.use("/api/v1", wordRoutes);
app.use("/report/v1", reportRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  knoWordBackendRunCollection();
});
