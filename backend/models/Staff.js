
const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
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

  dept: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true,
    enum: ["Active", "Inactive", "On Leave"],
    default: "Active"
  },

  role: {
    type: String,
    required: true,
    enum: ["Receptionist", "Nurse", "Lab Technician"]
  },

}, { timestamps: true });

module.exports =  mongoose.model("Staff", staffSchema);