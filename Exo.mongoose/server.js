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
    const title = "Todo List";
    res.render('index', { title, users });
})


app.post('/', (req, res)=>{
    const { name } = req.body;
    if (name) {
        users.push(name);
    }
    res.redirect('/');
})

app.delete('/', (req, res)=>{

})




app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})