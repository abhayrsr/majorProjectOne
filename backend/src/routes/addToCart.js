const express = require("express");
const getCartRouter = express.Router();
const cart = require("../models/cart.model");

getCartRouter.get("/", async(req, res) => {
    try{
        const getCartData = await cart.findAll();

        if(getCartData.length === 0){
            return res.status(404).json({message: "No data found"});
        }

        res.status(200).json(getCartData);
    } catch(e){
        console.log("error while fetching cart data", e);
        res.status(500).json({message: "internal server error"});
    }
})

module.exports = {getCartRouter};
