const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const {initializeDatabase} = require("../config/db/db.connect");
const MensClothes = require('../models/mens.model')
require('dotenv/config')

async function deleteAllDocuments(){
    try{
        await MensClothes.deleteMany({});
        console.log("deleted Success")
    } catch(error){
        console.log("error delete", error);
    }
}

async function main(){
    try{
        await initializeDatabase();
        await deleteAllDocuments();
    } catch(error){
        console.log("error delete intiailization", error);
    }
}

main();