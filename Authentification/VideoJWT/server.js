const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const User = require('./user'); // Assure-toi que ce chemin est correct
const app = express();
const port = 3000;
const bcrypt = require('bcrypt')
const {user} = require('models')

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/jwt')
.then(() => console.log('MongoDB connected'))

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get('/', async (req, res) => {
        const users = await User.find(); // Utilise le modèle correctement
        const title = "Implement JWT";
        res.render("index", { title, users });
});

app.post("/register", (req, res) => {
    const {username, password} = req.body
})

app.post("/login", (req, res) => {
    res.json("login")

})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
