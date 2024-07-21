const express = require("express");
const app = express();
const fs = require("fs");
const http = require("http");
const path = require("path");
const { connectToDb, getDb } = require("./db");
const root = __dirname;
const port = 3000;

const users = [];
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

connectToDb((err) => {
    if (!err) {
      app.listen(port, () => {
        console.log(`app listening on PORT ${port}`);
      });
      db = getDb();
    }
  });


app.get('/', (req, res)=>{
    const title = "Todo List";
    res.render('index', { title, users });
})


app.post('/', (req, res)=>{
    const { name } = req.body;
    if (name) {
        users.push(name);
    }
    const task = {name};

//   db.collection("task")
//     .insertMany(task)
//     .then((result) => {
//       res.status(201).json(result);
//     })
//     .catch((err) => {
//       res.status(500).json({ err: "Could not create a new document" });
//     });
//     res.redirect('/');
})

app.delete('/', (req, res)=>{

//     const { id } = req.params;
//     const { name } = req.body;

//     if (name) {
//         users = users.filter(user => user !== name);
//     }


//     if (ObjectId.isValid(id)) {
//     db.collection("task")
//       .deleteOne({ _id: new ObjectId(id) })
//       .then((result) => {
//         res.status(200).json(result);
//       })
//       .catch((err) => {
//         res.status(500).json({ err: "Could not delete the document" });
//       });
//   } else {
//     res.status(500).json({ err: "Not a valid doc ID" });
//   }
})