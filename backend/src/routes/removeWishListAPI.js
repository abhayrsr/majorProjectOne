const express = require("express");
const wishlistClothes = require("../models/wishlist.model");
const removeWishListRouter = express.Router();

removeWishListRouter.delete("/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const deleteProduct = await wishlistClothes.deleteOne(id);
        if(deleteProduct){
            res.status(200).json(deleteProduct);
        } else {
            res.status(404).json({error: "No product fetched"});
        }
    } catch(error){
        res.status(500).json({error: "error while fetching the product to delete"})
    }
})

module.exports = { removeWishListRouter };