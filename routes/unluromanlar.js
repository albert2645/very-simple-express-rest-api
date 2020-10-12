const express = require('express');
const router = express.Router()
const models = require("../models");

router.get('/', (req, res, next) => {
    res.send(models.romanlar)
})

router.get('/:itemid', (req, res) => {
    res.send(models.romanlar[req.params.itemid])
})

module.exports = router