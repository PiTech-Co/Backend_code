const mongoose = require('mongoose');

const residenceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },

    
    address: {
        type: String,
        required: true
    },

    resident_type: {
        type: String,
        required: true
    },

    nationality: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Residence',residenceSchema);