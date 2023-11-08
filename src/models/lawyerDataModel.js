const { default: mongoose } = require("mongoose");

const lawyerDataMOdel = new mongoose.Schema(

    {
        name: String,
        img: String,
        about: String,
        practiceArea: String,
        contact: String,
        location: String,
        status: {
            type: String,
            enum: ["approved", "pending", "rejected"],
            default: "pending",
        },
        hourly_rate: String,
        rating: String,
        license: Object,
        experience: Array,
        education: Array,
        documents: Array,
        reviews: Array,
        awards: Array,
        solverCase: Number,
        workArea: String,
        email: String,
        runningSerial: Number,
        consultationHours: String,
        specializations: String,
    },
    {
        timestamps: true
    }
);

module.exports = lawyerDataMOdel