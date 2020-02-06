"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      ingredients: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      direction: {
        allowNull: false,
        type: DataTypes.TEXT
      }
    },
    {}
  );
  Recipe.associate = function(models) {
    // associations can be defined here

    Recipe.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Recipe;
};
