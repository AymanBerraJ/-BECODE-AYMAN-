const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const root = __dirname;


app.use((req,res,next)=>{
    console.log("Middleware");

    if(req.get("Authorization") === "123"){
        next()
    }else {
        res.send("Not Autorized")
    }
});

app.post("/", (req, res) => {
    res.send("Hello World");
  });
  
  app.listen(3000, () => {
    console.log("listening to port 3000");
  });