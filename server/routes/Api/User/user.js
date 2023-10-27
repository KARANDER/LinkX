const express = require("express");
const userRoutes = express.Router();
const userData = require("../../../model/User");
const isAuthorized = require("../../../middleware/isAuthorized");

// => /api/user/

// userRoutes.get("/", (req, res) => {
//     res.send("User route : api/user");
// });

userRoutes.post("/add", async (req, res) => {
    const { email } = req.body;
    try {
        const existingUser = await userData.find({ email: email });
        // console.log(existingUser.length);
        if (existingUser.length > 0) {
            return res.status(200).json({ msg: "User already stored in DB.", newUser: false, data: existingUser });
        }
        const user = new userData(req.body);
        user.save((err, result) => {
            if (err) return res.status(500).json({ msg: "User not stored in db", error: err });
            // if (err) throw new Error(err);
            return res.status(201).json({ msg: "User stored in DB.", newUser: true, data: result });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Internal server error", error: err.message });
    }
});

userRoutes.get("/get/gId/:googleId", async (req, res) => {
    try {
        const user = await userData.find({ googleId: req.params.googleId });
        res.status(200).json({ results: user.length, data: user });
    } catch (err) {
        res.status(404).json({ msg: "User not found", error: err.message });
    }
});

// Getting users
userRoutes.get("/get", async (req, res) => {
    try {
        const user = await userData.find();
        res.status(200).json({ results: user.length, data: user });
    } catch (err) {
        res.status(404).json({ msg: "Users not found", error: err.message });
    }
});

// Update User data
userRoutes.post("/update", isAuthorized, async (req, res) => {
    console.log(req.body);
    const { username, email, bio, profession } = req.body;
    const { instagram, twitter, github, linkedin, facebook, discord, youtube, blogs, website, telegram, pintrest, buymeacoffee } = req.body;
    const updatedData = {
        bio: bio,
        email: email,
        username: username,
        profession: profession,
    };
    const socialMediaLinks = {
        instagram: instagram.includes(" ") ? undefined : instagram == "" ? undefined : instagram,
        twitter: twitter.includes(" ") ? undefined : twitter == "" ? undefined : twitter,
        github: github.includes(" ") ? undefined : github == "" ? undefined : github,
        linkedin: linkedin.includes(" ") ? undefined : linkedin == "" ? undefined : linkedin,
        facebook: facebook.includes(" ") ? undefined : facebook == "" ? undefined : facebook,
        discord: discord.includes(" ") ? undefined : discord == "" ? undefined : discord,
        youtube: youtube.includes(" ") ? undefined : youtube == "" ? undefined : youtube,
        blogs: blogs.includes(" ") ? undefined : blogs == "" ? undefined : blogs,
        website: website.includes(" ") ? undefined : website == "" ? undefined : website,
        telegram: telegram.includes(" ") ? undefined : telegram == "" ? undefined : telegram,
        pintrest: pintrest.includes(" ") ? undefined : pintrest == "" ? undefined : pintrest,
        buymeacoffee: buymeacoffee.includes(" ") ? undefined : buymeacoffee == "" ? undefined : buymeacoffee,
    };
    try {
        userData.findOneAndUpdate({ email: updatedData.email }, updatedData, (err, result) => {
            if (err) throw new Error("Update data failed");
            userData.findByIdAndUpdate(result._id, { $set: { socialMedia: socialMediaLinks } }, (err, result) => {
                if (err) throw new Error("Error in updating user");
                res.status(202).json({ results: "Your profile updated successfully.", data: result });
            });
            // user.save((err, result) => {
            // });
        });
    } catch (err) {
        res.status(404).json({ msg: "Not updated", error: err.message });
    }
    // res.status(200).json({ data: req.body });
});

// Delete user data
userRoutes.post("/delete", isAuthorized, async (req, res) => {
    try {
        const data = req.body;
        const user = await userData.findByIdAndDelete(data._id);
        res.status(202).json({ results: "User deleted successfully", data: user });
    } catch (err) {
        res.status(404).json({ msg: "Not deleted", error: err.message });
    }
});

// Get specific user
userRoutes.get("/:username", isAuthorized, async (req, res) => {
    try {
        const user = await userData.find({ username: req.params.username });
        res.status(200).json({ results: user.length, data: user });
    } catch (err) {
        res.status(404).json({ msg: "User not found", error: err.message });
    }
});

module.exports = userRoutes;
