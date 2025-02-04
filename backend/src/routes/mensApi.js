const express = require("express");
const mensRouter = express.Router();
const MenClothes = require("../models/mens.model");

async function readAllClothes() {
  try {
    const allMensClothes = await MenClothes.find();
    return allMensClothes;
  } catch (error) {
    console.log(error);
  }
}

mensRouter.get("/", async (req, res) => {
  try {
    const mensClothes = await readAllClothes();
    if (mensClothes.length !== 0) {
      res.json(mensClothes);
    } else {
      res.status(404).json({ error: "No clothes found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

module.exports = { mensRouter };
