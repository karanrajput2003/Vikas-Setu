const mongoose = require("mongoose");

const central_admin = mongoose.model(
  "central_admin",
  new mongoose.Schema({
    username: String,
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

module.exports = central_admin;
