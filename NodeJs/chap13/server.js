const express = require("express");
const app = express();
const root = __dirname;

app.set("view engine", "ejs");


app.get("/", (req, res) => {
    const today = new Date();
    const heure = today.getHours();
    const minute = today.getMinutes();
    res.render('index', { date: `${heure}h${minute}`});
    res.status(200);
  });
  
//   app.get("/ayman", (req, res) => {
//     res.render('index', { date: 'ayman'});
//     res.status(200);
//   });
  

app.listen(3000, () => {
    console.log(`Listening to port 3000`);
  });