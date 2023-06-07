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
    },
    cubes: [                         // масив от множество ObjectID-та които сочат към КУБ модела
        {                        
            type: mongoose.Types.ObjectId,  
            ref: 'Cube',                  

        }
    ]

});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;