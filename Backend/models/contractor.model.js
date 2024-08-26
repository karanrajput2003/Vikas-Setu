const mongoose = require("mongoose");

const contractor_Data = mongoose.model(
  "contractor_Data",
  new mongoose.Schema({
    name: String,
    mobile_no: Number,
    email: String,
    aadhar_no: Number,
    pan_no: Number,
    password: String,
    // roles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Role"
    //   }
    // ]
  })
);

module.exports = contractor_Data;
