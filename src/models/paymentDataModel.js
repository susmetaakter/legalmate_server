const mongoose = require("mongoose");

const paymentDataModel = new mongoose.Schema({

    sender_id: String,
    sender_name: String,
    sender_email: String,
    sender_role: String,
    target_id: String,
    target_name: String,
    target_email: String,
    target_role: String,
    tran_id: String,
    amount: Number,
    paymentDate: {
        type: Date,
        default: Date.now
    },
    isPaid: {
        type: Boolean,
        required: true
    }


});

module.exports = paymentDataModel;
