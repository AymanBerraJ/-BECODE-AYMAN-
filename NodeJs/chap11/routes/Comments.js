const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Here are all the comments");
});

router.get("/:id", (req, res) => {
  res.send(`Here is the comment ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("comment created");
});

router.put("/:id", (req, res) => {
  res.send(`comment ${req.params.id} updated`);
});

router.delete("/:id", (req, res) => {
  res.send(`comment ${req.params.id} deleted`);
});

module.exports = router;

