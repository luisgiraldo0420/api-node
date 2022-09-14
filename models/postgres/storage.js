const { sequelize } = require("../../config/postgresql")
const { DataTypes } = require("sequelize");

const StorageScheme = sequelize.define(
  "storage",
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
StorageScheme.find = StorageScheme.findAll;
StorageScheme.findById = StorageScheme.findByPk;
module.exports = StorageScheme;