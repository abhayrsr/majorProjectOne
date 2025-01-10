const mongoose =  require('mongoose');

const clothesSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    sku: String,

})

const MenClothes = mongoose.model('Clothes', clothesSchema)

module.exports = MenClothes;
