const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    bio: {
        type: String,
    },
    profession: {
        type: String,
    },
    googleId: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    profilePic: {
        type: String,
        required: true,
    },
    socialMedia: {
        instagram: {
            type: String,
        },
        twitter: {
            type: String,
        },
        github: {
            type: String,
        },
        linkedin: {
            type: String,
        },
        facebook: {
            type: String,
        },
        discord: {
            type: String,
        },
        youtube: {
            type: String,
        },
        blogs: {
            type: String,
        },
        website: {
            type: String,
        },
        telegram: {
            type: String,
        },
        pintrest: {
            type: String,
        },
        buymeacoffee: {
            type: String,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const user = mongoose.model("Users", userSchema);
module.exports = user;
