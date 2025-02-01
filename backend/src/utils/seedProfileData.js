const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, "../../.env")});
const {initializeDatabase} = require("../config/db/db.connect");
const fs = require("fs");
const UserProfile = require("../models/profile.model");
require("dotenv/config");

const jsonData = fs.readFileSync("../data/profile.json", "utf-8");
const profileData = JSON.parse(jsonData);

async function seedingProfile(){
    try{
        for(const profile of profileData){
            const newProfile = new UserProfile({
                name: profile.name,
                emailId: profile.emailId,
                phone: profile.phone,
                address: profile.address
            })
            newProfile.save()
        }
    } catch(error){
        console.log("Error seeding the data");
    }
}

async function main(){
    try{
        await initializeDatabase();
        await seedingProfile();
        console.log("Profile Data added successfully");
    } catch(error){
        console.log("error while seeding", error);
    }
}

main();