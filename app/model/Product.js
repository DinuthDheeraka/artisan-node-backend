const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        size: Number,
        qty: Number,
        desc: String,
        img1: String,
        img2: String,
        category: String,
        gender: String,
        sellerId: Number
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);