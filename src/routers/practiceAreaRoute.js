const express = require("express");
const { addPracticeArea, addPracticeAreas, getAllPracticeArea } = require("../controllers/practiceAreaDataController");

const practiceAreaRoute = express.Router();

practiceAreaRoute.post("/", addPracticeArea);

practiceAreaRoute.post("/many", addPracticeAreas);

practiceAreaRoute.get("/", getAllPracticeArea);

// practiceAreaRoute.get("/:chatId", getMessages);

module.exports = practiceAreaRoute;
