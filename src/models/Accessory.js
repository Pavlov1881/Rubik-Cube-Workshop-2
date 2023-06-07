const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: /^https?/g,
            message: 'Image url should start with http/s'
        }
    },
    description: {
        type: String,
        maxLength: 120,
        required: true
        // TODO relation 
    }
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;