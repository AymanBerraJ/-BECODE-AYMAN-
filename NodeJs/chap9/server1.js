const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const httpo = require("http");
const { log } = require("console");
const root = __dirname;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("./html/main.html", { root });
  res.status(200);
});

app.post("/", (req, res) => {
  const body = req.body;
  console.log("Received POST body :", body);
  res.end();
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
