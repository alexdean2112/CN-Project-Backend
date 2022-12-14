const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../user/userModel");

exports.hashPass = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 16);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.hashPass2 = async (req, res, next) => {
  try {
    if (req.body.update.password) {
      console.log(req.body.update.password);
      req.body.update.password = await bcrypt.hash(req.body.update.password, 16);
      next();
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.tokenCheck = async (req, res, next) => {
  try {
    if (req.header("Authorization")) {
      const token = req.header("Authorization").replace("Bearer ", "");
      const decodedToken = await jwt.verify(token, process.env.SECRET);
      console.log(decodedToken);
      const user = await User.findById(decodedToken._id);
      req.user = user;
      console.log(`Headers passed`);
    } else {
      console.log(`No headers passed`);
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.comparePassword = async (req, res, next) => {
  try {
    req.user = await User.findOne({ username: req.body.username });
    if (
      req.user &&
      (await bcrypt.compare(req.body.password, req.user.password) && (req.body.email === req.user.email))
    ) {
      next();
    } else {
      throw new Error("LOGIN DETAILS INCORRECT");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
