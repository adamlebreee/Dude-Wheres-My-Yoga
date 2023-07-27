const mongoose = require('mongoose');

const studioSchema = new mongoose.Schema({
    name: String,
    address: String,
    latitude: Number,
    longitude: Number,
    googlePlaceId: String,
    styles_offered: [String],
    website: String,
});

module.exports = mongoose.model('Studio', studioSchema);