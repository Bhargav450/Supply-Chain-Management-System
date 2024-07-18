const { DataTypes } = require("sequelize");
const sequelize = require('../config/db');

const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "customer"),
      allowNull: false,
      defaultValue: "customer",
    }
  }, {
    timestamps: false // Disable timestamps
  });



module.exports = User;
