const sequelize = require("../bin/dbConnection");
const users = require("./definations/users");
const roles = require("./definations/roles");

const models = { users, roles };

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
