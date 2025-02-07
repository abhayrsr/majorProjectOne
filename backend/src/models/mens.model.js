const mongoose = require("mongoose");

const clothesSchema = new mongoose.Schema({
  name: String,
  description: String,
  details: [String],
  image: String,
  price: Number,
  category: String,
  rating: Number,
  sku: String,
});

const MenClothes = mongoose.model("Clothes", clothesSchema);

module.exports = MenClothes;
