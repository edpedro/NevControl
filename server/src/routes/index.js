const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Controle de finança pessoal" });
});

module.exports = router;
