const { default: mongoose } = require("mongoose");
const chatModel = require("../models/chatModel");
const messageModel = require("../models/messageModel");
const reviewModel = require("../models/reviewModel");
const lawyerDataMOdel = require("../models/lawyerDataModel");
const userDataModel = require("../models/userDataModel");
const paymentDataModel = require("../models/paymentDataModel");
const practiceAreaDataModel = require("../models/practiceArea");
const clientDataMOdel = require("../models/clientDataModel");
const caseDataModel = require("../models/caseDataModel");

const chatCollection = new mongoose.model("chats", chatModel);

const messageCollection = new mongoose.model("message", messageModel);

// cons = new mongoose.model("reviews", reviewModel);

const lawyerCollection = new mongoose.model("attorneys", lawyerDataMOdel);

const clientCollection = new mongoose.model("client", clientDataMOdel);

const caseCollection = new mongoose.model("case", caseDataModel);

const practiceCollection = new mongoose.model("practiceArea", practiceAreaDataModel);

const userCollection = new mongoose.model("user", userDataModel);

const paymentCollection = new mongoose.model("payment", paymentDataModel);

const ourReviewsCollection = new mongoose.model("ourReviews", reviewModel);

module.exports = { chatCollection, messageCollection, lawyerCollection, practiceCollection, userCollection, paymentCollection,clientCollection ,caseCollection ,ourReviewsCollection}