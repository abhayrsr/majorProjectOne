const mongoose = require("mongoose");
const path = require('path');
// Configure dotenv with the correct path
require('dotenv').config({ path: path.resolve(__dirname, '../../../../.env') });

const mongoUri = process.env.MONGODB_URI;
console.log(mongoUri)

const initializeDatabase = async () => {
  try{
    await mongoose
    .connect(mongoUri)
    .then(() => console.log("Connected tot the Database"))
    .catch((error) => {
      console.log("Error connecting the database", error);
    });
  } catch(error){
    console.log("Error:", error);
  }
};

module.exports = { initializeDatabase };
