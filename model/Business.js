const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    business_name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    business_type: {
        type: String,
        required: true
    },

    owner: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Business',userSchema);