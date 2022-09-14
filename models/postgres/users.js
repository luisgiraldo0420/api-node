const { sequelize } = require("../../config/postgresql")
const { DataTypes } = require("sequelize");

const UserSheme = sequelize.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      
    },
    status: {
      type: DataTypes.ENUM(["true", "false"]),
        default: "true"
    },
  },
  {
    timestamps: true,
  }
);
UserSheme.find = UserSheme.findAll;
UserSheme.findById = UserSheme.findByPk;
module.exports = UserSheme;