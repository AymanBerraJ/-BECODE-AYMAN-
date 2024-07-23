const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const http = require("http");
const Task = require('./task')
const port = 3000;

mongoose.connect('mongodb://localhost:27017/bookstore') // Pour se connecter a la DB

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get('/', async (req, res)=>{ // recuperer les données de la DB et les afficher sur la page web
    const tasks = await Task.find();
    const title = "Todo List";
    res.render("index", { title, tasks });
})

app.post('/', async (req, res)=>{ // rajouter dans la DB et dans la page web
    const name = req.body
    await Task.create(name)
    res.redirect('/')
})

app.delete('/:id', async (req,res) => { // supprimer de la DB et de la page web
    const id = req.params.id;
    await Task.findByIdAndDelete(id)
    res.redirect('/')
})


app.listen(port, () => { // ouvrir le port 3000 (la page web)
    console.log(`app listening on PORT ${port}`);
  });