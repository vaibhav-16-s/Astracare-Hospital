const mongoose = require("mongoose");

const labReportSchema = new mongoose.Schema({

    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
        required: true
    },

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },

    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },

    testName: {
        type: String,
        required: true
    },

    reportFile: {
        type: String
    },

    remarks: {
        type: String
    },

    status: {
        type: String,
        enum: ["Pending", "Completed"],
        default: "Pending"
    }

}, { timestamps: true });

module.exports = mongoose.model("LabReport", labReportSchema);