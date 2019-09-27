'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  const ClassModels = sequelize.models

  class Book extends Model{
    shortDescription(){
      return this.description.slice(0, 75)
    }
  }

  Book.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    gambar: DataTypes.STRING,
    description: DataTypes.STRING
  }, {sequelize, modelName: "Book"})
  
  Book.associate = function(models) {
    // User.belongsToMany(Project, { through: UserProject });
    Book.belongsToMany(models.Category, {through: models.BookCategory})
    Book.belongsToMany(models.User, {through: models.UserBook})
  };
  return Book;
};