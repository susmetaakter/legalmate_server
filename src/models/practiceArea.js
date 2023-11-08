const { default: mongoose } = require("mongoose");

const practiceAreaDataModel = new mongoose.Schema(
   
    {
        name: String,
        img: String,
        attorneys: Number,
        contents: Array,
        
    },
    {
        timestamps: true
    }
);

module.exports = practiceAreaDataModel