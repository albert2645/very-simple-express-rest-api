const express = require('express');
const router = express.Router()
const models = require("../models");

router.get('/', (req, res, next) => {
    res.send(models.kitalar)
})

router.get('/:itemid', (req, res) => {
    res.send(models.kitalar[req.params.itemid])
})

module.exports = router