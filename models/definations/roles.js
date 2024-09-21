const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class roles extends Model {}
roles.init(
  {
    rolesId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    modelName: "roles",
    sequelize,
  }
);

module.exports = roles;
