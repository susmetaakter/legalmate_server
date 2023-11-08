const { default: mongoose } = require("mongoose");

const caseDataModel = new mongoose.Schema(

    {
        writer: String,
        writer_id: String,
        email: String,
        location: String,
        status: {
            type: String,
            enum: ["approved", "pending", "rejected"],
            default: "pending",
          },
        practice_area: String,
        case_post: String,
    },
    {
        timestamps: true
    }
);

module.exports = caseDataModel