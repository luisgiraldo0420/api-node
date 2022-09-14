const { sequelize } = require("../../config/postgresql")
const { DataTypes } = require("sequelize");

const CategoryScheme = sequelize.define(
  "categories",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: {
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
CategoryScheme.find = CategoryScheme.findAll;
CategoryScheme.findById = CategoryScheme.findByPk;
module.exports = CategoryScheme;