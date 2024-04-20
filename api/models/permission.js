'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      permission.belongsToMany(models.users, {
        through: models.user_permission,
        as: 'user_of_permission',
        foreignKey: 'permission_id'
      });
      permission.belongsToMany(models.roles, {
        through: models.roles_permission,
        as: 'role_of_permissions',
        foreignKey: 'permission_id'
      });
    }
  }
  permission.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'permission',
  });
  return permission;
};