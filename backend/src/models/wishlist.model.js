const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  name: String,
  description: String,
  details: [String],
  image: String,
  price: Number,
  category: String,
  rating: Number,
  sku: String,
});

const wishlistClothes = mongoose.model("wishlist", wishlistSchema);

module.exports = wishlistClothes;
