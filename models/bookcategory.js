'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class BookCategory extends Model{

  }

  BookCategory.init({
    BookId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {sequelize, modelName: 'BookCategory'})

  BookCategory.associate = function(models) {
    // associations can be defined here
  };
  return BookCategory;
};