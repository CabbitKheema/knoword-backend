require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

// Middleware to parse JSON
app.use(express.json());

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

const wordDefinitionRoute = require("./routes/wordDefinition");

app.use("/api/v1", wordDefinitionRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
