const visitSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    studio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Studio',
    },
    review: String,
    rating: Number,
    Date: Date,
});
    
const Visit = mongoose.model('Visit', visitSchema);