
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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

  role: {
    type: String,
    default: "Admin"
  }

}, { timestamps: true });
export const adminModel =  mongoose.model("adminModel", adminSchema);

