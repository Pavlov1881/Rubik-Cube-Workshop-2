const mongoose = require('mongoose');
const Accessory = require('./Accessory');

const cubeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 3300,
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
    },
    accessories: [                                  // един куб може да се свърже с множество аксесоари
        // масив от ObjectId-та които ще имат референция към множество аксесоари
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }
    ]


});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;