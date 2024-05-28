const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        email: String,
        phoneNumber: String,
        homeAddress: String,
        password: String,
        accountType: String
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);