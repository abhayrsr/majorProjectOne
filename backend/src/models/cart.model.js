const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    image: String
})

const cart = mongoose.model('cart', cartSchema);
module.exports = cart;