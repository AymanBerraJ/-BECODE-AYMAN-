const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require('mongoose')
const Task = require('./task')
const port = 3000;

mongoose.connect('mongodb://localhost:27017/bookstore')

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get('/', async (req, res)=>{
    const tasks = await Task.find();
    const title = "Todo List";
    res.render("index", { title, tasks });
})

app.post('/', async (req, res)=>{
    const name = req.body
    await Task.create(name)
    res.redirect('/')
})

app.delete('/:id', async (req,res) => {
    const id = req.params.id;
    await Task.findByIdAndDelete(id)
    res.redirect('/')
})


app.listen(port, () => {
    console.log(`app listening on PORT ${port}`);
  });