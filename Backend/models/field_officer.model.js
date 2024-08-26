const mongoose = require("mongoose");

const field_officer = mongoose.model(
  "field_officer",
  new mongoose.Schema({
    field_officer_name: String,
    email: String,
    password: String,
    // roles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Role"
    //   }
    // ]
  })
);

module.exports = field_officer.mode;
