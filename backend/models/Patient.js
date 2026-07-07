const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    gender: {
        type: String,
        required: true,
        enum: ["Male","Female", "Other"]
    },

    contact: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    dateOfBirth: {
        type: Date,
        required: true,
        default: Date.now
    },

    bloodGroup: {
        type: String,
        required: true,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    },

    role: {
        type: String,
        default: "Patient"
    },

    diseaseHistory: [
        {
            diseaseName: {
                type: String,
                required: true
            },

            diagnosedOn: {
                type: Date,
                required: true
            },

            recoveredOn: {
                type: Date
            },

            doctor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Doctor"
            }
        }
    ]

}, { timestamps: true });

module.exports = mongoose.model("patient", patientSchema);