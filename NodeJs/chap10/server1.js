const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const root = __dirname;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root });
  res.status(200);
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
