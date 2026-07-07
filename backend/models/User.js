const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["Admin", "Doctor", "Patient", "Receptionist", "Nurse", "Lab Technician"],
        required: true,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);