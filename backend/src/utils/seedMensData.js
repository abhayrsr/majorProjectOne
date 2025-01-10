const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const {initializeDatabase} = require("../config/db/db.connect");
const fs = require('fs');
const MensClothes = require('../models/mens.model')
require('dotenv/config')

initializeDatabase();

const jsonData = fs.readFileSync('../data/mens.json', 'utf-8')
const clothesData = JSON.parse(jsonData);

async function seedingData(){
    try{
        for(const clothes of clothesData){
            const newClothes = new MensClothes({
                name: clothes.name,
                description: clothes.description,
                image: clothes.image,
                price: clothes.price,
                sku: clothes.sku
            })
            newClothes.save()
        }
    } catch(error){
        console.log("Error seeding the data")
    }
}

seedingData();