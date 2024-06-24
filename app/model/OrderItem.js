const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    itemId: {type: String, required: true},
    qty: {type: Number, required: true},
    price: {type: Number, required: true}
}, {_id: false});

module.exports = mongoose.model('OrderItem', orderItemSchema);