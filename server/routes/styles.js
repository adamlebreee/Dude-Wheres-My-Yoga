const express = require('express');
const router = express.Router();
const Style = require('../models/Style');

router.get('/', (req, res) => {
    Style.find().then((styles) => {
        res.json(styles);
    });
});

router.get('/:id', (req, res) => {
    Style.findById(req.params.id).then((style) => {
        if (style) {
            res.json(style)
        } else {
            res.status(404).send('Style not found');
        }
    });
});

module.exports = router;