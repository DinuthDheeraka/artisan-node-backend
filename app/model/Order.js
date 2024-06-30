const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
        userId: String,
        orderId: String,
        items: [{
            itemId: String, qty: Number, price: Number, itemImg: String, itemName: String,
            itemSize: String
        }]
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Order', orderSchema);