'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class UserBook extends Model{

  }

  UserBook.init({
    UserId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER
  }, {sequelize, modelName: 'UserBook'})

  UserBook.associate = function(models) {
    // associations can be defined here
  };
  return UserBook;
};