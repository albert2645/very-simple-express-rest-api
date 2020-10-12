const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/", (req, res, next) => {
  res.send(models.hayvanlar);
});

router.get("/:itemid", (req, res, next) => {
  next();
});

router.get("/:item", (req, res) => {
  let length = models.hayvanlar.length;
  while (length--) {
    if (req.params.item.indexOf(models.hayvanlar[length]) != -1) {
      res.send(models.hayvanlar[length]);
    }
  }
});
module.exports = router;
