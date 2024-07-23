const express = require("express");
const app = express();
const http = require("http");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let db;
connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`app listening on PORT ${port}`);
    });
    db = getDb();
  }
});

app.get("/", async (req, res) => {
  const tasks = await db.collection("task").find().toArray();
  const title = "Todo List";
  res.render("index", { title, tasks });
});

app.post("/", async (req, res) => {
  const name = req.body;
  if (name) {
    await db.collection("task").insertOne(name);
  }
  res.redirect("/");
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  if (ObjectId.isValid(req.params.id)) {
    await db.collection("task").deleteOne({ _id: new ObjectId(req.params.id) })
    res.redirect("/");
  } else {
    res.status(500).json({ err: "Not a valid doc ID" });
  }
});
