const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: [true, 'Please add an isAdmin'],
    },
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema); 
