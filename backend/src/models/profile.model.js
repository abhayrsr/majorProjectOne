const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: String,
    emailId: String,
    phoneNumber: Number,
    address: String
})

const UserProfile = mongoose.model('Profile', profileSchema);

module.exports = UserProfile;