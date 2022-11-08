const User = require("./userModel");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const token = await jwt.sign({_id: newUser._id}, process.env.SECRET);
        res.status(200).send({username: newUser.username, email: newUser.email, token});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({message: "User already exists"});
    }
};

exports.readUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send({users: users});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
}

exports.updateUser = async (req, res) => {
    try {
        await User.updateOne(req.body.filter, {$set: req.body.update});
        res.status(200).send({message: "User details updated" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({message: "Failed to change details"});
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne(req.body);
        res.status(200).send({deletedUser: req.body});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message});
    }
};

exports.loginUser = async (req, res) => {
    try {
        const token = await jwt.sign({_id: req.user._id}, process.env.SECRET);
        res.status(200).send({username: req.user.username, token, message: "Successfully logged in"});
    }
    catch (error) {
        console.log(error);
        res.status(500).send({error: error.message, message: "Log-in details incorrect"});
    }
}
