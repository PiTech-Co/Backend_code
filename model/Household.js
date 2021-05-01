const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    household_no: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    family_head: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Household',userSchema);