'use strict';

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model{
    
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    }
  }, {sequelize, modelName: 'User', hooks:{
    beforeCreate: (instance, options)=>{
      const saltRounds = 10;
      const hash = bcrypt.hashSync(instance.password, saltRounds);
      instance.setDataValue('password', hash)
    }
  } })

  User.associate = function(models) {
    // User.belongsToMany(Project, { through: UserProject });
    User.belongsToMany(models.Book, {through: models.UserBook})
  };
  return User;
};