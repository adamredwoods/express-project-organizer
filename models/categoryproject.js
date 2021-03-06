'use strict';
module.exports = (sequelize, DataTypes) => {
  var categoryProject = sequelize.define('categoryProject', {
    categoryId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return categoryProject;
};