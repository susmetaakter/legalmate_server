const express = require("express");
const { newClient, getAllClient, getClient, getClientByEmail, updateClientStatus, updateClientDetails, updateClientProfilePhoto } = require("../controllers/clientController");

const clientRoute = express.Router();

clientRoute.post("/", newClient);


clientRoute.get("/", getAllClient);

clientRoute.get("/id/:id", getClient);

clientRoute.get("/email/:email", getClientByEmail);

clientRoute.patch("/status", updateClientStatus);

clientRoute.patch("/details", updateClientDetails);

clientRoute.patch("/profilePhoto", updateClientProfilePhoto);

module.exports = clientRoute;
