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

const verification = (req, res, next) => {
    const {password} = req.query;

    if(password === 'IAmTheBigBoss'){
        next();
    }else{
        res.send('Not Authorized')
    }
}

app.get("/secret", verification, (req, res) => {
  res.sendFile("./views/secret.html", { root });
  res.status(200);
});

app.use((req, res) => {
  res.sendFile("./views/404.html", { root });
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
