const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    headDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "doctor",
        default: null
    },

    location: {
        type: String,
        default: ""
    },

    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("dept", departmentSchema);