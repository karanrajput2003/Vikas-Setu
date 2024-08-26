const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.contractor_Data = require("./contractor.model");
db.field_officer = require("./field_officer.model");
db.department = require("./department.model");
db.supervisior = require("./supervisior.model")

db.central_admin = require("./central_admin.model");
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;