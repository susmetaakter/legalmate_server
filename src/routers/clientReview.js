const express = require("express");

const { getAllClientReview, newClientReview } = require("../controllers/clientReviewController");
const clientReviewRoute = express.Router();

clientReviewRoute.post("/", newClientReview);

clientReviewRoute.get("/", getAllClientReview);

// clientReviewRoute.get("/:chatId", getMessages);

module.exports = clientReviewRoute;
