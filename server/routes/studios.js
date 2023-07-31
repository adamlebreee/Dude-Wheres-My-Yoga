const express = require('express');
const router = express.Router();
const Studio = require('../models/Studio');

router.get('/', (req, res) => {
    Studio.find().then((studios) => {
        res.json(studios);
    });
});

router.get('/style/:style', (req, res) => {
    Studio.find({ styles_offered: req.params.style }).then((studios) => {
        res.json(studios);
    }).catch((err) => {
        console.error('Error fetching studios:', err);
        res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;
