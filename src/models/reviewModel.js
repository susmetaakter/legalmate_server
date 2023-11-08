const { default: mongoose } = require("mongoose");

const reviewModel = new mongoose.Schema(
    {
        name: String,
        img: String,
        job: String,
        review: String,
    },
    {
        timestamps: true
    }
);

module.exports = reviewModel