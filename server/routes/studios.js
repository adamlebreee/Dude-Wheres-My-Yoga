const express = require('express');
const router = express.Router();
const Studio = require('../models/Studio');
<<<<<<< HEAD

=======
const axios = require('axios');
const apiKey = 
const placesSearchURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const placesDetailsURL = 'https://maps.googleapis.com/maps/api/place/details/json';
>>>>>>> 87aa5f4d0e2babd9b16b38c14919ba577f0436d7

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
