const express = require("express");
const productRouter = express.Router();
const MenClothes = require("../models/mens.model");

const readAllProducts = async(id) => {
    try{
        const products = await MenClothes.findById(id);
        return products;
    } catch(error){
        console.log(error, "failed to fetch all products");
    }
}

productRouter.get("/:id", async(req, res) => {
    try{
        const id = req.params.id
        const product = await readAllProducts(id)

        if(product){
            res.status(200).json(product);
        } else {
            res.status(404).json({error: "No product fetched"});
        }
    } catch(error){
        res.status(500).json({error: "failed to fetch product route"})
    }
})

module.exports = productRouter;