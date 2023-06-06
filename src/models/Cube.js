const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 120,
    },
    imageUrl: {
        type: String,
        required: true,

    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    }
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;