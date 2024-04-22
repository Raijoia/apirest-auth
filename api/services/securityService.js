const database = require('../models');
const Sequelize = require('sequelize');

class SecurityService {
  async createAcl(dto) {
    const user = await database.users.findOne({
      include: [
        {
          model: database.roles,
          as: 'users_roles',
          attributes: ['id', 'nome', 'descricao'],
        },
        {
          model: database.permission,
          as: 'users_permission',
          attributes: ['id', 'nome', 'descricao'],
        },
      ],
      where: {
        id: dto.userId,
      },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const roles = await database.roles.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: dto.roles,
        },
      },
    });

    console.log(roles);

    if(!roles) {
      throw new Error('Nenhum role encontrado');
    }

    const permissions = await database.permission.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: dto.permissions,
        },
      },
    });

    console.log(permissions)

    if(!permissions) {
      throw new Error('Nenhuma permissão encontrada');
    }

    await user.removeUsers_roles(user.users_roles);
    await user.removeUsers_permission(user.users_permission);

    await user.addUsers_roles(roles);
    await user.addUsers_permission(permissions);

    const newUser = await database.users.findOne({
      include: [
        {
          model: database.roles,
          as: 'users_roles',
          attributes: ['id', 'nome', 'descricao'],
        },
        {
          model: database.permission,
          as: 'users_permission',
          attributes: ['id', 'nome', 'descricao'],
        },
      ],
    });

    return newUser;
  }
}

module.exports = SecurityService;
