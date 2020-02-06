'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    direction: DataTypes.TEXT
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};