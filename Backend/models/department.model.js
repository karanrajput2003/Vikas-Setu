const mongoose = require("mongoose");

const department = mongoose.model(
  "department",
  new mongoose.Schema({
    name: String,
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

module.exports = department;
