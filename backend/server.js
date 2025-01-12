const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {initializeDatabase} = require('./src/config/db/db.connect');
const MensClothes = require("./src/models/mens.model.js");
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
initializeDatabase();

// Routes
async function readAllClothes(){
  try{
    const allMensClothes = await MensClothes.find();
    return allMensClothes
  } catch(error){
    console.log(error);
  }
}
app.get('/mens', async(req, res) => {
  try{
    const mensClothes = await readAllClothes();
    if(mensClothes.length !== 0){
      res.json(mensClothes);
    } else {
      res.status(404).json({error: "No clothes found"});
    }
  } catch(error){
    res.status(500).json({error: "Failed to fetch movies."})
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});