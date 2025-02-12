const express = require("express");
const wishListRouter = express.Router();
const wishlistClothes = require("../models/wishlist.model");

wishListRouter.post("/", async(req, res) => {
    try{
        const data = {
            name: req.body.name,
            price: Number(req.body.price),
        }
        new wishlistClothes(data).save();
        
    } catch(error){
        res.status(500).json({error: "No product fetched"})
    }
})

module.exports = { wishListRouter};