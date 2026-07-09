
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  contact: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"]
  },
  dateOfBirth: {
        type: Date,
        required: true
    },

  department: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true,
    enum: ["Active", "Inactive", "On-Leave"],
    default: "Active"
  },

  qualification: {
    type: String,
    required: true
  },

 
  role: {
    type: String,
    default: "Doctor"
  }

}, { timestamps: true });

module.exports = mongoose.model("doctor", doctorSchema);