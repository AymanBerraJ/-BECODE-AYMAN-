const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Here are all the posts");
});

router.get("/:id", (req, res) => {
  res.send(`Here is the post ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("post created");
});

router.put("/:id", (req, res) => {
  res.send(`post ${req.params.id} updated`);
});

router.delete("/:id", (req, res) => {
  res.send(`post ${req.params.id} deleted`);
});

module.exports = router;

