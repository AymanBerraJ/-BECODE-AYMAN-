const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const http = require("http");
const path = require("path");
const root = __dirname;
const port = 3000;

function apiKeyVerification(req,res, next){
    const apiKey = req.query.api_key;
    if(apiKey){
        next();
    }else{
        res.status(404).json({ message: 'api key not found' });
    }
}
const data = [{
    id: "KUGF-57JNJ-JFNJDK-OUH3",
    username: "Glouglou43",
    firstName: "Henrique",
    lastName: "Vieira",
    age: 35,
    isAdmin: true,
}];

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//route non protégées
app.get(('/api/users'), (req, res)=>{
res.json(data);
});

app.get('/api/users/:id', (req,res)=>{
    const userId = req.params.id;
    const user = data.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
})


//Route protégées
app.use('/api', apiKeyVerification);

app.post('/api/users', (req, res) => {
    const { username, firstName, lastName, age, isAdmin } = req.body;

    if (!username || !firstName || !lastName || typeof age !== 'number' || typeof isAdmin !== 'boolean') {
        return res.status(400).json({ message: 'Missing or invalid required user information' });
    }
    const id = uuidv4();
    const user = {id: id, ...req.body};
    data.push(user);
    res.send('user registered');
});

app.put('/api/users/:id', (req,res)=>{
    const userId = req.params.id;
    const user = data.findIndex(user => user.id === userId);
    if(user == -1){
        return res.send('User not found')
    }
    const updateUser = {id: userId, ...req.body};
    data[user] = updateUser;
    res.send('user found');
});

app.delete('/api/users/:id', (req,res)=>{
    const userId = req.params.id;
    const user = data.findIndex(user => user.id === userId);
    if(user == -1){
        return res.send('User not found')
    }
    data.splice(user, 1);
    res.send('api delete');
});


app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});