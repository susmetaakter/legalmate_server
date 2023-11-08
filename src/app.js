console.clear();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const xssClean = require("xss-clean");
const cors = require("cors");
const lawyerRoute = require("./routers/lawyerRoute");
const userRoute = require("./routers/userRoute");
const chatRoute = require("./routers/chatRoute");
const messageRoute = require("./routers/messageRoute");
const paymentRoute = require("./routers/paymentRoute");
const practiceAreaRoute = require("./routers/practiceAreaRoute");
const clientRoute = require("./routers/clientRoute");
const caseRoute = require("./routers/caseRoute");
const clientReviewRoute = require("./routers/clientReview");
const app = express();


// Application level middleware
app.use(cors());
app.use(morgan("dev"));
app.use(xssClean());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root Route
app.get("/", (req, res) =>
  res.status(200).send(`Hello. <br/> Legal Mate Database Running`)
);

app.use('/users',userRoute)
app.use('/attorney' , lawyerRoute)
app.use('/client' , clientRoute)
app.use('/case' , caseRoute)
app.use('/practiceArea' , practiceAreaRoute)
app.use('/chat' , chatRoute)
app.use('/message' , messageRoute)

app.use('/clientReview' , clientReviewRoute)

// payment
app.use("/payment", paymentRoute);

// server error handling -> all the errors
app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send(err);
  
    return res.status(err.status || 500).json({
      success: false,
      message: err.message,
      error: err,
    });
  });


module.exports = app;