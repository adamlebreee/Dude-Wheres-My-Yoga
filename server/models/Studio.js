const mongoose = require('mongoose');

const studioSchema = new mongoose.Schema({
    name: String,
    address: String,
    googlePlaceId: String,
    styles_offered: [String],
    contact_info: String,
    opening_hours: String,
});

module.exports = mongoose.model('Studio', studioSchema);