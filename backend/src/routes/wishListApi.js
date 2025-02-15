const express = require("express");
const wishListRouter = express.Router();
const wishlistClothes = require("../models/wishlist.model");

wishListRouter.post("/", async (req, res) => {
  const idExist = await wishlistClothes.findById(req.body.id).exec();
  console.log("idExist",idExist)
  if (idExist) {
    return;
  } else {
    try {
      const data = {
        _id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        price: Number(req.body.price),
      };
      new wishlistClothes(data).save();
    } catch (error) {
      res.status(500).json({ error: "No product fetched" });
    }
  }
});

module.exports = { wishListRouter };
