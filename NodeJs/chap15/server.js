const express = require("express");
const app = express();
const fs = require("fs");
const http = require("http");
const path = require("path");
const root = __dirname;
const port = 3000;

const users = [];
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
    const title = 'Home';
    res.render('home', { title, users });
});

app.get('/add', (req, res)=>{
    const title = 'Add';
    res.render('add', { title });
});

app.post('/add', (req, res) => {
    users.push(req.body);
    res.redirect('/');
});
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});