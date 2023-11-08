const { default: mongoose } = require("mongoose");

const clientDataMOdel = new mongoose.Schema(

    {
        name: String,
        img: String,
        location: String,
        occupation: String,
        email: String,
        status: {
            type: String,
            enum: ["approved", "rejected"],
            default: "approved",
          },
    },
    {
        timestamps: true
    }
);

module.exports = clientDataMOdel;