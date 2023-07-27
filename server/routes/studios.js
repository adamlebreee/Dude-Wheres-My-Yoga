const express = require('express');
const router = express.Router();
const Studio = require('../models/Studio');
const axios = require('axios');
const apiKey = "AIzaSyCMxwEq7aKnULlzl9rKCDUcDHypoRbpgtU"
const placesSearchURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const placesDetailsURL = 'https://maps.googleapis.com/maps/api/place/details/json';

router.get('/', (req, res) => {
    Studio.find().then((studios) => {
        res.json(studios);
    });
});

router.get('/style/:style', (req, res) => {
    const location = '52.5200,13.4050';
    const radius = 4500;

    axios.get(`${placesSearchURL}?location=${location}&radius=${radius}&keyword=yoga&key=${apiKey}`)
        .then(response => {
            const studios = response.data.results;
            
            const studioDetailsPromise = studios.map(studio => {
                return axios.get(`${placesDetailsURL}?place_id=${studio.place_id}&fields=name,rating,formatted_address,geometry,website&key=${apiKey}`)
                    .then(response => {
                        const place = response.data.result;
                        return {
                            id: place.place_id,
                            name: place.name,
                            address: place.formatted_address,
                            latitude: place.geometry.location.lat,
                            longitude: place.geometry.location.lng,
                            website: place.website,
                            styles_offered: [req.params.style]
                        }
                    })
            })
            return Promise.all(studioDetailsPromise);
        })
                .then(studioDetails => {
                    res.json(studioDetails);
                })
                .catch(err => {
                    console.error('Error fetching studios:', err);
                    res.status(500).json({ error: 'Internal server error' });
                });
        });

module.exports = router;