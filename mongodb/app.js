const express = require("express");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");

const app = express();

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("app listening on PORT 3000");
    });
    db = getDb();
  }
});

app.get("/books", (req, res) => {
    let books = []
  db.collection("books").find()
  .sort({author: 1})
  .forEach(book => books.push(book))
  .then(() => {res.status(200).json(books)})
  .catch(() => {
    res.status(500).json({error: 'Could not find the document'})
  })    
});

app.get('/books/:id', (req, res)=>{

    if(ObjectId.isValid(req.params.id)){

        db.collection('books')
        .findOne({_id: new  ObjectId(req.params.id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({err: "Could not fetch the document"})
        })

    }else{
        res.status(500).json({err: "Not a valid doc ID"})
    }

})