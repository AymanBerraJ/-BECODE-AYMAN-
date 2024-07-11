const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const root = __dirname;

app.get("/", (req, res) => {
  res.sendFile("./views/page1.html", { root });
  res.status(200);
});

app.get("/about", (req, res) => {
  res.sendFile("./views/page2.html", { root });
  res.status(200);
});
app.get("/about-us", (req, res) => {
  res.sendFile("./views/page2.html", { root });
  res.status(200);
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root });
});

app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;

  // Sauvegarde de la méthode send originale
  const originalSend = res.send;

  // Redéfinition de la méthode send pour capturer le code de statut
  res.send = function (...args) {
    const statusCode = res.statusCode;
    console.log(`${method} ${url} ${statusCode}`);

    // Appel de la méthode send originale
    return originalSend.apply(res, args);
  };

  next();
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
