'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Category extends Model{

  }

  Category.init({
    category: DataTypes.STRING
  }, {sequelize, modelName: 'Category'})

  Category.associate = function(models) {
    // User.belongsToMany(Project, { through: UserProject });
    Category.belongsToMany(models.Book, {through: models.BookCategory})
  };
  return Category;
};