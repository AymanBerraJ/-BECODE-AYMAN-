const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Here are all the users");
});

router.get("/:id", (req, res) => {
  res.send(`Here is the user ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("User created");
});

router.put("/:id", (req, res) => {
  res.send(`User ${req.params.id} updated`);
});

router.delete("/:id", (req, res) => {
  res.send(`User ${req.params.id} deleted`);
});

module.exports = router;

