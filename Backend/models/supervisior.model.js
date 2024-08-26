const mongoose = require("mongoose");

const supervisior = mongoose.model(
  "supervisior",
  new mongoose.Schema({
    supervisior_name: String,
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

module.exports = supervisior.mode;
