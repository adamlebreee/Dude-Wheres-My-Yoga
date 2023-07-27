const express = require('express');
const router = express.Router();
const Studio = require('../models/Studio');

router.get('/', (req, res) => {
    Studio.find().then((studios) => {
        res.json(studios);
    });
});

router.get('/:id', (req, res) => {
    Studio.findById(req.params.id).then((studio) => {
        if (studio) {
            res.json(studio)
        } else {
            res.status(404).send('Studio not found');
        }
    })
});

module.exports = router;
