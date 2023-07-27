const mongoose = require('mongoose');

const styleSchema = new mongoose.Schema({
    name: String,
    description: String,
    benefits: String,
});

module.exports = mongoose.model('Style', styleSchema);