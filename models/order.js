const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customer: {
        type: String,
        required: true
    },
    order: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    creditCard: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Order', orderSchema);