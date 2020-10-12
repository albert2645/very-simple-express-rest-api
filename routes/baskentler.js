const express = require('express');
const router = express.Router()
const modules = require('../models/index')

router.get('/', (req, res, next) => {
    res.send(modules.baskentler)
})

router.get('/:itemid', (req, res) => {
    res.send(models.baskentler[req.params.itemid])
})

module.exports = router