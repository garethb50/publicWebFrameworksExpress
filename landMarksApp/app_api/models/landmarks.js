const mongoose = require('mongoose');

const landmarkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    img: {
        // https://stackoverflow.com/questions/41791933/in-typescript-what-is-the-type-of-image
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    coords: {
        type: [Number],
        index: '2dsphere',
        required: true
    },
    value: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('landmark', landmarkSchema);