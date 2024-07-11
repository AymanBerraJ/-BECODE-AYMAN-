const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const http = require("http");
const { log } = require("console");
const root = __dirname;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).sendFile("./html/main.html", { root });
});

app.post("/", (req, res) => {
  const method = req.method;
  const url = req.url;

  // Save the original send method
  const originalSend = res.send;

  res.send = function (...args) {
    const status = res.statusCode;
    console.log(`Method: ${method}, URL: ${url}, StatusCode: ${status}`);

    // Call the original send function
    return originalSend.apply(res, args);
  };

  res.send("POST request received");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
