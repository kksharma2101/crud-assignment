const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController.js");

const userRoute = express.Router();

userRoute.post("/register", registerUser); // to register user

userRoute.post("/login", loginUser); // to login user

module.exports = { userRoute };
