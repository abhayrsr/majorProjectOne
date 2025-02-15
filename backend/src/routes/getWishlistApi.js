const express = require("express");
const getWishListRouter = express.Router();
const wishlistClothes = require("../models/wishlist.model");

async function readAllClothes() {
  try {
    const allWishlistClothes = await wishlistClothes.find();
    return allWishlistClothes;
  } catch (error) {
    console.log(error);
  }
}

getWishListRouter.get("/list", async (req, res) => {
  try {
    const wishlistClothes = await readAllClothes();
    if (wishlistClothes.length !== 0) {
      res.json(wishlistClothes);
    } else {
      res.status(404).json({ error: "No clothes found in wishlist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch clothes from wishlist" });
  }
});

module.exports = { getWishListRouter };
