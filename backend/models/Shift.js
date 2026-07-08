const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema({

    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    startTime: {
        type: String
    },

    endTime: {
        type: String
    },

    status: {
        type: String,
        enum: [
            "Scheduled",
            "Off",
            "Leave"
        ],
        default: "Scheduled"
    }

}, {
    timestamps: true
});


module.exports = mongoose.model("Shift", shiftSchema);