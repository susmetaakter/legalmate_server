const express = require("express");
const { postUser, getAllUser, getUserByEmail, getUserById } = require("../controllers/userController");
const userRoute = express.Router();

userRoute.post('/', postUser)
userRoute.get('/', getAllUser)
userRoute.get('/email/:email', getUserByEmail)
userRoute.get('/id/:id', getUserById)

module.exports = userRoute;