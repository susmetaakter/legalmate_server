const { Schema } = require("mongoose");

const userDataModel = new Schema(
  {
    role: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    joinDate: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      // enum: ["approved", "rejected"],
      // default: "approved",
    }
  }
);

module.exports = userDataModel;