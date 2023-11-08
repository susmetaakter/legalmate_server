const express = require("express");
const { newCase, getAllCase, getPostById, getCaseByEmail, deleteCaseById, updateCaseById, updateClientCaseStatus, getApprovedCase } = require("../controllers/caseDataController");

const caseRoute = express.Router();

caseRoute.post("/", newCase);

caseRoute.get("/approved", getApprovedCase);

caseRoute.get("/", getAllCase);

caseRoute.get("/id/:id", getPostById);

caseRoute.get("/email/:email", getCaseByEmail);

caseRoute.delete("/delete/:id", deleteCaseById);

caseRoute.patch("/update/:id", updateCaseById);

caseRoute.patch("/status/:id", updateClientCaseStatus);

module.exports = caseRoute;
