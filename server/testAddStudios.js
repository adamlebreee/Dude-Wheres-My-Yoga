const mongoose = require('mongoose');
const Studio = require('./models/Studio');

mongoose.connect('mongodb://localhost:27017/Yoga', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to DB');
}).catch((error) => {
    console.error('Error connecting to DB', error);
});

const studio1 = new Studio({
    name: "Yoga Hub",
    address: "Greifswalder Str. 8d, 10405 Berlin",
    latitude: 52.53027676188006,
    longitude: 13.425778658792568,
    googlePlaceId: "ChIJhzwmrBpOqEcRKqYpRHPTlgw",
    styles_offered: ["Hatha", "Vinyasa"],
    website: "https://www.yogahubberlin.com/",
});

const studio2 = new Studio({
    name: "Ashtanga Studio Berlin",
    address: "Jablonskistraße 24, 10405 Berlin, Germany",
    latitude: 52.5381874510556,
    longitude: 13.424802000215523,
    googlePlaceId: "ChIJC5jF6AZOqEcRDqbFi2nBpUE",
    styles_offered: ["Jivamukhti"],
    website: "https://www.ashtangastudio.de/",
});

studio1.save()
    .then(studio => {
        console.log("Yoga Hub added");
    })
    .catch(err => {
        console.error(err);
    });

studio2.save()
    .then(studio => {
        console.log("Ashtange Studio added");
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        mongoose.connection.close();
    });